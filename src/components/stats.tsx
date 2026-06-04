"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

const STATS = [
  { value: 87, suffix: "", label: "Countries served", note: "global delivery, local language" },
  { value: 250000, suffix: "+", label: "Lives supported", note: "and counting, every quarter" },
  { value: 96, suffix: "%", label: "Client retention", note: "year over year" },
  { value: 24, suffix: "/7", label: "Counsellor access", note: "voice, chat, video, in-person" },
];

function format(n: number) {
  if (n >= 1000) return Math.round(n / 1000) + "k";
  return n.toString();
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(Math.floor(to * eased));
          if (t < 1) requestAnimationFrame(tick);
          else setVal(to);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {to >= 1000 ? format(val) : val}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="stats" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-mint">
              The receipts
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.02] tracking-tight">
              Numbers that <span className="font-serif italic text-mint">actually move</span> the dial.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="bg-bg">
              <div className="group relative h-full p-8 md:p-10 transition-colors hover:bg-bg-elev">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="text-[clamp(2.6rem,5vw,4.4rem)] font-medium leading-none tracking-tight text-fg">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-5 text-sm font-medium text-fg">{s.label}</div>
                <div className="mt-1 text-sm text-muted">{s.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
