import { Reveal } from "./reveal";

const STEPS = [
  {
    k: "01",
    title: "Listen",
    body:
      "We map your headcount, sites, shifts, languages and current cost of poor wellbeing. No template decks.",
  },
  {
    k: "02",
    title: "Design",
    body:
      "A bespoke plan with the right blend of EAP, OCC health, events and learning — sized for your budget, not ours.",
  },
  {
    k: "03",
    title: "Launch",
    body:
      "Internal comms, the My Company Wellness app, manager briefings, and a 30-day adoption sprint.",
  },
  {
    k: "04",
    title: "Iterate",
    body:
      "Quarterly read-outs with drill-down dashboards. We move spend toward what actually moves your numbers.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 max-w-3xl md:mb-20">
            <span className="text-xs uppercase tracking-[0.22em] text-mint">
              How it works
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.02] tracking-tight">
              From kick-off to <span className="font-serif italic text-mint">measurable</span> impact in 60 days.
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Connecting line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-mint/0 via-mint/40 to-mint/0 md:left-1/2 md:block"
          />
          <ol className="space-y-10 md:space-y-24">
            {STEPS.map((s, i) => (
              <Reveal key={s.k} delay={i * 100}>
                <li
                  className={`grid items-start gap-6 md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative">
                    <div className="absolute -left-2 top-2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-mint shadow-[0_0_20px_4px_rgba(122,240,194,0.45)] md:left-1/2 md:block" />
                    <div className="font-serif text-7xl italic text-mint/80 leading-none md:text-8xl">
                      {s.k}
                    </div>
                    <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-lg text-muted md:pt-6">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
