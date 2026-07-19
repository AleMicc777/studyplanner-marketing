export const PLANNER_URL = "https://ae-planner-proxy.vercel.app";

export const CONTACT_EMAIL = "alessandromiccolo2003@gmail.com";

export const DEMO_MAILTO =
  "mailto:alessandromiccolo2003@gmail.com?subject=StudyPlanner%20Demo%20Request&body=University%20name%3A%0AProgramme%3A%0AYour%20role%3A";

export const BOOKING_URL = import.meta.env.PUBLIC_BOOKING_URL ?? null;

export const bookDemoHref = BOOKING_URL ?? DEMO_MAILTO;
