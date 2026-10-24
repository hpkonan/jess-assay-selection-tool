# Non-Functional Requirements

| Document ID | PR-DOC-02 | Version | 0.1 | Status | Draft | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

| ID | Category | Requirement | Measure / acceptance | Priority | V2 status |
|---|---|---|---|---|---|
| NFR-01 | Performance | The page shall be interactive quickly on a mobile connection, and recomputing a recommendation shall feel instantaneous. | Time to interactive < 2.5 s on a simulated 4G profile; outcome update < 100 ms | Must | Likely met (≈ 50 kB gzipped JS) — to measure |
| NFR-02 | Availability | The tool shall be served as a static site with no runtime backend. | No server-side dependency; hosted on a static host with HTTPS | Must | Met (GitHub Pages) |
| NFR-03 | Responsiveness | The layout shall be usable from 360 px wide screens upward with no horizontal scrolling and no content hidden by fixed panels. | Manual check at 360, 768, 1280 px | Should | Not met (fixed 2-column grid; floating disclaimer 300 px) |
| NFR-04 | Accessibility | The interface shall meet WCAG 2.1 level AA for the main flow. | Labels programmatically linked to selects; full keyboard operation; visible focus; contrast ≥ 4.5:1; status not conveyed by color alone; automated audit score ≥ 95 | Should | Partial (labels not linked; collapsible headers lack `aria-expanded`) |
| NFR-05 | Compatibility | Latest two versions of Chrome, Edge, Firefox and Safari, desktop and mobile. | Smoke test per release | Must | Not verified |
| NFR-06 | Access | Public URL, no login, no installation. | — | Must | Met |
| NFR-07 | Privacy | No personal data shall be collected or stored: no names, emails, institutions, sample information or free text; no cookies requiring consent. Analytics, if enabled, shall be anonymous and aggregate. | Privacy review of event schema before activation | Must | Met (no collection today) |
| NFR-08 | Security | HTTPS only; no third-party scripts other than explicitly approved ones; dependencies scanned for known vulnerabilities on each build. | Dependency audit in CI with no high/critical findings in production dependencies | Should | Not met (no scanning) |
| NFR-09 | Maintainability | Scientific rules, outcomes and reagents shall be stored as data, validated against a schema, and editable without modifying UI components. | Rules change = data-file change only; schema validation in CI | Must | Not met (logic embedded in component) |
| NFR-10 | Testability | 100 % of decision rules and listed behavioural rules covered by automated tests that block deployment on failure. | CI report | Must | Not met (no tests) |
| NFR-11 | Traceability | Every displayed and copied recommendation shall carry the application version and rule-set version. | Visible in UI and in copied text | Should | Not met |
| NFR-12 | Content quality | User-facing text in plain English, active voice, no internal notes; scientific terms explained at first use. | Content checklist in guidelines | Must | Partial (LI-03) |
| NFR-13 | Resilience | The tool should remain usable with intermittent connectivity once loaded (e.g. installable / cached). | Works offline after first load | Could | Not met |
| NFR-14 | Code quality | Typed code, lint and format checks enforced in CI. | Type check and lint pass | Should | Not met (TypeScript syntax in a `.js` file; TS config not applied to deployed code) |
