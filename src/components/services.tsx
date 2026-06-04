import { Reveal } from "./reveal";

type Service = {
  title: string;
  tagline: string;
  body: string;
  bullets: string[];
  span?: string;
  badge?: string;
  art: React.ReactNode;
};

const HeartPulse = () => (
  <svg viewBox="0 0 200 120" className="h-full w-full">
    <defs>
      <linearGradient id="hp" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#7af0c2" />
        <stop offset="1" stopColor="#f5b14c" />
      </linearGradient>
    </defs>
    <path
      d="M0 60 H30 L42 30 L58 90 L72 50 L86 70 L100 40 L114 80 L130 55 H200"
      stroke="url(#hp)"
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="100" cy="40" r="3" fill="#7af0c2" />
  </svg>
);

const Rings = () => (
  <svg viewBox="0 0 200 120" className="h-full w-full">
    <g transform="translate(100,60)" fill="none" stroke="currentColor">
      {[14, 28, 42, 56].map((r, i) => (
        <circle key={r} r={r} className={i % 2 ? "text-mint/30" : "text-mint/60"} strokeWidth="1" />
      ))}
      <circle r="6" className="text-mint" fill="currentColor" />
    </g>
  </svg>
);

const Vial = () => (
  <svg viewBox="0 0 200 120" className="h-full w-full">
    <g transform="translate(80,8)" stroke="#7af0c2" fill="none" strokeWidth="1.6" strokeLinecap="round">
      <path d="M15 0 V20 L0 90 a18 18 0 0 0 36 0 L21 20 V0 Z" />
      <path d="M2 60 a18 18 0 0 0 32 0" fill="#7af0c2" fillOpacity="0.18" />
      <path d="M9 -2 H27" />
    </g>
  </svg>
);

const People = () => (
  <svg viewBox="0 0 200 120" className="h-full w-full">
    <g stroke="#7af0c2" fill="none" strokeWidth="1.4">
      {[30, 70, 110, 150].map((x, i) => (
        <g key={x} transform={`translate(${x},42)`}>
          <circle r="9" fill={i === 1 ? "#7af0c2" : "transparent"} fillOpacity="0.18" />
          <path d="M-14 38 Q0 18 14 38" />
        </g>
      ))}
    </g>
  </svg>
);

const Sparkles = () => (
  <svg viewBox="0 0 200 120" className="h-full w-full">
    <g stroke="#f5b14c" fill="none" strokeWidth="1.4">
      {[
        [40, 30], [160, 24], [78, 70], [120, 90], [40, 88], [170, 80],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <path d="M0 -10 V10 M-10 0 H10" />
          <circle r="2" fill="#f5b14c" />
        </g>
      ))}
    </g>
  </svg>
);

const SERVICES: Service[] = [
  {
    title: "Employee Assistance Programme",
    tagline: "The flagship",
    body:
      "A world-class EAP that disrupts the blanket-approach industry — built around the actual humans in your workforce, with the My Company Wellness app at the centre.",
    bullets: ["24/7 multilingual counsellors", "POPI-compliant insights", "Exceeds global utilisation"],
    span: "md:col-span-2 md:row-span-2",
    badge: "Flagship",
    art: <HeartPulse />,
  },
  {
    title: "Corporate Wellness Days",
    tagline: "Beyond the once-off",
    body:
      "Innovation-led wellness events designed for genuine behaviour change, not just selfies at a sign-in desk.",
    bullets: ["Screenings + biometrics", "Themed activations", "On-site clinic flow"],
    art: <Rings />,
  },
  {
    title: "Occupational Health",
    tagline: "OCC + compliance",
    body:
      "Medicals, fitness-for-work and the unglamorous compliance work that keeps you audit-ready and your people safe.",
    bullets: ["Pre-employment medicals", "Risk-based protocols", "Absenteeism analytics"],
    art: <Vial />,
  },
  {
    title: "Workshops & Training",
    tagline: "Learning that lands",
    body:
      "Practical, manager-led sessions on the topics that actually shift culture — burnout, conflict, money, sleep.",
    bullets: ["Live + on-demand", "Toolkit handouts", "Manager enablement"],
    art: <People />,
  },
  {
    title: "Flu Vaccination Drives",
    tagline: "Season-ready",
    body: "On-site flu jabs delivered by registered nurses, scheduled around your shifts, billed clean.",
    bullets: ["Mobile clinics", "Consent + cold-chain", "Same-day reporting"],
    art: <Sparkles />,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-30" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-mint">
                What we ship
              </span>
              <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.02] tracking-tight">
                Five services. One <span className="font-serif italic text-mint">turn-key</span> partnership.
              </h2>
            </div>
            <p className="max-w-md text-muted">
              Mix and match, or hand the whole brief to us. Either way, you get a single point of contact and a
              single, beautifully boring monthly invoice.
            </p>
          </div>
        </Reveal>

        <div className="grid auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 80}
              className={`${s.span ?? ""}`}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-bg-elev/50 p-7 backdrop-blur transition-all duration-500 hover:border-mint/40 hover:bg-bg-elev md:p-9">
                {/* Hover gradient */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at var(--x,50%) var(--y,0%), rgba(122,240,194,0.10), transparent 40%)",
                  }}
                />
                {/* Background art */}
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] transition-opacity duration-700 group-hover:opacity-[0.32]">
                  <div className="absolute inset-x-0 bottom-0 h-1/2">{s.art}</div>
                </div>

                <header className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted">
                    {s.tagline}
                  </span>
                  {s.badge && (
                    <span className="rounded-full border border-mint/40 bg-mint/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-mint">
                      {s.badge}
                    </span>
                  )}
                </header>

                <h3 className="mt-5 text-2xl font-medium tracking-tight md:text-[28px]">
                  {s.title}
                </h3>

                <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-muted">
                  {s.body}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-fg/80"
                    >
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-mint transition-transform group-hover:translate-x-0.5"
                >
                  Explore
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
