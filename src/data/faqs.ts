export interface Faq {
  q: string;
  a: string;
  /* "security" entries are the DPO-facing ones. They render in the homepage FAQ
     like the rest, but their FAQPage JSON-LD ships on /security instead, so the
     same question is never marked up twice across two indexable URLs. */
  topic?: "security";
}

export const faqs: Faq[] = [
  {
    q: "How long does it take to set up for my programme?",
    a: "About two weeks. You send us your programme guide; we encode the validation rules and you review them before going live. No IT involvement needed on your side.",
  },
  {
    q: "What does it cost?",
    a: "Pricing is per-institution. Pilots start with a free encoded prototype of your own catalogue. We'll give you a number in the first call, with no commitment needed to hear it.",
  },
  {
    q: "Is student data safe and GDPR-compliant?",
    a: "Study plans are stored on EU infrastructure — Neon Postgres in Frankfurt — and sync as the student works, so a coordinator always sees the current plan. The record holds the student's name and email from their account, and nothing else about them. Data is never used for model training and never sold. A Data Processing Agreement is available on request.",
    topic: "security",
  },
  {
    q: "What personal data do you actually hold?",
    a: "The name and email on the account, and the study plan. Nothing else about the student. We do not receive or store student numbers, grades, or any record from your SIS.",
    topic: "security",
  },
  {
    q: "Does it connect to our student information system?",
    a: "Not yet. StudyPlanner works standalone today, so students use it alongside whatever SIS you have. Integration with SIS and course catalogues is on the roadmap.",
    topic: "security",
  },
  {
    q: "What if our programme rules change each year?",
    a: "We update the validation logic each academic year as part of the subscription. Send us the new programme guide and we'll handle the rest.",
  },
  {
    q: "Do students need an account?",
    a: "Yes. An account is required to use the planner, so plans sync across devices and can be submitted to a coordinator for review. Accounts are handled by Clerk in its EU data region.",
    topic: "security",
  },
];

export const securityFaqs = faqs.filter((f) => f.topic === "security");
export const generalFaqs = faqs.filter((f) => f.topic !== "security");
