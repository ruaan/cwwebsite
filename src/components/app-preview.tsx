import { Reveal } from "./reveal";

function Phone() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px]">
      {/* Phone shadow / glow */}
      <div
        aria-hidden
        className="absolute -inset-12 -z-10 rounded-[3rem] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(122,240,194,0.35), transparent 70%)",
        }}
      />
      {/* Floating mini cards */}
      <div className="pointer-events-none absolute -left-20 top-16 hidden rotate-[-8deg] rounded-2xl border border-line bg-bg-elev/90 p-3 shadow-xl backdrop-blur md:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-mint/15 ring-1 ring-mint/40">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-mint" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </span>
          <div>
            <div className="text-[11px] text-muted">Mood check</div>
            <div className="text-[13px] font-medium">Better than yesterday</div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-16 bottom-24 hidden rotate-[6deg] rounded-2xl border border-line bg-bg-elev/90 p-3 shadow-xl backdrop-blur md:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-amber/15 ring-1 ring-amber/40">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </span>
          <div>
            <div className="text-[11px] text-muted">Session in</div>
            <div className="text-[13px] font-medium tabular-nums">02:14:00</div>
          </div>
        </div>
      </div>

      {/* Phone bezel */}
      <div className="relative aspect-[9/19.5] rounded-[2.6rem] border border-line bg-gradient-to-b from-[#101418] to-[#070a0d] p-2.5 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-bg">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-4 text-[10px] text-fg/80">
            <span className="font-medium tabular-nums">9:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-1.5 w-3 rounded-sm border border-fg/60" />
              <span className="inline-block h-2 w-2 rounded-full bg-mint" />
            </span>
          </div>

          {/* Notch */}
          <div className="absolute left-1/2 top-1.5 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* App content */}
          <div className="relative mt-3 h-full px-5">
            {/* Background gradient on screen */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-72 -z-0 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 30% 0%, rgba(122,240,194,0.18), transparent 60%)",
              }}
            />

            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
                Good morning
              </div>
              <div className="mt-1 text-[22px] font-medium leading-tight">
                Hi <span className="font-serif italic text-mint">Thandi</span>
              </div>

              {/* Quick action grid */}
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {[
                  { label: "Talk now", sub: "Counsellor", tone: "mint" },
                  { label: "Book", sub: "Screening", tone: "amber" },
                  { label: "Check in", sub: "1-min mood", tone: "mint" },
                  { label: "Learn", sub: "Burnout 101", tone: "neutral" },
                ].map((a) => (
                  <div
                    key={a.label}
                    className="rounded-2xl border border-line bg-bg-elev/80 p-3 backdrop-blur"
                  >
                    <span
                      className={`mb-2 grid h-8 w-8 place-items-center rounded-full ring-1 ${
                        a.tone === "mint"
                          ? "bg-mint/15 ring-mint/40 text-mint"
                          : a.tone === "amber"
                          ? "bg-amber/15 ring-amber/40 text-amber"
                          : "bg-fg/10 ring-fg/20 text-fg"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                    <div className="text-[12px] font-medium">{a.label}</div>
                    <div className="text-[10px] text-muted">{a.sub}</div>
                  </div>
                ))}
              </div>

              {/* Upcoming card */}
              <div className="mt-4 overflow-hidden rounded-2xl border border-mint/30 bg-gradient-to-br from-mint/15 via-bg-elev to-bg-elev p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-mint">
                      Upcoming
                    </div>
                    <div className="mt-1 text-[14px] font-medium">
                      Video session · Dr. K. Naidoo
                    </div>
                    <div className="text-[11px] text-muted">Today · 14:30</div>
                  </div>
                  <button
                    type="button"
                    className="rounded-full bg-mint px-3 py-1.5 text-[11px] font-medium text-bg"
                  >
                    Join
                  </button>
                </div>
              </div>

              {/* Pulse strip */}
              <div className="mt-4 rounded-2xl border border-line bg-bg-elev/60 p-3">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] text-muted">Weekly wellbeing</div>
                  <div className="text-[11px] font-medium text-mint">+12%</div>
                </div>
                <svg viewBox="0 0 200 50" className="mt-2 h-10 w-full">
                  <defs>
                    <linearGradient id="appPulseGrad" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#7af0c2" stopOpacity="0" />
                      <stop offset="50%" stopColor="#7af0c2" />
                      <stop offset="100%" stopColor="#9ff5d2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 35 C20 25, 40 40, 60 30 S 100 10, 130 22 S 170 38, 200 18"
                    stroke="url(#appPulseGrad)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppPreview() {
  return (
    <section className="relative py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-20" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-mint">
                My Company Wellness, in pocket
              </span>
              <h2 className="mt-4 text-[clamp(2.2rem,4.6vw,4rem)] font-medium leading-[1.02] tracking-tight">
                An EAP your team will <span className="font-serif italic text-mint">actually</span> open.
              </h2>
              <p className="mt-6 max-w-lg text-lg text-muted">
                One tap to a real counsellor. One swipe to a wellbeing check.
                A library of micro-content in eleven SA languages. Designed to
                feel less like compliance and more like a friend who happens to
                be a clinician.
              </p>

              <ul className="mt-10 space-y-3.5">
                {[
                  "Talk-now voice, video and chat — 24/7",
                  "Anonymous, POPI-compliant by default",
                  "Daily 60-second mood pulses",
                  "Manager dashboard with team-level insights only",
                  "Works on low-end Android and feature phones",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-fg/90">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint/15 ring-1 ring-mint/40">
                      <svg viewBox="0 0 24 24" className="h-3 w-3 text-mint" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:glow-mint"
                >
                  See a live demo
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <span className="text-xs text-muted">15-minute walkthrough · no install needed</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative py-6">
              <Phone />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
