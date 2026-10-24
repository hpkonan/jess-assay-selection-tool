# Outcome Catalogue

| Document ID | FR-DOC-03 | Version | 0.1 | Status | Draft — content review pending | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

For each outcome: the **V2 content as deployed** and, where needed, a **proposed v2.1 wording** (end-user language, consistent across branches). Proposed wordings are subject to SME approval.

Status → badge: `info` → "Next step" · `recommended` → "Suggested" · `warning` → "Review needed".

---

## O1 — Validate each target individually first

| Field | V2 content |
|---|---|
| Status | info |
| Decision type (expected) | Validation step *(V2 shows "Review needed" — LI-01)* |
| Title | Recommended next step: validate each target individually first |
| Recommendation | Run each target individually before attempting multiplexing or RePlex. |
| Rationale | Single-target validation helps confirm expected peak position, signal strength, and antibody performance before moving into a multi-target workflow. |
| Practical tips | Confirm the expected peak for each target. · Assess relative abundance before deciding on multiplexing or RePlex. · Use the validated single-target data to guide the final multiplex setup. |
| Reagent notes | — |
| Reached by | R-01 |

---

## O2 — RePlex with two chemiluminescence immunoassays

| Field | V2 content |
|---|---|
| Status | recommended |
| Decision type | RePlex workflow |
| Title | Recommended workflow: Run RePlex with two immunoassays |
| Recommendation | For targets with the same or very close MW, use RePlex if both targets are to be detected in chemiluminescence. |
| Rationale | Closely migrating targets are more difficult to resolve cleanly in multiplex mode when both are detected in chemi. |
| Practical tips | Ideally put the low abundant target in the first probing cycle and the more abundant target in the second probing cycle. |
| Reached by | R-02 |

---

## O3 — RePlex (no distinct antibody species)

| Field | V2 content |
|---|---|
| Status | recommended |
| Decision type | RePlex workflow |
| Title | Recommended workflow: Run RePlex with two immunoassays |
| Recommendation | If you do not have two distinct antibody species, use RePlex with two immunoassays. |
| Rationale | Without distinct antibody species, multiplexing this close-MW setup is less robust. |
| Practical tips | Ideally put in the first probing cycle the low abundant target or the target detected in fluorescence. *(see SQ-06)* |
| Reached by | R-03 |

**Proposed v2.1 rationale:** "Both primaries come from the same host species, so a secondary antibody would detect both targets. Because the targets also migrate at the same position, they cannot be separated in a single immunoassay. RePlex probes them one after the other in the same capillary."

---

## O4 — Mixed detection: Rabbit-HRP + Mouse-NIR

| Field | V2 content — same/close-MW branch (R-04) | V2 content — different-MW branch (R-09) |
|---|---|---|
| Status | recommended | recommended |
| Decision type | Mixed detection | Mixed detection |
| Title | Recommended workflow: Mixed detection (HRP + NIR) | Recommended workflow: Mixed chemi / fluorescence configuration |
| Recommendation | For Rabbit-HRP + Mouse-NIR, use Goat anti-Rabbit HRP (ProteinSimple #042-206) and Goat anti-Mouse NIR (Novus NBP1-75147C). | *identical* |
| Rationale | This configuration uses orthogonal detection methods (HRP and NIR) to enable multiplexing when both targets are not in chemiluminescence. | This is the reagent pairing specified in your decision tree for this configuration. *(LI-03)* |
| Reagent notes | Rabbit HRP + Mouse NIR: · Goat anti-Rabbit HRP (ProteinSimple #042-206) · Goat anti-Mouse NIR (Novus NBP1-75147C) | Goat anti-Rabbit HRP: ProteinSimple #042-206 · Goat anti-Mouse NIR: Novus NBP1-75147C |

**Proposed v2.1 (single wording for both branches — LI-06):**
- Title: "Recommended workflow: Mixed detection — chemiluminescence (HRP) + fluorescence (NIR)"
- Rationale: "The rabbit target is read in chemiluminescence and the mouse target in NIR fluorescence. Each target has its own detection channel, so the two signals can be read separately — even if the targets migrate at the same position."
- Reagent notes: from reagent reference RG-01 and RG-05.

---

## O5 — Mixed detection: Mouse-HRP + Rabbit-NIR

Same structure as O4 with reagents **Goat anti-Mouse HRP (ProteinSimple #042-205)** and **Goat anti-Rabbit NIR 650 (Novus NBP1-72732C)** (RG-02, RG-06). Reached by R-05 and R-10. Same wording inconsistencies as O4 (LI-03, LI-06); same proposed fix with species inverted.

---

## O6 — Contact Technical Support

| Field | V2 — same/close-MW branch (R-06) | V2 — different-MW branch (R-11) |
|---|---|---|
| Status | warning | warning |
| Decision type | Review needed | Review needed |
| Title | Recommended next step: contact Technical Support | *identical* |
| Recommendation | For other mixed chemi / fluorescence combinations, contact your Tech Support Representative. | For other combinations, contact your Tech Support Representative. |
| Rationale | This configuration is not covered by the standard validated reagent pairings. | Your decision tree explicitly routes other mixed chemi / fluorescence combinations to Tech Support. *(LI-03)* |

**Proposed v2.1:** single wording — "This species / detection combination is not covered by the validated reagent pairings in this tool. Technical Support can check antibody cross-reactivity and suggest a configuration. Have your answers ready (copy them with the button below)."

---

## O7 — Chemi multiplex with mixed primaries (same species, different MW)

| Field | V2 content |
|---|---|
| Status | recommended |
| Decision type | Multiplex workflow |
| Title | Recommended workflow: Multiplex with mixed primaries |
| Recommendation | Mix up primary antibodies for each target and add the secondary antibody. |
| Rationale | For clearly different MW targets detected in chemi, your decision tree supports a straightforward multiplex path when the same species workflow is used for both targets. *(LI-03)* |
| Reagent notes | — *(UR-04 gap, SQ-09)* |
| Reached by | R-07 |

**Proposed v2.1 rationale:** "Both primaries come from the same host species, so a single HRP secondary detects both targets. Because the targets migrate at clearly different positions, their peaks are read separately in the same chemiluminescence channel."

---

## O8 — Chemi multiplex, Rabbit HRP + Mouse HRP (different species, different MW)

| Field | V2 content |
|---|---|
| Status | recommended |
| Decision type | Multiplex workflow |
| Title | Recommended workflow: Multiplex with Rabbit HRP + Mouse HRP setup |
| Recommendation | If multiplexing Rabbit HRP + Mouse HRP, use the 20X anti-rabbit conjugate (#043-426) and the ready-to-use anti-mouse HRP. |
| Rationale | For clearly different MW targets in chemi, your tree routes mixed-species setups to this conjugate-based multiplex recommendation. *(LI-03)* |
| Reagent notes | 20X anti-rabbit conjugate: #043-426 · Ready-to-use anti-mouse HRP · If other species are used (for example multiplex goat + mouse), contact your Tech Support Representative. |
| Reached by | R-08 |

**Proposed v2.1 rationale:** "The two targets migrate at clearly different positions, so both can be read in chemiluminescence in the same immunoassay. Combining a concentrated (20X) anti-rabbit HRP with the ready-to-use anti-mouse HRP lets both secondaries work in the same reaction." *(to be confirmed — SQ-08)*

---

## Static content (always displayed)

**Important note card (V2):**
> As a general guideline, when multiplexing two targets with significantly different signal intensities, consider using RePlex mode (stripping and reprobing), or assigning the more abundant target to fluorescence and the less abundant target to chemiluminescence.
> Final assay selection should also consider target abundance, true peak separation, antibody validation status, detection chemistry, and any internal support guidance available.

**Disclaimer (V2):** "Personal side project for educational and workflow-guidance purposes. Not official vendor software." — shown with author name and contact.
