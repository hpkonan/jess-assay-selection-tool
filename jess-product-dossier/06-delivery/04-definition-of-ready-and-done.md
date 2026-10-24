# Definition of Ready and Definition of Done

| Document ID | DL-DOC-04 | Version | 0.1 | Status | Draft | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

## Definition of Ready (an item can enter a sprint when…)

- [ ] It has a clear title and, for stories, a user-story statement (*As a … I want … so that …*).
- [ ] Acceptance criteria are written and testable.
- [ ] It references at least one upstream ID (UR, SC, SQ, PR, NFR, LI, TD, ADR, OKR).
- [ ] It is estimated (≤ 8 SP; larger items are split).
- [ ] Scientific dependencies are resolved: any related SQ-xx has an SME answer recorded.
- [ ] Reagent references needed by the item are verified (or the item is explicitly about verifying them).

## Definition of Done (an item is done when…)

**For all items**
- [ ] Acceptance criteria met and demonstrated.
- [ ] Code merged through a pull request; CI green (lint, type check, tests, content checks, build, audit).
- [ ] No new High/Medium logic issue introduced.
- [ ] Documentation updated in this dossier where affected (decision table, outcome catalogue, requirements, ADRs).
- [ ] CHANGELOG entry added.

**Additionally, for items changing scientific content (`content/`, outcomes, reagents)**
- [ ] Decision table and outcome catalogue updated.
- [ ] Table-driven tests updated and green for every affected rule.
- [ ] Approved by at least one SME via CODEOWNERS review (two for a new rule or outcome).
- [ ] Rule-set version incremented and decision recorded (PD-xx).

**Additionally, for UI items**
- [ ] Checked at 360, 768 and 1280 px.
- [ ] Keyboard-only walkthrough done; automated accessibility check passed.
- [ ] Texts comply with the content guidelines.

## Definition of Done for a release

- [ ] All release-gate criteria met (PR-DOC-01 §5).
- [ ] Git tag and release notes published.
- [ ] Stakeholder update sent (communication plan, PS-04 §4).
