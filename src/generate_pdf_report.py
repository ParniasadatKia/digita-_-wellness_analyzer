"""
Digital Wellness Analyzer v2 - PDF Analysis Report
------------------------------------------------------
Builds a proper PDF report of the dataset-wide analysis: key metrics,
model performance, personas, and behavior flags, with the same charts
used in the HTML dashboard. This is the "give me a PDF I can send/print"
version of the analysis, separate from the interactive dashboard.

Run after pipeline.py (needs outputs/reports/metrics_summary.json and
outputs/figures/*.png to already exist).
"""

import json
from datetime import date
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak, HRFlowable
)

REPORT_DIR = "outputs/reports"
FIG_DIR = "outputs/figures"
OUT_PATH = f"{REPORT_DIR}/analysis_report.pdf"

INK = colors.HexColor("#1C2541")
DAWN = colors.HexColor("#B87A13")
SAGE = colors.HexColor("#4E7C6B")
SLATE = colors.HexColor("#495468")


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle("ReportTitle", parent=styles["Title"], fontSize=24, textColor=INK, spaceAfter=6))
    styles.add(ParagraphStyle("ReportSubtitle", parent=styles["Normal"], fontSize=11, textColor=SLATE, spaceAfter=20))
    styles.add(ParagraphStyle("SectionHeading", parent=styles["Heading2"], fontSize=15, textColor=INK, spaceBefore=18, spaceAfter=8))
    styles.add(ParagraphStyle("Body", parent=styles["Normal"], fontSize=10.5, textColor=SLATE, leading=15))
    styles.add(ParagraphStyle("Caption", parent=styles["Normal"], fontSize=8.5, textColor=SLATE, spaceAfter=14))
    return styles


def stat_table(rows, styles):
    """Small 2-column key/value table used for headline metrics."""
    data = [[Paragraph(f"<b>{k}</b>", styles["Body"]), Paragraph(v, styles["Body"])] for k, v in rows]
    t = Table(data, colWidths=[2.6 * inch, 3.6 * inch])
    t.setStyle(TableStyle([
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("LINEBELOW", (0, 0), (-1, -1), 0.5, colors.HexColor("#E7E4DC")),
    ]))
    return t


def main():
    styles = build_styles()
    metrics = json.load(open(f"{REPORT_DIR}/metrics_summary.json"))

    doc = SimpleDocTemplate(
        OUT_PATH, pagesize=letter,
        topMargin=0.7 * inch, bottomMargin=0.7 * inch, leftMargin=0.75 * inch, rightMargin=0.75 * inch
    )
    story = []

    # --- Cover / summary ---
    story.append(Paragraph("Digital Wellness Analyzer", styles["ReportTitle"]))
    story.append(Paragraph(
        f"Analysis report - {date.today().strftime('%B %d, %Y')} - "
        f"{metrics['anomaly_detection']['total_users']:,} users analyzed",
        styles["ReportSubtitle"]
    ))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#E7E4DC")))

    story.append(Paragraph("Summary", styles["SectionHeading"]))
    m_bin = metrics["addiction_binary_classifier"]
    m_risk3 = metrics["risk_level_3class_classifier"]
    story.append(stat_table([
        ("Users analyzed", f"{metrics['anomaly_detection']['total_users']:,}"),
        ("Addiction risk model accuracy", f"{m_bin['accuracy']*100:.1f}% ({metrics['model_selection']['addiction_binary']})"),
        ("Risk level model accuracy", f"{m_risk3['accuracy']*100:.1f}% ({metrics['model_selection']['risk_level_3class']})"),
        ("Anomalous usage patterns", f"{metrics['anomaly_detection']['anomaly_rate']*100:.1f}% of users"),
        ("Behavioral personas", f"{metrics['clustering']['n_clusters']}"),
    ], styles))

    story.append(Paragraph(
        "This report covers unhealthy-behavior detection, GridSearchCV-tuned prediction models, "
        "K-Means persona segmentation, and the resulting personalized recommendations. "
        "The risk-level model predicts three classes (None / Mild / High); Moderate and Severe were "
        "merged into 'High' after an effect-size check showed they are not statistically distinguishable "
        "in this dataset (see Methodology Notes at the end of this report).",
        styles["Body"]
    ))

    # --- Model performance ---
    story.append(Paragraph("Model Performance", styles["SectionHeading"]))
    story.append(Paragraph(
        "Two prediction tasks were each tuned with 5-fold cross-validated GridSearchCV across "
        "Logistic Regression, Random Forest, and HistGradientBoosting; the best model by weighted F1 "
        "was selected automatically for each.", styles["Body"]
    ))
    story.append(Spacer(1, 8))
    story.append(Image(f"{FIG_DIR}/v1_vs_v2_accuracy.png", width=5.8 * inch, height=3.6 * inch))
    story.append(Paragraph("Figure 1. Model accuracy before and after the v2 rebuild.", styles["Caption"]))

    story.append(Image(f"{FIG_DIR}/risk_level_confusion_matrix.png", width=4.2 * inch, height=3.7 * inch))
    story.append(Paragraph("Figure 2. Risk-level model confusion matrix (normalized, held-out test set).", styles["Caption"]))

    story.append(PageBreak())

    # --- Usage patterns ---
    story.append(Paragraph("Usage Patterns", styles["SectionHeading"]))
    story.append(Image(f"{FIG_DIR}/screentime_by_risk_level.png", width=5.8 * inch, height=3.6 * inch))
    story.append(Paragraph("Figure 3. Daily screen time by predicted risk level.", styles["Caption"]))
    story.append(Image(f"{FIG_DIR}/sleep_vs_screentime.png", width=5.8 * inch, height=3.6 * inch))
    story.append(Paragraph("Figure 4. Sleep hours vs. daily screen time, colored by risk level.", styles["Caption"]))

    # --- Behavior flags ---
    story.append(Paragraph("Unhealthy Behavior Flags", styles["SectionHeading"]))
    story.append(Image(f"{FIG_DIR}/flag_frequency.png", width=5.8 * inch, height=3.6 * inch))
    story.append(Paragraph("Figure 5. How many users triggered each rule-based behavior flag.", styles["Caption"]))

    story.append(PageBreak())

    # --- Personas ---
    story.append(Paragraph("Behavioral Personas", styles["SectionHeading"]))
    story.append(Image(f"{FIG_DIR}/persona_distribution.png", width=5.8 * inch, height=3.6 * inch))
    story.append(Paragraph("Figure 6. User distribution across the five K-Means personas.", styles["Caption"]))

    persona_rows = [(name, f"{count:,} users") for name, count in
                     sorted(metrics["clustering"]["persona_counts"].items(), key=lambda x: -x[1])]
    story.append(stat_table(persona_rows, styles))

    # --- Methodology notes ---
    story.append(Paragraph("Methodology Notes", styles["SectionHeading"]))
    story.append(Paragraph(
        "<b>Why Moderate and Severe were merged:</b> a Cohen's d effect-size check found every feature "
        "in the dataset differs by less than 0.16 standard deviations between users labeled 'Moderate' "
        "and users labeled 'Severe' - i.e. the two groups are not distinguishable from the available "
        "data. A 4-class model trained on the original labels scored only ~49% accuracy; merging the "
        "two into a single 'High' class raised held-out test accuracy to over 83%.",
        styles["Body"]
    ))
    story.append(Spacer(1, 6))
    story.append(Paragraph(
        "<b>What this data does not support:</b> the dataset is a single snapshot per user (no "
        "timestamps), so predictions describe a user's current behavioral profile rather than "
        "forecasting how a specific returning user's usage will change over time.",
        styles["Body"]
    ))

    doc.build(story)
    print(f"PDF report written to {OUT_PATH}")


if __name__ == "__main__":
    main()
