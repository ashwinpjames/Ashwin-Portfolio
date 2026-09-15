# GA4 for Performance Marketers: What Should You Actually Track?

GA4 can tell you almost everything about how people interact with a website, but that does not mean a performance marketer should track everything. The real challenge is deciding which signals are useful for acquisition decisions, which are only diagnostic, and which connect marketing activity to business outcomes.

For **GA4 for performance marketing**, the useful question is not “What reports can GA4 show me?” It is “Which measurements help me decide what to scale, fix, test or stop?”

This guide focuses on that decision layer. It explains the metrics, events, dimensions and reports worth paying attention to, how GA4 analytics fits with ad platforms, and where marketers commonly create noise instead of useful measurement.

## What GA4 is actually useful for in performance marketing

GA4 is an analytics system built around events and user behaviour. An event measures an interaction or occurrence, while a key event identifies an action that is particularly important to the business. Google now distinguishes key events used for Analytics reporting from conversions used to measure important advertising actions and optimise ad campaigns. citeturn0search0turn0search1

That distinction matters because performance marketing has two related but different jobs.

First, you need to understand **what happened on the site or app**. Second, you need to understand **whether what happened was commercially useful**.

GA4 is strongest when it helps connect those two questions.

For example, imagine a lead generation campaign. You could report sessions, page views, scrolls and form starts. Those numbers may tell you that people are engaging. But if the actual business objective is qualified leads, the measurement system should eventually answer questions such as:

* Which acquisition sources brought users to the site?
* Which campaigns produced meaningful key events?
* Which landing pages helped or hurt the journey?
* Which actions happened before a lead was submitted?
* Which campaigns or channels are associated with higher quality outcomes?

The goal is not a bigger dashboard. The goal is a better decision.

## The measurement hierarchy: track from outcome backwards

A practical GA4 measurement system should start with the business outcome and work backwards.

| Layer | What to track | Why it matters |
| --- | --- | --- |
| Business outcome | Customers, revenue, qualified opportunities | Tells you whether acquisition created value |
| Primary conversion action | Lead submission, purchase, booking | Measures the main action you are trying to generate |
| Key event | Important actions that indicate progress | Helps analyse meaningful behaviour in GA4 |
| Supporting event | Form start, CTA click, product view | Helps diagnose friction and intent |
| Acquisition context | Source, medium, campaign, landing page | Helps connect behaviour to acquisition activity |
| Engagement | Engagement rate, average engagement time, page or screen activity | Helps explain behaviour rather than define success |

This hierarchy prevents a common mistake: treating every event as equally important.

A button click and a completed purchase are both events, but they do not carry the same commercial meaning. A form start may be useful for diagnosing a landing page, while a qualified lead may be the real business outcome.

The measurement hierarchy should reflect that difference.

## 1. Acquisition: where did the user come from?

The first area to examine is acquisition. GA4 provides User acquisition and Traffic acquisition reports, but they answer different questions. User acquisition is scoped to new users, while Traffic acquisition is scoped to sessions. citeturn0search4turn0search15

For performance marketers, Traffic acquisition is often particularly useful when evaluating campaign traffic because it helps answer what brought the session to the site.

Useful acquisition dimensions can include:

* Session source
* Session medium
* Session campaign
* Landing page
* Device category
* Country or region where relevant to the campaign

The important point is not to look at acquisition dimensions in isolation. A campaign that generates a large amount of traffic may be less useful than a smaller campaign that generates more valuable actions.

A simple diagnostic view is:

**Acquisition source → landing page → engagement → key event → business outcome**

If the first step looks strong but the later steps collapse, increasing spend may simply increase the amount of low value traffic entering the funnel.

## 2. Engagement: use it as a diagnostic layer

Engagement metrics are useful, but they are easy to overvalue.

GA4's Engagement reports include Events, Pages and screens and Landing pages, among other reports. citeturn0search11

For a performance marketer, engagement should usually answer questions such as:

* Did users actually interact with the landing page?
* Which pages are involved in the conversion journey?
* Are users reaching the sections that matter?
* Is one acquisition source producing unusually weak engagement?

Metrics such as engagement rate and average engagement time can help diagnose differences between traffic sources. GA4 defines average engagement time in its Traffic acquisition report as the average time a session was actively engaged with the site or app. citeturn0search3

But engagement is not a substitute for conversion measurement.

A campaign can generate highly engaged users who never become customers. Conversely, a user may complete a valuable action quickly without generating impressive engagement metrics.

So treat engagement as **evidence for diagnosis**, not as the final scorecard.

## 3. Events: track meaningful actions, not every possible click

GA4 is event based. Events can represent interactions such as page views, link clicks and purchases, and recommended events can provide more structured data for common use cases. citeturn0search7turn0search10

For a performance marketing funnel, useful events might include:

* Lead form start
* Lead form submission
* Contact click
* Phone click
* WhatsApp click
* Booking initiation
* Booking completion
* Product view
* Add to cart
* Checkout start
* Purchase

The exact event set depends on the business model.

The mistake is creating an event for every interaction simply because GA4 allows it. More events do not automatically produce better analytics. They can create a reporting environment where important signals are buried among low value interactions.

A better rule is to ask of every event:

**What decision will this event help me make?**

If the answer is unclear, the event may not deserve priority.

## 4. Key events: identify the actions that matter

Google defines a key event as an event that measures an action particularly important to the success of a business. Any collected event can be marked as a key event. citeturn0search0turn0search5

For a lead generation website, a meaningful hierarchy could look like this:

**Primary:** completed lead form

**Secondary:** completed booking request or qualified enquiry

**Diagnostic:** form start, CTA click, phone click

This is more useful than marking every interaction as equally important.

There is another important distinction for performance marketers. Google now uses “key event” for important business actions reported in Analytics, while “conversion” refers to important actions used to measure advertising performance and optimise campaigns. A Google Ads conversion can be created from a GA4 key event. citeturn0search1turn0search6

That means the measurement architecture should be deliberate. An event can exist for behavioural analysis without necessarily being the action you want an ad platform to optimise toward.

## 5. Landing pages: find where acquisition succeeds or breaks

A traffic source can look healthy until you compare it with the landing page experience.

For example, two campaigns may produce similar traffic volume. One may generate substantially more meaningful actions because its landing page matches the search intent, offer and audience better.

When analysing landing pages, compare:

| Question | What to inspect |
| --- | --- |
| Are users arriving? | Sessions and acquisition source |
| Are they engaging? | Engagement rate and average engagement time |
| Are they progressing? | Key events and supporting events |
| Are they converting? | Lead, booking or purchase actions |
| Is the page creating friction? | Form starts versus completions |

This is where GA4 analytics becomes more useful than a platform dashboard alone. The ad platform can tell you about campaign delivery and reported conversions. GA4 can help you investigate what users did after arriving on the site.

## 6. Conversion rate: useful, but only with a defined numerator

Conversion rate sounds simple until you ask: conversion of what?

A marketer could calculate conversion rate from sessions to leads, users to purchases, landing page sessions to form submissions, or another defined action. Each calculation answers a different question.

That is why a percentage without a defined numerator and denominator can be misleading.

For example:

**Landing page conversion rate = completed primary actions ÷ relevant landing page sessions**

The important part is not the formula itself. It is defining the population and action consistently enough to compare campaigns or periods.

If one report uses users and another uses sessions, the rates may not be directly comparable.

## 7. Revenue and value: move beyond lead volume when possible

If the business model allows it, performance marketing measurement should eventually connect acquisition activity with revenue or customer value.

A lead is an intermediate outcome. A customer is a business outcome.

That does not make lead volume useless. It means lead volume should sit inside a larger measurement chain.

For example:

**Spend → traffic → leads → qualified leads → opportunities → customers → revenue**

If GA4 only captures the first few stages, marketers may have to combine GA4 with CRM or sales data to understand the later stages.

This is especially important when lead quality varies. A campaign producing 100 leads is not necessarily better than one producing 40 if the second campaign produces more qualified opportunities and customers.

## 8. Attribution: use it as a model, not absolute truth

GA4 can help marketers analyse how credit is assigned to touchpoints that contribute to important actions. Google also provides attribution related reporting for key events and cross channel performance, with settings that influence reporting attribution and lookback windows. citeturn0search9

This is useful, but attribution should not be treated as a perfect reconstruction of reality.

Attribution is a measurement model. It helps answer a defined question about how credit is distributed under a particular set of rules.

The practical approach is to use attribution alongside other evidence:

* Platform reported conversions
* GA4 key events and conversions
* CRM outcomes
* Sales feedback
* Revenue data
* Landing page performance

When these sources disagree, the answer is usually not to blindly choose the number you prefer. Investigate the measurement definitions, attribution settings, time windows and tracking implementation.

## 9. Dimensions: use them to explain differences

A metric tells you what happened. A dimension helps you understand how the result differs across groups.

In GA4, a dimension is an attribute of the data, such as event name. Detail reports can use dimensions to break data into different groupings and can sometimes add a second dimension for deeper analysis. citeturn0search14

For performance marketing, useful dimensions can include:

* Campaign
* Source and medium
* Landing page
* Device
* Geographic area
* Event name
* Page or screen

The strongest analysis usually combines a metric with a meaningful dimension.

Instead of asking “What is my engagement rate?” ask “Which acquisition campaigns have materially different engagement and key event rates?”

Instead of asking “How many leads did we get?” ask “Which campaign and landing page combinations generated the strongest downstream outcomes?”

## 10. Custom dimensions and metrics: only when standard data is not enough

GA4 supports custom dimensions and metrics so businesses can analyse additional data collected from their websites or apps. Custom dimensions can be event scoped, user scoped or item scoped, while custom metrics are useful for numerical values. citeturn0search16

Customisation is valuable when the standard reporting model cannot answer an important business question.

But custom data should be designed around a real analytical need.

A useful custom field might distinguish lead type, service category or another business attribute that materially changes lead quality analysis. A random collection of custom parameters can create complexity without improving decisions.

Before creating one, ask:

1. What decision does this data support?
2. Where is the value generated?
3. Is the field consistently populated?
4. Can the team interpret it correctly?
5. Will it still matter six months from now?

## What should a performance marketer actually track in GA4?

If you want a practical starting point, prioritise the following.

| Priority | Measurement | Primary question |
| --- | --- | --- |
| 1 | Primary key events and conversions | Did the desired action happen? |
| 2 | Acquisition source and campaign | Where did the user come from? |
| 3 | Landing page | Where did the journey start? |
| 4 | Conversion rate | How efficiently did relevant traffic produce the action? |
| 5 | Supporting events | Where might users be progressing or dropping off? |
| 6 | Engagement | Does behaviour help explain performance differences? |
| 7 | Revenue or customer outcomes | Did acquisition create business value? |
| 8 | Attribution views | How is credit distributed under the selected model? |

The exact priority changes by business model, but the principle remains: **track the measurements that improve decisions first.**

## A practical GA4 dashboard for performance marketers

You do not need dozens of charts.

A useful performance view can be built around five questions:

### 1. Where did the traffic come from?

Use source, medium, campaign and landing page dimensions.

### 2. What did users do?

Use events, engagement and page or screen behaviour to understand the journey.

### 3. What important action happened?

Use key events and relevant conversions rather than generic engagement alone.

### 4. Which traffic produced the best outcomes?

Break down meaningful actions by acquisition source, campaign and landing page.

### 5. Did those outcomes become business value?

Where reliable data exists, connect GA4 with CRM, sales and revenue information.

That structure is usually more useful than building a dashboard around whichever metrics happen to be available by default.

## Common GA4 mistakes performance marketers should avoid

### Tracking everything and prioritising nothing

A large event list is not the same as a strong measurement system. If everything is important, the team loses the ability to distinguish signal from noise.

### Optimising around engagement alone

Engagement can diagnose behaviour, but it does not automatically prove commercial value.

### Treating every key event as equally valuable

A form start and a qualified opportunity can both be meaningful, but they represent different stages of the funnel.

### Comparing incompatible metrics

User scoped and session scoped reports answer different questions. Make sure the numerator, denominator, scope and date range are understood before comparing rates.

### Ignoring downstream data

For lead generation, GA4 may stop at the website conversion. If sales quality is the real objective, CRM and sales data may be required to evaluate the full funnel.

### Assuming attribution is objective truth

Attribution is a model. Use it as evidence within a broader measurement framework.

### Building dashboards before defining decisions

Start with the decisions you need to make. Then identify the data required to make them.

## How GA4 should fit into the wider performance marketing stack

GA4 should not be treated as the only source of truth for every question.

A strong measurement system can look like this:

**Ad platforms** → delivery, spend, platform reporting and optimisation signals

**GA4** → website behaviour, acquisition analysis, events and cross channel analytics

**GTM or another tagging system** → implementation and event deployment

**CRM** → lead status, qualification, sales stages and customer outcomes

**Business reporting** → revenue, profitability and commercial decisions

Each system has a job.

The mistake is expecting one platform to answer every question.

If you are working as a **[Performance Marketing Specialist](https://ashwinjames.com/)**, the real advantage comes from understanding how these measurement layers connect rather than memorising every report inside GA4.

## A simple weekly GA4 routine for performance marketers

A practical weekly review can be structured like this:

1. Check acquisition trends and identify meaningful changes in traffic quality.
2. Review primary key events and conversions against the previous period.
3. Break important outcomes down by source, medium, campaign and landing page.
4. Investigate unusual changes using supporting events and engagement data.
5. Compare website outcomes with ad platform reporting.
6. Where possible, compare leads with CRM qualification and sales outcomes.
7. Record the decision that follows from the evidence: scale, test, fix, investigate or leave unchanged.

The last step is the one most dashboards miss.

Analytics becomes useful when it changes what you do next.

## Frequently asked questions

### Is GA4 useful for performance marketing?

Yes. GA4 can help performance marketers analyse acquisition, website behaviour, events, key events, conversions and attribution. Its value increases when the measurement structure is connected to actual business objectives.

### What are the most important GA4 metrics for a performance marketer?

There is no universal list. Primary key events and conversions, acquisition dimensions, conversion rate, landing page performance and downstream customer or revenue outcomes are usually more important than vanity metrics. Engagement metrics are useful mainly as diagnostic evidence.

### Should I track every event in GA4?

No. Track events that answer useful business or optimisation questions. Recommended events can provide richer reporting for relevant use cases, but the event plan should still be designed around the customer journey and business objective. citeturn0search7

### What is the difference between a GA4 key event and a conversion?

Google currently uses key event for important actions reported in Analytics. A conversion is an important action used to measure advertising performance and optimise campaigns. A Google Ads conversion can be created from a GA4 key event. citeturn0search1turn0search6

### Should GA4 replace Google Ads reporting?

No. They serve different purposes. Google Ads is essential for campaign delivery, spend and advertising optimisation, while GA4 provides broader website and cross channel behavioural analysis. The two should be compared and connected rather than treated as competing dashboards.

### Can GA4 tell me which leads are qualified?

Not by itself in every lead generation setup. GA4 can measure the website actions and acquisition context, while qualification and sales outcomes may live in a CRM. Connecting those systems gives a more complete view of lead quality.

## Conclusion: track what helps you make the next decision

The biggest mistake in GA4 for performance marketing is thinking the job is to collect more data.

The job is to build a measurement system that makes performance decisions clearer.

Start with the business outcome. Define the primary action. Track the supporting events that explain the journey. Use acquisition dimensions to understand where users came from. Use engagement and behaviour as diagnostic evidence. Then connect GA4 with ad platforms, CRM data and revenue information where the business needs a deeper view.

GA4 analytics becomes genuinely useful when it moves beyond reporting activity and helps answer a practical question: **what should we do next?**

For a performance marketer, that is the standard the measurement system should meet.

## Further reading

* [Google Analytics: About key events](https://support.google.com/analytics/answer/9267568)
* [Google Analytics: Conversions vs. key events](https://support.google.com/analytics/answer/13965727)
* [Google Analytics: Traffic acquisition report](https://support.google.com/analytics/answer/12923437)
* [Google Analytics: User acquisition vs. Traffic acquisition](https://support.google.com/analytics/answer/14731736)
