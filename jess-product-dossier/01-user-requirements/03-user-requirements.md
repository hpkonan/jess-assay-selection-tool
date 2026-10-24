# User Requirements

| Document ID | UR-DOC-03 | Version | 0.1 | Status | Draft | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

User requirements describe **what users need to achieve**, independent of the solution. They are refined into product requirements (PR-xx) in `04-product-requirements/`.

Status legend: **Met** (fully met by V2), **Partial**, **Not met**.

## 1. Decision support

| ID | Requirement | Persona | Priority | V2 status |
|---|---|---|---|---|
| UR-01 | The user needs to obtain a recommended multi-target workflow (multiplex, mixed detection, RePlex) for two targets on Jess. | P1, P2, P3 | Must | Met |
| UR-02 | The user needs to be told to validate each target individually before any multi-target workflow if this has not been done. | P1–P4 | Must | Met |
| UR-03 | The user needs to understand **why** a workflow is recommended. | P1, P2 | Must | Met |
| UR-04 | The user needs to know **which reagents** (secondary antibodies, conjugates) to use for the recommended configuration. | P2, P3 | Must | Partial — not for all outcomes (see O7) |
| UR-05 | The user needs practical tips that increase the chance of success (e.g. probing order in RePlex). | P1, P2 | Should | Partial |
| UR-06 | The user needs to be clearly redirected to Technical Support when the configuration is not covered by validated guidance. | P2, P3 | Must | Met |
| UR-07 | The user needs to receive a recommendation that takes into account the relative abundance of the two targets. | P1, P2 | Should | Not met (generic note only) |
| UR-08 | The user needs guidance when the two targets have the same or very close MW but should both be detected by fluorescence. | P1, P2 | Should | Not met |
| UR-09 | The user needs to be able to include total protein normalization in the plan. | P2 | Could | Not met |

## 2. Efficiency and usability

| ID | Requirement | Persona | Priority | V2 status |
|---|---|---|---|---|
| UR-10 | The user needs to reach a recommendation in **less than 2 minutes** and with no more than 5 questions. | P1, P3 | Must | Met |
| UR-11 | The user needs to see only the questions relevant to previous answers. | All | Must | Met |
| UR-12 | The user needs to change an earlier answer and see the recommendation update immediately, without inconsistent leftovers. | P1 | Must | Met |
| UR-13 | The user needs to restart from scratch in one action. | P1 | Should | Met |
| UR-14 | The user needs to copy the full recommendation into an email, notebook or ticket. | P1, P3 | Must | Met |
| UR-15 | The user needs to use the tool comfortably on a phone or tablet in a lab. | P1, P2 | Should | Not met (fixed two-column layout) |
| UR-16 | The user needs to see how far they are in the flow. | All | Could | Partial (progress logic imprecise — see LI-04) |
| UR-17 | Users relying on assistive technologies need to operate all questions and buttons. | All | Should | Partial |

## 3. Trust and transparency

| ID | Requirement | Persona | Priority | V2 status |
|---|---|---|---|---|
| UR-18 | The user needs to know that the tool is a guidance aid, not official vendor software, and who maintains it. | All | Must | Met |
| UR-19 | The user needs to know which version of the guidance produced a recommendation (to compare over time). | P1, P3 | Should | Not met |
| UR-20 | The user needs recommendation texts written for them (not internal notes to the author). | All | Must | Partial (see LI-03) |
| UR-21 | The user needs to report an error or suggest an improvement easily. | P1, P3 | Could | Not met |

## 4. Privacy and access

| ID | Requirement | Persona | Priority | V2 status |
|---|---|---|---|---|
| UR-22 | The user needs to use the tool without creating an account or entering personal or sample data. | All | Must | Met |
| UR-23 | The user needs the tool to be available through a simple public link. | All | Must | Met |

## 5. Traceability to product requirements

| UR | Product requirements |
|---|---|
| UR-01, UR-02, UR-06 | PR-01 → PR-05 |
| UR-03, UR-04, UR-05 | PR-06 → PR-08 |
| UR-07, UR-08, UR-09 | PR-20 → PR-23 |
| UR-10 → UR-13, UR-16 | PR-09 → PR-12 |
| UR-14 | PR-13 |
| UR-15, UR-17 | NFR-03, NFR-04 |
| UR-18, UR-19, UR-20, UR-21 | PR-14 → PR-17 |
| UR-22, UR-23 | NFR-06, NFR-07 |
