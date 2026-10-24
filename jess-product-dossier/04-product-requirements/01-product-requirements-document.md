# Product Requirements Document (PRD)

| Document ID | PR-DOC-01 | Version | 0.1 | Status | Draft | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

## 1. Summary

The Jess Assay Selection Tool guides a user through up to five questions and returns a recommended two-target workflow on Jess (multiplex, mixed chemi/fluorescence detection, or RePlex) with rationale, practical tips and reagent references. This PRD specifies the product for releases **R1 (Trustworthy core)** and **R2 (Scientific depth)**, and frames R3–R4.

Context and strategy: `00-product-strategy/`. User needs: `01-user-requirements/`. Normative logic: `03-functional-rules/02-decision-table.md`.

## 2. Goals and non-goals

**Goals**
- G1 — Return a correct, explained recommendation for every covered two-target scenario (UR-01 → UR-06).
- G2 — Make each recommendation traceable to a reviewed rule-set version (UR-19).
- G3 — Usable in front of a customer on a laptop or a phone in under 2 minutes (UR-10, UR-15).
- G4 — Extend coverage to dual fluorescence, abundance, MW precision and total protein (UR-07 → UR-09).

**Non-goals (this PRD)**
- More than two targets; other Simple Western instruments.
- Protocol generation (concentrations, dilutions, run settings).
- User accounts, saved projects, any storage of personal or sample data.
- Integration with ordering, CRM or ticketing systems.

## 3. Functional requirements

Priority: MoSCoW. Release: R1 / R2 / R3 / R4.

### 3.1 Decision flow

| ID | Requirement | Priority | Release | Traces to |
|---|---|---|---|---|
| PR-01 | The system shall ask whether each target has been run individually (Q1) and, if not, return outcome O1 without asking further questions. | Must | R0 ✔ | UR-02, SC-01, R-01 |
| PR-02 | The system shall ask the MW relationship between the two targets (Q2). | Must | R0 ✔ | UR-01, SC-02 |
| PR-03 | The system shall ask whether both targets must be detected in chemiluminescence (Q3). | Must | R0 ✔ | UR-01, SC-03 |
| PR-04 | The system shall ask the species questions relevant to the branch (Q4a, Q4b) and the detection pair (Q5), per the decision table. | Must | R0 ✔ / R1 (SQ-07) | UR-01, SC-05 |
| PR-05 | The system shall determine exactly one outcome per complete answer set according to the decision table, and route non-covered combinations to Technical Support (O6). | Must | R0 ✔ | UR-01, UR-06, SC-09 |

### 3.2 Recommendation content

| ID | Requirement | Priority | Release | Traces to |
|---|---|---|---|---|
| PR-06 | The result shall display a status badge and a decision-type badge that are **defined per outcome** and never contradict each other. | Must | R1 | UR-01, LI-01, LI-02, BR-13 |
| PR-07 | Every outcome shall display a rationale ("Why this path?") written for the end user. | Must | R1 | UR-03, UR-20, LI-03 |
| PR-08 | Every outcome that implies specific reagents shall list them from the reagent reference (name, supplier, catalogue number); practical tips shall be shown where defined. | Must | R1 | UR-04, UR-05, SQ-08, SQ-09 |
| PR-26 | Each outcome shall have **one** canonical wording regardless of the branch that reaches it. | Must | R1 | LI-06 |

### 3.3 Interaction

| ID | Requirement | Priority | Release | Traces to |
|---|---|---|---|---|
| PR-09 | Only questions relevant to previous answers shall be displayed, numbered by display order. | Must | R0 ✔ / R1 (numbering) | UR-11, BR-01, BR-16 |
| PR-10 | Changing an answer shall clear all downstream answers and update the result immediately. | Must | R0 ✔ | UR-12, BR-02, BR-04 |
| PR-11 | A single action shall reset the whole flow. | Should | R0 ✔ | UR-13, BR-07 |
| PR-12 | A progress indicator shall reflect the number of questions on the user's current path. | Could | R1 | UR-16, BR-14 |
| PR-13 | The user shall be able to copy the recommendation as plain text, including the **answers given**, the **rule-set version** and the **date**; failure to copy shall be reported. | Must | R1 | UR-14, UR-19, BR-15, BR-17 |
| PR-18 | The current answer set shall be encoded in the page URL so that a configuration can be shared as a link. | Could | R2 | UR-14, BR-18 |
| PR-19 | The user shall be able to print or save a one-page summary (inputs, outcome, reagents, version, date, disclaimer). | Should | R2 | UR-14, UR-19 |

### 3.4 Trust and transparency

| ID | Requirement | Priority | Release | Traces to |
|---|---|---|---|---|
| PR-14 | A disclaimer stating the tool's purpose, its non-official status and its maintainer shall be visible on every screen without hiding content. | Must | R0 ✔ / R1 (layout) | UR-18, BR-11 |
| PR-15 | The rule-set version and its approval date shall be visible in the interface. | Should | R1 | UR-19 |
| PR-16 | All user-facing texts shall follow the content guidelines (`03-ux-and-content-guidelines.md`). | Must | R1 | UR-20 |
| PR-17 | The user shall be able to report an issue or rate the usefulness of a recommendation. | Could | R3 | UR-21 |

### 3.5 Scientific coverage extensions (R2)

| ID | Requirement | Priority | Release | Traces to |
|---|---|---|---|---|
| PR-20 | The system shall offer a dual-fluorescence (NIR + IR) recommendation when approved by SMEs. | Should | R2 | UR-08, SQ-01 |
| PR-21 | The system shall optionally ask about relative abundance and adapt tips and channel assignment. | Should | R2 | UR-07, SQ-02, SC-11 |
| PR-22 | The system shall optionally accept the expected apparent MW of each target, classify the MW relationship using an SME-approved rule, and flag targets outside the selected separation range. | Could | R2 | SQ-03, SQ-04 |
| PR-23 | The system shall optionally include total protein detection in RePlex recommendations. | Could | R2 | UR-09, SQ-05, SC-12 |

### 3.6 Measurement and scale (R3–R4)

| ID | Requirement | Priority | Release | Traces to |
|---|---|---|---|---|
| PR-24 | The system shall record anonymous usage events (question answered, outcome reached, copy used) tagged with rule-set version, without personal data. | Should | R3 | OKR 3, NFR-07 |
| PR-25 | All user-facing strings shall be externalized to allow localization. | Could | R4 | Roadmap R4 |

## 4. User experience overview

- Two-column layout on desktop (questions left, recommendation right); single column on screens < 900 px, with the recommendation appearing below the last question and the page scrolling to it.
- Disclaimer as a compact footer on mobile instead of a floating panel.
- See `03-ux-and-content-guidelines.md`.

## 5. Release criteria

| Release | Criteria |
|---|---|
| R1 | All R1 Must requirements done; 100 % of rules tested in CI; SME sign-off recorded; reagent references verified; no open High/Medium logic issue; WCAG checks passed on main flow (NFR-04) |
| R2 | R2 Should requirements done; new rules approved by SMEs before merge; regression suite green |
| R3 | Analytics approved under NFR-07; pilot onboarding material ready |

## 6. Assumptions and open points

- A1 — Users can classify MW as "same/very close" vs "clearly different" until PR-22 exists.
- A2 — Rabbit and mouse primaries cover the large majority of real two-target cases on Jess **[to confirm in pilot]**.
- A3 — Static hosting remains sufficient until Stage 2 (no backend needed).
- Open points: SQ-01 → SQ-10.
