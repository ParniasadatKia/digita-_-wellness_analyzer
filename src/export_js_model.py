"""
Digital Wellness Analyzer v2 - Export Trained Models to JavaScript
------------------------------------------------------------------------
Converts the small, GridSearchCV-tuned RandomForest models (<=25 trees)
into plain JavaScript functions, so the browser tool runs the EXACT same
trained model client-side - not a rule-based approximation of it.

Each tree becomes a nested if/else function returning class probabilities;
the forest averages all trees' outputs, exactly matching
sklearn's RandomForestClassifier.predict_proba.
"""

import json
import joblib
import numpy as np

MODEL_DIR = "outputs/models"
OUT_JS_PATH = "outputs/reports/exported_models.js"


def tree_to_js(tree, feature_names, func_name):
    """Recursively converts a single sklearn DecisionTreeClassifier's
    tree_ structure into a JS function body."""
    t = tree.tree_
    lines = [f"function {func_name}(f) {{"]

    def recurse(node, depth):
        indent = "  " * (depth + 1)
        if t.feature[node] != -2:  # not a leaf
            feat = feature_names[t.feature[node]]
            thresh = t.threshold[node]
            lines.append(f"{indent}if (f['{feat}'] <= {thresh:.6f}) {{")
            recurse(t.children_left[node], depth + 1)
            lines.append(f"{indent}}} else {{")
            recurse(t.children_right[node], depth + 1)
            lines.append(f"{indent}}}")
        else:
            values = t.value[node][0]
            probs = (values / values.sum()).tolist()
            lines.append(f"{indent}return {json.dumps(probs)};")

    recurse(0, 0)
    lines.append("}")
    return "\n".join(lines)


def forest_to_js(rf_model, feature_names, model_key):
    """Converts a full RandomForestClassifier into JS: one function per
    tree plus an averaging function that mirrors predict_proba exactly."""
    n_classes = rf_model.n_classes_
    tree_funcs = []
    tree_names = []
    for i, estimator in enumerate(rf_model.estimators_):
        fname = f"{model_key}_tree_{i}"
        tree_names.append(fname)
        tree_funcs.append(tree_to_js(estimator, feature_names, fname))

    predict_fn = f"""
function {model_key}_predict_proba(f) {{
  const treeFns = [{', '.join(tree_names)}];
  const nClasses = {n_classes};
  const sums = new Array(nClasses).fill(0);
  for (const fn of treeFns) {{
    const p = fn(f);
    for (let c = 0; c < nClasses; c++) sums[c] += p[c];
  }}
  return sums.map(s => s / treeFns.length);
}}
"""
    return "\n\n".join(tree_funcs) + "\n" + predict_fn


def main():
    addiction_bin = joblib.load(f"{MODEL_DIR}/addiction_binary_portable.pkl")
    risk3 = joblib.load(f"{MODEL_DIR}/risk_level_3class_portable.pkl")

    # Must exactly match the feature list/order used at training time
    from model_training import get_feature_list
    feature_names = get_feature_list()

    js_parts = [
        "// AUTO-GENERATED from trained scikit-learn RandomForest models.",
        "// Each *_tree_N function is one decision tree, transpiled exactly",
        "// (same thresholds/splits/leaf probabilities as the fitted Python model).",
        "// The *_predict_proba function averages all trees, matching",
        "// sklearn's RandomForestClassifier.predict_proba precisely.",
        "",
        forest_to_js(addiction_bin, feature_names, "addictionRisk"),
        "",
        forest_to_js(risk3, feature_names, "riskLevel3"),
        "",
        f"const MODEL_FEATURE_ORDER = {json.dumps(feature_names)};",
        "const RISK3_CLASS_NAMES = ['None', 'Mild', 'High'];",
    ]

    js_code = "\n".join(js_parts)
    with open(OUT_JS_PATH, "w") as f:
        f.write(js_code)

    print(f"Exported JS models to {OUT_JS_PATH} ({len(js_code)/1024:.1f} KB)")
    print(f"  addictionRisk: {len(addiction_bin.estimators_)} trees")
    print(f"  riskLevel3: {len(risk3.estimators_)} trees")


if __name__ == "__main__":
    main()
