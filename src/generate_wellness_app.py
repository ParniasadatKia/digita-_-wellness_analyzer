"""
Digital Wellness Analyzer v2 - Personal Wellness Checker Web App
------------------------------------------------------------------------
Builds a single self-contained HTML file where a person adjusts sliders
(sleep hours, screen time, etc.) and sees a live, real ML-based assessment
update on the SAME page as they type - no submit button, no separate
results screen. Entirely client-side, using the exact trained models
(transpiled RandomForests + K-Means, see export_js_model.py) via
JavaScript. No server, no API calls, no approximation of the Python
models: the browser runs the same decision trees.

Design: a vibrant "digital pulse" theme (energetic gradients, glowing
gauges, a radar chart) - built for an always-on live dashboard feel
rather than a form-then-results flow.
"""

import json

REPORT_DIR = "outputs/reports"
OUT_PATH = f"{REPORT_DIR}/wellness_checker.html"


def main():
    exported_models_js = open(f"{REPORT_DIR}/exported_models.js").read()
    cluster_export = json.load(open(f"{REPORT_DIR}/cluster_export.json"))
    feature_importance = json.load(open(f"{REPORT_DIR}/feature_importance.json"))

    html = TEMPLATE.format(
        exported_models_js=exported_models_js,
        cluster_export_json=json.dumps(cluster_export),
        feature_importance_json=json.dumps(feature_importance),
    )
    with open(OUT_PATH, "w") as f:
        f.write(html)
    print(f"Wellness checker app written to {OUT_PATH} ({len(html)/1024:.0f} KB)")


TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Digital Wellness Checker</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {{
    --ink: #0F1B2D;         /* deep focus ink - dark background */
    --ink-2: #16283F;       /* panel tone */
    --ink-3: #1E3350;       /* lighter panel/hover tone */
    --violet: #7C5CFF;      /* electric violet - primary vibrant accent */
    --cyan: #29D9C8;        /* vivid cyan - secondary accent, "healthy" */
    --amber: #FFB238;       /* signal amber - mild concern */
    --coral: #FF6B5B;       /* alert coral - risk */
    --cream: #F3EFE6;       /* paper cream - light card backgrounds on dark bg */
    --mist: #A9B7C6;        /* muted body text on dark */
    --mist-dim: #78889C;
    --border: rgba(169,183,198,0.14);
    --font-display: 'Manrope', system-ui, sans-serif;
    --font-body: 'Inter', system-ui, sans-serif;
    --font-mono: 'IBM Plex Mono', 'Consolas', monospace;
  }}
  * {{ box-sizing: border-box; }}
  body {{
    margin: 0; background: radial-gradient(ellipse 1200px 800px at 20% -10%, #1B2D4A 0%, var(--ink) 55%);
    color: var(--mist); font-family: var(--font-body); line-height: 1.5; min-height: 100vh;
  }}
  h1, h2, h3 {{ font-family: var(--font-display); color: #fff; margin: 0; }}

  .hero {{ padding: 52px 6vw 34px; position: relative; overflow: hidden; }}
  .eyebrow {{
    font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.14em;
    font-size: 0.72rem; font-weight: 600;
    background: linear-gradient(90deg, var(--violet), var(--cyan));
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }}
  .hero h1 {{ font-size: clamp(1.7rem, 3.6vw, 2.5rem); margin: 10px 0 10px; max-width: 760px; }}
  .hero p {{ color: var(--mist); max-width: 620px; margin: 0; font-size: 1rem; }}
  .pulse-line {{ width: 100%; height: 34px; margin-top: 20px; opacity: 0.7; }}
  .pulse-line polyline {{ fill: none; stroke: var(--cyan); stroke-width: 2.5; stroke-linejoin: round; stroke-linecap: round;
    filter: drop-shadow(0 0 7px rgba(41,217,200,0.6)); }}

  main {{ max-width: 1180px; margin: 0 auto; padding: 0 6vw 90px; display: grid; grid-template-columns: 1fr; gap: 26px; }}
  @media (min-width: 980px) {{ main {{ grid-template-columns: 400px 1fr; align-items: start; }} }}

  .panel {{
    background: linear-gradient(160deg, var(--ink-2) 0%, var(--ink) 100%);
    border: 1px solid var(--border); border-radius: 16px; padding: 26px;
  }}
  .panel h3 {{ font-size: 1rem; margin-bottom: 16px; }}

  /* --- Form panel --- */
  .form-panel {{ position: static; }}
  @media (min-width: 980px) {{ .form-panel {{ position: sticky; top: 20px; }} }}
  .form-section {{ margin-bottom: 22px; }}
  .form-section h4 {{ font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em;
    color: var(--mist-dim); margin: 0 0 12px; }}

  /* Optional personalization block - deliberately styled differently from
     the model-input sections above, so it's visually obvious these two
     questions don't feed the prediction, only the advice shown below. */
  .optional-section {{
    margin-top: 26px; padding: 18px; border-radius: 12px;
    background: rgba(155,124,255,0.06); border: 1px dashed rgba(155,124,255,0.35);
  }}
  .optional-section .optional-tag {{
    display: inline-block; font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.06em;
    text-transform: uppercase; color: var(--violet); background: rgba(155,124,255,0.15);
    padding: 3px 9px; border-radius: 20px; margin-bottom: 10px;
  }}
  .optional-section .optional-desc {{ font-size: 0.78rem; color: var(--mist-dim); margin: 0 0 14px; }}
  .field {{ margin-bottom: 16px; }}
  .field label {{ display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--mist); margin-bottom: 7px; }}
  .field label .range-value {{ font-family: var(--font-mono); color: var(--cyan); font-weight: 600; }}
  .field select {{
    width: 100%; padding: 10px 12px; border-radius: 8px; border: 1px solid var(--border);
    font-family: var(--font-mono); font-size: 0.9rem; background: var(--ink-3); color: #fff;
  }}
  .field input[type=number] {{
    width: 100%; padding: 10px 12px; border-radius: 8px; border: 1px solid var(--border);
    font-family: var(--font-mono); font-size: 0.9rem; background: var(--ink-3); color: #fff;
  }}
  .field-grid-3 {{ display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }}
  input[type=range] {{
    -webkit-appearance: none; width: 100%; height: 6px; border-radius: 4px;
    background: linear-gradient(90deg, var(--violet), var(--cyan));
    outline: none;
  }}
  input[type=range]::-webkit-slider-thumb {{
    -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #fff;
    box-shadow: 0 0 0 3px var(--violet), 0 0 10px rgba(124,92,255,0.7); cursor: pointer;
  }}
  input[type=range]::-moz-range-thumb {{
    width: 18px; height: 18px; border-radius: 50%; background: #fff; border: none;
    box-shadow: 0 0 0 3px var(--violet), 0 0 10px rgba(124,92,255,0.7); cursor: pointer;
  }}
  .hint {{ font-size: 0.74rem; color: var(--mist-dim); margin-top: 6px; }}

  /* --- Results column --- */
  .results-col {{ display: flex; flex-direction: column; gap: 20px; }}

  .verdict-banner {{
    border-radius: 16px; padding: 30px 32px; color: #fff; position: relative; overflow: hidden;
    transition: background 0.4s ease;
  }}
  .verdict-banner.v-healthy {{ background: linear-gradient(120deg, #0E7C6B, var(--cyan)); }}
  .verdict-banner.v-mild {{ background: linear-gradient(120deg, #B8790E, var(--amber)); }}
  .verdict-banner.v-high {{ background: linear-gradient(120deg, #B8342A, var(--coral)); }}
  .verdict-banner .icon {{ font-size: 2.1rem; }}
  .verdict-banner h2 {{ color: #fff; font-size: 1.5rem; margin: 8px 0 4px; }}
  .verdict-banner p {{ margin: 0; opacity: 0.94; }}

  .gauge-row {{ display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }}
  @media (max-width: 620px) {{ .gauge-row {{ grid-template-columns: 1fr; }} }}
  .gauge-card {{ text-align: center; }}
  .gauge-card svg {{ display: block; margin: 0 auto; }}
  .gauge-num {{ font-family: var(--font-mono); font-size: 1.9rem; font-weight: 700; fill: #fff; }}
  .gauge-lbl {{ font-size: 0.82rem; color: var(--mist); margin-top: 6px; }}

  .risk-bars {{ display: flex; flex-direction: column; gap: 12px; }}
  .risk-bar-row {{ display: flex; align-items: center; gap: 10px; }}
  .risk-bar-label {{ width: 46px; font-family: var(--font-mono); font-size: 0.76rem; color: var(--mist); }}
  .risk-bar-track {{ flex: 1; height: 12px; border-radius: 7px; background: var(--ink-3); overflow: hidden; }}
  .risk-bar-fill {{ height: 100%; border-radius: 7px; transition: width 0.4s ease; }}
  .risk-bar-fill.none {{ background: linear-gradient(90deg, #0E7C6B, var(--cyan)); }}
  .risk-bar-fill.mild {{ background: linear-gradient(90deg, #B8790E, var(--amber)); }}
  .risk-bar-fill.high {{ background: linear-gradient(90deg, #B8342A, var(--coral)); }}
  .risk-bar-pct {{ width: 44px; text-align: right; font-family: var(--font-mono); font-size: 0.76rem; color: #fff; }}

  .radar-wrap {{ display: flex; justify-content: center; }}

  .persona-badge {{
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(90deg, rgba(124,92,255,0.18), rgba(41,217,200,0.18));
    border: 1px solid rgba(124,92,255,0.35);
    color: #fff; font-family: var(--font-display); font-weight: 700; padding: 9px 18px; border-radius: 30px;
    margin-bottom: 10px; font-size: 0.95rem;
  }}

  .flag-chip-row {{ display: flex; flex-wrap: wrap; gap: 8px; }}
  .flag-chip {{
    font-family: var(--font-mono); font-size: 0.76rem; padding: 6px 12px; border-radius: 20px;
    background: rgba(255,107,91,0.14); color: var(--coral); border: 1px solid rgba(255,107,91,0.28);
  }}
  .flag-chip.ok {{ background: rgba(41,217,200,0.14); color: var(--cyan); border: 1px solid rgba(41,217,200,0.28); }}

  .rec-list {{ margin: 0; padding-left: 20px; }}
  .rec-list li {{ margin-bottom: 10px; font-size: 0.93rem; color: var(--mist); }}
  .rec-list li::marker {{ color: var(--cyan); }}

  .app-card {{ border: 1px solid var(--border); border-radius: 12px; padding: 14px 16px; margin-bottom: 10px; background: var(--ink-3); }}
  .app-card .app-name-row {{ display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; }}
  .app-card .app-name {{ font-family: var(--font-display); font-weight: 700; color: #fff; }}
  .app-card .app-platforms {{ font-family: var(--font-mono); font-size: 0.7rem; color: var(--mist-dim); }}
  .app-card .app-why {{ font-size: 0.87rem; margin: 0; color: var(--mist); }}

  .action-row {{ display: flex; gap: 10px; flex-wrap: wrap; margin-top: 4px; }}
  .action-btn {{
    padding: 11px 18px; border-radius: 9px; border: 1px solid var(--border); background: var(--ink-3);
    color: #fff; font-family: var(--font-body); font-weight: 600; font-size: 0.86rem; cursor: pointer;
  }}
  .action-btn:hover {{ background: #223b5c; }}
  .action-btn.primary {{ background: linear-gradient(90deg, var(--violet), #9B7CFF); border-color: transparent; }}
  .action-btn.primary:hover {{ filter: brightness(1.08); }}
  .copied-note {{ font-size: 0.78rem; color: var(--cyan); margin-top: 8px; display: none; }}
  .copied-note.visible {{ display: block; }}

  .disclaimer {{ font-size: 0.76rem; color: var(--mist-dim); margin-top: 4px; }}

  /* --- Gamification: wellness score + achievement badges --- */
  .score-row {{ display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }}
  .score-ring-wrap {{ position: relative; width: 108px; height: 108px; flex-shrink: 0; }}
  .score-ring-num {{ position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }}
  .score-ring-num .n {{ font-family: var(--font-mono); font-size: 1.6rem; font-weight: 700; color: #fff; }}
  .score-ring-num .of {{ font-family: var(--font-mono); font-size: 0.62rem; color: var(--mist-dim); }}
  .score-tier {{
    display: inline-flex; align-items: center; gap: 7px; font-family: var(--font-display); font-weight: 700;
    font-size: 1.05rem; color: #fff; margin-bottom: 4px;
  }}
  .score-tier-desc {{ font-size: 0.84rem; color: var(--mist); }}
  .badge-row {{ display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }}
  .achieve-badge {{
    display: inline-flex; align-items: center; gap: 6px; font-size: 0.78rem; padding: 7px 12px; border-radius: 20px;
    background: rgba(41,217,200,0.12); border: 1px solid rgba(41,217,200,0.3); color: var(--cyan); font-weight: 600;
  }}
  .achieve-badge.locked {{ background: rgba(169,183,198,0.08); border: 1px solid var(--border); color: var(--mist-dim); }}

  /* --- Explainability: what drove this prediction --- */
  .driver-row {{ margin-bottom: 14px; }}
  .driver-row-top {{ display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 5px; }}
  .driver-row-top .driver-label {{ color: #fff; font-weight: 600; }}
  .driver-row-top .driver-status {{ font-family: var(--font-mono); font-size: 0.76rem; }}
  .driver-row-top .driver-status.contributing {{ color: var(--coral); }}
  .driver-row-top .driver-status.neutral {{ color: var(--mist-dim); }}
  .driver-track {{ height: 8px; border-radius: 5px; background: var(--ink-3); overflow: hidden; }}
  .driver-fill {{ height: 100%; border-radius: 5px; background: linear-gradient(90deg, var(--violet), #9B7CFF); }}
  .driver-note {{ font-size: 0.8rem; color: var(--mist); margin-top: 3px; }}

  .panel-note {{ font-size: 0.74rem; color: var(--mist-dim); margin-top: 10px; }}

  @media print {{
    body {{ background: #fff; color: #000; }}
    .hero, .form-panel, .action-row, .disclaimer {{ display: none !important; }}
    main {{ display: block; }}
    .panel {{ background: #fff; border: 1px solid #ddd; color: #000; break-inside: avoid; }}
    h1, h2, h3 {{ color: #000; }}
  }}
</style>
</head>
<body>

<div class="hero">
  <div class="eyebrow">Digital Wellness Analyzer</div>
  <h1>Your digital pulse, live</h1>
  <p>Adjust the sliders on the left and watch your assessment update instantly — a real machine-learning model, grid-searched on 7,500 users, running entirely in your browser. No server, no account, and everything below (including why it predicted what it did) works fully offline.</p>
  <svg class="pulse-line" viewBox="0 0 800 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="0,30 140,30 165,6 190,54 215,30 300,30 325,14 345,46 365,30 800,30" />
  </svg>
</div>

<main>

  <div class="panel form-panel">
    <h3>Tell us about your day</h3>
    <form id="wellness-form" onsubmit="return false;">

      <div class="form-section">
        <h4>About you</h4>
        <div class="field-grid-3">
          <div class="field">
            <label for="age">Age</label>
            <input type="number" id="age" min="10" max="90" value="25">
          </div>
          <div class="field" style="grid-column: span 2;">
            <label for="gender">Gender</label>
            <select id="gender"><option>Male</option><option>Female</option><option>Other</option></select>
          </div>
        </div>
        <div class="field">
          <label for="stress_level">Typical stress level</label>
          <select id="stress_level"><option>Low</option><option selected>Medium</option><option>High</option></select>
        </div>
      </div>

      <div class="form-section">
        <h4>Sleep &amp; screen time</h4>
        <div class="field">
          <label for="sleep_hours">Average sleep per night <span class="range-value" id="sleep_hours_val">7.0h</span></label>
          <input type="range" id="sleep_hours" min="2" max="11" step="0.5" value="7">
        </div>
        <div class="field">
          <label for="daily_screen_time_hours">Average daily screen time <span class="range-value" id="daily_screen_time_hours_val">5.0h</span></label>
          <input type="range" id="daily_screen_time_hours" min="0.5" max="16" step="0.5" value="5">
        </div>
        <div class="field">
          <label for="weekend_screen_time">Typical weekend screen time <span class="range-value" id="weekend_screen_time_val">5.5h</span></label>
          <input type="range" id="weekend_screen_time" min="0.5" max="18" step="0.5" value="5.5">
        </div>
      </div>

      <div class="form-section">
        <h4>Usage breakdown</h4>
        <div class="field">
          <label for="social_media_hours">Social media <span class="range-value" id="social_media_hours_val">2.0h</span></label>
          <input type="range" id="social_media_hours" min="0" max="10" step="0.5" value="2">
        </div>
        <div class="field">
          <label for="gaming_hours">Gaming <span class="range-value" id="gaming_hours_val">1.0h</span></label>
          <input type="range" id="gaming_hours" min="0" max="10" step="0.5" value="1">
        </div>
        <div class="field">
          <label for="work_study_hours">Work / study <span class="range-value" id="work_study_hours_val">2.0h</span></label>
          <input type="range" id="work_study_hours" min="0" max="10" step="0.5" value="2">
        </div>
        <p class="hint">These don't need to add up exactly to your total screen time.</p>
      </div>

      <div class="form-section">
        <h4>Digital habits</h4>
        <div class="field">
          <label for="notifications_per_day">Notifications per day <span class="range-value" id="notifications_per_day_val">120</span></label>
          <input type="range" id="notifications_per_day" min="0" max="400" step="10" value="120">
        </div>
        <div class="field">
          <label for="app_opens_per_day">App opens per day <span class="range-value" id="app_opens_per_day_val">80</span></label>
          <input type="range" id="app_opens_per_day" min="0" max="300" step="10" value="80">
        </div>
        <div class="field">
          <label for="academic_work_impact">Phone use affected your work/studies?</label>
          <select id="academic_work_impact"><option>No</option><option>Yes</option></select>
        </div>
      </div>

      <div class="optional-section">
        <span class="optional-tag">Optional</span>
        <p class="optional-desc">These two questions don't change your risk score or verdict at all — they only reorder and personalize the "What to do" recommendations below.</p>
        <div class="field">
          <label for="check_reason">What brought you here today?</label>
          <select id="check_reason">
            <option value="general">Just a general check-in</option>
            <option value="screen_time">I feel like I'm on my phone too much</option>
            <option value="sleep">I'm having trouble sleeping</option>
            <option value="focus">I want to focus better</option>
            <option value="suggested">Someone suggested I check</option>
          </select>
        </div>
        <div class="field" style="margin-bottom:0;">
          <label for="main_goal">What matters most to you right now?</label>
          <select id="main_goal">
            <option value="none">Not sure yet</option>
            <option value="flag_excessive_screen_time">Reducing overall screen time</option>
            <option value="flag_sleep_deprivation">Sleeping better</option>
            <option value="flag_frequent_app_switching">Being less distracted / more focused</option>
            <option value="flag_high_stress">Feeling less stressed</option>
          </select>
        </div>
      </div>
    </form>
  </div>

  <div class="results-col">

    <div class="verdict-banner" id="verdict-banner">
      <div class="icon" id="verdict-icon">✅</div>
      <h2 id="verdict-text">Healthy</h2>
      <p id="verdict-sub"></p>
    </div>

    <div class="panel">
      <div class="gauge-row">
        <div class="gauge-card">
          <div id="balance-gauge"></div>
          <div class="gauge-lbl">Balance score</div>
        </div>
        <div class="gauge-card">
          <div id="risk-gauge"></div>
          <div class="gauge-lbl">Addiction risk probability</div>
        </div>
      </div>
    </div>

    <div class="panel">
      <h3>Risk level breakdown</h3>
      <div class="risk-bars" id="risk-bars"></div>
    </div>

    <div class="panel">
      <h3>Your digital pulse — how you compare to healthy ranges</h3>
      <div class="radar-wrap" id="radar-chart"></div>
    </div>

    <div class="panel">
      <h3>Wellness score</h3>
      <div class="score-row">
        <div class="score-ring-wrap" id="score-ring"></div>
        <div>
          <div class="score-tier" id="score-tier">—</div>
          <div class="score-tier-desc" id="score-tier-desc"></div>
        </div>
      </div>
      <div class="badge-row" id="badge-row"></div>
      <p class="panel-note">Points are earned for individual healthy habits (sleep, screen time, notifications, focus, weekend balance, stress) — a motivational summary, not a clinical score.</p>
    </div>

    <div class="panel">
      <h3>Your behavioral persona</h3>
      <div class="persona-badge" id="persona-badge">-</div>
      <p id="persona-tip" style="font-size:0.92rem; margin:8px 0 0; color: var(--mist);"></p>
    </div>

    <div class="panel">
      <h3>Behavior flags</h3>
      <div class="flag-chip-row" id="flag-chips"></div>
    </div>

    <div class="panel" id="focus-apps-panel" style="display:none;">
      <h3>Apps that can help</h3>
      <div id="focus-apps-list"></div>
    </div>

    <div class="panel">
      <h3>What to do</h3>
      <p id="rec-intro" class="panel-note" style="display:none; margin-top:-4px; margin-bottom:14px; color: var(--mist);"></p>
      <ul class="rec-list" id="rec-list"></ul>
    </div>

    <div class="panel" id="explain-panel">
      <h3>🔍 Why the model predicted this</h3>
      <p class="hint" style="margin-bottom:14px;">These are the actual learned importances from the trained Random Forest — the same numbers the model itself uses internally — matched against your own values. A feature only counts as "contributing" here if it's both important to the model <em>and</em> outside your healthy range.</p>
      <div id="driver-list"></div>
    </div>

    <div class="panel">
      <h3>Save this report / check again later</h3>
      <div class="action-row">
        <button class="action-btn primary" onclick="window.print()">Download as PDF</button>
        <button class="action-btn" onclick="downloadReminder(7)">Remind me in 7 days</button>
        <button class="action-btn" onclick="downloadReminder(30)">Remind me in 30 days</button>
        <button class="action-btn" onclick="copyReminderText()">Copy reminder text</button>
      </div>
      <p class="hint" style="margin-top:10px;">"Download as PDF" uses your browser's print dialog — choose "Save as PDF". The reminder buttons download a calendar file (.ics) for Google/Apple/Outlook; "Copy reminder text" gives you a message to paste into Telegram's Saved Messages or any reminder bot (a standalone HTML file can't message Telegram directly — that needs a server).</p>
      <p class="copied-note" id="copied-note">Copied to clipboard.</p>
    </div>

    <p class="disclaimer">This tool provides general wellness information based on a machine-learning model trained on a smartphone usage dataset. It is not a medical or psychological diagnosis — if you're concerned about your digital habits or wellbeing, consider talking to a doctor, counselor, or someone you trust.</p>

  </div>

</main>

<script>
{exported_models_js}

const CLUSTER_EXPORT = {cluster_export_json};
const FEATURE_IMPORTANCE = {feature_importance_json};

const RULE_THRESHOLDS = {{
  EXCESSIVE_SCREEN_TIME_H: 8.0,
  LOW_SLEEP_H: 6.0,
  HIGH_NOTIFICATIONS: 200,
  HIGH_APP_SWITCH_INDEX: 25,
  WEEKEND_ESCALATION_THRESHOLD: 0.25,
}};

const RULE_SUGGESTIONS = {{
  flag_sleep_deprivation: "Turn on a device wind-down mode 30–60 min before bed and keep the phone outside the bedroom to protect sleep.",
  flag_excessive_screen_time: "Set a daily screen-time budget in your device's wellbeing tools and enable an end-of-day usage alert.",
  flag_notification_overload: "Audit notification settings and mute non-essential apps; batch notifications into 2–3 scheduled check-ins per day.",
  flag_frequent_app_switching: "Try a focus/Pomodoro timer (25 min work / 5 min break) to reduce app-switching and rebuild sustained attention.",
  flag_weekend_escalation: "Plan at least one offline or outdoor weekend activity to prevent usage spikes when there's less structure to the day.",
  flag_high_stress: "Add a short daily mindfulness or breathing exercise (5–10 min); high stress and heavy device use often reinforce each other."
}};
const FLAG_LABELS = {{
  flag_sleep_deprivation: "Sleep deprivation",
  flag_excessive_screen_time: "Excessive screen time",
  flag_notification_overload: "Notification overload",
  flag_frequent_app_switching: "Frequent app switching",
  flag_weekend_escalation: "Weekend escalation",
  flag_high_stress: "High stress",
}};
const FLAG_ORDER = Object.keys(FLAG_LABELS);

const FOCUS_APP_SUGGESTIONS = {{
  flag_frequent_app_switching: [
    {{ name: "Forest", why: "Plants a virtual tree that dies if you leave the app — a light, visual way to resist switching away mid-task.", platforms: "iOS, Android" }},
    {{ name: "One Sec", why: "Adds a short breathing pause before opening distracting apps, which is often enough to break the automatic-switching habit.", platforms: "iOS, Android" }},
  ],
  flag_excessive_screen_time: [
    {{ name: "Opal", why: "Schedules app blocks and gives a daily screen-time score, aimed specifically at cutting total usage.", platforms: "iOS, Android" }},
    {{ name: "Freedom", why: "Blocks distracting apps and sites across phone, tablet, and computer at the same time, for a set block of hours.", platforms: "iOS, Android, macOS, Windows" }},
  ],
  flag_notification_overload: [
    {{ name: "Built-in Focus Mode", why: "iOS Focus / Android Digital Wellbeing can silence non-essential notifications on a schedule — no extra app needed.", platforms: "iOS, Android (built-in)" }},
  ],
  flag_weekend_escalation: [
    {{ name: "Freedom (scheduled blocks)", why: "Same tool as above — schedule a recurring weekend block instead of relying on willpower in the moment.", platforms: "iOS, Android, macOS, Windows" }},
  ],
}};

const PERSONA_TIPS = {{
  "Balanced User": "Keep up your current habits — usage is well distributed across work, rest, and downtime.",
  "Night Owl / Sleep-Deprived": "Prioritize sleep hygiene: set a fixed phone-off time and use night mode after dark.",
  "Gaming-Heavy User": "Schedule gaming into fixed time blocks with a hard stop reminder to protect study/work time.",
  "Social Media Heavy User": "Use app-specific time limits and try replacing one daily scroll session with a non-screen activity.",
  "Fragmented Attention User": "Reduce notification volume and batch-check messages — frequent switching is fragmenting your focus."
}};

// Dimensions plotted on the radar chart. "direction: max" = lower is
// healthier; "direction: min" = higher is healthier. badnessMax is the
// value at which this dimension is considered maximally concerning (100%
// out on the radar), just for scaling the chart nicely.
const RADAR_DIMENSIONS = [
  {{ key: "daily_screen_time_hours", label: "Screen time", threshold: 8, direction: "max", badnessMax: 14 }},
  {{ key: "sleep_hours", label: "Sleep", threshold: 6, direction: "min", badnessMax: 3 }},
  {{ key: "notifications_per_day", label: "Notifications", threshold: 200, direction: "max", badnessMax: 350 }},
  {{ key: "app_switch_index", label: "App switching", threshold: 25, direction: "max", badnessMax: 45 }},
  {{ key: "weekend_escalation", label: "Weekend spike", threshold: 0.25, direction: "max", badnessMax: 1.0 }},
];

// Wire up live labels next to each slider
document.querySelectorAll('input[type=range]').forEach(el => {{
  const out = document.getElementById(el.id + '_val');
  const suffix = el.id.includes('notifications') || el.id.includes('app_opens') ? '' : 'h';
  const update = () => out.textContent = parseFloat(el.value).toFixed(el.step.includes('.') ? 1 : 0) + suffix;
  el.addEventListener('input', () => {{ update(); renderAll(); }});
  update();

  // Fix: some browsers change a focused range slider's value on mouse-wheel
  // scroll instead of scrolling the page - which makes the whole page feel
  // "stuck" the moment the cursor happens to be over any slider. We stop
  // that default behavior and manually forward the scroll to the page
  // instead, so the wheel always scrolls no matter what it's hovering over.
  el.addEventListener('wheel', (e) => {{
    e.preventDefault();
    window.scrollBy(0, e.deltaY);
  }}, {{ passive: false }});
}});
document.querySelectorAll('select, input[type=number]').forEach(el => {{
  el.addEventListener('input', renderAll);
  el.addEventListener('change', renderAll);
}});

function engineerFeatures(profile) {{
  const f = Object.assign({{}}, profile);
  const daily = f.daily_screen_time_hours || 1e-6;

  f.social_media_share = Math.min(Math.max(f.social_media_hours / daily, 0), 1);
  f.gaming_share = Math.min(Math.max(f.gaming_hours / daily, 0), 1);
  f.work_study_share = Math.min(Math.max(f.work_study_hours / daily, 0), 1);
  f.entertainment_share = Math.min(f.social_media_share + f.gaming_share, 1);
  f.productivity_share = f.work_study_share;

  f.app_switch_index = f.app_opens_per_day / daily;
  f.notification_load_index = f.notifications_per_day / daily;
  f.weekend_escalation = (f.weekend_screen_time - f.daily_screen_time_hours) / daily;

  f.balance_score = (
    0.35 * Math.min(f.work_study_hours / 8, 1) * 100 +
    0.35 * Math.min(f.sleep_hours / 8, 1) * 100 +
    0.30 * (1 - f.entertainment_share) * 100
  );
  f.low_sleep = f.sleep_hours < 6 ? 1 : 0;

  f.sleep_deficit = Math.max(7.5 - f.sleep_hours, 0);
  f.screen_sleep_ratio = f.sleep_hours ? f.daily_screen_time_hours / f.sleep_hours : 0;
  f.log_screen_time = Math.log1p(f.daily_screen_time_hours);
  f.notif_x_switch = f.notification_load_index * f.app_switch_index / 100;
  f.weekend_x_screen = f.weekend_escalation * f.daily_screen_time_hours;
  const stressMap = {{ Low: 0, Medium: 1, High: 2 }};
  f.stress_x_screen = stressMap[f.stress_level] * f.daily_screen_time_hours;

  const genderMap = {{ Female: 0, Male: 1, Other: 2 }};
  const stressEncMap = {{ High: 0, Low: 1, Medium: 2 }};
  const impactMap = {{ No: 0, Yes: 1 }};
  f.gender_enc = genderMap[f.gender];
  f.stress_level_enc = stressEncMap[f.stress_level];
  f.academic_work_impact_enc = impactMap[f.academic_work_impact];

  return f;
}}

function applyFlags(f) {{
  const flags = {{
    flag_excessive_screen_time: f.daily_screen_time_hours > RULE_THRESHOLDS.EXCESSIVE_SCREEN_TIME_H ? 1 : 0,
    flag_sleep_deprivation: f.sleep_hours < RULE_THRESHOLDS.LOW_SLEEP_H ? 1 : 0,
    flag_notification_overload: f.notifications_per_day > RULE_THRESHOLDS.HIGH_NOTIFICATIONS ? 1 : 0,
    flag_frequent_app_switching: f.app_switch_index > RULE_THRESHOLDS.HIGH_APP_SWITCH_INDEX ? 1 : 0,
    flag_weekend_escalation: f.weekend_escalation > RULE_THRESHOLDS.WEEKEND_ESCALATION_THRESHOLD ? 1 : 0,
    flag_high_stress: f.stress_level === "High" ? 1 : 0,
  }};
  const count = Object.values(flags).reduce((a, b) => a + b, 0);
  let ruleLevel;
  if (count === 0) ruleLevel = "Healthy";
  else if (count === 1) ruleLevel = "Mild Concern";
  else if (count === 2) ruleLevel = "Moderate Concern";
  else ruleLevel = "High Concern";
  return {{ flags, count, ruleLevel }};
}}

function assignPersona(f) {{
  const {{ cluster_features, scaler_mean, scaler_scale, cluster_centers, persona_names }} = CLUSTER_EXPORT;
  const vec = cluster_features.map((feat, i) => (f[feat] - scaler_mean[i]) / scaler_scale[i]);
  let bestIdx = 0, bestDist = Infinity;
  cluster_centers.forEach((center, idx) => {{
    const dist = Math.sqrt(center.reduce((sum, c, i) => sum + (c - vec[i]) ** 2, 0));
    if (dist < bestDist) {{ bestDist = dist; bestIdx = idx; }}
  }});
  return persona_names[bestIdx] || persona_names[String(bestIdx)];
}}

function verdictFromSeverity(ruleLevel, riskLevel) {{
  const ruleSeverity = {{ "Healthy": 0, "Mild Concern": 1, "Moderate Concern": 2, "High Concern": 3 }};
  const levelSeverity = {{ "None": 0, "Mild": 1, "High": 2 }};
  const combined = (ruleSeverity[ruleLevel] + levelSeverity[riskLevel] * 1.5) / 2;
  if (combined <= 0.5) return {{ key: "healthy", text: "Healthy", icon: "✅" }};
  if (combined <= 1.5) return {{ key: "mild", text: "Mostly Healthy — minor adjustments recommended", icon: "🙂" }};
  if (combined <= 2.5) return {{ key: "high", text: "Unhealthy patterns detected — action recommended", icon: "⚠️" }};
  return {{ key: "high", text: "High risk — prioritize changes now", icon: "⚠️" }};
}}

// --- Chart helpers (plain SVG, no external chart library) ---

function gaugeColor(pct) {{
  if (pct < 40) return "#29D9C8";
  if (pct < 70) return "#FFB238";
  return "#FF6B5B";
}}

// Circular gauge: a ring where the filled arc length = pct of 100.
function renderGauge(containerId, pct, displayText) {{
  const r = 52, stroke = 11, cx = 65, cy = 65;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - Math.min(Math.max(pct, 0), 100) / 100);
  const color = gaugeColor(pct);
  const svg = `
    <svg width="130" height="130" viewBox="0 0 130 130">
      <circle cx="${{cx}}" cy="${{cy}}" r="${{r}}" fill="none" stroke="rgba(169,183,198,0.15)" stroke-width="${{stroke}}"/>
      <circle cx="${{cx}}" cy="${{cy}}" r="${{r}}" fill="none" stroke="${{color}}" stroke-width="${{stroke}}"
        stroke-linecap="round" stroke-dasharray="${{circumference}}" stroke-dashoffset="${{offset}}"
        transform="rotate(-90 ${{cx}} ${{cy}})" style="filter: drop-shadow(0 0 6px ${{color}}99); transition: stroke-dashoffset 0.5s ease;"/>
      <text x="${{cx}}" y="${{cy+7}}" text-anchor="middle" class="gauge-num" font-family="IBM Plex Mono, monospace">${{displayText}}</text>
    </svg>`;
  document.getElementById(containerId).innerHTML = svg;
}}

// Radar / spider chart: one axis per dimension, plotting how "concerning"
// (0 = healthy, 1 = at/beyond the worst-case scale) each value is, so a
// tiny polygon near the center = healthy, and a big polygon reaching the
// edges = multiple problem areas at once.
function computeBadness(value, dim) {{
  if (dim.direction === "max") {{
    if (value <= dim.threshold) return 0;
    return Math.min((value - dim.threshold) / (dim.badnessMax - dim.threshold), 1);
  }} else {{
    if (value >= dim.threshold) return 0;
    return Math.min((dim.threshold - value) / dim.badnessMax, 1);
  }}
}}

function renderRadar(f) {{
  const n = RADAR_DIMENSIONS.length;
  const size = 260, cx = size / 2, cy = size / 2, maxR = 92;
  const angleStep = (2 * Math.PI) / n;

  const badnessValues = RADAR_DIMENSIONS.map(dim => computeBadness(f[dim.key], dim));
  const avgBadness = badnessValues.reduce((a, b) => a + b, 0) / n;
  const color = avgBadness < 0.25 ? "#29D9C8" : avgBadness < 0.55 ? "#FFB238" : "#FF6B5B";

  function pointAt(idx, radiusFrac) {{
    const angle = -Math.PI / 2 + idx * angleStep;
    return [cx + Math.cos(angle) * maxR * radiusFrac, cy + Math.sin(angle) * maxR * radiusFrac];
  }}

  let gridRings = "";
  [0.25, 0.5, 0.75, 1].forEach(frac => {{
    const pts = RADAR_DIMENSIONS.map((_, i) => pointAt(i, frac).join(",")).join(" ");
    gridRings += `<polygon points="${{pts}}" fill="none" stroke="rgba(169,183,198,0.18)" stroke-width="1"/>`;
  }});
  let axes = "";
  RADAR_DIMENSIONS.forEach((dim, i) => {{
    const [x, y] = pointAt(i, 1);
    axes += `<line x1="${{cx}}" y1="${{cy}}" x2="${{x}}" y2="${{y}}" stroke="rgba(169,183,198,0.18)" stroke-width="1"/>`;
    const [lx, ly] = pointAt(i, 1.22);
    axes += `<text x="${{lx}}" y="${{ly}}" text-anchor="middle" dominant-baseline="middle" font-size="10.5" fill="#A9B7C6" font-family="Inter, sans-serif">${{dim.label}}</text>`;
  }});
  const dataPts = badnessValues.map((b, i) => pointAt(i, Math.max(b, 0.04)).join(",")).join(" ");

  const svg = `
    <svg width="${{size}}" height="${{size + 20}}" viewBox="0 0 ${{size}} ${{size + 20}}">
      ${{gridRings}}
      ${{axes}}
      <polygon points="${{dataPts}}" fill="${{color}}33" stroke="${{color}}" stroke-width="2.5"
        style="filter: drop-shadow(0 0 6px ${{color}}77); transition: all 0.4s ease;"/>
    </svg>`;
  document.getElementById('radar-chart').innerHTML = svg;
}}

function renderFocusApps(flags) {{
  const panel = document.getElementById('focus-apps-panel');
  const listEl = document.getElementById('focus-apps-list');
  const seen = new Set();
  const apps = [];
  FLAG_ORDER.forEach(key => {{
    if (flags[key] && FOCUS_APP_SUGGESTIONS[key]) {{
      FOCUS_APP_SUGGESTIONS[key].forEach(app => {{
        if (!seen.has(app.name)) {{ seen.add(app.name); apps.push(app); }}
      }});
    }}
  }});
  if (apps.length === 0) {{ panel.style.display = 'none'; return; }}
  panel.style.display = 'block';
  listEl.innerHTML = apps.map(app => `
    <div class="app-card">
      <div class="app-name-row">
        <span class="app-name">${{app.name}}</span>
        <span class="app-platforms">${{app.platforms}}</span>
      </div>
      <p class="app-why">${{app.why}}</p>
    </div>`).join('');
}}

// --- Gamification: a motivational (not clinical) score built from the
// same six flags used everywhere else in the tool. Each healthy habit is
// worth points; badges unlock live as sliders move into a healthy range. ---
const GAMIFICATION_RULES = [
  {{ flag: "flag_sleep_deprivation", points: 25, badge: "🌙 Sleep Guardian", desc: "Getting healthy sleep" }},
  {{ flag: "flag_excessive_screen_time", points: 20, badge: "⏱️ Time Keeper", desc: "Screen time under control" }},
  {{ flag: "flag_notification_overload", points: 15, badge: "🔕 Notification Ninja", desc: "Notifications under control" }},
  {{ flag: "flag_frequent_app_switching", points: 15, badge: "🎯 Focus Master", desc: "Sustained focus, low app-switching" }},
  {{ flag: "flag_weekend_escalation", points: 10, badge: "🌳 Balanced Weekend", desc: "Steady weekend habits" }},
  {{ flag: "flag_high_stress", points: 15, badge: "🧘 Calm Mind", desc: "Low reported stress" }},
];

function computeGamification(flags) {{
  let score = 0;
  const badges = [];
  GAMIFICATION_RULES.forEach(rule => {{
    const earned = !flags[rule.flag]; // flag NOT triggered = healthy habit = points earned
    if (earned) score += rule.points;
    badges.push({{ ...rule, earned }});
  }});
  let tier;
  if (score >= 90) tier = {{ name: "Platinum", icon: "💎", desc: "Excellent balance across the board." }};
  else if (score >= 70) tier = {{ name: "Gold", icon: "🥇", desc: "Strong habits with minor room to improve." }};
  else if (score >= 40) tier = {{ name: "Silver", icon: "🥈", desc: "A mixed picture — a couple of areas need attention." }};
  else tier = {{ name: "Bronze", icon: "🥉", desc: "Several habits are worth working on — see recommendations below." }};
  return {{ score, tier, badges }};
}}

function renderScoreRing(score) {{
  const size = 108, stroke = 10, r = (size - stroke) / 2, c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(score, 100)) / 100;
  const color = score >= 70 ? "var(--cyan)" : score >= 40 ? "var(--amber)" : "var(--coral)";
  document.getElementById('score-ring').innerHTML = `
    <svg width="${{size}}" height="${{size}}" viewBox="0 0 ${{size}} ${{size}}">
      <circle cx="${{size/2}}" cy="${{size/2}}" r="${{r}}" fill="none" stroke="var(--ink-3)" stroke-width="${{stroke}}"/>
      <circle cx="${{size/2}}" cy="${{size/2}}" r="${{r}}" fill="none" stroke="${{color}}" stroke-width="${{stroke}}"
        stroke-linecap="round" stroke-dasharray="${{c}}" stroke-dashoffset="${{c * (1 - pct)}}"
        transform="rotate(-90 ${{size/2}} ${{size/2}})" style="transition: stroke-dashoffset 0.5s ease;"/>
    </svg>
    <div class="score-ring-num"><span class="n">${{score}}</span><span class="of">/ 100</span></div>`;
}}

function renderGamification(flags) {{
  const {{ score, tier, badges }} = computeGamification(flags);
  renderScoreRing(score);
  document.getElementById('score-tier').textContent = `${{tier.icon}} ${{tier.name}} tier`;
  document.getElementById('score-tier-desc').textContent = tier.desc;
  document.getElementById('badge-row').innerHTML = badges.map(b =>
    `<span class="achieve-badge ${{b.earned ? '' : 'locked'}}" title="${{b.desc}}">${{b.earned ? b.badge : '🔒 ' + b.badge.replace(/^\\S+\\s/, '')}}</span>`
  ).join('');
}}

// --- Explainability: shows what actually drove this person's prediction,
// using the real feature_importances_ learned by the trained Random
// Forest (embedded below as FEATURE_IMPORTANCE) - not a guess, not an
// API call, just the model's own internal weighting matched against
// this person's own values. Fully offline. ---
const EXPLAIN_DIMENSIONS = [
  {{ key: "daily_screen_time_hours", label: "Daily screen time", isBad: f => f.daily_screen_time_hours > 8, note: f => `${{f.daily_screen_time_hours.toFixed(1)}}h/day (healthy: under 8h)` }},
  {{ key: "social_media_hours", label: "Social media use", isBad: f => f.social_media_share > 0.5, note: f => `${{f.social_media_hours.toFixed(1)}}h/day, ${{(f.social_media_share*100).toFixed(0)}}% of screen time` }},
  {{ key: "weekend_screen_time", label: "Weekend screen time", isBad: f => f.weekend_escalation > 0.25, note: f => `${{f.weekend_screen_time.toFixed(1)}}h, ${{(f.weekend_escalation*100).toFixed(0)}}% vs. weekdays` }},
  {{ key: "screen_sleep_ratio", label: "Screen-to-sleep ratio", isBad: f => f.screen_sleep_ratio > 1.2, note: f => `${{f.screen_sleep_ratio.toFixed(2)}} hours of screen per hour of sleep` }},
  {{ key: "sleep_hours", label: "Sleep", isBad: f => f.sleep_hours < 6, note: f => `${{f.sleep_hours.toFixed(1)}}h/night (healthy: 6h+)` }},
  {{ key: "notification_load_index", label: "Notification load", isBad: f => f.notifications_per_day > 200, note: f => `${{Math.round(f.notifications_per_day)}} notifications/day` }},
];

function renderExplainability(f) {{
  const el = document.getElementById('driver-list');
  if (!FEATURE_IMPORTANCE || !FEATURE_IMPORTANCE.risk_level_3class) {{ el.innerHTML = ''; return; }}
  const importances = FEATURE_IMPORTANCE.risk_level_3class;
  const maxImportance = Math.max(...Object.values(importances));

  const rows = EXPLAIN_DIMENSIONS
    .map(dim => ({{ ...dim, importance: importances[dim.key] || 0, bad: dim.isBad(f) }}))
    .sort((a, b) => b.importance - a.importance);

  el.innerHTML = rows.map(row => {{
    const pct = (row.importance / maxImportance) * 100;
    const statusClass = row.bad ? 'contributing' : 'neutral';
    const statusText = row.bad ? '● contributing to risk' : '○ within healthy range';
    return `
      <div class="driver-row">
        <div class="driver-row-top">
          <span class="driver-label">${{row.label}}</span>
          <span class="driver-status ${{statusClass}}">${{statusText}}</span>
        </div>
        <div class="driver-track"><div class="driver-fill" style="width:${{pct}}%; opacity:${{row.bad ? 1 : 0.35}}"></div></div>
        <div class="driver-note">Model importance: ${{(row.importance*100).toFixed(1)}}% · ${{row.note(f)}}</div>
      </div>`;
  }}).join('');
}}


function formatICSDate(d) {{
  return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}}
function downloadReminder(daysFromNow) {{
  const start = new Date();
  start.setDate(start.getDate() + daysFromNow);
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  const now = new Date();
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Digital Wellness Analyzer//EN',
    'BEGIN:VEVENT',
    `UID:dwa-reminder-${{now.getTime()}}@digitalwellness`,
    `DTSTAMP:${{formatICSDate(now)}}`,
    `DTSTART:${{formatICSDate(start)}}`,
    `DTEND:${{formatICSDate(end)}}`,
    'SUMMARY:Check your digital wellness again',
    'DESCRIPTION:Open the Digital Wellness Checker and re-run your assessment to see how your habits have changed.',
    'END:VEVENT', 'END:VCALENDAR'
  ].join('\\r\\n');
  const blob = new Blob([ics], {{ type: 'text/calendar' }});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `wellness-reminder-${{daysFromNow}}d.ics`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}}
function copyReminderText() {{
  const text = "🔔 Reminder: check your digital wellness again — open the Digital Wellness Checker and re-run your assessment.";
  navigator.clipboard.writeText(text).then(() => {{
    const note = document.getElementById('copied-note');
    note.classList.add('visible');
    setTimeout(() => note.classList.remove('visible'), 2500);
  }});
}}

// --- Main live render: reads the current form state and updates
// everything on the page. No submit button — this runs on every input
// change, so the results are always in sync with what's on screen. ---
function renderAll() {{
  const profile = {{
    age: parseFloat(document.getElementById('age').value),
    gender: document.getElementById('gender').value,
    stress_level: document.getElementById('stress_level').value,
    sleep_hours: parseFloat(document.getElementById('sleep_hours').value),
    daily_screen_time_hours: parseFloat(document.getElementById('daily_screen_time_hours').value),
    weekend_screen_time: parseFloat(document.getElementById('weekend_screen_time').value),
    social_media_hours: parseFloat(document.getElementById('social_media_hours').value),
    gaming_hours: parseFloat(document.getElementById('gaming_hours').value),
    work_study_hours: parseFloat(document.getElementById('work_study_hours').value),
    notifications_per_day: parseFloat(document.getElementById('notifications_per_day').value),
    app_opens_per_day: parseFloat(document.getElementById('app_opens_per_day').value),
    academic_work_impact: document.getElementById('academic_work_impact').value,
  }};

  const f = engineerFeatures(profile);
  const {{ flags, count, ruleLevel }} = applyFlags(f);
  Object.assign(f, flags);

  const riskProbaVec = addictionRisk_predict_proba(f);
  const riskProba = riskProbaVec[1];

  const risk3ProbaVec = riskLevel3_predict_proba(f);
  const riskLevelIdx = risk3ProbaVec.indexOf(Math.max(...risk3ProbaVec));
  const riskLevel = RISK3_CLASS_NAMES[riskLevelIdx];

  const persona = assignPersona(f);
  const verdict = verdictFromSeverity(ruleLevel, riskLevel);

  const banner = document.getElementById('verdict-banner');
  banner.className = 'verdict-banner v-' + verdict.key;
  document.getElementById('verdict-icon').textContent = verdict.icon;
  document.getElementById('verdict-text').textContent = verdict.text;
  document.getElementById('verdict-sub').textContent =
    `Rule-based concern: ${{ruleLevel}} (${{count}}/6 flags) · Predicted risk level: ${{riskLevel}}`;

  renderGauge('balance-gauge', f.balance_score, Math.round(f.balance_score));
  renderGauge('risk-gauge', riskProba * 100, (riskProba * 100).toFixed(0) + '%');

  const riskBarsEl = document.getElementById('risk-bars');
  riskBarsEl.innerHTML = '';
  const classNames = ['none', 'mild', 'high'];
  RISK3_CLASS_NAMES.forEach((name, i) => {{
    const pct = (risk3ProbaVec[i] * 100).toFixed(1);
    riskBarsEl.innerHTML += `
      <div class="risk-bar-row">
        <div class="risk-bar-label">${{name}}</div>
        <div class="risk-bar-track"><div class="risk-bar-fill ${{classNames[i]}}" style="width:${{pct}}%"></div></div>
        <div class="risk-bar-pct">${{pct}}%</div>
      </div>`;
  }});

  renderRadar(f);

  document.getElementById('persona-badge').textContent = persona;
  document.getElementById('persona-tip').textContent = PERSONA_TIPS[persona] || '';

  const chipsEl = document.getElementById('flag-chips');
  chipsEl.innerHTML = '';
  if (count === 0) {{
    chipsEl.innerHTML = '<span class="flag-chip ok">No flags triggered</span>';
  }} else {{
    FLAG_ORDER.forEach(key => {{
      if (flags[key]) chipsEl.innerHTML += `<span class="flag-chip">${{FLAG_LABELS[key]}}</span>`;
    }});
  }}

  renderFocusApps(flags);
  renderGamification(flags);
  renderExplainability(f);

  // --- Optional personalization (doesn't touch the model at all) ---
  // "main_goal" only reorders which triggered-flag tip appears first;
  // "check_reason" only changes the intro sentence. Neither can add a
  // tip for a flag that didn't actually fire.
  const goal = document.getElementById('main_goal').value;
  const reason = document.getElementById('check_reason').value;

  let orderedFlagKeys = FLAG_ORDER.filter(k => flags[k]);
  if (goal !== 'none') {{
    orderedFlagKeys.sort((a, b) => (a === goal ? -1 : 0) - (b === goal ? -1 : 0));
  }}
  const triggeredTips = orderedFlagKeys.map(k => RULE_SUGGESTIONS[k]);

  const introEl = document.getElementById('rec-intro');
  if (goal !== 'none' && !flags[goal]) {{
    // Their stated goal area is already healthy - say so explicitly instead of staying silent.
    const goalLabel = {{ flag_excessive_screen_time: "screen time", flag_sleep_deprivation: "sleep",
      flag_frequent_app_switching: "focus", flag_high_stress: "stress" }}[goal];
    introEl.textContent = `Good news: based on what you entered, ${{goalLabel}} already looks healthy — here's what else is worth a look.`;
    introEl.style.display = 'block';
  }} else if (reason !== 'general') {{
    const reasonNote = {{
      screen_time: "Since screen time brought you here, that's reflected first below.",
      sleep: "Since sleep brought you here, that's reflected first below.",
      focus: "Since focus brought you here, that's reflected first below.",
      suggested: "Here's an objective look, based on your own numbers.",
    }}[reason];
    introEl.textContent = reasonNote;
    introEl.style.display = reasonNote ? 'block' : 'none';
  }} else {{
    introEl.style.display = 'none';
  }}

  const recListEl = document.getElementById('rec-list');
  recListEl.innerHTML = '';
  if (triggeredTips.length === 0) {{
    recListEl.innerHTML = '<li>No specific concerns detected — keep up your current habits.</li>';
  }} else {{
    triggeredTips.forEach(tip => recListEl.innerHTML += `<li>${{tip}}</li>`);
  }}
}}

// Render immediately on load using the default slider values, so the
// results panel is never empty/waiting for a first interaction.
renderAll();
</script>

</body>
</html>
"""

if __name__ == "__main__":
    main()
