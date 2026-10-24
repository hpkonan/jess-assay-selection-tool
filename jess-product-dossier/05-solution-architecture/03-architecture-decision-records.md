# Architecture Decision Records

| Document ID | SA-DOC-03 | Version | 0.1 | Status | Living document | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

Format: lightweight ADR (context → decision → consequences). Status: Proposed / Accepted / Superseded.

---

## ADR-001 — Static single-page application without backend

- **Status:** Accepted (existing)
- **Context:** The tool evaluates a small decision tree from user answers. No data needs to be stored or shared between users. A backend would add cost, security surface and data-protection obligations.
- **Decision:** Keep the tool a static, client-side SPA served from a static host.
- **Consequences:** ➕ zero running cost, high availability, no personal data. ➖ No server-side analytics or shared state; any future feature needing persistence (saved designs, accounts) requires revisiting this ADR.

---

## ADR-002 — Scientific rules, outcomes and reagents as versioned data

- **Status:** Proposed (R1)
- **Context:** In V2, the decision logic is a nested `if/else` inside the React component and outcome texts are duplicated per branch (LI-06). SMEs cannot review the logic without reading code; a reagent change must be edited in several places.
- **Decision:** Store questions, rules (decision table), outcomes and reagents in JSON files under `content/`, validated by JSON Schemas, and evaluate them with a pure `evaluate()` function. Attach a `ruleset.meta.json` with version and approval information.
- **Alternatives:** (a) keep logic in code but refactor into a `switch`-based module — simpler, but still requires code reading for review; (b) use a third-party rules engine — unnecessary for ~11 rules.
- **Consequences:** ➕ SME review on data; single source of truth; exhaustive automated checks possible; reusable engine. ➖ Small up-front effort; a schema to maintain.

---

## ADR-003 — Migrate from Create React App to Vite with strict TypeScript

- **Status:** Proposed (R1–R2)
- **Context:** Create React App has been deprecated by the React team and is no longer recommended for new projects. The repository mixes TypeScript syntax in `.js` files; `tsconfig.json` does not apply to the deployed code. The dependency tree is large (≈ 1,300 packages installed).
- **Decision:** Migrate to Vite + React + TypeScript (`strict`), keep the `base` path `/jess-assay-selection-tool/`, commit a lockfile.
- **Consequences:** ➕ maintained toolchain, faster builds, real type checking, smaller dependency tree. ➖ Migration effort; must be done after characterization tests (ADR-004) to avoid regressions.

---

## ADR-004 — Test strategy: table-driven unit tests + end-to-end smoke tests

- **Status:** Proposed (R1)
- **Context:** No tests exist; every push deploys to production (RK-05).
- **Decision:** (1) Unit tests (Vitest) on the engine, generated from the decision table so that every rule R-xx is a test case; (2) content integrity checks (completeness, exclusivity, references); (3) component tests (Testing Library) for behavioural rules BR-xx; (4) a small Playwright suite for the main paths.
- **Consequences:** ➕ any rule change is immediately verified; tests document the science. ➖ Tests must be updated with each approved rule change (part of Definition of Done).

---

## ADR-005 — Continuous integration gates and protected main branch

- **Status:** Proposed (R1)
- **Context:** The current workflow deploys on every push to `main` without checks.
- **Decision:** Split CI into `ci.yml` (lint, type check, tests, content checks, build, audit — on pull requests) and `deploy.yml` (on merge to `main`, only if CI passed). Protect `main`; require review from CODEOWNERS for `content/`.
- **Consequences:** ➕ no untested change reaches users; SME approval enforced for scientific content. ➖ Slightly slower publishing; requires at least one reviewer account for `content/`.

---

## ADR-006 — Anonymous, cookie-less usage analytics (deferred)

- **Status:** Proposed (R3) — requires privacy review
- **Context:** OKR 3 requires completion rate, drop-off step and outcome distribution. NFR-07 forbids personal data.
- **Decision:** Use an adapter that emits only `{event, questionId, optionId, outcomeId, rulesetVersion, appVersion}` to a cookie-less analytics provider or a minimal self-hosted counter. Disabled by default until approved.
- **Consequences:** ➕ evidence for the pilot; no consent banner needed if truly anonymous. ➖ Provider choice must be validated with management/IT before Stage 2.

---

## ADR-007 — Answer state encoded in the URL

- **Status:** Proposed (R2)
- **Context:** FAS and Technical Support want to share a configuration (UR-14).
- **Decision:** Serialize answers as short IDs in the query string (e.g. `?q1=yes&q2=diff&q3=yes&q4b=no`). No free text is ever placed in the URL.
- **Consequences:** ➕ shareable, bookmarkable recommendations; no storage. ➖ Links must remain valid across rule-set versions (include `rs=` version parameter and handle unknown values gracefully).

---

## ADR-008 — Design tokens and CSS modules instead of inline styles

- **Status:** Proposed (R1)
- **Context:** All styles are inline objects; no breakpoints; colors repeated in code.
- **Decision:** Define design tokens (colors, spacing, radii) as CSS custom properties and use CSS modules per component, with responsive breakpoints from the UX guidelines.
- **Consequences:** ➕ responsive layout (NFR-03), consistent badges, easier theming (e.g. corporate styling at Stage 2). ➖ Refactor of the UI layer.
