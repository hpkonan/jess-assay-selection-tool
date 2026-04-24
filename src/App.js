import { useMemo, useState } from "react";

type Result = {
  status: "recommended" | "warning" | "info";
  title: string;
  recommendation: string;
  rationale: string;
  practicalTips?: string[];
  reagentNotes?: string[];
};

export default function App() {
  const [copied, setCopied] = useState(false);

  const [showWhy, setShowWhy] = useState(true);
  const [showTips, setShowTips] = useState(true);
  const [showReagents, setShowReagents] = useState(true);

  const resetAnswers = () => {
    setAnswers({
      testedIndividually: "",
      mwRelation: "",
      bothInChemi: "",
      twoDistinctSpecies: "",
      sameSpeciesForBothTargets: "",
      speciesPair: "",
    });

    setCopied(false);
    setShowWhy(true);
    setShowTips(true);
    setShowReagents(true);
  };

  const yesNoOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const mwOptions = [
    { value: "same_close", label: "Same or very close MW" },
    { value: "different", label: "Clearly different MW" },
  ];

  const speciesPairOptions = [
    { value: "rabbit_hrp_mouse_nir", label: "Rabbit-HRP + Mouse-NIR" },
    { value: "mouse_hrp_rabbit_nir", label: "Mouse-HRP + Rabbit-NIR" },
    { value: "other", label: "Other combination / not listed" },
  ];

  const [answers, setAnswers] = useState({
    testedIndividually: "",
    mwRelation: "",
    bothInChemi: "",
    twoDistinctSpecies: "",
    sameSpeciesForBothTargets: "",
    speciesPair: "",
  });

  const setAnswer = (key: string, value: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [key]: value };

      if (key === "testedIndividually") {
        next.mwRelation = "";
        next.bothInChemi = "";
        next.twoDistinctSpecies = "";
        next.sameSpeciesForBothTargets = "";
        next.speciesPair = "";
      }

      if (key === "mwRelation") {
        next.bothInChemi = "";
        next.twoDistinctSpecies = "";
        next.sameSpeciesForBothTargets = "";
        next.speciesPair = "";
      }

      if (key === "bothInChemi") {
        next.twoDistinctSpecies = "";
        next.sameSpeciesForBothTargets = "";
        next.speciesPair = "";
      }

      if (key === "twoDistinctSpecies") {
        next.sameSpeciesForBothTargets = "";
        next.speciesPair = "";
      }

      if (key === "sameSpeciesForBothTargets") {
        next.speciesPair = "";
      }

      return next;
    });
  };

  const result: Result | null = useMemo(() => {
    if (!answers.testedIndividually) return null;

    if (answers.testedIndividually === "no") {
      return {
        status: "info",
        title: "Recommended next step: validate each target individually first",
        recommendation:
          "Run each target individually before attempting multiplexing or RePlex.",
        rationale:
          "Single-target validation helps confirm expected peak position, signal strength, and antibody performance before moving into a multi-target workflow.",
        practicalTips: [
          "Confirm the expected peak for each target.",
          "Assess relative abundance before deciding on multiplexing or RePlex.",
          "Use the validated single-target data to guide the final multiplex setup.",
        ],
      };
    }

    if (!answers.mwRelation) return null;

    if (answers.mwRelation === "same_close") {
      if (!answers.bothInChemi) return null;

      if (answers.bothInChemi === "yes") {
        return {
          status: "recommended",
          title: "Recommended workflow: Run RePlex with two immunoassays",
          recommendation:
            "For targets with the same or very close MW, use RePlex if both targets are to be detected in chemiluminescence.",
          rationale:
            "Closely migrating targets are more difficult to resolve cleanly in multiplex mode when both are detected in chemi.",
          practicalTips: [
            "Ideally put the low abundant target in the first probing cycle and the more abundant target in the second probing cycle.",
          ],
        };
      }

      if (!answers.twoDistinctSpecies) return null;

      if (
  answers.twoDistinctSpecies === "yes" &&
  answers.bothInChemi === "no"
) {
  // On attend que l'utilisateur choisisse la configuration
  if (!answers.speciesPair) return null;

  if (answers.speciesPair === "rabbit_hrp_mouse_nir") {
    return {
      status: "recommended",
      title: "Recommended workflow: Mixed detection (HRP + NIR)",
      recommendation:
        "For Rabbit-HRP + Mouse-NIR, use Goat anti-Rabbit HRP (ProteinSimple #042-206) and Goat anti-Mouse NIR (Novus NBP1-75147C).",
      rationale:
        "This configuration uses orthogonal detection methods (HRP and NIR) to enable multiplexing when both targets are not in chemiluminescence.",
      reagentNotes: [
        "Rabbit HRP + Mouse NIR:",
        "Goat anti-Rabbit HRP (ProteinSimple #042-206)",
        "Goat anti-Mouse NIR (Novus NBP1-75147C)",
      ],
    };
  }

  if (answers.speciesPair === "mouse_hrp_rabbit_nir") {
    return {
      status: "recommended",
      title: "Recommended workflow: Mixed detection (HRP + NIR)",
      recommendation:
        "For Mouse-HRP + Rabbit-NIR, use Goat anti-Mouse HRP (ProteinSimple #042-205) and Goat anti-Rabbit NIR 650 (Novus NBP1-72732C).",
      rationale:
        "This configuration uses orthogonal detection methods (HRP and NIR) to enable multiplexing when both targets are not in chemiluminescence.",
      reagentNotes: [
        "Mouse HRP + Rabbit NIR:",
        "Goat anti-Mouse HRP (ProteinSimple #042-205)",
        "Goat anti-Rabbit NIR 650 (Novus NBP1-72732C)",
      ],
    };
  }

  return {
    status: "warning",
    title: "Recommended next step: contact Technical Support",
    recommendation:
      "For other mixed chemi / fluorescence combinations, contact your Tech Support Representative.",
    rationale:
      "This configuration is not covered by the standard validated reagent pairings.",
  };
}

      return {
        status: "recommended",
        title: "Recommended workflow: Run RePlex with two immunoassays",
        recommendation:
          "If you do not have two distinct antibody species, use RePlex with two immunoassays.",
        rationale:
          "Without distinct antibody species, multiplexing this close-MW setup is less robust.",
        practicalTips: [
          "Ideally put in the first probing cycle the low abundant target or the target detected in fluorescence.",
        ],
      };
    }

    if (answers.mwRelation === "different") {
      if (!answers.bothInChemi) return null;

      if (answers.bothInChemi === "yes") {
        if (!answers.sameSpeciesForBothTargets) return null;

        if (answers.sameSpeciesForBothTargets === "yes") {
          return {
            status: "recommended",
            title: "Recommended workflow: Multiplex with mixed primaries",
            recommendation:
              "Mix up primary antibodies for each target and add the secondary antibody.",
            rationale:
              "For clearly different MW targets detected in chemi, your decision tree supports a straightforward multiplex path when the same species workflow is used for both targets.",
          };
        }

        return {
          status: "recommended",
          title:
            "Recommended workflow: Multiplex with Rabbit HRP + Mouse HRP setup",
          recommendation:
            "If multiplexing Rabbit HRP + Mouse HRP, use the 20X anti-rabbit conjugate (#043-426) and the ready-to-use anti-mouse HRP.",
          rationale:
            "For clearly different MW targets in chemi, your tree routes mixed-species setups to this conjugate-based multiplex recommendation.",
          reagentNotes: [
            "20X anti-rabbit conjugate: #043-426",
            "Ready-to-use anti-mouse HRP",
            "If other species are used (for example multiplex goat + mouse), contact your Tech Support Representative.",
          ],
        };
      }

      if (!answers.speciesPair) return null;

      if (answers.speciesPair === "rabbit_hrp_mouse_nir") {
        return {
          status: "recommended",
          title:
            "Recommended workflow: Mixed chemi / fluorescence configuration",
          recommendation:
            "For Rabbit-HRP + Mouse-NIR, use Goat anti-Rabbit HRP (ProteinSimple #042-206) and Goat anti-Mouse NIR (Novus NBP1-75147C).",
          rationale:
            "This is the reagent pairing specified in your decision tree for this configuration.",
          reagentNotes: [
            "Goat anti-Rabbit HRP: ProteinSimple #042-206",
            "Goat anti-Mouse NIR: Novus NBP1-75147C",
          ],
        };
      }

      if (answers.speciesPair === "mouse_hrp_rabbit_nir") {
        return {
          status: "recommended",
          title:
            "Recommended workflow: Mixed chemi / fluorescence configuration",
          recommendation:
            "For Mouse-HRP + Rabbit-NIR, use Goat anti-Mouse HRP (ProteinSimple #042-205) and Goat anti-Rabbit NIR 650 (Novus NBP1-72732C).",
          rationale:
            "This is the reagent pairing specified in your decision tree for this configuration.",
          reagentNotes: [
            "Goat anti-Mouse HRP: ProteinSimple #042-205",
            "Goat anti-Rabbit NIR 650: Novus NBP1-72732C",
          ],
        };
      }

      return {
        status: "warning",
        title: "Recommended next step: contact Technical Support",
        recommendation:
          "For other combinations, contact your Tech Support Representative.",
        rationale:
          "Your decision tree explicitly routes other mixed chemi / fluorescence combinations to Tech Support.",
      };
    }

    return null;
  }, [answers]);
const fullRecommendation = result
  ? "Recommendation:\n" +
    result.title +
    "\n\n" +
    result.recommendation +
    "\n\nWhy this path?\n" +
    result.rationale +
    (
      result.practicalTips && result.practicalTips.length > 0
        ? "\n\nPractical tips:\n" + result.practicalTips.join("\n")
        : ""
    ) +
    (
      result.reagentNotes && result.reagentNotes.length > 0
        ? "\n\nReagent notes:\n" + result.reagentNotes.join("\n")
        : ""
    )
  : "";
  const showMW = answers.testedIndividually === "yes";
  const showBothInChemi = showMW && answers.mwRelation !== "";
  const showSameSpeciesForDifferentMW =
    answers.mwRelation === "different" && answers.bothInChemi === "yes";
  const showDistinctSpeciesForSameMW =
    answers.mwRelation === "same_close" && answers.bothInChemi === "no";
  const showSpeciesPairForDifferentMW =
    answers.mwRelation === "different" && answers.bothInChemi === "no";
  const totalSteps = 4;

let currentStep = 1;

if (answers.testedIndividually === "yes") {
  currentStep = 2;
}

if (answers.mwRelation !== "") {
  currentStep = 3;
}

if (answers.bothInChemi !== "") {
  currentStep = 4;
}

const progressPercent = (currentStep / totalSteps) * 100;

  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    background: "#f3f6fb",
    fontFamily: "Arial, sans-serif",
    color: "#1f2937",
    padding: "24px",
  };

  const layoutStyle: React.CSSProperties = {
    maxWidth: "1180px",
    margin: "0 auto",
  };

  const badgeStyle: React.CSSProperties = {
    display: "inline-block",
    background: "#dbeafe",
    color: "#1d4ed8",
    borderRadius: "999px",
    padding: "6px 12px",
    fontSize: "12px",
    fontWeight: 700,
    marginBottom: "12px",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "24px",
    alignItems: "start",
  };

  const cardStyle: React.CSSProperties = {
    background: "white",
    border: "1px solid #dbe3ef",
    borderRadius: "16px",
    padding: "18px",
    boxShadow: "0 2px 10px rgba(15,23,42,0.05)",
    marginBottom: "16px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "14px",
    fontWeight: 700,
    marginBottom: "8px",
  };

  const helperStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#64748b",
    marginBottom: "10px",
    lineHeight: 1.45,
  };

  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    background: "white",
  };

  const renderOptions = (items: { value: string; label: string }[]) =>
    items.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ));
const resultAccent =
  result?.status === "warning"
    ? {
        badgeBg: "#fef3c7",
        badgeColor: "#92400e",
        cardBorder: "1px solid #f59e0b",
        cardShadow: "0 6px 18px rgba(245, 158, 11, 0.18)",
      }
    : result?.status === "info"
    ? {
        badgeBg: "#dbeafe",
        badgeColor: "#1d4ed8",
        cardBorder: "1px solid #60a5fa",
        cardShadow: "0 6px 18px rgba(37, 99, 235, 0.14)",
      }
    : {
        badgeBg: "#dcfce7",
        badgeColor: "#166534",
        cardBorder: "1px solid #86efac",
        cardShadow: "0 6px 18px rgba(34, 197, 94, 0.14)",
      };
  return (
    <div style={pageStyle}>
      <div
        style={{
          position: "fixed",
          right: "16px",
          bottom: "16px",
          width: "300px",
          background: "rgba(255,255,255,0.96)",
          border: "1px solid #dbe3ef",
          borderRadius: "14px",
          padding: "12px 14px",
          boxShadow: "0 4px 18px rgba(15,23,42,0.08)",
          fontSize: "12px",
          lineHeight: 1.45,
          color: "#475569",
          zIndex: 20,
        }}
      >
        <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
          Dr. Henri-Philippe Konan
        </div>
        <div style={{ marginBottom: "4px" }}>
          Personal side project for educational and workflow-guidance purposes.
          Not official vendor software.
        </div>
        <div>
          <a
            href="mailto:henri-philippe.konan@bio-techne.com"
            style={{ color: "#1d4ed8", textDecoration: "none" }}
          >
            henri-philippe.konan@bio-techne.com
          </a>
        </div>
      </div>
      <div style={layoutStyle}>
        <div style={badgeStyle}>Jess Multiplex Assistant V2</div>
        <h1 style={{ fontSize: "36px", margin: "0 0 10px 0" }}>
          Multi-target assay selection tool
        </h1>
            <div style={{ marginBottom: "18px" }}>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "6px",
      fontSize: "13px",
      color: "#475569",
      fontWeight: 600,
    }}
  >
    <span>Progress</span>
    <span>Step {currentStep} / {totalSteps}</span>
  </div>

  <div
    style={{
      width: "100%",
      height: "10px",
      background: "#e2e8f0",
      borderRadius: "999px",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: `${progressPercent}%`,
        height: "100%",
        background: "#2563eb",
        borderRadius: "999px",
        transition: "width 0.3s ease",
      }}
    />
  </div>
</div>
        <p
          style={{ color: "#475569", maxWidth: "920px", marginBottom: "24px" }}
        >
          This version uses a refined decision flow based on prior single-target
          validation, molecular weight relationship, chemiluminescence
          preference, antibody species compatibility, RePlex best practices, and
          recommended reagent combinations.
        </p>

        <div style={gridStyle}>
          <div>
            <div style={{ marginBottom: "12px", color: "#475569", fontSize: "14px" }}>
  Follow the guided workflow below. New questions appear based on your previous answers.
</div>
            <div style={cardStyle}>
              <label style={labelStyle}>
                1. Have you run each target individually?
              </label>
              <div style={helperStyle}>
                Single-target validation is recommended before multiplexing so
                you can confirm expected peak position, signal strength, and
                antibody performance.
              </div>
              <select
                style={selectStyle}
                value={answers.testedIndividually}
                onChange={(e) =>
                  setAnswer("testedIndividually", e.target.value)
                }
              >
                <option value="">Select an option</option>
                {renderOptions(yesNoOptions)}
              </select>
            </div>

            {showMW && (
              <div style={cardStyle}>
                <label style={labelStyle}>
                  2. What is the MW relationship between the two targets?
                </label>
                <select
                  style={selectStyle}
                  value={answers.mwRelation}
                  onChange={(e) => setAnswer("mwRelation", e.target.value)}
                >
                  <option value="">Select an option</option>
                  {renderOptions(mwOptions)}
                </select>
              </div>
            )}

            {showBothInChemi && (
              <div style={cardStyle}>
                <label style={labelStyle}>
                  3. Do you want both targets in chemiluminescence?
                </label>
                <select
                  style={selectStyle}
                  value={answers.bothInChemi}
                  onChange={(e) => setAnswer("bothInChemi", e.target.value)}
                >
                  <option value="">Select an option</option>
                  {renderOptions(yesNoOptions)}
                </select>
              </div>
            )}

            {showDistinctSpeciesForSameMW && (
              <div style={cardStyle}>
                <label style={labelStyle}>
                  4. Do you have two distinct antibody species?
                </label>
                <div style={helperStyle}>
                  Example: one rabbit primary and one mouse primary.
                </div>
                <select
                  style={selectStyle}
                  value={answers.twoDistinctSpecies}
                  onChange={(e) =>
                    setAnswer("twoDistinctSpecies", e.target.value)
                  }
                >
                  <option value="">Select an option</option>
                  {renderOptions(yesNoOptions)}
                </select>
              </div>
            )}

            {showSameSpeciesForDifferentMW && (
              <div style={cardStyle}>
                <label style={labelStyle}>
                  4. Same species for both targets?
                </label>
                <select
                  style={selectStyle}
                  value={answers.sameSpeciesForBothTargets}
                  onChange={(e) =>
                    setAnswer("sameSpeciesForBothTargets", e.target.value)
                  }
                >
                  <option value="">Select an option</option>
                  {renderOptions(yesNoOptions)}
                </select>
              </div>
            )}

            {showSpeciesPairForDifferentMW && (
              <div style={cardStyle}>
                <label style={labelStyle}>
                  4. Which mixed chemi / fluorescence setup matches your assay?
                </label>
                <div style={helperStyle}>
                  Choose the option that best fits your intended detection
                  setup.
                </div>
                <select
                  style={selectStyle}
                  value={answers.speciesPair}
                  onChange={(e) => setAnswer("speciesPair", e.target.value)}
                >
                  <option value="">Select an option</option>
                  {renderOptions(speciesPairOptions)}
                </select>
              </div>
            )}
          </div>

          <div>
            <div
  style={{
    ...cardStyle,
    border: result ? resultAccent.cardBorder : cardStyle.border,
    boxShadow: result ? resultAccent.cardShadow : cardStyle.boxShadow,
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "12px",
      marginBottom: "10px",
    }}
  >
    <h2 style={{ marginTop: 0, marginBottom: 0 }}>Recommendation</h2>

    <button
      onClick={resetAnswers}
      style={{
        padding: "8px 12px",
        borderRadius: "10px",
        border: "1px solid #cbd5e1",
        background: "white",
        color: "#334155",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: 600,
      }}
    >
      Reset answers
    </button>
  </div>
              
              {!result ? (
                <p style={{ color: "#64748b" }}>
                  Complete the questions on the left to see the suggested
                  workflow.
                </p>
              ) : (
                <>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background:
                        result.status === "warning"
                          ? "#fef3c7"
                          : result.status === "info"
                          ? "#e0e7ff"
                          : "#dcfce7",
                      color:
                        result.status === "warning"
                          ? "#92400e"
                          : result.status === "info"
                          ? "#3730a3"
                          : "#166534",
                      fontSize: "12px",
                      fontWeight: 700,
                      marginBottom: "12px",
                    }}
                  >
                    {result.status === "warning"
                      ? "Review needed"
                      : result.status === "info"
                      ? "Next step"
                      : "Suggested"}
                  </div>
                  <h3>{result.title}</h3>
                  <p>{result.recommendation}</p>

                  <div
  style={{
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "12px",
    marginTop: "12px",
  }}
>
  <button
    onClick={() => setShowWhy(!showWhy)}
    style={{
      width: "100%",
      background: "transparent",
      border: "none",
      padding: 0,
      cursor: "pointer",
      textAlign: "left",
    }}
  >
    <div
      style={{
        fontSize: "12px",
        fontWeight: 700,
        textTransform: "uppercase",
        color: "#64748b",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>Why this path?</span>
      <span>{showWhy ? "−" : "+"}</span>
    </div>
  </button>

  {showWhy && <div style={{ marginTop: "8px" }}>{result.rationale}</div>}
</div>

                  {result.practicalTips && result.practicalTips.length > 0 && (
  <div style={{ marginTop: "14px" }}>
    <button
      onClick={() => setShowTips(!showTips)}
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          color: "#64748b",
          marginBottom: "6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Practical tips</span>
        <span>{showTips ? "−" : "+"}</span>
      </div>
    </button>

    {showTips && (
      <ul
        style={{
          margin: 0,
          paddingLeft: "18px",
          color: "#334155",
          lineHeight: 1.5,
        }}
      >
    {result.practicalTips.map((tip, idx) => (
      <li key={idx}>{tip}</li>
    ))}
  </ul>
)}
</div>
)}

                  {result.reagentNotes && result.reagentNotes.length > 0 && (
  <div style={{ marginTop: "14px" }}>
    <button
      onClick={() => setShowReagents(!showReagents)}
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          color: "#64748b",
          marginBottom: "6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Reagent notes</span>
        <span>{showReagents ? "−" : "+"}</span>
      </div>
    </button>

    {showReagents && (
      <ul style={{ margin: 0, paddingLeft: "18px", color: "#334155", lineHeight: 1.5 }}>
        {result.reagentNotes.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    )}
  </div>
)}
                      
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(fullRecommendation);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
  }}
                  style={{
                    marginTop: "14px",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#2563eb",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 600,
  }}
>
                  {copied ? "Copied!" : "Copy recommendation"}
                </button>
                </>
              )}
            </div>

            <div style={cardStyle}>
              <h2 style={{ marginTop: 0 }}>Important note</h2>
              <p style={{ color: "#64748b", marginBottom: "12px" }}>
                As a general guideline, when multiplexing two targets with significantly different signal intensities, consider using RePlex mode (stripping and reprobing), or assigning the more abundant target to fluorescence and the less abundant target to chemiluminescence.
              </p>
              <p style={{ color: "#64748b", marginBottom: 0 }}>
                Final assay selection should also consider target abundance,
                true peak separation, antibody validation status, detection
                chemistry, and any internal support guidance available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
