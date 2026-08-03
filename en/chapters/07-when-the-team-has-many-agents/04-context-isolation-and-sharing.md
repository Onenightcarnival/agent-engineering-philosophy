---
originalLink: /chapters/07-当团队里有很多agent/04-上下文隔离与共享
title: Context Isolation and Sharing
---

# Context Isolation and Sharing

The most common misconception about multi-agent systems is that the more agents there are, the more each one should know. So every agent shares the same context, reads the same pile of material, sees the same history, and produces a set of judgments that look independent but come from a single source.

That is not teamwork. It is a crowd of characters talking inside one head.

## Isolation Preserves Difference

The first thing to do after splitting into multiple agents is isolate.

The critique agent should not first read the lead writer's self-defense, or it will keep walking the writer's path. The fact-checking agent should not first accept the conclusion, or it will hunt for evidence to support it. The style agent should not decide the structure agent's arguments, or tone will crowd out judgment.

What context isolation preserves is difference in judgment. Different roles see different material and bring different standards to the same problem — that is the only way they can correct each other. Start everyone from the same context, swap in a few role names, and you usually get the same bias recited several times.

So the first design principle of multi-agent systems: do not share all context by default. First ask what this role needs to know — and what it must not be influenced by in advance.

## Sharing Completes the Handoff

But isolation must not swing to the other extreme. Fully isolated agents are just several people each writing their own answer sheet — not a team.

Sharing happens at handoff points. What upstream hands downstream should not be its entire thought process, but the deliverable downstream needs: conclusions, evidence, open questions, risk flags, boundaries not to cross. Pass too little and the downstream lacks grounds for judgment; pass too much and it drowns in noise — and inherits upstream's biases more easily.

Context design for a multi-agent team is exactly this: deciding what to isolate, and what to compress and share at the handoff.

## Share the Truth, Isolate the Judgment

A useful cut: share the truth, isolate the judgment.

Factual material, constraints, and the final delivery standard should be shared as widely as possible. They are the common ground the team judges against. Judgment processes, working hypotheses, and draft preferences should be isolated by role. Differences between roles should come from their distinct judgment tasks, not from inconsistent facts.

If all the agents share one set of judgments, they do not form a team. They form an echo. The value of multiple agents is not in the headcount — it is in the designed-in difference.
