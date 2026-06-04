import { Reveal } from "./reveal";

export function Testimonial() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.22em] text-mint">
            From the field
          </span>
        </Reveal>
        <Reveal delay={80}>
          <blockquote className="mt-8 text-[clamp(1.8rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight">
            &ldquo;Staff productivity{" "}
            <span className="font-serif italic text-mint">soared</span>,
            presenteeism took a nosedive, and our team realised we{" "}
            <span className="font-serif italic text-mint">really do care</span>.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 inline-flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-mint/15 ring-1 ring-mint/30">
              <span className="font-serif italic text-mint">HR</span>
            </div>
            <div className="text-left">
              <div className="text-sm font-medium">Group HR Director</div>
              <div className="text-xs text-muted">JSE-listed industrials client</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
