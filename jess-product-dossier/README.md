# Jess Assay Selection Tool — Product Dossier

| | |
|---|---|
| **Product** | Jess Assay Selection Tool ("Jess Multiplex Assistant V2") |
| **Live prototype** | https://hpkonan.github.io/jess-assay-selection-tool/ |
| **Source code** | https://github.com/hpkonan/jess-assay-selection-tool |
| **Product owner** | Dr. Henri-Philippe Konan |
| **Dossier version** | 0.1 (baseline) |
| **Status** | Draft — for review |
| **Last updated** | 2026-10-24 |

## Purpose of this dossier

This dossier turns a working web prototype into a managed product. It captures **why** the tool exists, **who** it serves, **what scientific truth** it must respect, **which rules** it executes, **what** the product must do, **how** it is built, and **what comes next** (roadmap and backlog).

It is written so that any reader — a manager, a Technical Support lead, a scientist reviewer, or a developer — can find the part relevant to them without reading the rest.

## Folder structure

| Folder | Content | Primary audience |
|---|---|---|
| [`00-product-strategy/`](00-product-strategy/) | Vision, problem statement, roadmap, OKRs and metrics, stakeholders and RACI, risk register, product decision log | Management, product leadership |
| [`01-user-requirements/`](01-user-requirements/) | Personas, user journeys, user requirements (UR-xx) | Product, UX, stakeholders |
| [`02-scientific-constraints/`](02-scientific-constraints/) | Jess platform constraints, multiplexing principles (SC-xx), reagent reference, open scientific questions, validation plan | Scientific reviewers (FAS, Tech Support, Applications) |
| [`03-functional-rules/`](03-functional-rules/) | Decision-tree specification, decision table (R-xx), outcome catalogue (O-x), behavioural rules (BR-xx), test scenarios, known logic issues | Product, QA, developers, scientific reviewers |
| [`04-product-requirements/`](04-product-requirements/) | Product Requirements Document (PR-xx), non-functional requirements (NFR-xx), UX and content guidelines | Product, design, developers |
| [`05-solution-architecture/`](05-solution-architecture/) | Current-state architecture, target architecture, architecture decision records (ADR-xxx), technical debt register | Developers, IT reviewers |
| [`06-delivery/`](06-delivery/) | Product backlog (epics and user stories), importable backlog CSV, release plan and first sprint, Definition of Ready / Done | Product owner, delivery team |

## Reading paths

- **"I have 5 minutes"** → `00-product-strategy/01-product-vision-and-strategy.md`
- **"Is the science right?"** → `02-scientific-constraints/` then `03-functional-rules/02-decision-table.md`
- **"What should be built next?"** → `00-product-strategy/02-product-roadmap.md` then `06-delivery/01-product-backlog.md`
- **"How does the code work and what must change?"** → `05-solution-architecture/`

## Identifier scheme and traceability

Every requirement carries a stable ID so it can be traced end to end:

| Prefix | Meaning | Defined in |
|---|---|---|
| `P1–P4` | Personas | 01-user-requirements |
| `UR-xx` | User requirement | 01-user-requirements |
| `SC-xx` | Scientific constraint | 02-scientific-constraints |
| `SQ-xx` | Open scientific question | 02-scientific-constraints |
| `Q1–Q5` | Decision-tree question | 03-functional-rules |
| `R-xx` | Decision rule (row of the decision table) | 03-functional-rules |
| `O1–O8` | Recommendation outcome | 03-functional-rules |
| `BR-xx` | Behavioural (UI) rule | 03-functional-rules |
| `LI-xx` | Known logic issue in the current build | 03-functional-rules |
| `PR-xx` | Product (functional) requirement | 04-product-requirements |
| `NFR-xx` | Non-functional requirement | 04-product-requirements |
| `ADR-xxx` | Architecture decision record | 05-solution-architecture |
| `TD-xx` | Technical debt item | 05-solution-architecture |
| `PD-xx` | Product decision | 00-product-strategy |
| `RK-xx` | Risk | 00-product-strategy |
| `E1–E9` / `JAST-xxx` | Epic / backlog item | 06-delivery |

The chain is: **User need (UR) → constrained by science (SC) → expressed as rules (R / O / BR) → specified as product requirements (PR / NFR) → implemented by architecture (ADR) → delivered through backlog items (JAST)**. Each backlog item references the upstream IDs it satisfies.

## Document conventions

- Language: English (US spelling).
- Priorities use **MoSCoW** (Must / Should / Could / Won't for now).
- Status values: `Draft` → `In review` → `Approved` → `Superseded`.
- Statements of scientific fact cite a source or are flagged **[To verify]**.
- Diagrams are written in Mermaid so they render natively on GitHub.

## Baseline used for this version

This version (0.1) was reverse-engineered from the repository as of commit `533837d` ("Add decisionType logic for result display"). The deployed application is the JavaScript version (`src/index.js` → `src/App.js`, labelled "V2"). A second, older TypeScript version (`src/App.tsx`, also copied at the repository root) is still present and diverges from it; see `05-solution-architecture/01-current-state-architecture.md`.

## Change log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-24 | H.-P. Konan | Initial dossier reverse-engineered from the V2 prototype |
