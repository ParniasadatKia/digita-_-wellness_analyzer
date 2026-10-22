"""
Digital Wellness Analyzer v2 - Personal Wellness Check
--------------------------------------------------------
Same purpose as v1: a person enters their own usage stats and gets a
real, model-based assessment. Updated for v2: uses the GridSearchCV-tuned
RandomForest models and the 3-class risk target (None / Mild / High).

Run interactively:
    python3 src/personal_check.py
"""

import sys
import joblib
import pandas as pd
import numpy as np

sys.path.insert(0, "src")
from behavior_detection import (
    EXCESSIVE_SCREEN_TIME_H, LOW_SLEEP_H, HIGH_NOTIFICATIONS,
    HIGH_APP_SWITCH_INDEX, WEEKEND_ESCALATION_THRESHOLD
)
from model_training import get_feature_list
from recommendation_engine import generate_recommendations

MODEL_DIR = "outputs/models"
REPORT_DIR = "outputs/reports"

GENDER_MAP = {"Female": 0, "Male": 1, "Other": 2}
STRESS_MAP = {"High": 0, "Low": 1, "Medium": 2}
IMPACT_MAP = {"No": 0, "Yes": 1}
LEVEL_MAP_INV = {0: "None", 1: "Mild", 2: "High"}

CLUSTER_FEATURES = [
    "daily_screen_time_hours", "social_media_share", "gaming_share",
    "work_study_share", "sleep_hours", "app_switch_index",
    "notification_load_index", "weekend_escalation", "balance_score"
]
ISOLATION_FEATURES = [
    "daily_screen_time_hours", "social_media_hours", "gaming_hours",
    "work_study_hours", "sleep_hours", "notifications_per_day",
    "app_opens_per_day", "weekend_screen_time", "app_switch_index",
    "notification_load_index", "weekend_escalation"
]


def engineer_single_row(profile: dict) -> pd.Series:
    row = dict(profile)
    daily = row["daily_screen_time_hours"] or 1e-6

    row["social_media_share"] = min(max(row["social_media_hours"] / daily, 0), 1)
    row["gaming_share"] = min(max(row["gaming_hours"] / daily, 0), 1)
    row["work_study_share"] = min(max(row["work_study_hours"] / daily, 0), 1)
    row["entertainment_share"] = min(row["social_media_share"] + row["gaming_share"], 1)
    row["productivity_share"] = row["work_study_share"]

    row["app_switch_index"] = row["app_opens_per_day"] / daily
    row["notification_load_index"] = row["notifications_per_day"] / daily
    row["weekend_escalation"] = (row["weekend_screen_time"] - row["daily_screen_time_hours"]) / daily

    row["balance_score"] = (
        0.35 * min(row["work_study_hours"] / 8, 1) * 100 +
        0.35 * min(row["sleep_hours"] / 8, 1) * 100 +
        0.30 * (1 - row["entertainment_share"]) * 100
    )
    row["low_sleep"] = int(row["sleep_hours"] < 6)

    # v2 features
    row["sleep_deficit"] = max(7.5 - row["sleep_hours"], 0)
    row["screen_sleep_ratio"] = row["daily_screen_time_hours"] / row["sleep_hours"] if row["sleep_hours"] else 0
    row["log_screen_time"] = np.log1p(row["daily_screen_time_hours"])
    row["notif_x_switch"] = row["notification_load_index"] * row["app_switch_index"] / 100
    row["weekend_x_screen"] = row["weekend_escalation"] * row["daily_screen_time_hours"]
    stress_num = {"Low": 0, "Medium": 1, "High": 2}[row["stress_level"]]
    row["stress_x_screen"] = stress_num * row["daily_screen_time_hours"]

    row["gender_enc"] = GENDER_MAP[row["gender"]]
    row["stress_level_enc"] = STRESS_MAP[row["stress_level"]]
    row["academic_work_impact_enc"] = IMPACT_MAP[row["academic_work_impact"]]

    return pd.Series(row)


def apply_flags(row: pd.Series) -> dict:
    flags = {
        "flag_excessive_screen_time": int(row["daily_screen_time_hours"] > EXCESSIVE_SCREEN_TIME_H),
        "flag_sleep_deprivation": int(row["sleep_hours"] < LOW_SLEEP_H),
        "flag_notification_overload": int(row["notifications_per_day"] > HIGH_NOTIFICATIONS),
        "flag_frequent_app_switching": int(row["app_switch_index"] > HIGH_APP_SWITCH_INDEX),
        "flag_weekend_escalation": int(row["weekend_escalation"] > WEEKEND_ESCALATION_THRESHOLD),
        "flag_high_stress": int(row["stress_level"] == "High"),
    }
    flags["risk_flag_count"] = sum(flags.values())
    if flags["risk_flag_count"] == 0:
        flags["rule_based_risk_level"] = "Healthy"
    elif flags["risk_flag_count"] == 1:
        flags["rule_based_risk_level"] = "Mild Concern"
    elif flags["risk_flag_count"] == 2:
        flags["rule_based_risk_level"] = "Moderate Concern"
    else:
        flags["rule_based_risk_level"] = "High Concern"
    return flags


def load_artifacts():
    return {
        # NOTE: uses the same "portable" (small, exported-to-JS) models as the
        # browser wellness_checker.html tool, so both interfaces give identical
        # results for the same input. The "best" (larger) models are ~1-2pp
        # more accurate on the held-out test set but aren't used here to avoid
        # the CLI and browser tools disagreeing on borderline cases.
        "clf_bin": joblib.load(f"{MODEL_DIR}/addiction_binary_portable.pkl"),
        "clf_risk3": joblib.load(f"{MODEL_DIR}/risk_level_3class_portable.pkl"),
        "kmeans": joblib.load(f"{MODEL_DIR}/kmeans_model.pkl"),
        "scaler": joblib.load(f"{MODEL_DIR}/scaler.pkl"),
        "iso_forest": joblib.load(f"{MODEL_DIR}/isolation_forest.pkl"),
    }


def load_persona_names():
    df = pd.read_csv(f"{REPORT_DIR}/full_user_analysis.csv", usecols=["cluster", "persona"])
    return df.drop_duplicates().set_index("cluster")["persona"].to_dict()


def assess_user(profile: dict) -> dict:
    artifacts = load_artifacts()
    persona_names = load_persona_names()
    features = get_feature_list()

    row = engineer_single_row(profile)
    flags = apply_flags(row)
    row = pd.concat([row, pd.Series(flags)])

    X = pd.DataFrame([row[features]])
    X_cluster = artifacts["scaler"].transform(np.array([row[CLUSTER_FEATURES].values], dtype=float))
    X_iso = np.array([row[ISOLATION_FEATURES].values], dtype=float)

    risk_proba_vec = artifacts["clf_bin"].predict_proba(X)[0]
    risk_proba = float(risk_proba_vec[1])

    risk3_proba_vec = artifacts["clf_risk3"].predict_proba(X)[0]
    level_pred = LEVEL_MAP_INV[int(np.argmax(risk3_proba_vec))]
    level_confidence = float(np.max(risk3_proba_vec))

    cluster_id = int(artifacts["kmeans"].predict(X_cluster)[0])
    persona = persona_names.get(cluster_id, f"Cluster {cluster_id}")
    anomaly_flag = int(artifacts["iso_forest"].predict(X_iso)[0] == -1)

    rec_row = pd.Series({
        **flags,
        "persona": persona,
        "predicted_risk_level": level_pred,
        "anomaly_flag": anomaly_flag,
    })
    recommendations = generate_recommendations(rec_row)

    rule_severity = {"Healthy": 0, "Mild Concern": 1, "Moderate Concern": 2, "High Concern": 3}
    level_severity = {"None": 0, "Mild": 1, "High": 2}
    combined = (rule_severity[flags["rule_based_risk_level"]] + level_severity[level_pred] * 1.5) / 2

    if combined <= 0.5:
        overall_verdict = "Healthy"
    elif combined <= 1.5:
        overall_verdict = "Mostly Healthy - minor adjustments recommended"
    elif combined <= 2.5:
        overall_verdict = "Unhealthy patterns detected - action recommended"
    else:
        overall_verdict = "High risk - prioritize changes now"

    return {
        "inputs": profile,
        "balance_score": round(row["balance_score"], 1),
        "predicted_addiction_risk_probability": round(risk_proba * 100, 1),
        "predicted_risk_level": level_pred,
        "risk_level_confidence": round(level_confidence * 100, 1),
        "risk_level_probabilities": {
            "None": round(float(risk3_proba_vec[0]) * 100, 1),
            "Mild": round(float(risk3_proba_vec[1]) * 100, 1),
            "High": round(float(risk3_proba_vec[2]) * 100, 1),
        },
        "rule_based_risk_level": flags["rule_based_risk_level"],
        "risk_flags_triggered": flags["risk_flag_count"],
        "persona": persona,
        "unusual_pattern_detected": bool(anomaly_flag),
        "overall_verdict": overall_verdict,
        "recommendations": recommendations,
    }


def print_report(result: dict):
    print("\n" + "=" * 60)
    print(" DIGITAL WELLNESS REPORT")
    print("=" * 60)

    verdict = result["overall_verdict"]
    icon = "✅" if verdict == "Healthy" else ("🙂" if "Mostly Healthy" in verdict else "⚠️")

    print(f"\n{icon}  {verdict.upper()}")
    print(f"  Rule-based concern level : {result['rule_based_risk_level']}  ({result['risk_flags_triggered']}/6 flags triggered)")
    print(f"  Predicted risk level     : {result['predicted_risk_level']}  (confidence: {result['risk_level_confidence']}%)")
    print(f"    -> None: {result['risk_level_probabilities']['None']}% | Mild: {result['risk_level_probabilities']['Mild']}% | High: {result['risk_level_probabilities']['High']}%")
    print(f"  Predicted addiction risk probability: {result['predicted_addiction_risk_probability']}%")
    print(f"  Balance score: {result['balance_score']}/100")
    print(f"  Closest behavioral persona: {result['persona']}")
    if result["unusual_pattern_detected"]:
        print("  Note: this usage combination is statistically unusual vs. similar users.")

    print(f"\n  {result['recommendations']['wellness_headline']}")
    print(f"  Persona tip: {result['recommendations']['persona_tip']}")

    print("\n  What to do:")
    tips = result["recommendations"]["specific_recommendations"]
    if not tips:
        print("   - No specific concerns detected - keep up your current habits.")
    else:
        for i, tip in enumerate(tips, 1):
            print(f"   {i}. {tip}")
    print("\n" + "=" * 60 + "\n")


def interactive_prompt():
    print("Answer a few quick questions about your typical day (numbers, in hours unless noted).\n")

    def ask_float(prompt, lo=0, hi=24):
        while True:
            try:
                v = float(input(prompt))
                if lo <= v <= hi:
                    return v
                print(f"  Please enter a number between {lo} and {hi}.")
            except ValueError:
                print("  Please enter a valid number.")

    def ask_int(prompt, lo=0, hi=1000):
        while True:
            try:
                v = int(input(prompt))
                if lo <= v <= hi:
                    return v
                print(f"  Please enter a whole number between {lo} and {hi}.")
            except ValueError:
                print("  Please enter a valid whole number.")

    def ask_choice(prompt, choices):
        choices_display = "/".join(choices)
        while True:
            v = input(f"{prompt} ({choices_display}): ").strip().title()
            if v in choices:
                return v
            print(f"  Please answer one of: {choices_display}")

    profile = {
        "age": ask_int("Your age: ", 10, 90),
        "gender": ask_choice("Gender", ["Male", "Female", "Other"]),
        "sleep_hours": ask_float("Average sleep per night (hours): "),
        "daily_screen_time_hours": ask_float("Average total daily screen time (hours): "),
        "social_media_hours": ask_float("  ...of which, social media (hours): "),
        "gaming_hours": ask_float("  ...of which, gaming (hours): "),
        "work_study_hours": ask_float("  ...of which, work/study (hours): "),
        "weekend_screen_time": ask_float("Typical weekend screen time (hours): "),
        "notifications_per_day": ask_int("Notifications received per day: ", 0, 1000),
        "app_opens_per_day": ask_int("Approx. number of times you open apps per day: ", 0, 1000),
        "stress_level": ask_choice("Typical stress level", ["Low", "Medium", "High"]),
        "academic_work_impact": ask_choice("Has phone use noticeably affected your work/studies?", ["Yes", "No"]),
    }

    result = assess_user(profile)
    print_report(result)
    return result


if __name__ == "__main__":
    interactive_prompt()
