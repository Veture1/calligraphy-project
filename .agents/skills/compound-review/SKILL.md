---
name: compound-review
description: Review a completed change with parallel Codex reviewers and consolidate evidence-based findings before completion.
---

# Compound Review

Read the user request, diff, governing specification, acceptance criteria, and
verification contract. Run the required checks once and retain their results.

Delegate independent read-only passes in parallel when they materially improve the
review:

- `security_reviewer` for security-sensitive or dependency changes
- `repo_analyst` for cross-module execution-path mapping
- `implementation_reviewer` for the final independent decision

Ask additional focused agents to review tests, performance, or documentation only when
the touched surface warrants it. Consolidate duplicate findings and classify them P0
through P3. Findings must include a concrete failure mode and file reference; omit
style preferences without behavioral impact.

Fix blocking findings, rerun affected evidence, and request a fresh
`implementation_reviewer` pass. Completion requires `REVIEW STATUS: APPROVED`. Continue
with `$compound-learn` when the cycle produced durable project knowledge.
