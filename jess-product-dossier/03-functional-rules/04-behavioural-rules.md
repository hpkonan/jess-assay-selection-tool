# Behavioural (UI) Rules

| Document ID | FR-DOC-04 | Version | 0.1 | Status | Draft | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

Rules governing how the interface behaves, independently of the scientific content.

| ID | Rule | V2 implementation | Status |
|---|---|---|---|
| BR-01 | **Progressive disclosure** — a question is displayed only when its visibility condition (FR-DOC-01 §1) is true. | Boolean flags `showMW`, `showBothInChemi`, `showDistinctSpeciesForSameMW`, `showSameSpeciesForDifferentMW`, `showSpeciesPair` | Implemented |
| BR-02 | **Cascade reset** — changing an answer clears every answer downstream of it in the tree order Q1 → Q2 → Q3 → Q4a → Q4b → Q5. | `setAnswer()` clears all later keys | Implemented |
| BR-03 | **No partial result** — the recommendation card shows a placeholder until a terminal rule is reached. | `result = null` until an outcome is returned | Implemented |
| BR-04 | **Immediate update** — the outcome is recomputed on every answer change; no submit button. | `useMemo` on `answers` | Implemented |
| BR-05 | **Status badge** — `info` → "Next step" (indigo), `recommended` → "Suggested" (green), `warning` → "Review needed" (amber). The result card border takes the same accent. | Inline conditional styles | Implemented |
| BR-06 | **Decision-type badge** — each outcome is classified as RePlex workflow 🔁, Mixed detection 🧪, Multiplex workflow ✅, Validation step, or Review needed ⚠️. | Derived by searching words in the title — **defect LI-01 / LI-02** | Implemented with defect |
| BR-07 | **Reset** — one button clears all answers and restores default UI states (sections expanded, "Copied" cleared). | `resetAnswers()` | Implemented |
| BR-08 | **Collapsible sections** — "Why this path?", "Practical tips" and "Reagent notes" can be collapsed; expanded by default. | `showWhy`, `showTips`, `showReagents` | Implemented |
| BR-09 | **Copy recommendation** — copies title, recommendation, rationale, tips and reagent notes as plain text; button shows "Copied!" for 2 s. | `navigator.clipboard.writeText` — **no error handling (LI-07)** | Implemented with defect |
| BR-10 | **Progress indicator** — shows "Step n / 5" and a progress bar. | Fixed total of 5 steps — **imprecise (LI-04)** | Implemented with defect |
| BR-11 | **Disclaimer always visible** — author, purpose and "not official vendor software" statement are visible on every screen. | Fixed bottom-right panel | Implemented (overlaps content on small screens — TD-07) |
| BR-12 | **Empty default** — every question starts on "Select an option"; no answer is pre-selected. | `<option value="">` | Implemented |

## Rules proposed for R1/R2

| ID | Rule | Release |
|---|---|---|
| BR-13 | The decision type is a **property of the outcome** (data), never derived from text. | R1 |
| BR-14 | The progress indicator counts **questions remaining on the current path**, not a fixed total. | R1 |
| BR-15 | Copied text includes the **answers given**, the **rule-set version** and the **date**. | R1 |
| BR-16 | Questions are **numbered by display order** (no duplicate numbers). | R1 |
| BR-17 | If clipboard access fails, the user sees an error message and the text is selected for manual copy. | R1 |
| BR-18 | The current answers are reflected in the URL (query string of question/answer IDs only) so a configuration can be shared as a link. | R2 |
