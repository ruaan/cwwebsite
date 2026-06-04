import { Reveal } from "./reveal";

const REASONS = [
  {
    title: "Local, in your language",
    body:
      "Eleven SA languages, on-the-ground delivery, and a global support net that handles your offices in Lagos, London or Lima.",
  },
  {
    title: "Built for every LSM",
    body:
      "Platforms that work as well on a Wi-Fi-flush laptop as on a feature phone in a packing warehouse.",
  },
  {
    title: "Premium, at a fair price",
    body:
      "World-class clinicians and tooling without the boutique-agency tax. We&rsquo;re sharper because we&rsquo;re leaner.",
  },
  {
    title: "POPI-grade reporting",
    body:
      "Interactive dashboards with drill-downs that preserve confidentiality and still tell you exactly where to invest next.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
          {/* Left: pinned narrative */}
          <Reveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-xs uppercase tracking-[0.22em] text-mint">
                Why CWS
              </span>
              <h2 className="mt-4 text-[clamp(2.2rem,4.6vw,4rem)] font-medium leading-[1.02] tracking-tight">
                The proof is in the <span className="font-serif italic text-mint">pudding</span>{" "}
                <span className="text-muted">—</span> or the salad.
              </h2>
              <p className="mt-6 max-w-md text-lg text-muted">
                You don&apos;t buy wellness because it&apos;s warm-fuzzy. You buy it
                because presenteeism is silently bleeding your P&amp;L. Here&apos;s
                how we plug the leak.
              </p>

              <div className="mt-10 flex flex-col gap-3">
                <a
                  href="#contact"
                  className="group inline-flex w-fit items-center gap-3 rounded-full bg-mint px-5 py-3 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:glow-mint"
                >
                  Talk to a wellness strategist
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <span className="text-xs text-muted">
                  No sales scripts. Just a 25-minute audit conversation.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: reasons */}
          <ol className="space-y-4 lg:space-y-6">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <li className="group relative flex gap-6 rounded-3xl border border-line bg-bg-elev/40 p-7 backdrop-blur transition-all hover:border-mint/40 hover:bg-bg-elev md:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint/10 ring-1 ring-mint/30 text-mint font-serif text-xl italic">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                      {r.title}
                    </h3>
                    <p
                      className="mt-2 text-muted"
                      dangerouslySetInnerHTML={{ __html: r.body }}
                    />
                  </div>
                  <span className="absolute right-7 top-7 text-muted/40 transition-all group-hover:translate-x-1 group-hover:text-mint">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
