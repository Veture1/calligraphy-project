---
name: compound-spec-dev
description: Develop a precise, testable feature specification before implementation when requirements are ambiguous or cross several components.
---

# Compound Spec Development

Clarify the outcome, constraints, actors, failure cases, and boundaries before code is
written. Search prior lessons with `ca search` and project knowledge with `ca knowledge`
when those commands are available. For broad repositories, delegate bounded read-only
exploration to `repo_analyst` agents and synthesize their evidence.

Write material specifications to `docs/specs/<epic-id>-<slug>.md`. Express testable
requirements with EARS forms such as `When <trigger>, the system shall <behavior>`.
Include a glossary where terms could be interpreted differently, acceptance scenarios,
and Mermaid diagrams only when they clarify state, sequence, or ownership.

Ask the user only about choices that materially change the result. Record significant
decisions in `docs/decisions/` when the repository uses ADRs. Finish with explicit open
questions and a specification that can drive `$compound-plan`.
