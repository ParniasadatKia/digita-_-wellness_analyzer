"""
Digital Wellness Analyzer v2 - Dashboard Generator
----------------------------------------------------
Builds a single self-contained HTML dashboard (charts + interactive
per-user lookup), updated for the v2 pipeline: 3-class risk level
(None/Mild/High), GridSearchCV-tuned models, and a v1-vs-v2 accuracy
comparison so the improvement is visible and auditable.

NOTE: full_user_analysis.csv contains the literal string "None" as a
category value (e.g. addiction_level, predicted_risk_level). Pandas'
default CSV parser treats "None" as a null value - always read with
keep_default_na=False here, or that category silently disappears.
"""

import base64
import json
import pandas as pd

REPORT_DIR = "outputs/reports"
FIG_DIR = "outputs/figures"


def b64_image(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")


def build_columnar_json():
    df = pd.read_csv(f"{REPORT_DIR}/full_user_analysis.csv", keep_default_na=False, na_values=[""])
    cols = ['user_id', 'age', 'gender', 'daily_screen_time_hours', 'social_media_hours',
            'gaming_hours', 'work_study_hours', 'sleep_hours', 'notifications_per_day',
            'app_opens_per_day', 'weekend_screen_time', 'stress_level', 'addiction_level',
            'persona', 'predicted_risk_level', 'predicted_risk_probability',
            'predicted_addiction_risk_proba', 'balance_score', 'risk_flag_count', 'anomaly_flag',
            'flag_excessive_screen_time', 'flag_sleep_deprivation', 'flag_notification_overload',
            'flag_frequent_app_switching', 'flag_weekend_escalation', 'flag_high_stress']
    sub = df[cols].copy()
    round_cols = ['daily_screen_time_hours', 'social_media_hours', 'gaming_hours',
                  'work_study_hours', 'sleep_hours', 'weekend_screen_time',
                  'predicted_risk_probability', 'predicted_addiction_risk_proba', 'balance_score']
    for c in round_cols:
        sub[c] = sub[c].round(2)
    return {c: sub[c].tolist() for c in cols}


def main():
    metrics = json.load(open(f"{REPORT_DIR}/metrics_summary.json"))
    users_data = build_columnar_json()

    figs = {
        "screentime": b64_image(f"{FIG_DIR}/screentime_by_risk_level.png"),
        "sleep": b64_image(f"{FIG_DIR}/sleep_vs_screentime.png"),
        "persona_dist": b64_image(f"{FIG_DIR}/persona_distribution.png"),
        "flag_freq": b64_image(f"{FIG_DIR}/flag_frequency.png"),
        "v1_vs_v2": b64_image(f"{FIG_DIR}/v1_vs_v2_accuracy.png"),
        "confusion": b64_image(f"{FIG_DIR}/risk_level_confusion_matrix.png"),
    }

    total_users = len(users_data["user_id"])
    pct_high_risk = round(sum(1 for x in users_data["predicted_risk_level"] if x == "High") / total_users * 100, 1)
    pct_anomalous = round(metrics["anomaly_detection"]["anomaly_rate"] * 100, 1)
    avg_balance = round(sum(users_data["balance_score"]) / total_users, 1)
    avg_sleep = round(sum(users_data["sleep_hours"]) / total_users, 2)
    avg_screen = round(sum(users_data["daily_screen_time_hours"]) / total_users, 2)

    persona_counts = metrics["clustering"]["persona_counts"]
    persona_order = sorted(persona_counts.items(), key=lambda x: -x[1])
    persona_tips = {
        "Balanced User": "Usage is well distributed across work, rest, and downtime.",
        "Night Owl / Sleep-Deprived": "High screen time paired with short sleep. Sleep hygiene is the highest-leverage fix.",
        "Gaming-Heavy User": "Gaming dominates screen time. Time-boxing sessions protects study/work hours.",
        "Social Media Heavy User": "Social apps dominate usage. App-level time limits help most here.",
        "Fragmented Attention User": "High notification load and app-switching. Focus sessions rebuild attention span.",
    }

    m_bin = metrics["addiction_binary_classifier"]
    m_risk3 = metrics["risk_level_3class_classifier"]

    html = HTML_TEMPLATE.format(
        total_users=f"{total_users:,}",
        pct_high_risk=pct_high_risk,
        pct_anomalous=pct_anomalous,
        avg_balance=avg_balance,
        avg_sleep=avg_sleep,
        avg_screen=avg_screen,
        bin_acc=round(m_bin["accuracy"]*100, 1),
        bin_f1=round(m_bin["f1_score"]*100, 1),
        risk3_acc=round(m_risk3["accuracy"]*100, 1),
        risk3_f1=round(m_risk3["f1_score"]*100, 1),
        bin_model=metrics["model_selection"]["addiction_binary"],
        risk3_model=metrics["model_selection"]["risk_level_3class"],
        persona_cards=render_persona_cards(persona_order, persona_tips),
        fig_screentime=figs["screentime"],
        fig_sleep=figs["sleep"],
        fig_persona=figs["persona_dist"],
        fig_flags=figs["flag_freq"],
        fig_v1v2=figs["v1_vs_v2"],
        fig_confusion=figs["confusion"],
        users_json=json.dumps(users_data, separators=(",", ":")),
    )

    out_path = f"{REPORT_DIR}/dashboard.html"
    with open(out_path, "w") as f:
        f.write(html)
    print(f"Dashboard written to {out_path} ({len(html)/1024/1024:.2f} MB)")


def render_persona_cards(persona_order, tips):
    cards = []
    total = sum(c for _, c in persona_order)
    for name, count in persona_order:
        pct = round(count / total * 100, 1)
        tip = tips.get(name, "")
        cards.append(f"""
        <div class="persona-card">
          <div class="persona-card-top">
            <span class="persona-name">{name}</span>
            <span class="persona-count">{count:,} users · {pct}%</span>
          </div>
          <p class="persona-tip">{tip}</p>
        </div>""")
    return "\n".join(cards)


HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Digital Wellness Analyzer — Dashboard v2</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {{
    --ink: #1C2541; --dusk: #2E3A5C; --dawn: #E3A857; --sage: #6B9080;
    --coral: #E4572E; --cloud: #F7F6F2; --card: #FFFFFF; --slate: #495468;
    --slate-soft: #8993A8; --border: #E7E4DC;
    --font-display: 'Space Grotesk', system-ui, sans-serif;
    --font-body: 'Inter', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', 'Consolas', monospace;
  }}
  * {{ box-sizing: border-box; }}
  body {{ margin: 0; background: var(--cloud); color: var(--slate); font-family: var(--font-body); line-height: 1.5; }}
  h1, h2, h3 {{ font-family: var(--font-display); color: var(--ink); margin: 0; }}
  .eyebrow {{ font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.12em; font-size: 0.72rem; color: var(--dawn); font-weight: 600; }}
  .hero {{ background: linear-gradient(115deg, var(--ink) 0%, var(--dusk) 55%, #6B5B95 78%, var(--dawn) 100%); color: #F4F2EA; padding: 64px 6vw 56px; }}
  .hero h1 {{ color: #fff; font-size: clamp(2rem, 4vw, 3rem); font-weight: 700; margin: 10px 0 14px; max-width: 820px; }}
  .hero p.sub {{ max-width: 640px; color: #D8D6E8; font-size: 1.05rem; margin: 0 0 34px; }}
  .stat-row {{ display: flex; flex-wrap: wrap; gap: 28px; }}
  .stat {{ min-width: 150px; }}
  .stat .num {{ font-family: var(--font-mono); font-size: 2.1rem; font-weight: 600; color: var(--dawn); }}
  .stat .lbl {{ font-size: 0.85rem; color: #C9C7DA; margin-top: 2px; }}
  main {{ max-width: 1180px; margin: 0 auto; padding: 0 6vw; }}
  section {{ padding: 56px 0; border-bottom: 1px solid var(--border); }}
  section:last-of-type {{ border-bottom: none; }}
  section h2 {{ font-size: 1.6rem; margin-bottom: 6px; }}
  section .section-desc {{ color: var(--slate-soft); max-width: 720px; margin: 0 0 28px; font-size: 0.96rem; }}
  .grid-2 {{ display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }}
  .grid-3 {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }}
  @media (max-width: 860px) {{ .grid-2, .grid-3 {{ grid-template-columns: 1fr; }} }}
  .card {{ background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 20px; box-shadow: 0 1px 2px rgba(28,37,65,0.04); }}
  .card img {{ width: 100%; border-radius: 6px; display: block; }}
  .card h3 {{ font-size: 1rem; margin-bottom: 12px; font-weight: 600; }}
  .metric-card {{ background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 22px 20px; }}
  .metric-card .metric-num {{ font-family: var(--font-mono); font-size: 2rem; font-weight: 600; color: var(--ink); }}
  .metric-card .metric-lbl {{ font-size: 0.85rem; color: var(--slate-soft); margin-top: 4px; }}
  .metric-card .metric-tag {{ display: inline-block; font-family: var(--font-mono); font-size: 0.7rem; background: rgba(107,144,128,0.14); color: var(--sage); padding: 3px 8px; border-radius: 20px; margin-bottom: 10px; letter-spacing: 0.03em; }}
  .persona-card {{ background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 20px; }}
  .persona-card-top {{ display: flex; justify-content: space-between; align-items: baseline; gap: 10px; margin-bottom: 10px; flex-wrap: wrap; }}
  .persona-name {{ font-family: var(--font-display); font-weight: 600; color: var(--ink); font-size: 1.02rem; }}
  .persona-count {{ font-family: var(--font-mono); font-size: 0.78rem; color: var(--slate-soft); }}
  .persona-tip {{ font-size: 0.88rem; margin: 0; color: var(--slate); }}
  .lookup-box {{ background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 28px; }}
  .lookup-input-row {{ display: flex; gap: 10px; margin-bottom: 22px; flex-wrap: wrap; }}
  .lookup-input-row input {{ flex: 1; min-width: 220px; padding: 12px 14px; border-radius: 8px; border: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.95rem; background: var(--cloud); }}
  .lookup-input-row button {{ padding: 12px 22px; border-radius: 8px; border: none; background: var(--ink); color: #fff; font-family: var(--font-body); font-weight: 600; cursor: pointer; font-size: 0.92rem; }}
  .lookup-input-row button:hover {{ background: var(--dusk); }}
  #lookup-result {{ display: none; }}
  #lookup-result.visible {{ display: block; }}
  .result-header {{ display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;}}
  .risk-pill {{ font-family: var(--font-mono); font-size: 0.78rem; font-weight: 600; padding: 5px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.04em; }}
  .risk-none {{ background: rgba(107,144,128,0.16); color: var(--sage); }}
  .risk-mild {{ background: rgba(227,168,87,0.18); color: #B37A1E; }}
  .risk-high {{ background: rgba(228,87,46,0.24); color: var(--coral); }}
  .stat-mini-grid {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 20px; }}
  @media (max-width: 700px) {{ .stat-mini-grid {{ grid-template-columns: repeat(2, 1fr); }} }}
  .stat-mini {{ background: var(--cloud); border-radius: 8px; padding: 12px 14px; }}
  .stat-mini .v {{ font-family: var(--font-mono); font-weight: 600; color: var(--ink); font-size: 1.1rem; }}
  .stat-mini .k {{ font-size: 0.75rem; color: var(--slate-soft); }}
  .rec-list {{ margin: 0; padding-left: 18px; }}
  .rec-list li {{ margin-bottom: 8px; font-size: 0.92rem; }}
  .no-result {{ color: var(--coral); font-size: 0.9rem; }}
  .persona-tip-box {{ background: rgba(46,58,92,0.05); border-left: 3px solid var(--ink); padding: 12px 16px; border-radius: 4px; font-size: 0.9rem; margin-bottom: 16px; }}
  .caveat-box {{ border-left: 3px solid var(--coral); background: rgba(228,87,46,0.06); padding: 14px 18px; border-radius: 4px; font-size: 0.92rem; margin-top: 16px; }}
  footer {{ padding: 40px 6vw 60px; color: var(--slate-soft); font-size: 0.82rem; max-width: 1180px; margin: 0 auto; }}
</style>
</head>
<body>

<div class="hero">
  <div class="eyebrow">Digital Wellness Analyzer · v2</div>
  <h1>Rebuilt with GridSearchCV-tuned models and a data-driven fix to a mislabeled target.</h1>
  <p class="sub">Machine-learning analysis of {total_users} users — the risk-level model's accuracy went from 49% to {risk3_acc}% by diagnosing *why* it was low (near-zero separability between two classes) rather than just tuning harder.</p>
  <div class="stat-row">
    <div class="stat"><div class="num">{total_users}</div><div class="lbl">Users analyzed</div></div>
    <div class="stat"><div class="num">{bin_acc}%</div><div class="lbl">Addiction risk accuracy</div></div>
    <div class="stat"><div class="num">{risk3_acc}%</div><div class="lbl">Risk level accuracy (was 49%)</div></div>
    <div class="stat"><div class="num">{avg_balance}</div><div class="lbl">Avg. balance score /100</div></div>
    <div class="stat"><div class="num">{pct_high_risk}%</div><div class="lbl">Predicted high-risk</div></div>
  </div>
</div>

<main>

  <section id="rebuild">
    <div class="eyebrow">00 · What Changed</div>
    <h2>Why accuracy was low, and what actually fixed it</h2>
    <p class="section-desc">The original 4-class model (None/Mild/Moderate/Severe) scored ~49% accuracy. Grid-searching harder wouldn't have fixed that — a Cohen's d effect-size analysis showed Moderate vs. Severe differ by less than 0.16 standard deviations on <em>every</em> available feature, meaning the two labels are statistically indistinguishable in this dataset. v2 merges them into a data-driven "High" class, then applies real GridSearchCV across Logistic Regression, Random Forest, and HistGradientBoosting for both prediction tasks.</p>
    <div class="grid-2">
      <div class="card">
        <h3>Accuracy: before vs. after</h3>
        <img src="data:image/png;base64,{fig_v1v2}" alt="v1 vs v2 accuracy">
      </div>
      <div class="card">
        <h3>Risk-level model confusion matrix (test set)</h3>
        <img src="data:image/png;base64,{fig_confusion}" alt="Confusion matrix">
      </div>
    </div>
  </section>

  <section id="models">
    <div class="eyebrow">01 · GridSearchCV Model Selection</div>
    <h2>Best model chosen per task, not assumed</h2>
    <p class="section-desc">Each task ran a 5-fold cross-validated grid search over 3 algorithms; the best performer by weighted F1 was selected automatically.</p>
    <div class="grid-3">
      <div class="metric-card">
        <div class="metric-tag">{bin_model} · GridSearchCV</div>
        <div class="metric-num">{bin_acc}%</div>
        <div class="metric-lbl">Test accuracy — addiction risk (binary)</div>
        <div class="metric-lbl">F1-score: {bin_f1}%</div>
      </div>
      <div class="metric-card">
        <div class="metric-tag">{risk3_model} · GridSearchCV</div>
        <div class="metric-num">{risk3_acc}%</div>
        <div class="metric-lbl">Test accuracy — risk level (None/Mild/High)</div>
        <div class="metric-lbl">F1-score: {risk3_f1}%</div>
      </div>
      <div class="metric-card">
        <div class="metric-tag">Isolation Forest</div>
        <div class="metric-num">{pct_anomalous}%</div>
        <div class="metric-lbl">of users flagged as behaviorally anomalous</div>
      </div>
    </div>
  </section>

  <section id="patterns">
    <div class="eyebrow">02 · Usage Patterns</div>
    <h2>Screen time, sleep, and risk</h2>
    <p class="section-desc">Average daily screen time is {avg_screen}h against {avg_sleep}h of sleep across {total_users} users.</p>
    <div class="grid-2">
      <div class="card"><h3>Daily screen time by predicted risk level</h3><img src="data:image/png;base64,{fig_screentime}" alt="Screen time by risk level"></div>
      <div class="card"><h3>Sleep hours vs. daily screen time</h3><img src="data:image/png;base64,{fig_sleep}" alt="Sleep vs screen time"></div>
    </div>
  </section>

  <section id="personas">
    <div class="eyebrow">03 · Personalization</div>
    <h2>Behavioral personas (K-Means)</h2>
    <p class="section-desc">Users are grouped into five personas based on how they actually spend screen time.</p>
    <div class="grid-2" style="margin-bottom:20px;">
      <div class="card"><h3>Persona distribution</h3><img src="data:image/png;base64,{fig_persona}" alt="Persona distribution"></div>
      <div class="card"><h3>Behavior flag frequency</h3><img src="data:image/png;base64,{fig_flags}" alt="Flag frequency"></div>
    </div>
    <div class="grid-3">
      {persona_cards}
    </div>
  </section>

  <section id="lookup">
    <div class="eyebrow">04 · Try It</div>
    <h2>Look up any user's personalized wellness report</h2>
    <p class="section-desc">Search by user ID (e.g. U00001–U07500) to see their individual risk prediction and persona.</p>
    <div class="lookup-box">
      <div class="lookup-input-row">
        <input id="user-search" type="text" placeholder="e.g. U00042" />
        <button onclick="lookupUser()">Analyze</button>
      </div>
      <div id="lookup-result"></div>
    </div>
  </section>

</main>

<footer>
  Digital Wellness Analyzer v2 — dataset: Smartphone Usage &amp; Addiction Analysis (7,500 users).
  Models: GridSearchCV-tuned {bin_model} (addiction risk), {risk3_model} (risk level), Isolation Forest (anomaly detection), K-Means (persona segmentation).
  See README for the full effect-size analysis behind merging Moderate/Severe into "High".
</footer>

<script>
const USERS = {users_json};
const RULE_SUGGESTIONS = {{
  flag_sleep_deprivation: "Turn on a device wind-down mode 30–60 min before bed and keep the phone outside the bedroom to protect sleep.",
  flag_excessive_screen_time: "Set a daily screen-time budget in your device's wellbeing tools and enable an end-of-day usage alert.",
  flag_notification_overload: "Audit notification settings and mute non-essential apps; batch notifications into 2–3 scheduled check-ins per day.",
  flag_frequent_app_switching: "Try a focus/Pomodoro timer (25 min work / 5 min break) to reduce app-switching and rebuild sustained attention.",
  flag_weekend_escalation: "Plan at least one offline or outdoor weekend activity to prevent usage spikes when there's less structure to the day.",
  flag_high_stress: "Add a short daily mindfulness or breathing exercise (5–10 min); high stress and heavy device use often reinforce each other."
}};
const FLAG_ORDER = ["flag_sleep_deprivation","flag_excessive_screen_time","flag_notification_overload","flag_frequent_app_switching","flag_weekend_escalation","flag_high_stress"];
const PERSONA_TIPS = {{
  "Balanced User": "Keep up your current habits — usage is well distributed across work, rest, and downtime.",
  "Night Owl / Sleep-Deprived": "Prioritize sleep hygiene: set a fixed phone-off time and use night mode after dark.",
  "Gaming-Heavy User": "Schedule gaming into fixed time blocks with a hard stop reminder to protect study/work time.",
  "Social Media Heavy User": "Use app-specific time limits and try replacing one daily scroll session with a non-screen activity.",
  "Fragmented Attention User": "Reduce notification volume and batch-check messages — frequent switching is fragmenting your focus."
}};
const LEVEL_HEADLINE = {{
  "None": "No signs of problematic usage detected.",
  "Mild": "Early signs of unhealthy usage — small adjustments now can prevent escalation.",
  "High": "Clear unhealthy usage patterns — structured changes are recommended."
}};
function findUserIndex(id) {{
  const target = id.trim().toUpperCase();
  return USERS.user_id.findIndex(u => u.toUpperCase() === target);
}}
function riskPillClass(level) {{
  if (level === "None") return "risk-none";
  if (level === "Mild") return "risk-mild";
  return "risk-high";
}}
function lookupUser() {{
  const input = document.getElementById('user-search').value;
  const resultBox = document.getElementById('lookup-result');
  const idx = findUserIndex(input);
  if (idx === -1) {{
    resultBox.className = 'visible';
    resultBox.innerHTML = `<p class="no-result">No user found for "${{input}}". Try an ID like U00001 through U07500.</p>`;
    return;
  }}
  const level = USERS.predicted_risk_level[idx];
  const persona = USERS.persona[idx];
  const proba = (USERS.predicted_addiction_risk_proba[idx] * 100).toFixed(1);
  let flagsTriggered = FLAG_ORDER.filter(f => USERS[f][idx] === 1);
  let recs = flagsTriggered.map(f => RULE_SUGGESTIONS[f]);
  if (USERS.anomaly_flag[idx] === 1) {{
    recs.push("Your overall usage pattern is unusual compared to similar users.");
  }}
  if (recs.length === 0) {{
    recs.push("No specific risk flags triggered — keep doing what you're doing.");
  }}
  resultBox.className = 'visible';
  resultBox.innerHTML = `
    <div class="result-header">
      <h3 style="margin:0;">${{USERS.user_id[idx]}} · ${{persona}}</h3>
      <span class="risk-pill ${{riskPillClass(level)}}">${{level}} risk</span>
    </div>
    <p style="margin-top:-8px; color:var(--slate-soft); font-size:0.92rem;">${{LEVEL_HEADLINE[level]}}</p>
    <div class="stat-mini-grid">
      <div class="stat-mini"><div class="v">${{USERS.daily_screen_time_hours[idx]}}h</div><div class="k">Daily screen time</div></div>
      <div class="stat-mini"><div class="v">${{USERS.sleep_hours[idx]}}h</div><div class="k">Sleep / night</div></div>
      <div class="stat-mini"><div class="v">${{proba}}%</div><div class="k">Predicted risk probability</div></div>
      <div class="stat-mini"><div class="v">${{USERS.balance_score[idx]}}/100</div><div class="k">Balance score</div></div>
    </div>
    <div class="persona-tip-box">${{PERSONA_TIPS[persona] || ''}}</div>
    <h3 style="font-size:0.95rem; margin-bottom:10px;">Personalized recommendations</h3>
    <ul class="rec-list">${{recs.map(r => `<li>${{r}}</li>`).join('')}}</ul>
  `;
}}
document.getElementById('user-search').addEventListener('keydown', function(e) {{ if (e.key === 'Enter') lookupUser(); }});
</script>
</body>
</html>
"""

if __name__ == "__main__":
    main()
