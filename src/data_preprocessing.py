"""
Digital Wellness Analyzer v2 - Data Preprocessing & Feature Engineering
------------------------------------------------------------------------
v2 changes vs v1:
  - Added interaction features (sleep x screen time, stress x screen time)
  - Added non-linear transforms (log screen time) that help linear/tree models
  - Merges 'Moderate' + 'Severe' into a single 'High' addiction-risk class
    (see README: the two are statistically indistinguishable in this data -
    Cohen's d < 0.16 on every available feature - so keeping them separate
    only adds label noise, not signal).
"""

import pandas as pd
import numpy as np

RAW_PATH = "data/usage_data.csv"


def load_data(path: str = RAW_PATH) -> pd.DataFrame:
    return pd.read_csv(path)


def clean_data(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    df["addiction_level"] = df["addiction_level"].fillna("None")

    numeric_cols = [
        "age", "daily_screen_time_hours", "social_media_hours", "gaming_hours",
        "work_study_hours", "sleep_hours", "notifications_per_day",
        "app_opens_per_day", "weekend_screen_time"
    ]
    for c in numeric_cols:
        df[c] = pd.to_numeric(df[c], errors="coerce")
    df = df.dropna(subset=numeric_cols)
    return df


def engineer_features(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()

    # --- Category shares ---
    daily = df["daily_screen_time_hours"].replace(0, np.nan)
    df["social_media_share"] = (df["social_media_hours"] / daily).fillna(0).clip(0, 1)
    df["gaming_share"] = (df["gaming_hours"] / daily).fillna(0).clip(0, 1)
    df["work_study_share"] = (df["work_study_hours"] / daily).fillna(0).clip(0, 1)
    df["entertainment_share"] = (df["social_media_share"] + df["gaming_share"]).clip(0, 1)
    df["productivity_share"] = df["work_study_share"]

    # --- Behavioral intensity ---
    df["app_switch_index"] = (df["app_opens_per_day"] / daily).fillna(df["app_opens_per_day"].median())
    df["notification_load_index"] = (df["notifications_per_day"] / daily).fillna(df["notifications_per_day"].median())
    df["weekend_escalation"] = ((df["weekend_screen_time"] - df["daily_screen_time_hours"]) / daily).fillna(0)

    # --- Balance score (computed KPI, not an ML target - see README) ---
    df["balance_score"] = (
        0.35 * (df["work_study_hours"] / 8).clip(0, 1) * 100 +
        0.35 * (df["sleep_hours"] / 8).clip(0, 1) * 100 +
        0.30 * (1 - df["entertainment_share"]) * 100
    )
    df["low_sleep"] = (df["sleep_hours"] < 6).astype(int)

    # --- NEW v2: interaction & non-linear features ---
    df["sleep_deficit"] = (7.5 - df["sleep_hours"]).clip(lower=0)  # hours short of a healthy baseline
    df["screen_sleep_ratio"] = df["daily_screen_time_hours"] / df["sleep_hours"].replace(0, np.nan)
    df["screen_sleep_ratio"] = df["screen_sleep_ratio"].fillna(df["screen_sleep_ratio"].median())
    df["log_screen_time"] = np.log1p(df["daily_screen_time_hours"])
    df["notif_x_switch"] = df["notification_load_index"] * df["app_switch_index"] / 100
    df["weekend_x_screen"] = df["weekend_escalation"] * df["daily_screen_time_hours"]
    stress_num = df["stress_level"].map({"Low": 0, "Medium": 1, "High": 2})
    df["stress_x_screen"] = stress_num * df["daily_screen_time_hours"]

    # --- Targets ---
    level_map = {"None": 0, "Mild": 1, "Moderate": 2, "Severe": 3}
    df["addiction_level_ord"] = df["addiction_level"].map(level_map)

    # v2: 3-class target merging Moderate+Severe (data-driven decision, see README)
    df["risk_level_3class"] = df["addiction_level"].replace({"Moderate": "High", "Severe": "High"})
    class3_map = {"None": 0, "Mild": 1, "High": 2}
    df["risk_level_3class_ord"] = df["risk_level_3class"].map(class3_map)

    return df


def build_dataset(path: str = RAW_PATH) -> pd.DataFrame:
    df = load_data(path)
    df = clean_data(df)
    df = engineer_features(df)
    return df


if __name__ == "__main__":
    data = build_dataset()
    print(data.shape)
    print(data["risk_level_3class"].value_counts())
