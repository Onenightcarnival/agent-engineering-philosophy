---
title: Redesigning a Truth-Seeking Team
---

# Redesigning a Truth-Seeking Team

This book began with one judgment: the agent is an engineering object one level above the model.

The model is a candidate, not an employee. The system prompt is a job description, not an incantation. A skill is a capability asset, not a tool call. The persistent sandbox is a work computer, not temporary scaffolding. Long-term memory is a career record, not chat history. Evals are the probation period, not another leaderboard.

At the end of the road, one agent becomes many, and the problem rises a level with it: a team stands on a clear set of role relationships. Drawing more lines between boxes accomplishes nothing.

Those role relationships cannot be copied from human organizations either. Many roles and processes in human organizations are patches that grew over small human context windows, difficult role-switching, and slow information transfer. Agents can process larger contexts, spin up isolated roles on demand, and recombine capabilities across tasks more easily. The old structures get audited first; only then do you decide what stays.

There is exactly one audit criterion: does it help the team get closer to the truth?

## Don't Simulate a Company

The easiest way for multi-agent engineering to go wrong is to simulate a human company.

Give agents managers, employees, meetings, reports, and approvals, and it looks like an organization — but you may have imported only the shell. What should be imported are the constraints of collaboration: role boundaries, handoff contracts, delegation paths, work records, a final point of accountability.

Human organizations have long experience with how a group of roles works together, and much of it is worth learning. They have also been long deformed by human self-interest, fear, and appetite for power, and much of that should not come along. Mixing the two is the most dangerous shortcut in agent team design.

Keep the coordination mechanisms, delete the organizational theater, and handle the agents' new problems with new mechanisms.

## Headcount Is Not a Team

The value of multi-agent is not in the number.

Ten agents sharing one context and repeating one bias are no more a team than a single agent is. Three agents with clear roles, isolated contexts, clean handoffs, and the ability to correct each other come closer to being one.

What makes a team is not "many." It is difference by design, with someone finally responsible for the tradeoffs. The critic role must actually be able to criticize. The verification role must actually be able to veto factual errors. The editor role must actually be able to sacrifice local correctness. Without these, so-called multi-agent is just parallel generation.

Nor is a team made by slicing fine. If a generalist agent with a sufficiently clear JD, tools, memory, and permissions can finish the task, forcing it apart into several roles is not necessarily more robust. Real splits come from task structure, risk boundaries, and the independence of fact-finding — not from the feeling of having an organization.

## All Three Kinds of Team Must Guard Against Self-Confirmation

A multi-agent system must guard against same-source error. When a group of agents shares the same material, the same hint, the same wrong premise, more agents only make the error look more like consensus. Independent contexts, adversarial roles, cross-evals, and paths back to raw material must ensure that similar conclusions really came from different judgments.

A hybrid human-agent system must guard against humans using agents for self-confirmation. A person starts with a preference, has agents organize the evidence, and finally sees a beautiful report — it is easy to mistake it for a conclusion delivered by external facts. User preference and judgments of fact must be recorded separately. A human may veto on risk, but may not disguise expectation as evidence.

A pure agent system must guard against the optimization loop swallowing its external constraints. Goals, budgets, permissions, stopping conditions, and the kill switch cannot be left to the self-assessment of the system being optimized. No human in the operating loop does not mean no responsibility; responsibility must land on a party that can be traced, stopped, rolled back, and held to account.

The three kinds of team look different on the surface. The underlying problem is the same: will the system package "the answer I wanted" as "this is how things are"?

## Hold Three Lines

Truth over flattery. Agents are good at making words flow and conclusions comfortable. Team design must reward facts, not pleasant sounds.

Accountability over deflection. Work can be split; responsibility cannot be split out of existence. A multi-agent system must have a final point of accountability, and a person or organization that finally bears the consequences.

Restraint over excess. Can automate does not mean should automate. Can parallelize does not mean should parallelize without limit. Can make agents generate more does not mean more is better.

Multi-agent engineering cannot simulate a company, and it cannot just shard tasks across more models. The new team must serve truth-seeking: keep the structures collaboration needs, delete the organizational theater, then add the error defenses agents themselves require. And at the end, there must still be a party that can bear the consequences.

Software systems now contain autonomous roles that can take a job, collaborate, and leave a track record. The engineering object has changed. What you design now includes call flows — and a kind of role that works, and the structure of responsibility once those roles form a team.
