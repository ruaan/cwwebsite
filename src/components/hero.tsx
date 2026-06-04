import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-32 md:pt-24 md:pb-44">
      {/* Animated gradient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-[8%] top-[18%] h-[42rem] w-[42rem] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #0fae7a 0%, transparent 60%)",
            animation: "var(--animate-orb)",
          }}
        />
        <div
          className="absolute right-[-8%] top-[6%] h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #f5b14c 0%, transparent 60%)",
            animation: "var(--animate-orb-slow)",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[35%] h-[40rem] w-[40rem] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #7af0c2 0%, transparent 60%)",
            animation: "var(--animate-orb)",
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Eyebrow */}
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-elev/60 px-3.5 py-1.5 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            <span className="text-xs tracking-[0.18em] text-muted uppercase">
              South Africa&apos;s highest-rated EAP
            </span>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={80}>
          <h1 className="max-w-[18ch] text-[clamp(2.7rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.025em]">
            <span className="text-gradient">Corporate wellness,</span>
            <br />
            <span className="font-serif italic text-mint">
              re&#x2011;imagined
            </span>{" "}
            <span className="text-gradient">for humans.</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-8 max-w-2xl text-lg text-muted md:text-xl">
            A turn-key Employee Assistance Programme, occupational health and
            wellness platform that meets your people where they live —
            <span className="text-fg/90"> across 87 countries</span>, in their
            language, at premium quality, at a price that works.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={260}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-mint px-6 py-3.5 text-[15px] font-medium text-bg transition-all hover:-translate-y-0.5 hover:glow-mint"
            >
              Start a wellness audit
              <span className="grid h-6 w-6 place-items-center rounded-full bg-bg/15 transition-transform group-hover:translate-x-0.5">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full border border-line bg-bg-elev/50 px-6 py-3.5 text-[15px] font-medium text-fg backdrop-blur transition-all hover:border-mint/40 hover:bg-bg-elev"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-mint/15 ring-1 ring-mint/30">
                <svg viewBox="0 0 24 24" className="h-3 w-3 text-mint" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              See what we do
            </a>
          </div>
        </Reveal>

        {/* Floating proof card */}
        <Reveal delay={340}>
          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              ["EAPA-SA", "Member, EAP Assoc."],
              ["B-BBEE", "Level 2 contributor"],
              ["POPI-compliant", "Confidential reporting"],
              ["87 countries", "Global delivery"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="group rounded-2xl border border-line bg-bg-elev/40 p-4 backdrop-blur transition-all hover:border-mint/30 hover:bg-bg-elev/80"
              >
                <div className="text-sm font-medium text-fg">{k}</div>
                <div className="mt-1 text-xs text-muted">{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Floating ribbon hint */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted/70">
        Scroll
      </div>
    </section>
  );
}
