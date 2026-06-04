import { Reveal } from "./reveal";

export function CTA() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-line bg-bg-elev p-10 md:p-16">
            {/* Decorative orbs */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div
                className="absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(circle, #0fae7a, transparent 70%)" }}
              />
              <div
                className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, #f5b14c, transparent 70%)" }}
              />
              <div className="absolute inset-0 dot-grid opacity-40" />
            </div>

            <div className="grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="text-xs uppercase tracking-[0.22em] text-mint">
                  Let&apos;s get to work
                </span>
                <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.02] tracking-tight">
                  Investing in a <span className="font-serif italic text-mint">happier</span>, healthier workplace
                  <span className="text-muted">.</span>
                </h2>
                <p className="mt-5 max-w-xl text-lg text-muted">
                  Tell us a little about your team and we&apos;ll come back within one business day with a tailored
                  wellness audit and ballpark plan.
                </p>
              </div>

              <form className="grid gap-3 rounded-2xl border border-line bg-bg/60 p-5 backdrop-blur">
                <label className="grid gap-1.5">
                  <span className="text-xs uppercase tracking-[0.16em] text-muted">Name</span>
                  <input
                    type="text"
                    placeholder="Jane Mokoena"
                    className="rounded-xl border border-line bg-bg px-3.5 py-3 text-[15px] outline-none focus:border-mint/60"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs uppercase tracking-[0.16em] text-muted">Work email</span>
                  <input
                    type="email"
                    placeholder="jane@yourcompany.co.za"
                    className="rounded-xl border border-line bg-bg px-3.5 py-3 text-[15px] outline-none focus:border-mint/60"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs uppercase tracking-[0.16em] text-muted">Team size</span>
                  <select
                    defaultValue=""
                    className="rounded-xl border border-line bg-bg px-3.5 py-3 text-[15px] outline-none focus:border-mint/60"
                  >
                    <option value="" disabled>Choose a range</option>
                    <option>Under 100</option>
                    <option>100&ndash;500</option>
                    <option>500&ndash;2,000</option>
                    <option>2,000+</option>
                  </select>
                </label>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-mint px-5 py-3.5 text-[15px] font-medium text-bg transition-all hover:-translate-y-0.5 hover:glow-mint"
                >
                  Request the audit
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="mt-1 text-center text-[11px] text-muted">
                  We&apos;ll never share your details. POPI-compliant.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
