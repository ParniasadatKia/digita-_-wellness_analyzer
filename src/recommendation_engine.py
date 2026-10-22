"""
Digital Wellness Analyzer v2 - Personalized Wellness Recommendation Engine
--------------------------------------------------------------------------
Same design as v1, updated for the 3-class risk target (None / Mild / High)
used throughout v2, since Moderate/Severe were merged (see README).
"""

import pandas as pd

RULE_SUGGESTIONS = {
    "flag_excessive_screen_time": (
        "Set a daily screen-time budget (e.g. via built-in Screen Time/Digital "
        "Wellbeing tools) and enable an end-of-day usage alert."
    ),
    "flag_sleep_deprivation": (
        "Turn on a device 'wind-down' mode 30-60 minutes before bed and keep "
        "the phone outside the bedroom to protect sleep."
    ),
    "flag_notification_overload": (
        "Audit notification settings and mute non-essential apps; batch "
        "notifications into 2-3 scheduled check-in times per day."
    ),
    "flag_frequent_app_switching": (
        "Try single-tasking with a focus/Pomodoro timer (25 min work / 5 min "
        "break) to reduce app-switching and rebuild sustained attention."
    ),
    "flag_weekend_escalation": (
        "Plan at least one offline or outdoor weekend activity to prevent "
        "usage spikes when there's less structure to the day."
    ),
    "flag_high_stress": (
        "Add a short daily mindfulness or breathing exercise (5-10 min); "
        "high stress combined with heavy device use often reinforces itself."
    ),
}

PERSONA_SUGGESTIONS = {
    "Balanced User": "Keep up your current habits - your usage is well distributed across work, rest, and downtime.",
    "Night Owl / Sleep-Deprived": "Prioritize sleep hygiene: set a fixed 'phone-off' time and use grayscale/night mode after dark.",
    "Gaming-Heavy User": "Schedule gaming into fixed time blocks and pair it with a hard stop reminder to protect study/work time.",
    "Social Media Heavy User": "Use app-specific time limits on social platforms and try replacing one daily scroll session with a non-screen activity.",
    "Fragmented Attention User": "Reduce notification volume and batch-check messages; frequent app switching is fragmenting your focus.",
    "Moderate / Mixed Usage": "Usage is fairly balanced but keep an eye on the specific flags below to stay ahead of any drift.",
}

LEVEL_HEADLINE = {
    "None": "No signs of problematic usage detected.",
    "Mild": "Early signs of unhealthy usage patterns - small adjustments now can prevent escalation.",
    "High": "Clear unhealthy usage patterns detected - structured changes are recommended.",
}

# Real, named tools that help with the specific problems our flags detect.
# Each entry is tied to the flag(s) it's most relevant for, so we only
# suggest an app when it actually addresses something this person is
# struggling with - not a generic "here are some apps" dump.
FOCUS_APP_SUGGESTIONS = {
    "flag_frequent_app_switching": [
        {"name": "Forest", "why": "Plants a virtual tree that dies if you leave the app - a light, visual way to resist switching away mid-task.", "platforms": "iOS, Android"},
        {"name": "One Sec", "why": "Adds a short breathing pause before opening distracting apps, which is often enough to break the automatic-switching habit.", "platforms": "iOS, Android"},
    ],
    "flag_excessive_screen_time": [
        {"name": "Opal", "why": "Schedules app blocks and gives a daily screen-time score, aimed specifically at cutting total usage.", "platforms": "iOS, Android"},
        {"name": "Freedom", "why": "Blocks distracting apps and sites across phone, tablet, and computer at the same time, for a set block of hours.", "platforms": "iOS, Android, macOS, Windows"},
    ],
    "flag_notification_overload": [
        {"name": "Built-in Focus Mode", "why": "iOS Focus / Android Digital Wellbeing can silence non-essential notifications on a schedule - no extra app needed, just needs to be turned on.", "platforms": "iOS, Android (built-in)"},
    ],
    "flag_weekend_escalation": [
        {"name": "Freedom (scheduled blocks)", "why": "Same tool as above - schedule a recurring weekend block instead of relying on willpower in the moment.", "platforms": "iOS, Android, macOS, Windows"},
    ],
}




def generate_recommendations(row: pd.Series) -> dict:
    triggered_flags = [c for c in RULE_SUGGESTIONS if row.get(c, 0) == 1]

    persona_tip = PERSONA_SUGGESTIONS.get(row.get("persona", ""), "")
    level = row.get("predicted_risk_level", row.get("risk_level_3class", "None"))
    headline = LEVEL_HEADLINE.get(level, "")

    priority_order = [
        "flag_sleep_deprivation", "flag_excessive_screen_time",
        "flag_notification_overload", "flag_frequent_app_switching",
        "flag_weekend_escalation", "flag_high_stress"
    ]
    ordered_tips = [RULE_SUGGESTIONS[f] for f in priority_order if f in triggered_flags]

    if row.get("anomaly_flag", 0) == 1:
        ordered_tips.append(
            "Your overall usage pattern is unusual compared to similar users - "
            "worth reviewing which single habit (late nights, notifications, or "
            "session length) is driving it."
        )

    # Only suggest a focus app when a relevant flag actually fired, and
    # de-duplicate (some apps are relevant to more than one flag).
    seen_apps = set()
    app_suggestions = []
    for f in priority_order:
        if f in triggered_flags:
            for app in FOCUS_APP_SUGGESTIONS.get(f, []):
                if app["name"] not in seen_apps:
                    seen_apps.add(app["name"])
                    app_suggestions.append(app)

    return {
        "wellness_headline": headline,
        "persona_tip": persona_tip,
        "specific_recommendations": ordered_tips,
        "focus_apps": app_suggestions,
        "num_flags_triggered": len(triggered_flags),
    }


def build_recommendation_table(df: pd.DataFrame) -> pd.DataFrame:
    recs = df.apply(generate_recommendations, axis=1, result_type="expand")
    out = pd.concat([df[["user_id", "persona", "predicted_risk_level",
                          "predicted_risk_probability", "risk_flag_count",
                          "anomaly_flag"]], recs], axis=1)
    out["specific_recommendations"] = out["specific_recommendations"].apply(
        lambda lst: " | ".join(lst) if isinstance(lst, list) else lst
    )
    out["focus_apps"] = out["focus_apps"].apply(
        lambda lst: " | ".join(a["name"] for a in lst) if isinstance(lst, list) else lst
    )
    return out
