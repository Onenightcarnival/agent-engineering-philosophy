---
title: Without a Stable Abstraction, Every Framework Is Fake
---

# Without a Stable Abstraction, Every Framework Is Fake

Step one of building an agent is usually picking a framework. LangChain, LangGraph, CrewAI, Dify — the list is long, and every entry claims to have solved the complexity of agent development. But lay them out side by side and what they unify isn't the agent. It's the flowchart.

## Frameworks unify flowcharts, not agents

Frameworks are useful because they gather what is genuinely common into one structure, so nobody has to build from scratch every time. That only works under one precondition: the thing being gathered has already taken shape. Spring-style frameworks stand because objects, dependencies, and lifecycles had been stable in enterprise software for decades — clear structure, clear boundaries. A framework that unifies along a stable structure unifies something real.

Agents didn't meet that precondition. "What is an agent" had no answer yet. With no stable internal structure to grab onto, frameworks grabbed what was observable on the surface — the order in which calls happen, hence Chain; branching between calls, hence Graph, Node, Edge. These words come from the flowchart of one agent run, not from the parts of an agent itself.

Flowcharts change, because businesses change. The customer-support flow, the risk-control flow, the coding flow — no one diagram fits over another. And the most important decision of all, when the agent stops, varies every single time: some runs finish after one pass, some iterate to convergence, some wait for a human to sign off. The termination condition lives in the business, not in the framework. A framework can hand you the pen. It cannot hand you the drawing.

## The complexity is narrative, not technical

Take the intimidating concepts apart and you find ordinary code. Memory is a list. Retrieval is a lookup before the call. The loop is a while. None of it is complex on its own. The weight the word "framework" carries comes mostly from narrative, not from technology. "We built an agent orchestration platform" is a far better story than "we wrapped a few API calls." The narrative talks the complexity up first; then the framework arrives to solve the complexity the narrative invented.

Force a framework onto ground where no stable abstraction exists and the outcome is preordained: all it can unify is surface-level boilerplate. That layer bears no weight for the business, yet you must learn its concepts first, submit to its constraints, and when something breaks, debug through it to find the problem. The cost is real. The benefit is narrative.

## The first question is not "which framework"

A framework is the product of an answer, not the answer itself. A field needs a stable abstraction before a framework has anything to unify; until the abstraction stands, every framework can only circle the surface.

So the first question in agent engineering has never been "which framework." It's "what is an agent, exactly?" At the time, that question was wide open. This book starts there.
