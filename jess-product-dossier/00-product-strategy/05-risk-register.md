# Risk Register

| Document ID | PS-05 | Version | 0.1 | Status | Draft | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

Scoring: Likelihood (L) and Impact (I) on a 1–3 scale; Score = L × I. Scores ≥ 6 require an active mitigation in the current release.

| ID | Risk | Category | L | I | Score | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| RK-01 | A recommendation is scientifically wrong and leads to a failed run or wrong conclusion | Scientific | 2 | 3 | **6** | SME sign-off per path; automated path tests; escalation outcome for non-covered cases; disclaimer; rule-set version shown on every result | PO + SMEs | Open |
| RK-02 | Reagent catalogue numbers become outdated or are incorrect | Scientific / content | 2 | 3 | **6** | Reagent data held in one file with verification date and owner; periodic review (every 6 months); link to official product pages | PO | Open |
| RK-03 | Tool is perceived as official vendor software although it is a personal project | Brand / compliance | 2 | 3 | **6** | Keep visible disclaimer; agree distribution scope with management; review use of corporate email and product names before any wider sharing | PO + Manager | Open |
| RK-04 | Divergent code versions (App.js vs App.tsx) cause the wrong logic to be edited or deployed | Technical | 3 | 2 | **6** | Single source of truth; delete obsolete files; CI test on deployed entry point (R1) | PO | Open |
| RK-05 | No automated tests: a change silently breaks a decision path | Technical | 3 | 2 | **6** | Table-driven tests on all paths, CI gate before deployment | PO | Open |
| RK-06 | Project time competes with field activity and team KPIs | Organizational | 2 | 2 | 4 | Small increments; time-boxed work; show measurable time savings | PO | Open |
| RK-07 | Low adoption: colleagues keep asking experts directly | Adoption | 2 | 2 | 4 | Pilot with champions; use tool live during trainings; collect success stories | PO | Open |
| RK-08 | SMEs unavailable for review, blocking releases | Organizational | 2 | 2 | 4 | Asynchronous review via decision table; limit each review to changed rules | PO | Open |
| RK-09 | Build toolchain (Create React App) is no longer maintained; dependency vulnerabilities accumulate | Technical | 2 | 2 | 4 | Migrate to a maintained build tool (ADR-003) in R1/R2 | PO | Open |
| RK-10 | Analytics inadvertently capture personal or customer data | Privacy | 1 | 3 | 3 | Event schema limited to IDs; no free-text; privacy review before activation (NFR-07) | PO | Open |
| RK-11 | Scope creep (more targets, other instruments) dilutes quality | Product | 2 | 1 | 2 | Explicit non-goals; roadmap gates | PO | Open |

## Review cadence

Reviewed at each release gate and whenever a new scientific rule is added.
