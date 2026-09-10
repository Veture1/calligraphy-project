---
name: compound-learn
description: Capture durable lessons after corrections, resolved failures, or significant project decisions without bloating project memory.
---

# Compound Learn

Review the task, diff, failures, corrections, and decisions. A lesson is worth storing
only when it is novel, project-specific, and actionable. Search for duplicates with
`ca search` before adding anything.

Use `ca learn` to store lessons; never edit `.compound-agent/lessons/index.jsonl`
directly. Classify the item as a lesson, solution, pattern, or preference and connect
superseded or related items when supported. Show the proposed lesson and obtain the
user's explicit confirmation before storing any lesson; after confirmation, use
`ca learn --yes`. Skip generic advice, one-off facts, and conclusions already encoded
in tests, lint rules, or documentation.

Update affected docs or ADRs when the implementation changed a documented contract.
Report what was stored and why it should influence future work.
