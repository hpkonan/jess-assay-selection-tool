# Scientific Validation Plan

| Document ID | SC-DOC-05 | Version | 0.1 | Status | Draft | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

## 1. Objective

Ensure that every recommendation produced by the tool is scientifically correct, consistent with official documentation, and clearly bounded (escalation when outside validated guidance). Validation is a **release gate** for R1 and for any change to rules or reagents.

## 2. Validation levels

| Level | What is checked | Method | Who | When |
|---|---|---|---|---|
| L1 — Logic | The software implements the decision table exactly | Automated table-driven tests (one per rule R-xx) | Product owner | Every commit (CI) |
| L2 — Content | Each outcome's recommendation, rationale, tips and reagents are scientifically correct and written for the end user | Structured review of the outcome catalogue | ≥ 2 SMEs (FAS, Technical Support, Applications) | Each release with rule/content change |
| L3 — Reference | Reagent references and platform facts match current official sources | Check against current catalogue and technical notes | Product owner + 1 SME | R1, then every 6 months |
| L4 — Field | Recommendations hold in real customer situations | Retrospective check on documented customer cases (anonymized) | Pilot users | R3 pilot |

## 3. SME review protocol (L2)

1. Reviewer receives the **decision table** (`03-functional-rules/02-decision-table.md`) and the **outcome catalogue** (`03-functional-rules/03-outcome-catalogue.md`).
2. For each rule R-xx, reviewer marks: **Approve / Approve with change / Reject**, with comment.
3. For each open question SQ-xx in scope, reviewer gives an answer or a recommendation.
4. Product owner consolidates; disagreements are resolved in a short call; the result is recorded as a PD-xx entry with reviewer names and date.
5. The rule-set version number is incremented and displayed in the tool.

### Review sheet template

| Rule | Inputs | Outcome | Decision (A / AC / R) | Comment | Reviewer | Date |
|---|---|---|---|---|---|---|
| R-01 | Q1 = No | O1 | | | | |
| … | | | | | | |

## 4. Field validation (L4) — case-based check

- Collect 15–20 past two-target design questions (from trainings, demos and support cases), **anonymized**: no customer name, institution or sample detail.
- For each case: run the tool, compare with what was actually recommended and with the experimental result where known.
- Classify: *Agree*, *Tool more conservative*, *Tool wrong*, *Not covered*.
- Acceptance: 0 "Tool wrong"; "Not covered" cases feed SQ-xx and the backlog.

## 5. Acceptance criteria for R1 scientific sign-off

- 11/11 rules approved by ≥ 2 SMEs (KR1.2).
- 7/7 reagent references verified with date (KR1.4).
- SQ-06 to SQ-10 answered (R1 scope).
- Disclaimer text approved.
