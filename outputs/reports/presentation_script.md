# Digital Wellness Analyzer — 5-Minute Presentation Script

Total speaking time target: ~4:45–5:00 at a normal, unhurried pace (~140 words/minute).
Each section shows [TIME] for pacing and 🎥 SHOW for exactly what to have on screen at that moment.

---

## 0:00–0:35 — Hook + the problem

**SAY:**
"Screen time trackers show you numbers — hours, app breakdowns — but they don't tell you if those numbers actually add up to a healthy life, or what to change. That's the gap this project fills. I built the Digital Wellness Analyzer: a machine learning system trained on 7,500 real smartphone users that detects unhealthy digital habits, predicts risk, and gives personalized recommendations — including a tool where anyone can check their own habits right now, in their browser, with zero setup."

🎥 **SHOW:** Title slide of `presentation.html`, or the hero section of `dashboard.html`. Let the pulse/wave animation be visible for a second before you start talking.

---

## 0:35–1:35 — The diagnosis (your strongest, most distinctive moment)

**SAY:**
"Before I trained anything, I asked a question most projects skip: can this actually be learned from the data? The original dataset labels addiction as None, Mild, Moderate, or Severe. I ran a statistical effect-size test — Cohen's d — between Moderate and Severe users across every single feature. The largest difference I found was 0.16 standard deviations. That's essentially zero. Statistically, those two groups don't differ in this data. That's exactly why a first model trained on all four classes only reached 49% accuracy — no amount of tuning fixes two labels that look identical. So I merged Moderate and Severe into one data-justified class, 'High.' That one decision — diagnosing the actual problem instead of just tuning harder — took accuracy from 49% to 83%."

🎥 **SHOW:** The "Diagnosis" slide from `presentation.html` with the big "0.16" number, OR the `v1_vs_v2_accuracy.png` chart in the dashboard. If you have the confusion matrix figure, flash it briefly too.

---

## 1:35–2:20 — Methodology: real GridSearchCV, not guesswork

**SAY:**
"For both prediction tasks — addiction risk, and risk level — I ran GridSearchCV with 5-fold cross-validation across three different algorithms: Logistic Regression, Random Forest, and HistGradientBoosting. Every combination of hyperparameters was tested and scored, and the best model was picked automatically, not assumed in advance. Random Forest won both tasks. The addiction-risk model reached 94% accuracy; the risk-level model, after the label fix, reached 83.4%."

🎥 **SHOW:** The GridSearchCV results table/slide (model comparison cards), or scroll through `model_training_summary.json` briefly, or show the terminal output of the training run if you have it recorded.

---

## 2:20–3:30 — Live demo: the browser tool (this is your best visual moment)

**SAY:**
"Here's the part I'm most proud of. This is a live wellness checker — no server, no login. As I move these sliders — screen time, sleep, notifications — everything updates instantly: risk level, a radar chart, a wellness score with achievement badges, and specific recommendations, including real focus apps like Forest and Freedom when they're relevant. What's actually running here is the exact trained Random Forest model, converted directly into JavaScript — I verified it's bit-for-bit identical to the Python model using Node.js, zero difference. And this panel here shows *why* — the model's own real feature importances, matched against my own inputs, so you can see exactly what's driving the prediction. No black box."

🎥 **SHOW:** `wellness_checker.html`, live. Drag 2–3 sliders (e.g., drop sleep hours, raise screen time) and let the viewer watch the verdict banner, radar chart, and score change in real time. Then scroll down to the "Why the model predicted this" panel and point at it.

---

## 3:30–4:05 — Personalization + the full picture

**SAY:**
"Beyond individual checks, the system clusters all 7,500 users into five behavioral personas using K-Means — Balanced, Night Owl, Gaming-Heavy, Social Media Heavy, and Fragmented Attention — so recommendations are tailored, not generic. There's also a full interactive dashboard to explore any of the 7,500 users, and a five-page PDF report for anyone who wants a printable summary."

🎥 **SHOW:** Persona chart in `dashboard.html`, then a quick user lookup in the dashboard's search box, then a 2-second flash of `analysis_report.pdf`.

---

## 4:05–4:40 — Honesty about limitations (judges notice this)

**SAY:**
"I want to be upfront about what this doesn't do. The dataset is a single snapshot per user — no timestamps — so this predicts a person's current risk profile, not a forecast of how a specific person's habits will change over time. And even after the fix, the model still confuses 'Mild' with its neighbors sometimes — because in real behavior, that's a continuous boundary, not a hard line. I'd rather show you an honest 83% than a padded 95%."

🎥 **SHOW:** The confusion matrix figure, or just stay on your face/webcam for this part — it lands better spoken directly than read off a slide.

---

## 4:40–5:00 — Close

**SAY:**
"So: a diagnosed and fixed labeling problem, real grid-searched models, a genuinely working offline browser tool with true explainability, and an honest account of what's left to improve. Thank you — happy to answer questions."

🎥 **SHOW:** Return to the title slide or a simple "Thank you" slide.

---

## General recording tips

- **Record the screen first, narrate live or dub after** — whichever feels more natural. If dubbing, leave 1–2 seconds of silence at section boundaries so cuts are clean.
- **Cursor visibility**: make sure your cursor is visible/highlighted when you drag sliders — that interaction is your best visual proof the tool is real and live, not a mockup.
- **Zoom in on numbers**: 94.0%, 83.4%, and "0.16" should each be readable at video resolution — zoom the browser to 125–150% before recording if your screen is high-res.
- **Cut, don't rush**: if you're behind pace at 3:00, cut from the "personalization" section (4:05) rather than rushing the live demo — the demo is your strongest evidence.
- **Total word count of this script is ~680 words** — read it once out loud beforehand; if you're consistently over 5:30, trim the methodology section (2:20) first, since the demo does more convincing than the words do.
