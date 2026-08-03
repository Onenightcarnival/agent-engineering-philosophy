---
originalLink: /chapters/07-当团队里有很多agent/01-团队不是多agent编排
title: A Team Is Not Multi-Agent Orchestration
---

# A Team Is Not Multi-Agent Orchestration

When multiple agents work together, the standard framing is multi-agent orchestration: treat each agent as a node, draw the edges, define who calls whom and in what order.

This is flowchart thinking again. What a framework unifies is the flowchart, not the agents; orchestration is the same move replayed at the team level — it draws the call topology, not the team.

## A Wiring Diagram Cannot Capture Role Relationships

In a real team, what matters is not who calls whom. It is the role relationships: who owns which piece, who delivers to whom, who answers for whose output, and who takes the fall when things go wrong.

A call topology cannot express any of this. An edge between two agents says only that A triggers B. It says nothing about what A hands to B, who verifies B's output, or who owns the failure. An orchestration diagram can be elegant and run end to end while the role relationships behind it are a mess — overlapping duties, deliverables nobody owns, responsibility with nowhere to land. A pipeline that runs is not a team that works.

## Design the Relationships First, Then the Wiring

So designing an agent team follows the same order as designing an agent: define the relationships first, then talk implementation.

Get the role relationships straight — each role's responsibilities, what it delivers to whom, who answers for its output. Once those are settled, how the calls are wired is just a technical choice. Orchestration implements role relationships; it is not the relationships themselves. Reverse the order — build an orchestration diagram first, then work out afterward what each node is for — and you are back at the wrong starting point from chapter 1: busy building structure before figuring out what the thing is.

But designing relationships first does not mean shredding the roles first. Clear roles and fragmented roles are two different things. Clear means responsibilities, permissions, deliverables, and escalation conditions are defined. Fragmented means a judgment that could have been made in one continuous pass gets chopped into segments, and handoff costs eat the gains of collaboration.

The first question for a team is not which orchestration framework to use, or how many agents to split into. It is which boundaries actually exist. Real boundaries come from task structure, risk boundaries, and factual independence. Absent those reasons, one more agent is just one more interface.
