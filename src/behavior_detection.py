"""
Digital Wellness Analyzer - Unhealthy Digital Behavior Detection
------------------------------------------------------------------
Combines interpretable rule-based flags (clinically-inspired thresholds)
with an Isolation Forest anomaly detector to catch unusual usage
patterns that simple thresholds might miss.
"""

import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

# Thresholds informed by common digital-wellbeing guidance
EXCESSIVE_SCREEN_TIME_H = 8.0        # > 8h/day total screen time
LOW_SLEEP_H = 6.0                    # < 6h sleep/night
HIGH_NOTIFICATIONS = 200             # > 200 notifications/day
HIGH_APP_SWITCH_INDEX = 25           # app opens per hour of screen time
HIGH_STRESS = "High"
WEEKEND_ESCALATION_THRESHOLD = 0.25  # 25% more usage on weekends


def apply_rule_based_flags(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()

    df["flag_excessive_screen_time"] = (df["daily_screen_time_hours"] > EXCESSIVE_SCREEN_TIME_H).astype(int)
    df["flag_sleep_deprivation"] = (df["sleep_hours"] < LOW_SLEEP_H).astype(int)
    df["flag_notification_overload"] = (df["notifications_per_day"] > HIGH_NOTIFICATIONS).astype(int)
    df["flag_frequent_app_switching"] = (df["app_switch_index"] > HIGH_APP_SWITCH_INDEX).astype(int)
    df["flag_weekend_escalation"] = (df["weekend_escalation"] > WEEKEND_ESCALATION_THRESHOLD).astype(int)
    df["flag_high_stress"] = (df["stress_level"] == HIGH_STRESS).astype(int)

    flag_cols = [c for c in df.columns if c.startswith("flag_")]
    df["risk_flag_count"] = df[flag_cols].sum(axis=1)

    # Simple composite unhealthy-behavior severity: 0 (healthy) - len(flags) (severe)
    df["rule_based_risk_level"] = pd.cut(
        df["risk_flag_count"],
        bins=[-1, 0, 1, 2, len(flag_cols)],
        labels=["Healthy", "Mild Concern", "Moderate Concern", "High Concern"]
    )
    return df


def detect_anomalies(df: pd.DataFrame, contamination: float = 0.08, random_state: int = 42):
    """
    Uses Isolation Forest on behavioral features to flag statistically unusual
    usage patterns (e.g. combinations of extreme screen time, notifications,
    app switching, and low sleep) that rule-based thresholds alone might miss.
    """
    df = df.copy()
    feature_cols = [
        "daily_screen_time_hours", "social_media_hours", "gaming_hours",
        "work_study_hours", "sleep_hours", "notifications_per_day",
        "app_opens_per_day", "weekend_screen_time", "app_switch_index",
        "notification_load_index", "weekend_escalation"
    ]
    X = df[feature_cols].values

    model = IsolationForest(
        n_estimators=200,
        contamination=contamination,
        random_state=random_state,
        n_jobs=-1
    )
    preds = model.fit_predict(X)          # -1 = anomaly, 1 = normal
    scores = model.decision_function(X)   # higher = more normal

    df["anomaly_flag"] = (preds == -1).astype(int)
    df["anomaly_score"] = -scores  # invert so higher = more anomalous (more intuitive)

    return df, model


def run_behavior_detection(df: pd.DataFrame):
    df = apply_rule_based_flags(df)
    df, iso_model = detect_anomalies(df)
    return df, iso_model


if __name__ == "__main__":
    from data_preprocessing import build_dataset
    data = build_dataset()
    data, _ = run_behavior_detection(data)
    print(data[["user_id", "risk_flag_count", "rule_based_risk_level", "anomaly_flag"]].head(10))
    print(data["rule_based_risk_level"].value_counts())
    print("Anomalies detected:", data["anomaly_flag"].sum())
