# Reagent Reference

| Document ID | SC-DOC-03 | Version | 0.1 | Status | **Verification pending** | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

This is the single list of reagent references the tool may display. In the target architecture it becomes a data file (`reagents.json`, see ADR-002) so that a reference is changed **once** and propagates to every outcome.

> ⚠️ Catalogue numbers below are taken from the V2 code. Each must be checked against the current official catalogue before R1 sign-off (KR1.4). Do not add a reference without a verification date.

## 1. References used by the V2 tool

| Ref ID | Reagent | Supplier | Catalogue # | Channel | Used in outcomes | Verified on | Verified by |
|---|---|---|---|---|---|---|---|
| RG-01 | Goat anti-Rabbit HRP secondary | ProteinSimple (Bio-Techne) | 042-206 | Chemi | O4 | — | — |
| RG-02 | Goat anti-Mouse HRP secondary | ProteinSimple (Bio-Techne) | 042-205 | Chemi | O5 | — | — |
| RG-03 | Anti-Rabbit HRP conjugate, 20X | ProteinSimple (Bio-Techne) | 043-426 | Chemi | O8 | — | — |
| RG-04 | Anti-Mouse HRP, ready-to-use | ProteinSimple (Bio-Techne) | *Not specified in V2* | Chemi | O8 | — | — |
| RG-05 | Goat anti-Mouse NIR secondary | Novus Biologicals (Bio-Techne) | NBP1-75147C | NIR | O4 | — | — |
| RG-06 | Goat anti-Rabbit NIR 650 secondary | Novus Biologicals (Bio-Techne) | NBP1-72732C | NIR | O5 | — | — |
| RG-07 | Secondary for O7 (same species, mixed primaries) | — | *Not specified in V2* | Chemi | O7 | — | — |

## 2. References cited in public documentation (candidates for R2)

| Ref ID | Reagent | Catalogue # | Channel | Source | Candidate use |
|---|---|---|---|---|---|
| RG-10 | Anti-Rabbit IR secondary (Jess fluorescence detection module) | DM-008 | IR | Jess Multiplexing Technical Note | Dual-fluorescence outcome (SQ-01) |
| RG-11 | Anti-Mouse NIR secondary (Jess fluorescence detection module) | DM-009 | NIR | Jess Multiplexing Technical Note | Dual-fluorescence outcome (SQ-01) |
| RG-12 | Milk-free antibody diluent | 043-524 | — | Jess Multiplexing Technical Note | Practical tip (optional) |

## 3. Data model (target)

```json
{
  "id": "RG-01",
  "name": "Goat anti-Rabbit HRP",
  "supplier": "ProteinSimple",
  "catalogNumber": "042-206",
  "channel": "chemi",
  "hostSpecies": "goat",
  "targetSpecies": "rabbit",
  "productUrl": null,
  "verifiedOn": null,
  "verifiedBy": null,
  "notes": ""
}
```

## 4. Maintenance rules

- A reference with `verifiedOn = null` is shown with a "to be confirmed" marker in non-production builds and blocks the R1 release gate.
- Review every **6 months** or whenever a product discontinuation is announced.
- The tool never shows prices or ordering links to non-official pages.
