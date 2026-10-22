"""
Digital Wellness Analyzer v2 - Model Training with GridSearchCV
----------------------------------------------------------------------
For each prediction task, multiple algorithms are compared and tuned
with GridSearchCV (5-fold stratified CV, scored on weighted F1) so the
reported metrics reflect genuinely searched, not guessed, hyperparameters.

Tasks:
  1. addicted_label (binary)         -> best of LogisticRegression / RandomForest / HistGradientBoosting
  2. risk_level_3class (None/Mild/High) -> same three candidates
  3. A small, GridSearchCV-tuned RandomForest (limited to <=25 trees) is
     also fit for each task so it can be transpiled to JavaScript and run
     client-side in the browser tool (see export_js_model.py) - this is the
     same trained model, not a re-implemented approximation.
"""

import json
import time
import joblib
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV, StratifiedKFold
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, HistGradientBoostingClassifier
from sklearn.pipeline import Pipeline
from sklearn.metrics import (
    accuracy_score, precision_recall_fscore_support, classification_report, confusion_matrix
)

BASE_FEATURES = [
    "age", "daily_screen_time_hours", "social_media_hours", "gaming_hours",
    "work_study_hours", "sleep_hours", "notifications_per_day",
    "app_opens_per_day", "weekend_screen_time", "social_media_share",
    "gaming_share", "work_study_share", "entertainment_share",
    "productivity_share", "app_switch_index", "notification_load_index",
    "weekend_escalation", "low_sleep",
    # v2 additions
    "sleep_deficit", "screen_sleep_ratio", "log_screen_time",
    "notif_x_switch", "weekend_x_screen", "stress_x_screen",
]
CATEGORICAL = ["gender", "stress_level", "academic_work_impact"]


def encode_categoricals(df: pd.DataFrame):
    df = df.copy()
    encoders = {}
    for col in CATEGORICAL:
        le = LabelEncoder()
        df[col + "_enc"] = le.fit_transform(df[col])
        encoders[col] = le
    return df, encoders


def get_feature_list():
    return BASE_FEATURES + [c + "_enc" for c in CATEGORICAL]


def _grid_search_suite(X_train, y_train, cv, task_name):
    """Runs GridSearchCV over LogisticRegression, RandomForest, and
    HistGradientBoosting; returns the fitted best estimator of each,
    plus a summary table so the comparison is auditable."""

    results = {}

    # --- Logistic Regression (scaled) ---
    lr_pipe = Pipeline([
        ("scale", StandardScaler()),
        ("clf", LogisticRegression(max_iter=2000))
    ])
    lr_grid = {
        "clf__C": [0.01, 0.1, 1, 10, 30],
        "clf__class_weight": [None, "balanced"],
    }
    t0 = time.time()
    lr_search = GridSearchCV(lr_pipe, lr_grid, cv=cv, scoring="f1_weighted", n_jobs=-1)
    lr_search.fit(X_train, y_train)
    results["LogisticRegression"] = {
        "best_estimator": lr_search.best_estimator_,
        "best_params": lr_search.best_params_,
        "best_cv_f1": lr_search.best_score_,
        "search_time_s": round(time.time() - t0, 1),
    }

    # --- Random Forest ---
    rf_grid = {
        "n_estimators": [150, 300],
        "max_depth": [8, None],
        "min_samples_leaf": [1, 5],
        "class_weight": [None, "balanced"],
    }
    t0 = time.time()
    rf_search = GridSearchCV(
        RandomForestClassifier(random_state=42, n_jobs=1),
        rf_grid, cv=cv, scoring="f1_weighted", n_jobs=-1
    )
    rf_search.fit(X_train, y_train)
    results["RandomForest"] = {
        "best_estimator": rf_search.best_estimator_,
        "best_params": rf_search.best_params_,
        "best_cv_f1": rf_search.best_score_,
        "search_time_s": round(time.time() - t0, 1),
    }

    # --- Hist Gradient Boosting ---
    hgb_grid = {
        "max_iter": [150, 300],
        "learning_rate": [0.05, 0.1],
        "max_depth": [3, 6, None],
        "l2_regularization": [0.0, 1.0],
    }
    t0 = time.time()
    hgb_search = GridSearchCV(
        HistGradientBoostingClassifier(random_state=42),
        hgb_grid, cv=cv, scoring="f1_weighted", n_jobs=-1
    )
    hgb_search.fit(X_train, y_train)
    results["HistGradientBoosting"] = {
        "best_estimator": hgb_search.best_estimator_,
        "best_params": hgb_search.best_params_,
        "best_cv_f1": hgb_search.best_score_,
        "search_time_s": round(time.time() - t0, 1),
    }

    print(f"\n[{task_name}] GridSearchCV results (5-fold CV, weighted F1):")
    for name, r in results.items():
        print(f"  {name:22s} CV F1={r['best_cv_f1']:.4f}  best_params={r['best_params']}  ({r['search_time_s']}s)")

    best_name = max(results, key=lambda k: results[k]["best_cv_f1"])
    print(f"  -> Selected: {best_name}")
    return results, best_name


def _small_portable_rf_grid_search(X_train, y_train, cv):
    """A GridSearchCV-tuned RandomForest capped at <=25 trees so it can be
    transpiled into JavaScript and run client-side (see export_js_model.py),
    while still being a genuinely searched, not arbitrarily chosen, model."""
    grid = {
        "n_estimators": [10, 15, 25],
        "max_depth": [4, 5, 6, 8],
        "min_samples_leaf": [3, 5, 10],
    }
    search = GridSearchCV(
        RandomForestClassifier(random_state=42, n_jobs=-1),
        grid, cv=cv, scoring="f1_weighted", n_jobs=-1
    )
    search.fit(X_train, y_train)
    return search.best_estimator_, search.best_params_, search.best_score_


def evaluate(model, X_test, y_test):
    y_pred = model.predict(X_test)
    precision, recall, f1, _ = precision_recall_fscore_support(y_test, y_pred, average="weighted")
    return {
        "accuracy": round(accuracy_score(y_test, y_pred), 4),
        "precision": round(precision, 4),
        "recall": round(recall, 4),
        "f1_score": round(f1, 4),
        "confusion_matrix": confusion_matrix(y_test, y_pred).tolist(),
        "classification_report": classification_report(y_test, y_pred, output_dict=True),
    }


def train_task(df: pd.DataFrame, target_col: str, task_name: str):
    df_enc, encoders = encode_categoricals(df)
    features = get_feature_list()
    X = df_enc[features]
    y = df_enc[target_col]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

    search_results, best_name = _grid_search_suite(X_train, y_train, cv, task_name)
    best_model = search_results[best_name]["best_estimator"]
    test_metrics = evaluate(best_model, X_test, y_test)
    print(f"  Held-out test accuracy: {test_metrics['accuracy']*100:.1f}%  F1: {test_metrics['f1_score']*100:.1f}%")

    portable_model, portable_params, portable_cv_f1 = _small_portable_rf_grid_search(X_train, y_train, cv)
    portable_metrics = evaluate(portable_model, X_test, y_test)
    print(f"  Portable (browser-exportable) RF: {portable_params}  test accuracy: {portable_metrics['accuracy']*100:.1f}%")

    summary = {
        "task": task_name,
        "selected_model": best_name,
        "candidates": {k: {"best_params": v["best_params"], "best_cv_f1": round(v["best_cv_f1"], 4)}
                       for k, v in search_results.items()},
        "test_metrics": test_metrics,
        "portable_model_params": portable_params,
        "portable_model_test_metrics": portable_metrics,
    }

    return best_model, portable_model, encoders, features, summary


if __name__ == "__main__":
    import sys
    sys.path.insert(0, "src")
    from data_preprocessing import build_dataset

    df = build_dataset()

    print("=" * 70)
    print("TASK 1: Addiction risk (binary: addicted_label)")
    print("=" * 70)
    model_bin, portable_bin, enc_bin, feat_bin, summary_bin = train_task(
        df, "addicted_label", "addiction_risk_binary"
    )

    print("\n" + "=" * 70)
    print("TASK 2: Risk level (3-class: None / Mild / High)")
    print("=" * 70)
    model_3c, portable_3c, enc_3c, feat_3c, summary_3c = train_task(
        df, "risk_level_3class_ord", "risk_level_3class"
    )

    import os
    os.makedirs("outputs/models", exist_ok=True)
    os.makedirs("outputs/reports", exist_ok=True)

    joblib.dump(model_bin, "outputs/models/addiction_binary_best.pkl")
    joblib.dump(portable_bin, "outputs/models/addiction_binary_portable.pkl")
    joblib.dump(model_3c, "outputs/models/risk_level_3class_best.pkl")
    joblib.dump(portable_3c, "outputs/models/risk_level_3class_portable.pkl")

    with open("outputs/reports/model_training_summary.json", "w") as f:
        json.dump({"binary_task": summary_bin, "risk3_task": summary_3c}, f, indent=2, default=str)

    print("\nSaved models to outputs/models/ and summary to outputs/reports/model_training_summary.json")
    print("ALL DONE")
