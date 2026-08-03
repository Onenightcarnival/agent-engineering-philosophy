---
originalLink: /chapters/00-序章/01-不是又一本agent框架指南
title: Not Another Agent Framework Guide
---

# Not Another Agent Framework Guide

## Introduction

The agent field is drowning in how-to. Framework docs, orchestration tutorials, multi-agent cheat sheets, prompt template collections, "the N agent frameworks to watch this year" — all of them assume the reader wants to know exactly one thing: how to build it.

How to attach tools, how to wire up multi-agent pipelines, how to write a ReAct loop, how to hook up MCP. These questions deserve answers, but behind them sits one shared blind spot: almost nobody stops to ask what engineering itself has to change when agents move into the core of a software system.

This book is about how to think, and only then about how to build.

## What This Book Does

This book answers one question: when agents move into the core of a software system, what engineering should do.

It expresses a personal point of view, with explicit preferences, judgments, and taste. The biases and blind spots are laid out in the next article, so you can calibrate.

The book does three things.

Establish a stable abstraction. What is an agent, really? Without an answer, frameworks can only unify surface-level workflow, and the parts just pile up next to each other. Chapter 1 starts there.

Walk the abstraction through an agent's whole life. Birth, hiring, onboarding, settling in, probation, promotion, retirement — these sound like human resources, but each maps to an engineering question: where the model comes from, how the role gets defined, how capabilities get filled in, how the environment persists, how performance gets verified, when to transfer or decommission.

Go from the individual to teams and organizations. One agent is just a role; put many agents together and you get division of labor, handoffs, delegation, escalation paths, performance records, and final responsibility. Drawing a few more arrows between boxes does not solve these problems.

The starting assumption: you already know how to get an agent running. The question now is how to engineer it into a reliable role you can actually work with. So how to call a particular SDK's API, how to configure a particular framework's workflow, the loop mechanics of ReAct versus Plan-and-Execute — dedicated docs cover those, and this book doesn't repeat them.

## Why Now

The definition of "agent" has churned too fast these past two years. One moment it's "a program that can call tools," the next it's hyped as "an intelligence that can do anything." Both definitions stop at what it can do. Neither says who the agent is.

Meanwhile, the engineering parts have started to solidify: model tiers, skills, long-term memory, persistent sandboxes, observable traces, tool permissions. Each is useful on its own, but without an abstraction one level up, they just sit in a pile, each minding its own business. What's missing now is not one more framework name — it's a way of seeing that puts all these parts on the same map.

## The Shape of the Book

Chapter 1 establishes the abstraction: what an agent actually is, and why treating it as a person is load-bearing rather than a convenient metaphor.

Chapters 2 through 6 walk that abstraction through the agent's individual life: training before birth, the job before the candidate, onboarding training and professional certification, the work computer and the career record, probation, promotion, and retirement.

Chapters 7 and 8 move from the individual to the team and the organization: how a group of agents cooperates, and what changes — and what doesn't — when a traditional organization becomes an agentic one.

The book opens with a judgment: an agent is an engineering object one level above the model. It closes with a judgment too: in an agentic organization, final responsibility must land on a person or an organization with stakes — one that can answer for the consequences. An agent cannot be that endpoint.

## How to Read It

If you're building an agent system and keep hitting problems like "the prompt won't stabilize," "I don't know which eval to trust," or "the more I orchestrate my multi-agent setup, the messier it gets," jump straight to the relevant chapter — but go back and read chapters 1 and 2 afterward. The root of most of these problems isn't at the framework layer. It's that you haven't yet worked out who this agent is.

If frameworks and tools are what interest you, this book may make you uncomfortable. It keeps asking why instead of handing you how. Frameworks go stale; abstractions don't. Today's SDK may have no users in three years, but "define the job first, then pick the candidate" holds for as long as an agent resembles a worker.

You don't have to agree with every judgment in here. Some passages should make you nod, others should make you want to argue back — that's the right way to read it. The arguing is useful too. It forces you to state your own position clearly.
