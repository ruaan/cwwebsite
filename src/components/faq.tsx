"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

const FAQS = [
  {
    q: "How is this different from the EAP we already have?",
    a: "Most legacy EAPs are call-centre wrappers with single-digit utilisation. We start with the actual humans, build a mobile-first front door, and design programmes around your industry, languages and shift patterns. Utilisation routinely exceeds global benchmarks.",
  },
  {
    q: "Is employee data confidential? What about POPI?",
    a: "Yes — by default. Individual cases are never shared with employers. We surface only de-identified, aggregated insights at a team or org level, drawn through POPI-compliant pipelines. We&rsquo;ll happily walk your legal team through the data architecture.",
  },
  {
    q: "Do you operate outside South Africa?",
    a: "We deliver in 87 countries through a global affiliate network, with local-language clinicians and locally compliant data handling. The contracting, billing and reporting stay in one place.",
  },
  {
    q: "What does this typically cost?",
    a: "Pricing is per-employee-per-month and scales with the modules you choose. We sit somewhere between the bargain-bin EAPs and the boutique consultancies — premium quality at a fair price. We&rsquo;ll quote within one business day of a 25-minute audit call.",
  },
  {
    q: "How fast can we go live?",
    a: "Discovery, design and rollout typically lands inside 60 days, including manager briefings, internal comms and the 30-day adoption sprint. Urgent situations can compress to 14 days.",
  },
  {
    q: "What about employees without smartphones?",
    a: "The platform works on low-end Android and feature phones. We also run physical wellness days, on-site clinics and printed-material campaigns so no LSM gets left behind.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className={`group border-b border-line transition-colors ${open ? "bg-bg-elev/40" : ""}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 px-6 py-7 text-left transition-colors hover:bg-bg-elev/30 md:px-8"
      >
        <span className="flex items-baseline gap-5">
          <span className="font-serif text-base italic text-mint tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-lg font-medium tracking-tight md:text-xl">
            {q}
          </span>
        </span>
        <span
          aria-hidden
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-all ${
            open ? "border-mint/40 bg-mint/10 text-mint rotate-45" : "text-muted"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className="max-w-3xl px-6 pb-8 pl-[3.6rem] text-[15px] leading-relaxed text-muted md:px-8 md:pl-[4.2rem]"
            dangerouslySetInnerHTML={{ __html: a }}
          />
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.22em] text-mint">
              The fine print, plainly
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.02] tracking-tight">
              Questions <span className="font-serif italic text-mint">HR leaders</span> actually ask us.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="overflow-hidden rounded-3xl border border-line bg-bg/40 backdrop-blur">
            {FAQS.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
