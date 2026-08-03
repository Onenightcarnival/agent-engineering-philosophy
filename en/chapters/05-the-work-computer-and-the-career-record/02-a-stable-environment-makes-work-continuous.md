---
title: A Stable Environment Makes Work Continuous
---

# A Stable Environment Makes Work Continuous

What's on the work computer? Files, dependencies, configuration, caches, half-finished projects. Together they form the agent's work environment — the ground it stands on when it picks up where it left off.

For the environment to do its job, the first requirement is stability: what got working today is still there tomorrow; what this round produced, the next round can find. If the environment has to be rebuilt every time, the employee spends half of every morning setting up their desk again. Little time is left for actual work, and continuity is off the table.

## Stability is not letting things pile up

Stability means the environment persists reliably. It does not mean dumping everything in and never looking back.

A long-lived work environment accumulates things naturally. Some deserve to stay — stable dependencies, organized projects, reusable configuration. Some deserve to go — expired caches, one-off temp files, the debris of trial and error. Designing the environment as part of the agent means versioning and maintaining it, treating it like a machine in long-term service rather than a space thrown together and left to rot. When the environment's state can be rebuilt, and can be rolled back to a known-good version, stability stops being a fragile accident.

## The work computer is also a boundary

The sandbox has a second identity: while giving the agent a work environment, it is also an isolation boundary.

What the agent can touch is what's on this machine, inside this sandbox. What it can't reach is where it cannot go. This makes the work computer and the permission boundary two faces of the same thing — the place where the agent settles in and works, and the physical fence marking how far it can reach. Provision the environment and you draw the fence in the same motion: what the agent should touch lives inside the sandbox, what it shouldn't stays outside. Continuity of environment and clarity of boundary get designed together, here.
