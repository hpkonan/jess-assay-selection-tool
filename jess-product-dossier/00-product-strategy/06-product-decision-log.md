# Product Decision Log

| Document ID | PS-06 | Version | 0.1 | Status | Living document | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

Records product-level decisions (what and why). Technical decisions are recorded as ADRs in `05-solution-architecture/03-architecture-decision-records.md`.

| ID | Date | Decision | Rationale | Alternatives considered | Status |
|---|---|---|---|---|---|
| PD-01 | 2026 (V1) | Scope the tool to **two targets** on Jess | Covers the most frequent multi-target design questions; keeps the decision tree reviewable | Generic N-target tool | Accepted |
| PD-02 | 2026 (V1) | **Single-target validation first** is a mandatory gate (Q1 → O1) | Without individual validation, peak position and signal are unknown, so any multi-target recommendation is unreliable | Allow multiplex recommendation with a warning | Accepted |
| PD-03 | 2026 (V1) | Route **non-covered species/reagent combinations to Technical Support** (O6) instead of improvising | Safety: escalate rather than guess | Generic advice for "other" species | Accepted |
| PD-04 | 2026 (V2) | Recommend **mixed HRP + NIR detection** for same/close-MW targets when two distinct species are available and both targets need not be in chemi | Distinct detection channels allow co-migrating targets to be read separately | Previous V1 rule recommending HRP + HRP with 20X anti-rabbit conjugate for this case | Accepted (V2) — pending SME sign-off |
| PD-05 | 2026 (V2) | Add progress bar, reset, collapsible sections and copy-to-clipboard | Faster use during live customer discussions; easy transfer to notes and emails | — | Accepted |
| PD-06 | 2026-10-24 | Manage the tool as a product with a dossier, roadmap and backlog | Prepare a possible pilot and endorsement; demonstrate value with evidence | Keep as an informal side project | Accepted |
| PD-07 | 2026-10-24 | **No personal data** will be collected, now or in the analytics phase | Keeps the tool free of login and of data-protection overhead; lowers barrier to endorsement | Named accounts for usage tracking | Proposed |
| PD-08 | 2026-10-24 | Treat **scientific rules as versioned content** separate from UI code | Enables SME review without code reading; allows rule-set versioning on each result | Keep rules in component code | Proposed (see ADR-002) |

## Template for new entries

```
| PD-xx | YYYY-MM-DD | <decision> | <why> | <options rejected> | Proposed / Accepted / Superseded by PD-yy |
```
