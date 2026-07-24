export const PLANNER_URL = "https://ae-planner-proxy.vercel.app";

export const CONTACT_EMAIL = "alessandro@mscplanner.com";

export const DEMO_MAILTO =
  "mailto:alessandro@mscplanner.com?subject=StudyPlanner%20Demo%20Request&body=University%20name%3A%0AProgramme%3A%0AYour%20role%3A";

export const BOOKING_URL = import.meta.env.PUBLIC_BOOKING_URL ?? null;

export const bookDemoHref = BOOKING_URL ?? DEMO_MAILTO;
