import { Logo } from "./logo";

const cols = [
  {
    label: "Services",
    links: [
      "Employee Assistance Programme",
      "Wellness Days",
      "Occupational Health",
      "Workshops & Training",
      "Flu Vaccinations",
    ],
  },
  {
    label: "Company",
    links: ["About", "Affiliates", "Sign Up", "MySafety Solution", "Privacy Policy"],
  },
  {
    label: "Resources",
    links: ["Blog", "Podcast", "Case studies", "Reporting demo"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-elev/30">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo size={44} variant="stacked" />

            <p className="mt-4 max-w-sm text-sm text-muted">
              Turn-key corporate wellness for the modern workforce. Built in
              South Africa, deployed across 87 countries.
            </p>
            <div className="mt-6 grid gap-1 text-sm">
              <a href="mailto:sales@companywellness.co.za" className="text-fg/90 hover:text-mint">
                sales@companywellness.co.za
              </a>
              <a href="tel:+27117069945" className="text-muted hover:text-fg">
                +27 (0)11 706 9945
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.label}>
              <div className="text-xs uppercase tracking-[0.22em] text-mint">{c.label}</div>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-fg">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted">
            <span>&copy; {new Date().getFullYear()} Company Wellness Solutions</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
            <span>B-BBEE Level 2</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
            <span>POPI compliant</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
            <span>EAPA-SA</span>
          </div>
          <div className="flex items-center gap-2">
            {["Facebook", "Instagram", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-mint/40 hover:text-mint"
              >
                <span className="font-serif text-xs italic">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant background wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden"
      >
        <div className="font-serif italic leading-none text-mint/[0.05] text-[clamp(6rem,18vw,22rem)] tracking-tighter text-center -mt-10 pb-4">
          wellness.
        </div>
      </div>
    </footer>
  );
}
