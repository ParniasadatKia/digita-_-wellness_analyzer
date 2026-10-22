"""
Digital Wellness Analyzer - User Segmentation & Personalization
--------------------------------------------------------------------
Uses K-Means to group users into behavioral personas. Personas are the
backbone of personalization: recommendations are tailored per-persona,
and (see recommendation_engine.py) further adjusted per-individual using
that user's own flags/predictions. As more historical data accumulates
for a returning user, they can be re-scored and re-clustered, which is
how the system "adapts over time" without needing a live feedback loop
in this offline dataset.
"""

import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

CLUSTER_FEATURES = [
    "daily_screen_time_hours", "social_media_share", "gaming_share",
    "work_study_share", "sleep_hours", "app_switch_index",
    "notification_load_index", "weekend_escalation", "balance_score"
]


def cluster_users(df: pd.DataFrame, n_clusters: int = 5, random_state: int = 42):
    df = df.copy()
    X = df[CLUSTER_FEATURES].values
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    kmeans = KMeans(n_clusters=n_clusters, random_state=random_state, n_init=10)
    df["cluster"] = kmeans.fit_predict(X_scaled)

    return df, kmeans, scaler


def label_personas(df: pd.DataFrame) -> pd.DataFrame:
    """
    Assigns a human-readable, mutually-exclusive persona name to each
    cluster. Rather than independent per-cluster thresholds (which can
    assign the same label to multiple clusters), this scores every
    (cluster, persona) pair on how strongly the cluster exhibits that
    persona's defining trait (z-scored across clusters), then greedily
    assigns the best-fitting unique persona to each cluster.
    """
    df = df.copy()
    profile = df.groupby("cluster")[CLUSTER_FEATURES].mean()

    # z-score each behavioral trait across clusters so traits are comparable
    z = (profile - profile.mean()) / profile.std(ddof=0).replace(0, 1)

    candidate_personas = {
        "Balanced User": z["balance_score"],
        "Night Owl / Sleep-Deprived": (-z["sleep_hours"] + z["daily_screen_time_hours"]) / 2,
        "Gaming-Heavy User": z["gaming_share"],
        "Social Media Heavy User": z["social_media_share"],
        "Fragmented Attention User": (z["app_switch_index"] + z["notification_load_index"]) / 2,
    }
    score_matrix = pd.DataFrame(candidate_personas)  # index=cluster, columns=persona

    # Greedy unique assignment: repeatedly pick the single best remaining
    # (cluster, persona) match until every cluster (or persona, whichever
    # is smaller) has been assigned.
    final_names = {}
    remaining_clusters = list(score_matrix.index)
    remaining_personas = list(score_matrix.columns)

    while remaining_clusters and remaining_personas:
        sub = score_matrix.loc[remaining_clusters, remaining_personas]
        stacked = sub.stack()
        cluster_id, persona = stacked.idxmax()
        final_names[cluster_id] = persona
        remaining_clusters.remove(cluster_id)
        remaining_personas.remove(persona)

    # Any leftover clusters (more clusters than persona archetypes) fall
    # back to a generic mixed-usage label with a cluster id for uniqueness.
    for cid in remaining_clusters:
        final_names[cid] = f"Mixed Usage (Cluster {cid})"

    df["persona"] = df["cluster"].map(final_names)
    return df, profile, final_names


def run_clustering(df: pd.DataFrame, n_clusters: int = 5):
    df, kmeans, scaler = cluster_users(df, n_clusters=n_clusters)
    df, profile, persona_names = label_personas(df)
    return df, kmeans, scaler, profile, persona_names


if __name__ == "__main__":
    from data_preprocessing import build_dataset
    from behavior_detection import run_behavior_detection

    data = build_dataset()
    data, _ = run_behavior_detection(data)
    data, kmeans, scaler, profile, names = run_clustering(data)

    print(data["persona"].value_counts())
    print(profile.round(2))
