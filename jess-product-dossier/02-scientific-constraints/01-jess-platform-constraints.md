# Jess Platform Constraints

| Document ID | SC-DOC-01 | Version | 0.1 | Status | In review (SME) | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

This document summarizes the properties of the Jess platform that **constrain** multi-target assay design. They are the scientific ground truth the decision rules must respect. Facts are referenced to public Bio-Techne documents (see §5); statements not yet checked against a source are marked **[To verify]**.

## 1. Principle of the measurement

- Jess is an automated, capillary-based Simple Western system: proteins are separated by size in a capillary, immobilized in the capillary, then detected by immunoassay. [Ref 1, 2]
- Throughput: up to 25 samples per run, in roughly 3 hours. [Ref 2]
- Because proteins are covalently immobilized in the capillary, antibodies from a first immunoassay can be removed and the same capillary probed again (RePlex). [Ref 2]

## 2. Detection channels

| Channel | Chemistry | Used with | Consequence for design |
|---|---|---|---|
| Chemiluminescence | HRP-conjugated secondary + substrate | Most validated Simple Western immunoassays | **One chemiluminescence channel**: two targets read in chemi in the same immunoassay can only be told apart by their migration position (MW) |
| Fluorescence — NIR | NIR-labelled secondary | Second target, total/phospho pairs | Separate channel from chemi and from IR |
| Fluorescence — IR | IR-labelled secondary | Second fluorescent target | Separate channel from chemi and from NIR |

Jess offers chemiluminescence plus two fluorescence channels (IR and NIR). [Ref 1]

## 3. Size separation

| Item | Constraint | Source |
|---|---|---|
| Separation module 12–230 kDa | Used in the Jess fluorescent multiplexing technical note | Ref 1 |
| Other separation ranges (e.g. low-MW and high-MW modules) | Exist; selection depends on target MW | **[To verify]** — confirm current module ranges and catalogue numbers |
| Resolution | Two targets are distinguishable in a single channel only if their peaks do not co-migrate | Ref 1 |

> **Implication:** "Same or very close MW" (Q2) is a proxy for "the two peaks would overlap in one channel". A quantitative threshold is not defined today — see SQ-03.

## 4. RePlex (sequential probing in the same capillary)

| Property | Value / description | Source |
|---|---|---|
| Principle | Two sequential immunoassays in the same capillary; antibodies of probe 1 are removed with the RePlex reagent, then probe 2 is applied (new antibodies or total protein detection) | Ref 2 |
| Antibody removal efficiency | > 96 % for all antibodies tested, most ≥ 98 %; residual signal therefore not strictly zero | Ref 2 |
| Same secondary species in both probes | Demonstrated without carry-over | Ref 2 |
| Mixed chemi + fluorescence within a probe | Demonstrated (phospho target in chemi, pan target in NIR, same probe) | Ref 2 |
| Total protein in probe 2 | Possible (biotinylation, streptavidin-HRP detection) | Ref 2 |

> **Implication for probing order:** because removal is high but incomplete, placing the **lower-abundance target in the first probe** limits the impact of residual signal from an abundant first target. This supports the practical tips attached to outcomes O2 and O3.

## 5. References

1. Bio-Techne / ProteinSimple — *Jess Multiplexing Technical Note* (PL7-0040 Rev A). https://resources.bio-techne.com/bio-techne-assets/docs/literature/PL7-0040_Jess_Multiplexing_TechNote_RevA.pdf
2. Bio-Techne / ProteinSimple — *Reprobe your immunoassay samples using RePlex with Jess*. https://resources.bio-techne.com/bio-techne-assets/docs/literature/reprobe_your_immunoassay_samples_using_replex_with_jess.pdf
3. Bio-Techne — *Multiplexed fluorescent westerns on Simple Western*. https://resources.bio-techne.com/bio-techne-assets/docs/literature/multiplexed-fluorescent-westerns-simple-western.pdf

> Documents are cited as background evidence. The SME review (see `05-scientific-validation-plan.md`) must confirm that the latest official versions are used.
