export const PLANNER_URL = "https://ae-planner-proxy.vercel.app";

export const CONTACT_EMAIL = "alessandro@mscplanner.com";

export const DEMO_MAILTO =
  "mailto:alessandro@mscplanner.com?subject=StudyPlanner%20Demo%20Request&body=University%20name%3A%0AProgramme%3A%0AYour%20role%3A";

// Inbound-lead intake in the planner repo (api/growth-intake.js). Submissions
// land directly in the Owner → Growth pipeline, so the weekly growth agent
// sees them. Override with PUBLIC_INTAKE_URL when testing against localhost.
export const INTAKE_URL = import.meta.env.PUBLIC_INTAKE_URL ?? `${PLANNER_URL}/api/growth-intake`;

export const BOOKING_URL = import.meta.env.PUBLIC_BOOKING_URL ?? null;

// Cal.com is the default so demo CTAs never degrade to a mailto; the env var
// stays as the production override (docs/remaining-tasks.md item 1).
export const bookDemoHref = BOOKING_URL ?? "https://cal.com/alessandro-miccolo-bigdgh/15min";
