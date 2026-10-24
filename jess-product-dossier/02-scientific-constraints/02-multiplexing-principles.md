# Scientific Constraints and Multiplexing Principles

| Document ID | SC-DOC-02 | Version | 0.1 | Status | In review (SME) | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

Each constraint (SC-xx) is a scientific statement the decision logic must respect. The **Used by** column links it to the decision rules in `03-functional-rules/02-decision-table.md`.

Evidence level: **A** = documented in an official application/technical note; **B** = established immunodetection principle; **C** = expert practice (author/SME), to be confirmed.

| ID | Constraint | Rationale | Evidence | Used by |
|---|---|---|---|---|
| SC-01 | Each target must be validated **individually** before being combined with another target. | Confirms expected peak position, signal strength, linear range and antibody specificity; without it, a multi-target result cannot be interpreted. | B / C | R-01, O1 |
| SC-02 | Two targets detected in the **same channel** within the same immunoassay are distinguishable only if their peaks do **not co-migrate**. | One detection channel gives one electropherogram; overlapping peaks cannot be assigned to a target. | A (Ref 1) | R-02, R-07, R-08 |
| SC-03 | Targets with **same or very close MW** that must both be detected in **chemiluminescence** require **RePlex** (two sequential immunoassays). | Follows from SC-02 with a single chemi channel. | A (Ref 1, 2) | R-02, O2 |
| SC-04 | Targets detected in **different channels** (chemi vs NIR vs IR) can be read separately even when they co-migrate. | Each channel produces its own signal. | A (Ref 1, 2) | R-04, R-05, R-09, R-10 |
| SC-05 | In a single immunoassay, each secondary antibody must recognize **only one** of the two primaries; this requires primaries from **two distinct host species** (or equivalent orthogonal detection). | A secondary against a host species binds every primary from that species; if both primaries share a host, any secondary binds both and the channels cannot be separated. | B | R-03, R-04–R-06, R-09–R-11, SQ-07 |
| SC-06 | If two targets are detected in chemi with primaries **of the same species** and their MW are **clearly different**, the primaries can be **mixed** and detected with **one** secondary. | Separation by migration replaces separation by channel (SC-02). | B / C | R-07, O7 |
| SC-07 | If two chemi-detected targets of different MW use **different species** (rabbit + mouse), both HRP secondaries must be compatible in the same reaction; the validated configuration uses a **concentrated (20X) anti-rabbit HRP conjugate** with the **ready-to-use anti-mouse HRP**. | Avoids dilution of the ready-to-use reagent when two secondaries are combined. | C — **[To verify]** with current product documentation | R-08, O8 |
| SC-08 | For **mixed HRP + NIR** detection, use a validated secondary pair matching the species/channel assignment (anti-rabbit HRP + anti-mouse NIR, or anti-mouse HRP + anti-rabbit NIR). | Channel assignment depends on which host species carries which detection. | C — reagent references **[To verify]** | R-04, R-05, R-09, R-10 |
| SC-09 | **Non-validated species or reagent combinations** (e.g. goat + mouse primaries) must not be guessed by the tool. | Cross-reactivity and reagent compatibility cannot be predicted generically. | Product decision PD-03 | R-06, R-11, O6 |
| SC-10 | In RePlex, antibody removal is high but **not complete** (> 96 %); the **lower-abundance target** should preferably be probed **first**. | Limits interference of residual signal from an abundant first target on a weak second target. | A (Ref 2) + C | O2, O3 tips |
| SC-11 | When two targets differ strongly in **abundance**, consider RePlex, or assign the **more abundant** target to **fluorescence** and the **less abundant** target to **chemiluminescence**. | Keeps both signals within their linear range; chemiluminescence is generally used for the more sensitive detection. **[To verify]** relative sensitivity claim for current Jess fluorescence chemistry. | C | "Important note" card; SQ-02 |
| SC-12 | The same RePlex capillary can carry **total protein** detection in the second probe, allowing normalization. | Documented capability. | A (Ref 2) | SQ-05 (future rule) |
| SC-13 | Final assay selection must also consider target abundance, true peak separation, antibody validation status and detection chemistry; the tool provides **guidance**, not a guarantee. | The tool's inputs are simplified proxies of the real experimental situation. | Product principle | Disclaimer, "Important note" card |

## Consistency check of the V2 rules against these constraints

| Rule | Constraint(s) | Consistent? | Comment |
|---|---|---|---|
| R-01 (not validated → validate first) | SC-01 | Yes | |
| R-02 (same MW, both chemi → RePlex) | SC-02, SC-03 | Yes | |
| R-03 (same MW, not both chemi, no distinct species → RePlex) | SC-05 | Yes | Dual fluorescence is not possible either without distinct species |
| R-04/R-05 (same MW, distinct species → HRP + NIR) | SC-04, SC-05, SC-08 | Yes | Dual fluorescence (NIR + IR) is a valid alternative not offered — SQ-01 |
| R-07 (different MW, both chemi, same species → mix primaries) | SC-06 | Yes | No reagent reference given — UR-04 partial |
| R-08 (different MW, both chemi, different species → 20X anti-rabbit + RTU anti-mouse HRP) | SC-07 | To verify | Assumes rabbit + mouse; other pairs only mentioned in reagent notes |
| R-09/R-10 (different MW, not both chemi → HRP + NIR) | SC-04, SC-08 | Yes | Q4 on species distinctness is skipped on this branch — SQ-07 |
| R-06/R-11 (other combinations → Technical Support) | SC-09 | Yes | |
