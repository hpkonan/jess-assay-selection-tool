# Known Logic and Content Issues (V2 baseline)

| Document ID | FR-DOC-06 | Version | 0.1 | Status | Open | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

Issues found by reviewing `src/App.js` (deployed version) against the decision table and user requirements.

| ID | Severity | Issue | Where | Effect on user | Fix | Backlog |
|---|---|---|---|---|---|---|
| LI-01 | **High** | Outcome O1 shows status badge **"Next step"** and decision-type badge **"⚠️ Review needed"** at the same time. | `decisionType` falls through to "Review needed" because the O1 title contains none of the words "RePlex", "Mixed", "Multiplex". | Contradictory signals on the most common first outcome; may suggest a problem where there is none. | Make the decision type an explicit field of each outcome (BR-13); add a "Validation step" type. | JAST-101 |
| LI-02 | Medium | Decision type is derived by **string matching on titles** (case-sensitive). | `result.title.includes(...)` | Any rewording of a title can silently change the badge (e.g. "mixed primaries" vs "Mixed detection"). | Same as LI-01. | JAST-101 |
| LI-03 | Medium | Several rationales are **written to the author**, not the user: "your decision tree…", "your tree routes…". | O4/O5 (different-MW branch), O6 (different-MW branch), O7, O8 | Reads as internal notes; lowers credibility in front of customers. | Rewrite in end-user language (proposals in the outcome catalogue). | JAST-102 |
| LI-04 | Low | Progress indicator uses a **fixed total of 5 steps**; paths have 1, 3, 4 or 5 questions. Answering Q1 "No" jumps from 1/5 to 5/5. | `totalSteps = 5`, `currentStep` logic | Progress is imprecise but not misleading about the result. | Compute total from the current path (BR-14). | JAST-104 |
| LI-05 | Low | **Duplicate question number "4."** when Q4a and Q5 are both displayed (same-MW, distinct-species branch). | Hard-coded labels | Minor confusion. | Number questions by display order (BR-16). | JAST-105 |
| LI-06 | Medium | The **same outcome has different wordings** depending on the branch (O4, O5, O6: titles, rationales and reagent-note formats differ). | Outcomes are duplicated inside each branch | Users comparing two sessions may think they received different advice. | Define each outcome once (outcome catalogue as data) and reference it from rules. | JAST-103 |
| LI-07 | Low | "Copied!" is shown even if **clipboard writing fails** (promise not awaited, no error handling). | Copy button handler | User may believe the recommendation was copied when it was not (e.g. restricted browser). | Await the promise; handle failure (BR-17). | JAST-111 |

## Scientific coverage gaps (not defects)

Listed for completeness; tracked as open scientific questions:
- No dual fluorescence (NIR + IR) option — SQ-01.
- Abundance not an input — SQ-02.
- No operational definition of "very close MW" — SQ-03.
- No species question on the different-MW / not-both-chemi branch — SQ-07.
- No reagent reference for O7 and incomplete reference for O8 — SQ-08, SQ-09.
