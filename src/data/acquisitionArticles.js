import { acquisitionArticleMeta } from './acquisitionArticleMeta.js'

// Numerical examples are illustrative, not client results.
const content = {
  "meta-ads-audit-checklist-uae": {
    "service": "/services/meta-ads",
    "cta": "Discuss your Meta Ads and lead quality",
    "sections": [
      {
        "title": "Start with the business bottleneck",
        "paragraphs": [
          "A useful Meta Ads audit explains where a potential customer drops out of the journey. A low cost per form submission can hide invalid numbers, poor fit or enquiries that nobody calls. Review the campaign together with the landing page and CRM before deciding that targeting is the problem.",
          "Define one business outcome for the review: qualified enquiries, booked consultations or customers. Write down the qualification rule and the reporting period. Compare campaigns using the same rule and allow enough time for recent enquiries to progress through sales."
        ]
      },
      {
        "title": "Check measurement before performance",
        "paragraphs": [],
        "items": [
          "Compare successful form submissions with CRM records. Investigate missing records and repeated events before trusting the conversion total.",
          "Confirm that a button click or form validation error cannot trigger a successful lead event.",
          "Separate a WhatsApp button click from a conversation, and a conversation from a qualified opportunity.",
          "Record campaign identifiers and landing page source information in the CRM when available. Do not send personal details through analytics event parameters."
        ]
      },
      {
        "title": "Audit the offer, audience and creative",
        "paragraphs": [
          "Read the ad as a potential buyer. Can someone identify the service, location, important eligibility conditions and next step without clicking? An attractive but ambiguous offer can create cheap enquiries from people who need a different service.",
          "Review actual enquiries against the ad that generated them. Classify recurring misunderstandings and test one meaningful clarification at a time. Avoid replacing every creative at once because that makes it harder to explain the result."
        ],
        "items": [
          "Check the targeted service area against where the business can fulfil enquiries.",
          "Compare creative angles by qualified lead rate as well as cost per lead.",
          "Check whether the landing page delivers the same offer and conditions as the ad.",
          "Inspect the mobile form, confirmation message and sales notification."
        ]
      },
      {
        "title": "Use an audit decision log",
        "paragraphs": [
          "Illustrative example, not a client result: campaign A spends AED 2,000 for 100 enquiries and 10 qualified leads. Campaign B spends AED 2,000 for 50 enquiries and 20 qualified leads. A has the cheaper raw lead at AED 20, but B has the lower cost per qualified lead at AED 100 versus AED 200.",
          "Do not immediately move all budget to B. Check whether both cohorts are mature, qualification is consistent and the sample reflects the same service. Then test a controlled budget change."
        ],
        "table": {
          "headers": [
            "Finding",
            "Next check",
            "Possible action"
          ],
          "rows": [
            [
              "Many invalid numbers",
              "Form validation and record delivery",
              "Improve validation and review form friction"
            ],
            [
              "Valid leads, little contact",
              "First attempt time and retry history",
              "Fix ownership and follow-up"
            ],
            [
              "Good contact, poor fit",
              "Offer and qualification answers",
              "Clarify the offer before the form"
            ],
            [
              "Qualified leads, few sales",
              "Proposal, pricing and sales cycle",
              "Review the sales process with the team"
            ]
          ]
        }
      },
      {
        "title": "Turn the audit into a test plan",
        "paragraphs": [
          "Choose the largest evidenced bottleneck and assign one owner, one change and one review date. Record the expected effect and the metric that could disprove your diagnosis. Keep measurement stable while testing the offer or creative.",
          "An audit should end with a small set of prioritised actions, not a long list of platform settings. Use the lead quality framework to keep marketing and sales working from the same definitions."
        ]
      }
    ],
    "related": [
      "/resources/meta-ads-launch-checklist",
      "/blog/improve-lead-quality-connection-rates"
    ],
    "sources": []
  },
  "landing-page-optimisation-lead-generation": {
    "service": "/services/cro",
    "cta": "Discuss your landing page bottlenecks",
    "sections": [
      {
        "title": "Diagnose the page in context",
        "paragraphs": [
          "More traffic magnifies the page you already have. Before increasing spend, check whether the visitor sees a relevant offer, understands who it is for and can complete the next step on a phone. A conversion rate alone cannot explain which of those steps is failing.",
          "Segment the review by traffic source, device and service. A mobile visitor from a broad social ad may need more explanation than a search visitor looking for the exact service. Do not compare those groups as if they arrived with identical intent."
        ]
      },
      {
        "title": "Make the first screen answer four questions",
        "paragraphs": [],
        "items": [
          "What service is this, and is it available where I need it?",
          "Who is the service suitable for, and what important conditions apply?",
          "Why should I trust this provider? Use verifiable evidence rather than unsupported counters.",
          "What happens after I enquire? Explain the next step without promising an outcome you cannot control."
        ]
      },
      {
        "title": "Review the form as a qualification tool",
        "paragraphs": [
          "Every field should help deliver the service, qualify the enquiry or arrange a useful follow-up. Asking everything upfront can discourage appropriate prospects; asking nothing can overwhelm sales. Place the essential eligibility question early and postpone details that can be collected in a conversation.",
          "Use visible labels, meaningful error messages and input types suited to mobile devices. Keep entered information after a recoverable error. Disable repeat submission while a request is pending, then show success only after the enquiry is accepted."
        ],
        "table": {
          "headers": [
            "Page element",
            "Weak version",
            "More useful version"
          ],
          "rows": [
            [
              "Headline",
              "Grow your business today",
              "Name the service and intended customer"
            ],
            [
              "Proof",
              "Unattributed success percentage",
              "Permissioned example with scope and dates"
            ],
            [
              "Form",
              "A long unprioritised questionnaire",
              "Essential contact and qualification fields"
            ],
            [
              "Confirmation",
              "A generic success toast",
              "Explain who follows up and what to expect"
            ]
          ]
        }
      },
      {
        "title": "Choose a test with a clear interpretation",
        "paragraphs": [
          "Illustrative test: change a vague headline to a specific service-and-location headline while keeping traffic, offer and form stable. Compare successful submissions and qualified lead rate, not only button clicks. Decide the review period before looking for a winner.",
          "A small number of visits or conversions can produce unstable percentages. If volume is limited, combine observation with enquiry feedback and usability checks rather than announcing a statistically proven lift."
        ]
      },
      {
        "title": "Check delivery and measurement before release",
        "paragraphs": [],
        "items": [
          "Complete the form on a small screen and with keyboard navigation.",
          "Confirm errors do not count as successful enquiries.",
          "Check the enquiry arrives with its source and qualification answers.",
          "Confirm success events fire once and contain no contact details.",
          "Review page speed and image delivery, then retest the form after changes."
        ]
      }
    ],
    "related": [
      "/blog/lead-form-optimisation",
      "/blog/google-ads-clicks-not-turning-into-leads"
    ],
    "sources": []
  },
  "google-ads-search-terms-audit": {
    "service": "/services/google-ads",
    "cta": "Discuss a Google Ads account review",
    "sections": [
      {
        "title": "Review actual searches, not only keywords",
        "paragraphs": [
          "The keyword you bid on and the search someone types are different things. Google’s search terms report helps you inspect searches that triggered ads and relate them to campaign performance. Use it to understand intent before changing bids or excluding terms.",
          "Start with a defined service, date range and sales outcome. Include enough time for enquiries to qualify. The report does not expose every search, so treat it as an important diagnostic view rather than a complete record of demand."
        ]
      },
      {
        "title": "Build a review sheet",
        "paragraphs": [],
        "items": [
          "Export the available search term, campaign, ad group, matched keyword, cost and conversion columns.",
          "Add an intent label: relevant buyer, research, job seeker, supplier or unclear.",
          "Where attribution is reliable, connect the enquiry with CRM qualification and customer status.",
          "Record the reason for each proposed exclusion or landing page change."
        ]
      },
      {
        "title": "Distinguish bad intent from a broken journey",
        "paragraphs": [
          "A relevant search with no recorded leads may point to a weak offer, a slow page or a tracking failure. Excluding it immediately could remove a useful source of customers. Conversely, a term with many form submissions can still attract people outside the service scope."
        ],
        "table": {
          "headers": [
            "Illustrative search",
            "Interpretation",
            "Review action"
          ],
          "rows": [
            [
              "Attestation job vacancies",
              "Employment intent",
              "Consider a carefully scoped negative"
            ],
            [
              "Commercial document attestation Dubai",
              "Potential service buyer",
              "Check landing page relevance and lead outcomes"
            ],
            [
              "Attestation price",
              "Price research with possible buying intent",
              "Clarify quote requirements rather than exclude by default"
            ],
            [
              "Free attestation sample",
              "Ambiguous or poor fit",
              "Inspect context and business relevance"
            ]
          ]
        }
      },
      {
        "title": "Use negatives carefully",
        "paragraphs": [
          "Group clear exclusions by reason, then choose their scope deliberately. An account-wide exclusion affects more services than an ad-group exclusion. Check for conflicts with relevant keywords before applying a shared list.",
          "Do not automatically exclude words such as price, cost or how. A price comparison can precede a purchase. Review the full query, service economics and enquiry history. Maintain a change log so you can reverse an exclusion that blocks suitable prospects."
        ]
      },
      {
        "title": "Review quality after changes",
        "paragraphs": [
          "Illustrative example: a term costs AED 600 and produces six enquiries, but only one fits the service. Another costs AED 800 and produces four enquiries, with three qualified. Their raw CPLs are AED 100 and AED 200; their costs per qualified lead are AED 600 and about AED 267.",
          "Use that difference as a question to investigate, not a universal threshold. Recheck tracking, sample size and sales maturity. After a change, compare relevant enquiry volume and cost per qualified lead over a consistent period."
        ]
      }
    ],
    "related": [
      "/blog/google-ads-keyword-intent",
      "/blog/google-ads-lead-quality"
    ],
    "sources": [
      {
        "label": "Google Ads: About the search terms report",
        "url": "https://support.google.com/google-ads/answer/13738234?hl=en"
      }
    ]
  },
  "performance-marketing-services-checklist": {
    "service": "/services/performance-marketing-services",
    "cta": "Discuss your performance marketing scope",
    "sections": [
      {
        "title": "Buy a defined scope, not a list of platforms",
        "paragraphs": [
          "Performance marketing services should connect acquisition activity with a measurable business goal. Running Google Ads or Meta Ads may be part of the scope, but an ad account alone cannot fix an unclear offer, a broken form or enquiries that never reach sales.",
          "Before comparing proposals, define your service, customer, fulfilment area and desired outcome. Ask providers to identify what they will manage directly, what they will review and what your team must deliver. This makes two proposals easier to compare without assuming they contain the same work."
        ]
      },
      {
        "title": "Compare the deliverables",
        "paragraphs": [],
        "table": {
          "headers": [
            "Workstream",
            "Deliverable to ask for",
            "Acceptance question"
          ],
          "rows": [
            [
              "Discovery",
              "Baseline and documented acquisition goal",
              "Which business outcome will guide decisions?"
            ],
            [
              "Paid acquisition",
              "Campaign structure and testing plan",
              "What will be tested and why?"
            ],
            [
              "Landing pages",
              "Prioritised conversion review",
              "Who implements changes?"
            ],
            [
              "Measurement",
              "Event map and validation record",
              "What counts as a successful enquiry?"
            ],
            [
              "CRM handoff",
              "Source, ownership and qualification rules",
              "Can sales identify where the lead came from?"
            ],
            [
              "Reporting",
              "Spend, qualified leads and outcomes",
              "What action follows from the report?"
            ]
          ]
        }
      },
      {
        "title": "Clarify what the fee excludes",
        "paragraphs": [
          "Separate management fees from media spend, creative production, development and third-party tools. Ask whether an audit is a one-time engagement or the beginning of ongoing management. Pricing only becomes meaningful when the scope, responsibilities and review cadence are clear.",
          "Request the handover terms upfront. The business should understand who owns the ad accounts, analytics access, landing page source and creative assets. Ask how access will be removed or transferred at the end of the engagement."
        ]
      },
      {
        "title": "Evaluate evidence without accepting unsupported promises",
        "paragraphs": [],
        "items": [
          "Ask for an example relevant to your business model, with permissioned or anonymised evidence.",
          "Check the dates, spend, definition of a lead and whether the provider controlled sales follow-up.",
          "Distinguish an implemented framework from a measured client result.",
          "Ask what did not work and what the provider changed after learning from it.",
          "Be cautious about guaranteed rankings, fixed returns or lead volumes without conditions."
        ]
      },
      {
        "title": "Agree on the first review before starting",
        "paragraphs": [
          "An illustrative first-month scope might include account and tracking review, offer alignment, a prioritised test plan and a baseline report. It should not promise that a new account will reach a particular acquisition cost in that period.",
          "Decide who supplies creative, approves changes and handles enquiries. Agree on the qualification definition and how sales will update outcomes. A useful engagement produces a repeatable decision process as well as campaign activity."
        ]
      }
    ],
    "related": [
      "/blog/best-performance-marketing-specialist",
      "/blog/google-ads-vs-meta-ads"
    ],
    "sources": []
  },
  "clinic-lead-generation-dubai": {
    "service": "/services/lead-generation",
    "cta": "Discuss your clinic enquiry and booking journey",
    "sections": [
      {
        "title": "Define the outcome the clinic can use",
        "paragraphs": [
          "A clinic campaign can produce enquiries without filling the appointment book. Some people ask about a different service, some cannot attend at the available time and others never receive a reply. Measure the journey from enquiry to an appropriate booked appointment and attendance.",
          "This is an operational marketing framework, not a clinic case study or a medical advertising compliance guide. Examples are illustrative. Clinical suitability and treatment decisions belong with the clinic’s authorised professionals."
        ]
      },
      {
        "title": "Keep the offer aligned with the service",
        "paragraphs": [
          "State the service, location and next step clearly. If the advertised action is a consultation, the landing page should explain that consultation rather than imply a guaranteed treatment outcome. Have the clinic review public claims and promotional material before use.",
          "Use the form to arrange contact and understand the requested service. Avoid collecting detailed health information in an advertising lead form or sending it into analytics. Keep sensitive discussions within the clinic’s appropriate systems and processes."
        ]
      },
      {
        "title": "Build a booking funnel",
        "paragraphs": [],
        "table": {
          "headers": [
            "Stage",
            "Operational definition",
            "Question to investigate"
          ],
          "rows": [
            [
              "Enquiry",
              "A valid new service enquiry",
              "Is the offer attracting the right request?"
            ],
            [
              "Connected",
              "A two-way conversation occurred",
              "Did someone follow up promptly?"
            ],
            [
              "Appropriate next step",
              "Clinic team confirms how to proceed",
              "Is the requested service available?"
            ],
            [
              "Booked",
              "A slot is accepted",
              "Is appointment availability creating friction?"
            ],
            [
              "Attended",
              "Attendance recorded by clinic",
              "Are reminders and directions clear?"
            ]
          ]
        }
      },
      {
        "title": "Compare campaigns by appointments, not form totals",
        "paragraphs": [
          "Illustrative example: campaign A spends AED 1,500 for 60 enquiries and six attended appointments. Campaign B spends AED 1,500 for 30 enquiries and ten attended appointments. A produces the lower CPL, but B has the lower media cost per attended appointment: AED 150 compared with AED 250.",
          "This does not establish profitability. Add the relevant management costs, service economics, repeat visits and capacity constraints. Compare cohorts after their appointment dates have passed so recent bookings are not unfairly counted as non-attendance."
        ]
      },
      {
        "title": "Improve the handoff before adding spend",
        "paragraphs": [],
        "items": [
          "Assign each enquiry to a clear owner and record first contact time.",
          "Separate invalid contact details, wrong service requests and unanswered enquiries.",
          "Explain the booking process and available location before asking for commitment.",
          "Confirm appointment details and provide directions through the clinic’s approved process.",
          "Review cancellations and non-attendance as separate outcomes rather than blaming all losses on advertising."
        ]
      }
    ],
    "related": [
      "/blog/improve-lead-quality-connection-rates",
      "/blog/landing-page-optimisation-lead-generation"
    ],
    "sources": []
  },
  "google-ads-document-attestation": {
    "service": "/services/google-ads",
    "cta": "Discuss your attestation search campaigns",
    "sections": [
      {
        "title": "Organise demand around the service you can fulfil",
        "paragraphs": [
          "Document attestation searches can describe very different needs: a personal certificate, a commercial document, a destination country or one step in a longer process. A broad campaign can mix these needs and send everyone to a page that answers none of them clearly.",
          "This guide covers acquisition planning, not legal or procedural advice about attestation. Requirements and service availability must be confirmed by the provider. The campaign examples below are illustrative and contain no client performance claims."
        ]
      },
      {
        "title": "Map services before building ad groups",
        "paragraphs": [],
        "table": {
          "headers": [
            "Intent dimension",
            "Example",
            "What the page should clarify"
          ],
          "rows": [
            [
              "Document type",
              "Commercial document attestation",
              "Which document categories the provider handles"
            ],
            [
              "Destination",
              "Attestation for a named country",
              "Whether the provider serves that destination"
            ],
            [
              "Location",
              "Attestation service Dubai",
              "Collection, delivery and service area"
            ],
            [
              "Price or timing",
              "Attestation cost or turnaround",
              "What information is needed for an accurate quote"
            ]
          ]
        }
      },
      {
        "title": "Match the ad promise to the enquiry journey",
        "paragraphs": [
          "Separate materially different services where the budget and demand support it. A commercial-document visitor should reach relevant service information rather than a generic certificate page. Do not imply official affiliation or a guaranteed processing time unless the provider can substantiate the statement.",
          "For quoting, request only the information needed for the next conversation: document category, destination and contact details may be enough initially. Do not ask people to upload identity documents into a marketing form unless a secure and appropriate collection process is actually required."
        ]
      },
      {
        "title": "Review search terms with the operations team",
        "paragraphs": [
          "An apparently relevant query may fall outside the provider’s coverage. Have someone who understands fulfilment review unclear terms before excluding or expanding them. Label wrong-service, employment and information-only enquiries separately.",
          "Price searches can still contain buying intent. Explain what affects the quote rather than excluding every cost-related term. Review full queries and qualified outcomes using the search terms audit process."
        ]
      },
      {
        "title": "Report qualification and quote progression",
        "paragraphs": [
          "Track valid enquiries, serviceable requests, quotes issued and customers. Define what counts as a serviceable request before comparing campaigns. If several documents belong to one customer, avoid counting each document as a newly acquired customer.",
          "Illustrative review: 20 leads may include eight unsupported destinations and four duplicates. Reporting 20 potential customers would misrepresent the opportunity. Count and label those outcomes separately, then investigate whether clearer coverage information could have prevented unsuitable enquiries."
        ],
        "items": [
          "Capture the requested service and available campaign identifiers in the CRM.",
          "Assign an owner for quote follow-up and record its status.",
          "Compare cost per serviceable enquiry and customer acquisition cost after the sales cycle matures.",
          "Use operational feedback to refine ad copy, coverage information and search term exclusions."
        ]
      }
    ],
    "related": [
      "/blog/google-ads-search-terms-audit",
      "/blog/google-ads-conversion-tracking"
    ],
    "sources": []
  }
}

export const acquisitionArticles = acquisitionArticleMeta.map((article) => ({ ...article, ...content[article.slug] }))
