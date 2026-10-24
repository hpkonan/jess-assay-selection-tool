# Release and Sprint Plan

| Document ID | DL-DOC-03 | Version | 0.1 | Status | Draft | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

## 1. Working assumptions

- One maker (product owner + developer), part-time alongside field activity.
- **Sprint length: 2 weeks**; planned velocity **≈ 10 story points per sprint** (to recalibrate after Sprint 2).
- SMEs available for one 45-minute review per release, plus asynchronous comments.

## 2. Release plan

| Release | Sprints | Window (indicative) | Scope | Gate |
|---|---|---|---|---|
| R1 — Trustworthy core | S1 – S6 | Nov 2026 – Jan 2027 | All R1 Must + Should (52 SP); JAST-124 if capacity allows | R1 release criteria (PR-DOC-01 §5) |
| R2 — Scientific depth | S7 – S9 | Feb – Mar 2027 | R2 items prioritized after SME answers to SQ-01 … SQ-05 | New rules approved; regression green |
| R3 — Adoption & insight | S10 – S11 | Apr – May 2027 | Pilot, analytics, feedback, field validation | Privacy review; pilot review held |
| R4 — Platform & integration | — | H2 2027 | Subject to Stage 2 decision | Management approval |

> R1 is longer than strictly needed for 52 SP to absorb field-schedule variability and SME availability.

## 3. Sprint 1 plan — "Safety net first"

**Sprint goal:** *Every current decision path is protected by an automated test, and the repository contains a single version of the application.*

| ID | Item | SP |
|---|---|---|
| JAST-113 | Characterization tests on all 11 decision paths | 3 |
| JAST-115 | Remove obsolete app versions and entry points | 1 |
| JAST-116 | README and package metadata | 1 |
| JAST-114 | CI quality gates, protected main, CODEOWNERS | 3 |
| JAST-122 | Agree disclaimer, contact channel and sharing scope with manager | 1 |
| JAST-111 | Handle clipboard failure | 1 |
| | **Total** | **10** |

**Sprint 1 demo:** a pull request that intentionally breaks rule R-08 is blocked by CI.

## 4. Indicative sequencing for Sprints 2–6

| Sprint | Goal | Items |
|---|---|---|
| S2 | Logic as data | JAST-112 (8), JAST-101 (2) |
| S3 | Consistent, honest content | JAST-103, JAST-102, JAST-108, JAST-109, JAST-106, JAST-110 (9) |
| S4 | Scientific sign-off | JAST-120, JAST-121, JAST-107 (8) + JAST-123 (2) |
| S5 | Usable everywhere | JAST-118 (5), JAST-119 (3), JAST-105 (1) |
| S6 | Release R1 | JAST-117 (2), JAST-104 (2), buffer / JAST-124 (5) → **R1 release** |

## 5. Ceremonies (solo-adapted)

| Ceremony | Format | Time-box |
|---|---|---|
| Sprint planning | Pick items, write sprint goal in the board | 30 min |
| Weekly check | Update board; re-plan around field schedule | 10 min |
| Backlog refinement | Split, estimate, check DoR | 30 min / 2 weeks |
| Sprint review | Short demo to one stakeholder (manager or SME) when relevant | 15 min |
| Retrospective | Keep / Change / Try note in the repository | 15 min |

## 6. Tooling recommendation

- **GitHub Projects** board linked to the repository (columns: Backlog → Ready → In progress → In review → Done), importing `02-backlog.csv`.
- Labels: release (`R1`…), epic (`E1`…), type (`story`, `bug`, `spike`, `tech-task`), `needs-SME`.
- Milestones = releases.
