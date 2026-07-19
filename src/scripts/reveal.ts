// One-shot scroll-reveal: adds .is-visible to [data-reveal] elements as they enter
// the viewport, then stops observing. If prefers-reduced-motion is set, skip the
// observer entirely and reveal everything immediately (see global.css for the CSS
// side: elements only start pre-revealed when <html> has the "js" class).

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

if (reduceMotion) {
  targets.forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.15 },
  );

  targets.forEach((el) => observer.observe(el));
}
