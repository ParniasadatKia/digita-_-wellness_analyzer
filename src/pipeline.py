"""
Digital Wellness Analyzer v2 - Main Pipeline
----------------------------------------------
Runs the full system end-to-end using the GridSearchCV-tuned models:
  1. Load & preprocess data / engineer v2 features
  2. Detect unhealthy behavior (rules + anomaly detection)
  3. Load GridSearchCV-selected best models (trained by model_training.py)
  4. Cluster users into personas
  5. Generate personalized wellness recommendations
  6. Export reports (CSV) + metrics (JSON) + figures (PNG)

Run with:
    python3 src/model_training.py     # trains + grid-searches models (slow, run once)
    python3 src/export_js_model.py    # transpiles portable models to JS
    python3 src/pipeline.py           # full analysis using the trained models
"""

import os
import json
import joblib
import pandas as pd
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import seaborn as sns

from data_preprocessing import build_dataset
from behavior_detection import run_behavior_detection
from model_training import encode_categoricals, get_feature_list
from clustering_personalization import run_clustering
from recommendation_engine import build_recommendation_table

OUT_DIR = "outputs"
FIG_DIR = f"{OUT_DIR}/figures"
MODEL_DIR = f"{OUT_DIR}/models"
REPORT_DIR = f"{OUT_DIR}/reports"

sns.set_style("whitegrid")
PALETTE = ["#4C6EF5", "#F76707", "#12B886", "#F03E3E", "#7048E8", "#FAB005"]


def ensure_dirs():
    for d in [OUT_DIR, FIG_DIR, MODEL_DIR, REPORT_DIR]:
        os.makedirs(d, exist_ok=True)


def add_model_predictions(df: pd.DataFrame, clf_bin, clf_risk3):
    df = df.copy()
    df_enc, _ = encode_categoricals(df)
    features = get_feature_list()
    X = df_enc[features]

    df["predicted_addiction_risk_proba"] = clf_bin.predict_proba(X)[:, 1]
    df["predicted_addicted_label"] = clf_bin.predict(X)

    level_map_inv = {0: "None", 1: "Mild", 2: "High"}
    risk3_proba = clf_risk3.predict_proba(X)
    df["predicted_risk_level"] = pd.Series(clf_risk3.predict(X)).map(level_map_inv).values
    df["predicted_risk_probability"] = risk3_proba.max(axis=1)

    return df


def extract_feature_importance(clf_bin, clf_risk3):
    """
    Pulls the actual learned feature_importances_ out of the trained
    RandomForest models - this is real model transparency (not a guess or
    a post-hoc rationalization): it's the same number the model itself
    used internally to decide which features mattered most when building
    its trees. Works because both selected models happen to be
    RandomForest here; if GridSearchCV had picked a different winner,
    this would need updating to whatever that model exposes.
    """
    features = get_feature_list()

    def to_dict(clf):
        if hasattr(clf, "feature_importances_"):
            return dict(sorted(zip(features, clf.feature_importances_.tolist()), key=lambda x: -x[1]))
        return None

    return {
        "addiction_binary": to_dict(clf_bin),
        "risk_level_3class": to_dict(clf_risk3),
    }


def make_figures(df: pd.DataFrame, metrics: dict):
    order = ["None", "Mild", "High"]

    # 1. Screen time by predicted risk level
    plt.figure(figsize=(7, 4.5))
    sns.boxplot(data=df, x="risk_level_3class", y="daily_screen_time_hours",
                order=order, hue="risk_level_3class", hue_order=order,
                palette=PALETTE[:3], legend=False)
    plt.title("Daily Screen Time by Risk Level (None / Mild / High)")
    plt.xlabel("Risk Level"); plt.ylabel("Daily Screen Time (hours)")
    plt.tight_layout(); plt.savefig(f"{FIG_DIR}/screentime_by_risk_level.png", dpi=140); plt.close()

    # 2. Sleep vs screen time
    plt.figure(figsize=(7, 4.5))
    sample = df.sample(min(2000, len(df)), random_state=42)
    sns.scatterplot(data=sample, x="daily_screen_time_hours", y="sleep_hours",
                     hue="risk_level_3class", hue_order=order, palette=PALETTE[:3],
                     alpha=0.5, s=16)
    plt.title("Sleep Hours vs Daily Screen Time")
    plt.xlabel("Daily Screen Time (hours)"); plt.ylabel("Sleep (hours)")
    plt.tight_layout(); plt.savefig(f"{FIG_DIR}/sleep_vs_screentime.png", dpi=140); plt.close()

    # 3. Persona distribution
    plt.figure(figsize=(7.5, 4.5))
    persona_counts = df["persona"].value_counts()
    sns.barplot(x=persona_counts.values, y=persona_counts.index,
                hue=persona_counts.index, palette=PALETTE[:len(persona_counts)], legend=False)
    plt.title("User Distribution Across Wellness Personas")
    plt.xlabel("Number of Users"); plt.ylabel("")
    plt.tight_layout(); plt.savefig(f"{FIG_DIR}/persona_distribution.png", dpi=140); plt.close()

    # 4. Flag frequency
    flag_cols = [c for c in df.columns if c.startswith("flag_")]
    flag_counts = df[flag_cols].sum().sort_values(ascending=True)
    flag_labels = [c.replace("flag_", "").replace("_", " ").title() for c in flag_counts.index]
    plt.figure(figsize=(7.5, 4.5))
    sns.barplot(x=flag_counts.values, y=flag_labels, color="#F76707")
    plt.title("Frequency of Unhealthy Behavior Flags")
    plt.xlabel("Number of Users Triggering Flag")
    plt.tight_layout(); plt.savefig(f"{FIG_DIR}/flag_frequency.png", dpi=140); plt.close()

    # 5. Model accuracy comparison (v1 vs v2 honesty chart)
    plt.figure(figsize=(7, 4.5))
    tasks = ["Addiction risk\n(binary)", "Risk level\n(was 4-class 49%,\nnow 3-class)"]
    v1_acc = [94.27, 49.47]
    v2_acc = [metrics["addiction_binary_classifier"]["accuracy"] * 100,
              metrics["risk_level_3class_classifier"]["accuracy"] * 100]
    x = np.arange(len(tasks)); width = 0.35
    plt.bar(x - width/2, v1_acc, width, label="v1 (before)", color="#ADB5BD")
    plt.bar(x + width/2, v2_acc, width, label="v2 (GridSearchCV + fixed labels)", color="#12B886")
    plt.xticks(x, tasks); plt.ylabel("Test Accuracy (%)"); plt.ylim(0, 100)
    plt.title("Model Accuracy: v1 vs v2"); plt.legend()
    plt.tight_layout(); plt.savefig(f"{FIG_DIR}/v1_vs_v2_accuracy.png", dpi=140); plt.close()

    # 6. Confusion matrix for 3-class risk model
    cm = np.array(metrics["risk_level_3class_classifier"]["confusion_matrix"])
    cm_norm = cm / cm.sum(axis=1, keepdims=True)
    plt.figure(figsize=(5.5, 4.8))
    sns.heatmap(cm_norm, annot=True, fmt=".1%", cmap="Blues", xticklabels=order, yticklabels=order, cbar=False)
    plt.title("Risk Level Model - Confusion Matrix (normalized)")
    plt.xlabel("Predicted"); plt.ylabel("Actual")
    plt.tight_layout(); plt.savefig(f"{FIG_DIR}/risk_level_confusion_matrix.png", dpi=140); plt.close()

    # 7. Feature importance - real values pulled from the trained RandomForest,
    # not a post-hoc guess. Shows what the model itself actually weighted most.
    if metrics.get("feature_importance", {}).get("risk_level_3class"):
        importances = metrics["feature_importance"]["risk_level_3class"]
        top = dict(list(importances.items())[:12])
        labels = [k.replace("_", " ").title() for k in top.keys()]
        plt.figure(figsize=(7.5, 5))
        sns.barplot(x=list(top.values()), y=labels, color="#7048E8")
        plt.title("What Drives the Risk-Level Prediction (Random Forest feature importance)")
        plt.xlabel("Importance")
        plt.tight_layout(); plt.savefig(f"{FIG_DIR}/feature_importance.png", dpi=140); plt.close()


def run_pipeline():
    ensure_dirs()

    print("[1/6] Loading & preprocessing data (v2 features)...")
    df = build_dataset()

    print("[2/6] Detecting unhealthy behavior (rules + anomaly detection)...")
    df, iso_model = run_behavior_detection(df)

    print("[3/6] Loading GridSearchCV-tuned models...")
    clf_bin = joblib.load(f"{MODEL_DIR}/addiction_binary_best.pkl")
    clf_risk3 = joblib.load(f"{MODEL_DIR}/risk_level_3class_best.pkl")
    df = add_model_predictions(df, clf_bin, clf_risk3)

    print("[4/6] Clustering users into wellness personas...")
    df, kmeans, scaler, profile, persona_names = run_clustering(df, n_clusters=5)

    print("[5/6] Generating personalized recommendations...")
    rec_table = build_recommendation_table(df)

    print("[6/6] Saving reports, figures...")
    df.to_csv(f"{REPORT_DIR}/full_user_analysis.csv", index=False)
    rec_table.to_csv(f"{REPORT_DIR}/personalized_recommendations.csv", index=False)
    profile.round(3).to_csv(f"{REPORT_DIR}/persona_profile_summary.csv")

    training_summary = json.load(open(f"{REPORT_DIR}/model_training_summary.json"))
    feature_importance = extract_feature_importance(clf_bin, clf_risk3)
    metrics = {
        "addiction_binary_classifier": training_summary["binary_task"]["test_metrics"],
        "risk_level_3class_classifier": training_summary["risk3_task"]["test_metrics"],
        "model_selection": {
            "addiction_binary": training_summary["binary_task"]["selected_model"],
            "risk_level_3class": training_summary["risk3_task"]["selected_model"],
            "candidates_compared": training_summary["binary_task"]["candidates"],
        },
        "anomaly_detection": {
            "total_users": int(len(df)),
            "anomalies_detected": int(df["anomaly_flag"].sum()),
            "anomaly_rate": round(float(df["anomaly_flag"].mean()), 4)
        },
        "clustering": {
            "n_clusters": int(df["cluster"].nunique()),
            "persona_counts": df["persona"].value_counts().to_dict()
        },
        "feature_importance": feature_importance,
    }
    with open(f"{REPORT_DIR}/metrics_summary.json", "w") as f:
        json.dump(metrics, f, indent=2, default=str)

    # Separate, lightweight export just for embedding in the browser tool
    # (wellness_checker.html) so it can show "top drivers" without needing
    # the whole metrics file:
    with open(f"{REPORT_DIR}/feature_importance.json", "w") as f:
        json.dump(feature_importance, f, indent=2)

    joblib.dump(kmeans, f"{MODEL_DIR}/kmeans_model.pkl")
    joblib.dump(scaler, f"{MODEL_DIR}/scaler.pkl")
    joblib.dump(iso_model, f"{MODEL_DIR}/isolation_forest.pkl")

    make_figures(df, metrics)

    print("\nPipeline complete.")
    print(f"  Addiction risk (binary) accuracy: {metrics['addiction_binary_classifier']['accuracy']*100:.1f}%")
    print(f"  Risk level (3-class) accuracy:    {metrics['risk_level_3class_classifier']['accuracy']*100:.1f}%")

    return df, rec_table, metrics


if __name__ == "__main__":
    run_pipeline()
