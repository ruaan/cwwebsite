const TICKER = [
  "EAPA-SA Member",
  "EAPA International",
  "B-BBEE Level 2",
  "POPI-compliant",
  "WWASA Affiliate",
  "87 Countries",
  "11 SA Languages",
  "24/7 Counsellor Access",
];

export function Marquee() {
  const items = [...TICKER, ...TICKER];
  return (
    <section
      aria-label="Credentials"
      className="relative border-y border-line bg-bg-elev/40 py-6 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bg-elev to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bg-elev to-transparent"
        aria-hidden
      />
      <div className="marquee-track gap-12 text-sm tracking-wide text-muted">
        {items.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-12 whitespace-nowrap">
            <span className="font-serif italic text-fg/90">{t}</span>
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-mint/60" />
          </span>
        ))}
      </div>
    </section>
  );
}
