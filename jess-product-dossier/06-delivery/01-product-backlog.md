# Product Backlog

| Document ID | DL-DOC-01 | Version | 0.1 | Status | Living document | Owner | H.-P. Konan (Product Owner) |
|---|---|---|---|---|---|---|---|

Ordered by release, then by priority. Estimates in story points (Fibonacci: 1, 2, 3, 5, 8, 13). An importable version is in `02-backlog.csv` (GitHub Projects, Jira, Azure DevOps, Linear).

## 1. Epics

| Epic | Name | Goal | Main releases |
|---|---|---|---|
| E1 | Rule engine & decision integrity | Correct, single-source, versioned decision logic | R1 |
| E2 | Scientific coverage | Cover the most frequent real two-target cases | R1, R2 |
| E3 | Recommendation output & sharing | Make results easy to reuse (copy, link, print) | R1, R2 |
| E4 | UX, accessibility & responsive | Usable on any device and by everyone | R1 |
| E5 | Quality engineering | Automated safety net before every deployment | R1 |
| E6 | Codebase & repository hygiene | Clean, maintainable, documented repository | R1, R2 |
| E7 | Governance, scientific validation & content | SME sign-off, verified reagents, approved disclaimer | R1, R3 |
| E8 | Analytics & feedback | Evidence of usage and value, without personal data | R3 |
| E9 | Adoption & pilot | Pilot with FAS / Technical Support colleagues | R3 |

## 2. Backlog overview

| ID | Title | Epic | Type | Priority | SP | Release | Traces to |
|---|---|---|---|---|---|---|---|
| JAST-113 | Characterization tests on all 11 decision paths | E5 | Story | Must | 3 | R1 | ADR-004, R-01..R-11, TS-01..TS-11 |
| JAST-115 | Remove obsolete app versions and entry points | E6 | Tech task | Must | 1 | R1 | TD-01, TD-02, RK-04 |
| JAST-112 | Extract questions, rules, outcomes and reagents into versioned data + pure engine | E1 | Story | Must | 8 | R1 | ADR-002, TD-04, NFR-09, PD-08 |
| JAST-101 | Make decision type an explicit outcome property (fix "Review needed" on O1) | E1 | Bug | Must | 2 | R1 | LI-01, LI-02, BR-13, PR-06 |
| JAST-103 | Define each outcome once (consistent wording across branches) | E1 | Story | Must | 2 | R1 | LI-06, PR-26 |
| JAST-102 | Rewrite rationales in end-user language | E7 | Story | Must | 2 | R1 | LI-03, PR-07, PR-16 |
| JAST-114 | CI quality gates, protected main branch, CODEOWNERS for content | E5 | Tech task | Must | 3 | R1 | ADR-005, NFR-10, RK-05 |
| JAST-120 | SME review session and sign-off of rule set v2.1 | E7 | Story | Must | 3 | R1 | KR1.2, SC-DOC-05 |
| JAST-121 | Verify all reagent references with date and reviewer | E7 | Story | Must | 2 | R1 | KR1.4, RK-02, SC-DOC-03 |
| JAST-108 | Confirm O8 configuration and complete anti-mouse HRP reference | E2 | Spike | Must | 1 | R1 | SQ-08, RG-04 |
| JAST-109 | Add reagent reference to O7 | E2 | Story | Must | 2 | R1 | SQ-09, UR-04, PR-08 |
| JAST-123 | Copied text includes answers, rule-set version and date | E3 | Story | Must | 2 | R1 | PR-13, BR-15, UR-19 |
| JAST-111 | Handle clipboard failure | E3 | Bug | Must | 1 | R1 | LI-07, BR-17 |
| JAST-122 | Agree disclaimer, contact channel and sharing scope with manager | E7 | Task | Must | 1 | R1 | RK-03, TD-14, PR-14 |
| JAST-117 | Versioning: SemVer, CHANGELOG, rule-set version shown in UI | E6 | Story | Should | 2 | R1 | PR-15, NFR-11, TD-12 |
| JAST-118 | Responsive layout with design tokens; disclaimer as mobile footer | E4 | Story | Should | 5 | R1 | NFR-03, ADR-008, TD-05, TD-07, UR-15 |
| JAST-119 | Accessibility pass (labels, keyboard, ARIA, contrast) | E4 | Story | Should | 3 | R1 | NFR-04, TD-08, UR-17 |
| JAST-104 | Progress indicator based on the current path | E4 | Bug | Should | 2 | R1 | LI-04, BR-14, PR-12 |
| JAST-105 | Number questions by display order | E4 | Bug | Should | 1 | R1 | LI-05, BR-16 |
| JAST-106 | Resolve probing-order tip for O3 | E2 | Spike | Should | 1 | R1 | SQ-06 |
| JAST-107 | Ask species question on the different-MW / not-both-chemi branch | E2 | Story | Should | 3 | R1 | SQ-07, SC-05 |
| JAST-110 | Validate wording of the abundance "Important note" | E2 | Spike | Should | 1 | R1 | SQ-10, SC-11 |
| JAST-116 | README and package metadata | E6 | Tech task | Should | 1 | R1 | TD-10 |
| JAST-124 | Migrate to Vite + strict TypeScript; commit lockfile | E6 | Tech task | Could | 5 | R1 | ADR-003, TD-03, TD-09, TD-11, RK-09 |
| JAST-201 | Dual fluorescence (NIR + IR) outcome | E2 | Story | Should | 5 | R2 | SQ-01, PR-20, UR-08 |
| JAST-202 | Optional relative-abundance question | E2 | Story | Should | 5 | R2 | SQ-02, PR-21, UR-07 |
| JAST-207 | Printable / saveable one-page summary | E3 | Story | Should | 3 | R2 | PR-19 |
| JAST-208 | Reagent catalogue with product links and verification badges | E2 | Story | Should | 3 | R2 | SC-DOC-03, RK-02 |
| JAST-203 | Optional MW entry with SME-approved classification | E2 | Story | Could | 5 | R2 | SQ-03, PR-22 |
| JAST-204 | Separation-range warning | E2 | Story | Could | 3 | R2 | SQ-04, PR-22 |
| JAST-205 | Total protein option in RePlex outcomes | E2 | Story | Could | 3 | R2 | SQ-05, PR-23, UR-09 |
| JAST-206 | Share configuration via URL | E3 | Story | Could | 3 | R2 | PR-18, ADR-007, BR-18 |
| JAST-301 | Anonymous analytics adapter (disabled by default) | E8 | Story | Should | 5 | R3 | PR-24, ADR-006, NFR-07 |
| JAST-302 | "Was this helpful?" and "Report an issue" | E8 | Story | Should | 3 | R3 | PR-17, UR-21 |
| JAST-303 | Pilot onboarding kit (2-min demo, one-pager, feedback form) | E9 | Task | Should | 3 | R3 | OKR 3 |
| JAST-305 | Field validation on 15–20 anonymized past cases | E7 | Story | Should | 5 | R3 | SC-DOC-05 L4 |
| JAST-304 | Pilot review and go/no-go for Stage 2 | E9 | Task | Should | 2 | R3 | OKR 3, PS-01 §6 |
| JAST-306 | Content ownership and review cadence agreed | E7 | Task | Should | 1 | R3 | RACI, RK-02 |
| JAST-401 | Externalize UI strings for localization | E6 | Story | Could | 5 | R4 | PR-25 |
| JAST-402 | Package the engine for reuse by other tools | E1 | Story | Could | 5 | R4 | Pillar 5 |
| JAST-403 | Discovery: more than two targets / other Simple Western instruments | E2 | Spike | Won't (now) | 3 | R4 | Non-goals |

**Capacity view:** R1 ≈ 57 SP (of which 52 SP Must/Should) · R2 ≈ 30 SP · R3 ≈ 19 SP · R4 ≈ 13 SP.

## 3. Story cards — R1 (ready for refinement)

### JAST-113 — Characterization tests on all 11 decision paths
*As the product owner, I want automated tests that capture today's outputs for every decision path, so that refactoring cannot change a recommendation unnoticed.*
- **AC1** One test per rule R-01 … R-11 asserts the outcome title, status and reagent notes produced by the current build.
- **AC2** A test asserts that incomplete answer sets return no result (R-00).
- **AC3** Tests run with a single command and in CI.

### JAST-115 — Remove obsolete app versions and entry points
- **AC1** Only one application component and one entry point remain; the root-level `App.tsx`, `index.tsx`, `styles.css`, and `src/App.tsx`, `src/index.tsx`, `src/index2.tsx`, `src/index22.js` are removed.
- **AC2** Build output is unchanged (characterization tests green).

### JAST-112 — Rules as data + pure engine
*As an SME reviewer, I want the scientific logic in readable data files, so that I can review it without reading React code.*
- **AC1** `questions.json`, `rules.json`, `outcomes.json`, `reagents.json`, `ruleset.meta.json` exist and validate against JSON Schemas.
- **AC2** `evaluate(answers)` and `visibleQuestions(answers)` are pure functions with no React import.
- **AC3** CI checks completeness, exclusivity, reachability and references (SA-DOC-02 §3).
- **AC4** Characterization tests pass (except wording changes approved in JAST-102/103).

### JAST-101 — Decision type as an outcome property
*As a user, I want badges that agree with each other, so that I am not alarmed by a "Review needed" on a normal next step.*
- **AC1** Each outcome declares `decisionType` ∈ {validation, replex, mixed, multiplex, support}.
- **AC2** O1 shows "Next step" + "Validation step"; no outcome shows contradictory badges (TS-24).
- **AC3** No code path derives a badge from title text.

### JAST-103 — One wording per outcome
- **AC1** O4, O5 and O6 have identical title, rationale and reagent formatting whichever branch reaches them.
- **AC2** Wordings follow the content guidelines (PR-DOC-03).

### JAST-102 — End-user rationales
- **AC1** No user-facing string contains "your decision tree", "your tree" or other author notes.
- **AC2** Each rationale explains the mechanism (channel, migration, species).
- **AC3** New wordings approved in JAST-120.

### JAST-114 — CI gates
- **AC1** Pull requests run lint, type check, unit tests, content checks, build and dependency audit.
- **AC2** Deployment runs only after a successful CI on `main`.
- **AC3** `main` is protected; changes under `content/` require a CODEOWNERS approval.

### JAST-120 — SME review and sign-off
- **AC1** At least two SMEs review the decision table and outcome catalogue using the review sheet.
- **AC2** Decisions recorded as PD entries with names and date; rule set tagged v2.1.
- **AC3** SQ-06, SQ-08, SQ-09, SQ-10 answered; SQ-07 decision recorded.

### JAST-121 — Reagent verification
- **AC1** RG-01 … RG-07 each have catalogue number, supplier, verification date and verifier.
- **AC2** References that cannot be verified are removed or replaced and the outcome adjusted.

### JAST-108 / JAST-109 — Complete reagent information for O7 and O8
- **AC1** O7 and O8 list every reagent required for the configuration, from `reagents.json`.
- **AC2** The anti-mouse HRP reagent of O8 has a catalogue number.

### JAST-123 — Enriched copy
*As a FAS, I want the copied recommendation to include the customer's answers and the rule-set version, so that the follow-up email is self-explanatory and traceable.*
- **AC1** Copied text follows the format in PR-DOC-03 §6.
- **AC2** Includes date (ISO), app version and rule-set version.

### JAST-111 — Clipboard failure
- **AC1** "Copied!" appears only after the clipboard promise resolves.
- **AC2** On failure, an inline message appears and the text is shown selected for manual copy (TS-26).

### JAST-122 — Disclaimer, contact and scope
- **AC1** Decision recorded with the manager on: disclaimer text, contact channel, who the link may be shared with during Stages 0–1.
- **AC2** UI updated accordingly.

### JAST-117 — Versioning
- **AC1** App version (SemVer) and rule-set version visible in the footer.
- **AC2** `CHANGELOG.md` updated in each release; Git tag created.

### JAST-118 — Responsive layout
- **AC1** No horizontal scroll and no overlapped content at 360, 768 and 1280 px.
- **AC2** On < 900 px, the view scrolls to the recommendation after the final answer.
- **AC3** Colors and spacing come from design tokens.

### JAST-119 — Accessibility
- **AC1** Every select has an associated label; collapsible headers expose `aria-expanded`.
- **AC2** Whole flow operable by keyboard with visible focus.
- **AC3** Automated accessibility audit ≥ 95 on main page.

### JAST-104 / JAST-105 — Progress and numbering
- **AC1** Progress shows "Question n of N" where N is the length of the current path.
- **AC2** Displayed numbers are consecutive and unique (TS-25).

### JAST-107 — Species question on the different-MW / not-both-chemi branch
*As a user with two primaries from the same species and targets of clearly different MW, I want a valid recommendation instead of being sent to Technical Support.*
- **AC1** Branch asks whether primaries come from two distinct species before Q5.
- **AC2** If not distinct, the outcome follows the SME decision recorded under SQ-07.
- **AC3** Decision table, tests and outcome catalogue updated.

## 4. Backlog management rules

- The backlog is ordered by the product owner; ordering criteria: (1) scientific correctness and safety, (2) user value, (3) risk reduction, (4) effort.
- Every item references at least one upstream ID (UR, SC, SQ, PR, NFR, LI, TD, ADR or OKR).
- Items touching scientific content cannot be marked Done without SME approval (Definition of Done).
- Backlog refinement: every two weeks, 30 minutes, time-boxed.
