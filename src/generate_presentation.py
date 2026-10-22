"""
Digital Wellness Analyzer v2 - Presentation Generator (redesigned)
--------------------------------------------------------------------------
A visually distinctive HTML slide deck. Design concept: "digital pulse" -
a glowing oscilloscope-style waveform used as the signature motif
throughout, echoing the idea of measuring someone's digital vital signs.
Dark, screen-lit palette (fitting for a project about screens) instead of
the generic warm-cream/serif look.
"""

import base64

FIG_DIR = "outputs/figures"
OUT_PATH = "outputs/reports/presentation.html"


def b64(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")


def main():
    figs = {
        "v1v2": b64(f"{FIG_DIR}/v1_vs_v2_accuracy.png"),
        "confusion": b64(f"{FIG_DIR}/risk_level_confusion_matrix.png"),
        "screentime": b64(f"{FIG_DIR}/screentime_by_risk_level.png"),
        "sleep": b64(f"{FIG_DIR}/sleep_vs_screentime.png"),
        "persona": b64(f"{FIG_DIR}/persona_distribution.png"),
        "flags": b64(f"{FIG_DIR}/flag_frequency.png"),
    }
    html = TEMPLATE.format(
        pulse=PULSE_SVG,
        pulse_dim=PULSE_SVG.replace('class="pulse"', 'class="pulse dim"'),
        pulse_coral=PULSE_SVG.replace('class="pulse"', 'class="pulse coral"'),
        **figs
    )
    with open(OUT_PATH, "w") as f:
        f.write(html)
    print(f"Presentation written to {OUT_PATH} ({len(html)/1024/1024:.2f} MB)")


# The pulse waveform used as a divider - a simple SVG polyline shaped like
# an oscilloscope/heart-rate trace, reused (at different sizes/opacities)
# across the deck as the signature element.
PULSE_SVG = """<svg class="pulse" viewBox="0 0 800 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
<polyline points="0,40 120,40 145,10 170,70 195,40 260,40 285,20 305,60 325,40 800,40" />
</svg>"""

TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Digital Wellness Analyzer v2</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {{
    --ink: #0F1B2D;         /* deep focus ink - dark background */
    --ink-2: #16283F;       /* slightly lighter panel tone */
    --glow: #3E5C76;        /* screen glow blue */
    --amber: #FFB238;       /* signal amber - warmth, healthy */
    --coral: #FF6B5B;       /* alert coral - risk */
    --cream: #F3EFE6;       /* paper cream - light sections */
    --slate: #5C6773;       /* muted body text on light */
    --mist: #A9B7C6;        /* muted body text on dark */
    --border-dark: rgba(169,183,198,0.16);
    --border-light: #E4DFD3;
    --font-display: 'Manrope', system-ui, sans-serif;
    --font-body: 'Inter', system-ui, sans-serif;
    --font-mono: 'IBM Plex Mono', 'Consolas', monospace;
  }}
  * {{ box-sizing: border-box; }}
  html, body {{ margin: 0; height: 100%; overflow: hidden; background: var(--ink); font-family: var(--font-body); }}
  h1, h2, h3 {{ font-family: var(--font-display); margin: 0; }}

  .pulse {{ width: 100%; height: 40px; display: block; }}
  .pulse polyline {{ fill: none; stroke: var(--amber); stroke-width: 2.5; stroke-linejoin: round; stroke-linecap: round;
    filter: drop-shadow(0 0 6px rgba(255,178,56,0.55)); }}
  .pulse.dim polyline {{ stroke: var(--glow); opacity: 0.6; filter: none; }}
  .pulse.coral polyline {{ stroke: var(--coral); filter: drop-shadow(0 0 6px rgba(255,107,91,0.5)); }}

  .deck {{ position: relative; width: 100%; height: 100%; }}
  .slide {{
    position: absolute; inset: 0; display: none; flex-direction: column;
    justify-content: center; padding: 6vh 8vw; background: var(--ink); color: var(--mist);
  }}
  .slide.active {{ display: flex; }}
  .slide.light {{ background: var(--cream); color: var(--slate); }}
  .slide.light h2, .slide.light h1 {{ color: var(--ink); }}

  .eyebrow {{
    font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.16em;
    font-size: 0.72rem; color: var(--amber); font-weight: 600; margin-bottom: 12px;
  }}
  .slide.light .eyebrow {{ color: #B87A13; }}

  /* --- Title slide --- */
  .slide.title-slide {{ align-items: flex-start; position: relative; }}
  .title-slide h1 {{ color: #fff; font-size: clamp(2.4rem, 5.2vw, 4rem); font-weight: 800; max-width: 900px; line-height: 1.08; margin: 8px 0 18px; }}
  .title-slide .lead {{ color: var(--mist); font-size: 1.15rem; max-width: 620px; margin: 0 0 30px; }}
  .title-slide .pulse-bg {{ position: absolute; left: 0; right: 0; bottom: 22%; opacity: 0.5; }}

  .stat-row {{ display: flex; gap: 34px; flex-wrap: wrap; }}
  .stat .num {{ font-family: var(--font-mono); font-size: 2.2rem; font-weight: 600; color: var(--amber); }}
  .stat .lbl {{ font-size: 0.82rem; color: var(--mist); margin-top: 2px; }}

  .slide h2 {{ font-size: clamp(1.6rem, 3.2vw, 2.5rem); font-weight: 800; margin-bottom: 20px; max-width: 900px; color: #fff; }}
  .slide .lead {{ font-size: 1.02rem; max-width: 720px; color: var(--mist); margin-bottom: 22px; }}
  .slide.light .lead {{ color: var(--slate); }}

  .content-row {{ display: flex; gap: 40px; align-items: center; flex: 1; min-height: 0; }}
  .content-col {{ flex: 1; min-width: 0; }}
  .content-col img {{ max-width: 100%; max-height: 54vh; border-radius: 8px; display:block; margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0,0,0,0.35); }}
  .slide.light .content-col img {{ box-shadow: 0 10px 30px rgba(15,27,45,0.12); }}

  ul.feature-list {{ list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 13px; }}
  ul.feature-list li {{ display: flex; gap: 14px; align-items: flex-start; font-size: 0.98rem; color: var(--mist); }}
  .slide.light ul.feature-list li {{ color: var(--slate); }}
  ul.feature-list .num {{
    font-family: var(--font-mono); color: var(--ink); font-weight: 700; font-size: 0.85rem;
    background: var(--amber); border-radius: 50%; width: 26px; height: 26px;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }}

  .big-stat {{ display: flex; align-items: baseline; gap: 18px; margin: 10px 0 22px; }}
  .big-stat .value {{ font-family: var(--font-mono); font-size: clamp(3rem, 8vw, 5.5rem); font-weight: 700; color: var(--coral);
    line-height: 1; }}
  .big-stat .desc {{ font-size: 1rem; color: var(--mist); max-width: 320px; }}

  .stat-grid {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 10px; }}
  .stat-box {{ background: var(--ink-2); border: 1px solid var(--border-dark); border-radius: 10px; padding: 20px 18px; }}
  .slide.light .stat-box {{ background: #fff; border: 1px solid var(--border-light); }}
  .stat-box .num {{ font-family: var(--font-mono); font-size: 1.8rem; font-weight: 700; color: var(--amber); }}
  .slide.light .stat-box .num {{ color: #B87A13; }}
  .stat-box .lbl {{ font-size: 0.82rem; margin-top: 4px; color: var(--mist); }}
  .slide.light .stat-box .lbl {{ color: var(--slate); }}

  .model-row {{ display: flex; gap: 16px; margin-top: 6px; }}
  .model-card {{ background: var(--ink-2); border: 1px solid var(--border-dark); border-radius: 10px; padding: 18px; flex: 1; }}
  .model-card.winner {{ border-color: var(--amber); box-shadow: 0 0 0 1px var(--amber) inset; }}
  .model-card .tag {{ font-family: var(--font-mono); font-size: 0.68rem; color: var(--mist); letter-spacing: 0.04em; }}
  .model-card .tag.win {{ color: var(--amber); }}
  .model-card .metric {{ font-family: var(--font-mono); font-size: 1.5rem; font-weight: 700; color: #fff; margin-top: 6px; }}
  .model-card .desc {{ font-size: 0.82rem; color: var(--mist); margin-top: 4px; }}

  .persona-chip-row {{ display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }}
  .persona-chip {{ background: var(--ink-2); border: 1px solid var(--border-dark); border-radius: 30px; padding: 8px 16px;
    font-size: 0.82rem; font-family: var(--font-mono); color: var(--mist); }}
  .persona-chip b {{ color: #fff; font-family: var(--font-body); font-weight: 600; }}

  .divider-wrap {{ margin: 18px 0 22px; }}

  .code-tag {{ font-family: var(--font-mono); background: rgba(255,178,56,0.12); color: var(--amber);
    padding: 2px 7px; border-radius: 4px; font-size: 0.9em; }}

  /* Nav */
  .nav {{
    position: fixed; bottom: 22px; left: 50%; transform: translateX(-50%);
    display: flex; align-items: center; gap: 14px; background: rgba(15,27,45,0.88);
    padding: 10px 18px; border-radius: 30px; z-index: 10; backdrop-filter: blur(6px);
    border: 1px solid var(--border-dark);
  }}
  .nav button {{ background: transparent; border: none; color: #F4F2EA; font-size: 1.1rem; cursor: pointer;
    width: 30px; height: 30px; border-radius: 50%; display:flex; align-items:center; justify-content:center; }}
  .nav button:hover {{ background: rgba(255,255,255,0.12); }}
  .nav .counter {{ font-family: var(--font-mono); color: var(--mist); font-size: 0.8rem; min-width: 46px; text-align: center;}}

  @media (max-width: 860px) {{
    .content-row {{ flex-direction: column; }}
    .stat-grid {{ grid-template-columns: 1fr; }}
    .model-row {{ flex-direction: column; }}
  }}
</style>
</head>
<body>

<div class="deck" id="deck">

  <!-- 1. Title -->
  <div class="slide title-slide active">
    <div class="eyebrow">Digital Wellness Analyzer — v2</div>
    <h1>We measured the digital pulse of 7,500 people — then fixed the model that couldn't read it.</h1>
    <p class="lead">A rebuilt ML pipeline: real GridSearchCV tuning, a data-diagnosed fix that took risk-level accuracy from 49% to 83%, and a browser tool where anyone can check their own habits against the real trained model.</p>
    <div class="stat-row">
      <div class="stat"><div class="num">7,500</div><div class="lbl">users analyzed</div></div>
      <div class="stat"><div class="num">94.0%</div><div class="lbl">addiction risk accuracy</div></div>
      <div class="stat"><div class="num">83.4%</div><div class="lbl">risk level accuracy (was 49%)</div></div>
    </div>
    <div class="pulse-bg">{pulse}</div>
  </div>

  <!-- 2. The diagnosis -->
  <div class="slide">
    <div class="eyebrow">The Diagnosis</div>
    <h2>Before tuning anything, we asked: can this even be learned?</h2>
    <div class="big-stat">
      <div class="value">0.16</div>
      <div class="desc">the largest Cohen's d effect size between "Moderate" and "Severe" users, across every feature in the dataset — statistically, they don't differ.</div>
    </div>
    <p class="lead">A 4-class model (None/Mild/Moderate/Severe) scored only 49% accuracy. No amount of grid search fixes two labels that look identical in the data. So we merged Moderate + Severe into one data-justified class: <span class="code-tag">High</span>.</p>
    {pulse_dim}
  </div>

  <!-- 3. Before / after -->
  <div class="slide light">
    <div class="eyebrow">The Result</div>
    <h2>49% → 83.4%, without inflating anything</h2>
    <div class="content-row">
      <div class="content-col">
        <p class="lead">The binary task barely moved (it was never the problem) — included here to show GridSearchCV was applied everywhere, not just where accuracy looked bad.</p>
        <div class="stat-grid" style="grid-template-columns:1fr;">
          <div class="stat-box"><div class="num">94.0%</div><div class="lbl">Addiction risk (binary) — was 94.3%</div></div>
          <div class="stat-box"><div class="num">83.4%</div><div class="lbl">Risk level (3-class) — was 49.5% (4-class)</div></div>
        </div>
      </div>
      <div class="content-col"><img src="data:image/png;base64,{v1v2}" alt="v1 vs v2 accuracy"></div>
    </div>
  </div>

  <!-- 4. GridSearchCV -->
  <div class="slide">
    <div class="eyebrow">Methodology</div>
    <h2>GridSearchCV: three algorithms, cross-validated, best one wins</h2>
    <p class="lead">Every task ran 5-fold cross-validated grid search across three candidates — the winner was picked by the numbers, not assumed in advance.</p>
    <div class="model-row">
      <div class="model-card">
        <div class="tag">Logistic Regression</div>
        <div class="metric">0.803</div>
        <div class="desc">CV F1 — risk level task</div>
      </div>
      <div class="model-card winner">
        <div class="tag win">★ Random Forest — selected</div>
        <div class="metric">0.840</div>
        <div class="desc">n_estimators=150, max_depth=None, min_samples_leaf=5, class_weight=balanced</div>
      </div>
      <div class="model-card">
        <div class="tag">HistGradientBoosting</div>
        <div class="metric">0.835</div>
        <div class="desc">CV F1 — risk level task</div>
      </div>
    </div>
    {pulse_dim}
  </div>

  <!-- 5. Confusion matrix -->
  <div class="slide light">
    <div class="eyebrow">Where It Still Struggles</div>
    <h2>Reading the confusion matrix honestly</h2>
    <div class="content-row">
      <div class="content-col">
        <p class="lead">None is separated cleanly. High is separated cleanly. The remaining confusion is almost entirely Mild sitting on the boundary — a real, continuous behavior pattern, not a modeling artifact.</p>
      </div>
      <div class="content-col"><img src="data:image/png;base64,{confusion}" alt="Confusion matrix"></div>
    </div>
  </div>

  <!-- 6. Patterns -->
  <div class="slide">
    <div class="eyebrow">Usage Patterns</div>
    <h2>Screen time, sleep, and risk</h2>
    <div class="content-row">
      <div class="content-col"><img src="data:image/png;base64,{screentime}" alt="Screen time by risk level"></div>
      <div class="content-col"><img src="data:image/png;base64,{sleep}" alt="Sleep vs screen time"></div>
    </div>
  </div>

  <!-- 7. Personas -->
  <div class="slide light">
    <div class="eyebrow">Personalization</div>
    <h2>Five behavioral personas, from K-Means</h2>
    <div class="content-row">
      <div class="content-col">
        <p class="lead">Recommendations are tailored per persona, then further personalized per individual using their own flags.</p>
        <div class="persona-chip-row">
          <div class="persona-chip"><b>Balanced</b> · 1,906</div>
          <div class="persona-chip"><b>Night Owl</b> · 1,815</div>
          <div class="persona-chip"><b>Social Media Heavy</b> · 1,375</div>
          <div class="persona-chip"><b>Gaming-Heavy</b> · 1,297</div>
          <div class="persona-chip"><b>Fragmented Attention</b> · 1,107</div>
        </div>
      </div>
      <div class="content-col"><img src="data:image/png;base64,{persona}" alt="Persona distribution"></div>
    </div>
  </div>

  <!-- 8. Browser tool -->
  <div class="slide">
    <div class="eyebrow">Try It Yourself</div>
    <h2>Real ML, running in your browser — zero server</h2>
    <div class="content-row">
      <div class="content-col">
        <ul class="feature-list">
          <li><span class="num">1</span> Fill in your sleep hours, screen time, and habits</li>
          <li><span class="num">2</span> The exact trained RandomForest — transpiled to JavaScript — runs client-side</li>
          <li><span class="num">3</span> Verified bit-exact against the Python model (0.0 difference) via Node.js</li>
          <li><span class="num">4</span> Get your verdict, risk breakdown, persona, and specific next steps instantly</li>
        </ul>
      </div>
      <div class="content-col">{pulse}</div>
    </div>
  </div>

  <!-- 9. Single file -->
  <div class="slide light">
    <div class="eyebrow">Also Available</div>
    <h2>One Python file, fully commented</h2>
    <p class="lead">Every function in <span class="code-tag" style="background:rgba(184,122,19,0.12); color:#B87A13;">digital_wellness_analyzer.py</span> is explained in plain language — what it does and why — so the whole pipeline can be read top to bottom without jumping between files.</p>
    <div class="stat-grid">
      <div class="stat-box"><div class="num">1</div><div class="lbl">self-contained script</div></div>
      <div class="stat-box"><div class="num">--check</div><div class="lbl">flag to assess your own usage in the terminal</div></div>
      <div class="stat-box"><div class="num">0</div><div class="lbl">difference from the modular version's results</div></div>
    </div>
  </div>

  <!-- 10. Limitations -->
  <div class="slide">
    <div class="eyebrow">Honest Limitations</div>
    <h2>What this still doesn't do</h2>
    <ul class="feature-list">
      <li><span class="num">1</span> No timestamped data → predictions are profile-based, not a forecast for a specific returning user</li>
      <li><span class="num">2</span> Mild vs. its neighbors is a real, continuous boundary — expect some residual confusion there</li>
      <li><span class="num">3</span> Recommendations are rule-based by design — interpretable over automatic</li>
      <li><span class="num">4</span> No feedback loop yet to measure recommendation acceptance rate</li>
    </ul>
    {pulse_coral}
  </div>

  <!-- 11. Thank you -->
  <div class="slide title-slide">
    <div class="eyebrow">Digital Wellness Analyzer — v2</div>
    <h1 style="font-size:clamp(2rem,4.5vw,3rem);">Thank you.</h1>
    <p class="lead">Full source, trained models, and the interactive tools are all in the project folder.</p>
  </div>

</div>

<div class="nav">
  <button onclick="go(-1)" aria-label="Previous">‹</button>
  <span class="counter" id="counter">1 / N</span>
  <button onclick="go(1)" aria-label="Next">›</button>
</div>

<script>
  const slides = document.querySelectorAll('.slide');
  let idx = 0;
  document.getElementById('counter').textContent = `1 / ${{slides.length}}`;
  function show(i) {{
    slides[idx].classList.remove('active');
    idx = (i + slides.length) % slides.length;
    slides[idx].classList.add('active');
    document.getElementById('counter').textContent = `${{idx+1}} / ${{slides.length}}`;
  }}
  function go(delta) {{ show(idx + delta); }}
  document.addEventListener('keydown', (e) => {{
    if (e.key === 'ArrowRight' || e.key === ' ') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  }});
  let touchStartX = null;
  document.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
  document.addEventListener('touchend', e => {{
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStartX = null;
  }});
</script>

</body>
</html>
"""

if __name__ == "__main__":
    main()
