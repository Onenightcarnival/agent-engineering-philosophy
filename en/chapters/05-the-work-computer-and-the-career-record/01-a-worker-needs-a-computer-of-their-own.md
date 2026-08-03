---
originalLink: /chapters/05-工作电脑与职业履历/01-打工人需要一台自己的电脑
title: A Worker Needs a Computer of Their Own
---

# A Worker Needs a Computer of Their Own

Imagine an employee whose hard drive is wiped before work every morning. The tools he installed yesterday are gone. The document he was halfway through has vanished. The environment he finally got working has to be rebuilt from scratch. However capable he is, he can only take on work that fits inside a single day, start to finish.

An agent without a persistent environment is that employee. One exchange runs to completion, state resets to zero, and the next round starts from a blank slate. It can handle small one-off tasks; it cannot carry work that spans multiple rounds and multiple days.

## The persistent sandbox is the work computer

A sandbox with a persistent volume is the work computer you issue to an agent.

What matters is not that it can run code — it's that things stay. Dependencies installed this round are still there next round. Intermediate files generated today can be picked up tomorrow. A configuration that finally works doesn't evaporate when the conversation ends. Only with a machine that never gets wiped can an agent move from stateless question-and-answer into long-running tasks with a continuous environment.

This is not an advanced feature. It is the price of admission to an entire class of tasks. Any work that crosses sessions, spans days, or builds on the output of a previous step needs an environment that doesn't reset to zero. Expecting someone whose disk is wiped daily to deliver a week-long project is a mismatch between the task and the environment.

## The work environment is part of the agent

The work environment is not temporary scaffolding outside the agent. It is part of the role itself.

A person's working state doesn't live only in their head — it lives in their computer: the files laid open, the software installed, the directories they've organized. The same holds for an agent. Whether you treat its environment as a tear-down-after-use fixture or as a workspace that persists with the role determines whether it can work continuously at all.
