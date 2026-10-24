# Technical Debt Register

| Document ID | SA-DOC-04 | Version | 0.1 | Status | Open | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

Interest = cost of *not* fixing (H/M/L). Principal = effort to fix (S ≤ 2 h, M ≤ 1 day, L > 1 day).

| ID | Debt | Interest | Principal | Proposed fix | Backlog |
|---|---|---|---|---|---|
| TD-01 | Two divergent application versions (`src/App.js` deployed; `src/App.tsx` + root `App.tsx` obsolete) | H | S | Delete obsolete files after characterization tests | JAST-115 |
| TD-02 | Unused entry points (`src/index.tsx`, `src/index2.tsx`, `src/index22.js`, root `index.tsx`) and duplicate `styles.css` | M | S | Delete | JAST-115 |
| TD-03 | TypeScript syntax inside a `.js` file; type checking not applied to deployed code | M | M | Migrate to `.tsx` with strict TS (ADR-003) | JAST-124 |
| TD-04 | Decision logic and outcome texts embedded in the UI component (single ~930-line file) | H | M | Rules as data + engine (ADR-002) | JAST-112 |
| TD-05 | Inline styles, no design tokens, no breakpoints | M | M | ADR-008 | JAST-118 |
| TD-06 | No tests, lint, type check, audit; deploy on every push | H | M | ADR-004, ADR-005 | JAST-113, JAST-114 |
| TD-07 | Floating 300 px disclaimer panel overlaps content on small screens | M | S | Footer on mobile | JAST-118 |
| TD-08 | Labels not programmatically linked to selects; collapsibles without `aria-expanded` | M | S | Accessibility pass | JAST-119 |
| TD-09 | Deprecated toolchain (Create React App) with large dependency tree; no lockfile committed | M | M | ADR-003; commit lockfile | JAST-124 |
| TD-10 | `package.json` name/description from a starter template; README contains "test" | L | S | Update metadata; write README | JAST-116 |
| TD-11 | `loader-utils` pinned as a direct dependency (probable workaround) | L | S | Remove after migration | JAST-124 |
| TD-12 | No releases, tags, changelog or rule-set version | M | S | SemVer + CHANGELOG + ruleset meta | JAST-117 |
| TD-13 | Decision type derived from title text (see LI-01/LI-02) | H | S | Field on outcome | JAST-101 |
| TD-14 | Corporate e-mail address displayed on a tool declared non-official | M | S | Decide contact channel with manager (RK-03) | JAST-122 |
