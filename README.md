# digita-_-wellness_analyzer


A full rebuild of the ML pipeline: diagnosed *why* accuracy was low (not just
"tune harder"), fixed it with a data-driven label change, ran real
GridSearchCV across multiple algorithms, and shipped a browser-based tool
where anyone can enter their own usage data and get a real, model-based
verdict and recommendations.

Dataset: `Smartphone_Usage_And_Addiction_Analysis_7500_Rows.csv` (7,500 users).

---

## Why v1's accuracy was low — and why tuning alone wouldn't fix it

v1's 4-class addiction-level model (None/Mild/Moderate/Severe) scored only
**49% accuracy**. Before grid-searching harder, I checked *whether the
labels were learnable at all* using Cohen's d effect size between Moderate
and Severe on every available feature:

| Feature | Moderate mean | Severe mean | Cohen's d |
|---|---|---|---|
| daily_screen_time_hours | 8.35 | 8.60 | 0.10 |
| sleep_hours | ~6.7 | ~6.7 | ~0.02 |
| notifications_per_day | — | — | < 0.16 (all features) |

**Every feature's effect size was below 0.16** — Moderate and Severe users
are statistically indistinguishable in this dataset. No amount of grid
search, feature engineering, or algorithm choice can separate two classes
that don't differ in the data. Keeping them separate was adding label
noise, not signal.

**Fix:** merge Moderate + Severe into a single, data-justified `High` class
(None / Mild / High), then apply real hyperparameter search on top of that
honest target definition.

## Results: before vs. after

| Task | v1 (before) | v2 (after) | What changed |
|---|---|---|---|
| Addiction risk (binary) | 94.3% | **94.0%** | Already solid; re-verified with GridSearchCV |
| Risk level | 49.5% (4-class) | **83.4%** (3-class) | Fixed the unlearnable label + GridSearchCV |

*(Binary accuracy is ~flat because it was never the problem — it's included to show GridSearchCV was applied everywhere, not just where it looked bad.)*

## GridSearchCV: what was actually searched

For **both** tasks, three algorithms were compared with 5-fold stratified
cross-validation (scored on weighted F1), and the best of the three was
selected automatically — not assumed in advance.

**Addiction risk (binary)**
| Model | CV F1 | Best params |
|---|---|---|
| Logistic Regression | 0.916 | `C=30, class_weight=None` |
| **Random Forest** ✅ | **0.938** | `n_estimators=150, max_depth=8, min_samples_leaf=1, class_weight=balanced` |
| HistGradientBoosting | 0.933 | `max_iter=150, learning_rate=0.1, max_depth=3, l2=0.0` |

**Risk level (None/Mild/High)**
| Model | CV F1 | Best params |
|---|---|---|
| Logistic Regression | 0.803 | `C=10, class_weight=None` |
| **Random Forest** ✅ | **0.840** | `n_estimators=150, max_depth=None, min_samples_leaf=5, class_weight=balanced` |
| HistGradientBoosting | 0.835 | `max_iter=150, learning_rate=0.05, max_depth=3, l2=1.0` |

Full results (including confusion matrices and per-class precision/recall)
are in `outputs/reports/model_training_summary.json` and
`outputs/reports/metrics_summary.json`.

Where the risk-level model still struggles: it separates None cleanly but
confuses some Mild users with None/High at the boundary (see
`outputs/figures/risk_level_confusion_matrix.png`) — expected, since "Mild"
sits on a continuum rather than a hard boundary in real behavior.

---

## New: check your own usage, with a real model, in the browser

**`outputs/reports/wellness_checker.html`** — open it in any browser, no
install needed. Fill in your sleep hours, screen time, notifications, etc.,
and get:
- An overall verdict (Healthy / Mostly Healthy / Unhealthy / High risk)
- A probability breakdown across None / Mild / High risk
- Your addiction-risk probability
- A balance score (0–100)
- Your closest behavioral persona
- Specific, ranked recommendations

**This is not a rule-based approximation** — the actual trained
RandomForest models (25 trees for addiction risk, 15 for risk level) are
transpiled into plain JavaScript (`src/export_js_model.py`) and run
client-side. This was validated against the Python models using Node.js:
**max difference = 0.0** across test cases (bit-exact match — see
`src/model_training.py` validation in development notes).

The K-Means persona assignment also runs client-side, using the exported
cluster centers and scaler (`outputs/reports/cluster_export.json`).

### Why a smaller "portable" model, and why the CLI tool uses it too

The full GridSearchCV winners (150+ trees) aren't practical to transpile to
JS. So a *second*, smaller RandomForest (≤25 trees) was **also
grid-searched** (not just arbitrarily shrunk) specifically for browser
portability:

| Task | Full model test acc. | Portable model test acc. | Trees |
|---|---|---|---|
| Addiction risk | 94.0% | 93.9% | 25 |
| Risk level | 83.4% | 81.7% | 15 |

The accuracy gap is small (≤1.7pp). To avoid the CLI tool and the browser
tool disagreeing on borderline cases, **`src/personal_check.py` (the
Python CLI) also uses the portable models** — so both interfaces always
give identical results for the same input.

---

## v2.4 — optional personalization questions

Added two optional questions to `wellness_checker.html`: "what brought you here today?" and "what matters most to you right now?" These are deliberately **not** fed into the model — adding a question the model was never trained on would either be decorative (misleading) or require retraining on a feature the dataset doesn't have. Instead, they only reorder and introduce the recommendation list:

- The question block is styled distinctly (dashed border, "Optional" tag) so it's visually obvious it's separate from the inputs that drive the prediction.
- If the person's stated goal area (e.g. sleep) already looks healthy based on their actual numbers, the tool says so explicitly rather than silently reordering nothing.
- Verified with a Node.js test that the model's prediction (risk probabilities, risk level) is byte-identical regardless of what's selected here - only the order and framing of the "What to do" list changes.

## v2.3 — competition-readiness pass

The chat-coach feature (v2.2) was **removed**: it only worked while this page was open inside Claude's own environment (the API call needs Claude's proxy), which is a real liability for a submission a judge will run standalone - a broken-looking feature is worse than no feature. Replaced with something stronger and fully offline:

- **Real model explainability, no API needed**: a "Why the model predicted this" panel that shows the actual `feature_importances_` learned by the trained Random Forest - the same numbers the model itself used internally to build its trees - matched against the person's own values, so you see *which specific inputs* the model weighted most **and** whether this person is in the unhealthy range for them. This is genuine transparency (not a rationalization written after the fact), and it works with zero network access.
- **Fixed a real UI bug**: on some browsers, scrolling while the mouse was over any of the range sliders changed the slider's value instead of scrolling the page - which felt like the whole page was "stuck." Fixed by intercepting the wheel event on sliders and forwarding it to the page scroll instead.
- Gamification (wellness score + achievement badges) is unchanged - it was already fully offline.

## v2.2 additions (chat feature since removed - see v2.3 above)

- **Redesigned wellness checker UI**: `wellness_checker.html` is now a live, no-submit-button dashboard — sliders on the left update a radar chart, gauges, and every panel on the right in real time, using a "digital pulse" visual identity (violet/cyan/amber/coral on a dark background).
- **Gamification**: a 0-100 "wellness score" and tier (Bronze/Silver/Gold/Platinum) computed from the same six behavior flags used everywhere else, plus six achievement badges (Sleep Guardian, Time Keeper, Notification Ninja, Focus Master, Balanced Weekend, Calm Mind) that unlock live as the sliders move into a healthy range. Explicitly framed as motivational, not clinical — no dark patterns, just positive reinforcement for habits already backed by real flags.

## v2.1 additions

- **Focus-app recommendations**: the recommendation engine now suggests real, named apps (Forest, One Sec, Opal, Freedom, built-in Focus Mode) tied to whichever specific flag they address - only shown when relevant, not a generic list.
- **PDF analysis report**: `src/generate_pdf_report.py` builds a 5-page PDF (`outputs/reports/analysis_report.pdf`) summarizing the dataset-wide analysis - metrics, charts, personas, and the same methodology notes as this README. Good for sending or printing.
- **Comparison chart in the browser tool**: `wellness_checker.html` now shows a "how you compare to healthy ranges" bar chart right in the results, so the healthy/unhealthy verdict has a visual backing, not just text.
- **Reminder + PDF export in the browser tool**: the results page has a "Download as PDF" button (uses the browser's print-to-PDF), plus "remind me in N days" buttons that download a `.ics` calendar file, and a "copy reminder text" button for pasting into Telegram's Saved Messages or any reminder bot. A standalone HTML file can't send real Telegram messages directly - that would need a server - so the calendar file and copyable text are the practical equivalent.

## Project structure

| File | Purpose |
|---|---|
| `src/data_preprocessing.py` | v2 feature engineering (adds interaction/non-linear features) + merges Moderate/Severe into `High` |
| `src/behavior_detection.py` | Rule-based flags + Isolation Forest anomaly detection |
| `src/model_training.py` | **GridSearchCV** across Logistic Regression / Random Forest / HistGradientBoosting, for both the full and portable models |
| `src/export_js_model.py` | Transpiles the portable RandomForests into exact JavaScript |
| `src/clustering_personalization.py` | K-Means persona segmentation |
| `src/recommendation_engine.py` | Rule-based recommendation generation |
| `src/pipeline.py` | Runs the full analysis end-to-end using the trained models |
| `src/generate_dashboard.py` | Builds `dashboard.html` (charts + per-user lookup across all 7,500 users) |
| `src/generate_wellness_app.py` | Builds `wellness_checker.html` (the personal input tool) |
| `src/personal_check.py` | Python CLI version of the personal check (same portable models as the browser tool) |

## How to run it yourself

```bash
cd digital_wellness_analyzer
python3 src/model_training.py      # trains + grid-searches all models (~8-10 min on 1 core)
python3 src/export_js_model.py     # transpiles portable models to JS
python3 src/pipeline.py            # full analysis using the trained models
python3 src/generate_dashboard.py  # builds dashboard.html
python3 src/generate_wellness_app.py  # builds wellness_checker.html
python3 src/personal_check.py      # or: interactively check your own usage in the terminal
```

## A data note: the string "None" in the CSVs

`addiction_level`, `predicted_risk_level`, etc. contain the literal string
`"None"` as a valid category. Pandas' `read_csv` treats `"None"` as a null
value **by default** and silently drops it from `value_counts()` etc. If
you re-read `full_user_analysis.csv` yourself, use:
```python
pd.read_csv(path, keep_default_na=False, na_values=[""])
```
(All scripts in this project already do this correctly — this is only a
heads-up for anyone opening the CSV directly in their own code/Excel.)

## Limitations (still honest in v2)

- No timestamped data → predictions are profile-based, not a time-series
  forecast for a specific returning user.
- The risk-level model's main confusion is Mild vs. its neighbors — a
  real, continuous boundary in human behavior, not a modeling artifact.
- Recommendations remain rule-based (interpretable/auditable) rather than
  model-generated text.
- No real user-feedback loop exists yet to measure recommendation
  acceptance rate.

## Suggested next steps

- Timestamped/longitudinal logging → real time-series forecasting (LSTM).
- A/B test recommendation phrasing once a feedback loop exists.
- Wearable integration for sleep *quality*, not just duration.
