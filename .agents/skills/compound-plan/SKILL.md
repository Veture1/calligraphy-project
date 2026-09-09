---
name: compound-plan
description: Turn an approved specification or concrete request into an implementation plan with dependencies, acceptance criteria, and required evidence.
---

# Compound Plan

Read the governing specification, relevant `AGENTS.md` files, and existing architecture.
Search Compound Agent memory and knowledge when available. Delegate independent,
read-only exploration to `repo_analyst`; use `invariant_designer` when state, concurrency,
persistence, or security properties matter.

Create a small sequence of independently verifiable tasks. For each task state the
owned files or subsystem, dependency, acceptance criterion, and validation command.
Add an `## Acceptance Criteria` table and a `## Verification Contract` to the spec when
it has a stable file. Tailor evidence to the changed surface: tests and lint as the
baseline, then build, runtime, API contract, browser, migration, packaging, or docs
checks only when applicable.

Use beads for task tracking when it is initialized. Resolve decisions that would alter
scope with the user before implementation. Hand the approved plan to `$compound-work`.
