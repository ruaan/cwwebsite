import type { SVGProps } from "react";

type LogoMarkProps = SVGProps<SVGSVGElement> & {
  size?: number;
  /** Use a flat single-color treatment (inherits currentColor) instead of gradient. */
  mono?: boolean;
};

/**
 * The CWS "Pulse Leaf" — a vesica leaf cradling a single heartbeat,
 * anchored by a center seed. Designed to read at 16px and at 800px.
 */
export function LogoMark({ size = 40, mono = false, ...rest }: LogoMarkProps) {
  const stroke = mono ? "currentColor" : "url(#cwsLeafGrad)";
  const accent = mono ? "currentColor" : "url(#cwsPulseGrad)";

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      aria-hidden
      {...rest}
    >
      <defs>
        <linearGradient id="cwsLeafGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9ff5d2" />
          <stop offset="55%" stopColor="#7af0c2" />
          <stop offset="100%" stopColor="#0fae7a" />
        </linearGradient>
        <linearGradient id="cwsPulseGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7af0c2" stopOpacity="0" />
          <stop offset="20%" stopColor="#7af0c2" />
          <stop offset="80%" stopColor="#9ff5d2" />
          <stop offset="100%" stopColor="#9ff5d2" stopOpacity="0" />
        </linearGradient>
        <filter id="cwsGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Subtle interior wash — faint */}
      <g transform="rotate(-14 32 32)">
        <path
          d="M32 5.5 C 52 18, 52 46, 32 58.5 C 12 46, 12 18, 32 5.5 Z"
          fill={mono ? "transparent" : "url(#cwsLeafGrad)"}
          fillOpacity={mono ? 0 : 0.07}
        />
        {/* Leaf outline */}
        <path
          d="M32 5.5 C 52 18, 52 46, 32 58.5 C 12 46, 12 18, 32 5.5 Z"
          stroke={stroke}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* Center vein hint */}
        <path
          d="M32 8 V 56"
          stroke={stroke}
          strokeWidth="0.6"
          strokeOpacity="0.35"
        />
      </g>

      {/* Pulse — drawn straight through the horizontal axis, on top of the tilted leaf */}
      <g filter="url(#cwsGlow)">
        <path
          d="M5 32 L19 32 L24 24 L29 41 L34 22 L39 36 L44 32 L59 32"
          stroke={accent}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Seed dot */}
      <circle cx="32" cy="32" r="2.6" fill={mono ? "currentColor" : "#9ff5d2"} />
      <circle cx="32" cy="32" r="1.1" fill="#07090b" />
    </svg>
  );
}

type LogoProps = {
  size?: number;
  className?: string;
  /** "stacked" puts the wordmark on two lines, "inline" on one. */
  variant?: "stacked" | "inline" | "mark";
};

/**
 * Full lock-up: mark + wordmark. The wordmark intentionally treats
 * "Solutions" as a serif italic accent to echo the rest of the brand voice.
 */
export function Logo({
  size = 36,
  className = "",
  variant = "stacked",
}: LogoProps) {
  if (variant === "mark") {
    return (
      <span className={`inline-flex ${className}`}>
        <LogoMark size={size} />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark size={size} />
      {variant === "stacked" ? (
        <span className="flex flex-col leading-none">
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted">
            Company Wellness
          </span>
          <span className="mt-1 font-serif text-xl italic text-fg">
            Solutions<span className="text-mint">.</span>
          </span>
        </span>
      ) : (
        <span className="text-[15px] font-medium tracking-tight text-fg">
          Company Wellness{" "}
          <span className="font-serif italic text-mint">Solutions</span>
        </span>
      )}
    </span>
  );
}
