export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "How long does it take to set up for my programme?",
    a: "About two weeks. You send us your programme guide; we encode the validation rules and you review them before going live. No IT involvement needed on your side.",
  },
  {
    q: "What does it cost?",
    a: "Pricing is per-institution — pilots start with a free encoded prototype of your own catalogue. We'll give you a number in the first call — no commitment needed to hear it.",
  },
  {
    q: "Is student data safe and GDPR-compliant?",
    a: "Yes. Plans are stored locally in the student's browser by default — no data reaches our servers unless the student explicitly shares their plan. All shared data is stored on EU infrastructure and never used for training or sold to third parties. A Data Processing Agreement (DPA) is available on request.",
  },
  {
    q: "Does it connect to our student information system?",
    a: "Not yet. StudyPlanner works standalone today — students use it alongside whatever SIS you have. Integration with SIS and course catalogues is on the roadmap.",
  },
  {
    q: "What if our programme rules change each year?",
    a: "We update the validation logic each academic year as part of the subscription. Send us the new programme guide and we'll handle the rest.",
  },
  {
    q: "Can students use it without creating an account?",
    a: "Yes. Plans are saved in the browser by default. Students can optionally create an account to sync across devices and share with their advisor.",
  },
];
