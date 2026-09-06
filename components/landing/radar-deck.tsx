"use client";

import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SparklesIcon } from "@hugeicons/core-free-icons";
import { TiltCard } from "@/components/ui/tilt-card";

const BLIPS = [
  { x: 26, y: 32, color: "#2fd4be", match: true },
  { x: 62, y: 22, color: "#8b7cf0", match: false },
  { x: 72, y: 56, color: "#51e3b4", match: true },
  { x: 46, y: 70, color: "#ecc069", match: false },
  { x: 32, y: 58, color: "#5eb5f5", match: false },
  { x: 58, y: 46, color: "#2fd4be", match: true },
  { x: 78, y: 34, color: "#ff6fa5", match: false },
];

const SCAN_LINES = [
  "probing rust-lang/rust-analyzer · 2,318 open issues",
  "matched 94% — language / interest / repo health",
  "indexing denoland/deno · 100,480 stars mapped",
  "12 good-first-issues found inside your stack",
  "sweep complete · 1,204 issues ranked for you",
];

function TypewriterConsole() {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const current = SCAN_LINES[line];
    if (chars < current.length) {
      const t = setTimeout(() => setChars(chars + 1), 24);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLine((line + 1) % SCAN_LINES.length);
      setChars(0);
    }, 1100);
    return () => clearTimeout(t);
  }, [chars, line]);

  return (
    <p className="min-h-6 truncate font-mono text-[11px] leading-6 sm:text-xs">
      <span className="text-primary">→</span>{" "}
      <span className="text-foreground">
        {SCAN_LINES[line].slice(0, chars)}
      </span>
      <span className="animate-pulse-dot">▍</span>
    </p>
  );
}

function HubAccent({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute z-10 flex items-center gap-2 rounded-xl border border-border/80 bg-card/90 px-3.5 py-2.5 shadow-lift backdrop-blur-md ${className}`}
    >
      <span className="flex size-7 items-center justify-center rounded-lg bg-mint text-mint-foreground">
        <HugeiconsIcon icon={SparklesIcon} size={15} />
      </span>
      <div>
        <p className="text-xs font-semibold text-foreground">94% match</p>
        <p className="text-[10px] text-muted-foreground">based on your stack</p>
      </div>
    </div>
  );
}

function FabAccent({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute z-10 flex items-center gap-2 rounded-xl border border-border/80 bg-card/90 px-3.5 py-2.5 shadow-lift backdrop-blur-md ${className}`}
    >
      <span className="flex size-7 items-center justify-center rounded-lg bg-primary-soft text-primary">
        <HugeiconsIcon icon={SparklesIcon} size={15} />
      </span>
      <div>
        <p className="font-mono text-xs font-semibold text-primary tabular-nums">
          1,204 issues
        </p>
        <p className="text-[10px] text-muted-foreground">indexed · live</p>
      </div>
    </div>
  );
}

export function RadarDeck() {
  return (
    <div className="animate-fade-up relative mx-auto w-full max-w-2xl">
      <div className="card-shine relative overflow-hidden rounded-2xl border border-border/80 bg-card/60 shadow-lift backdrop-blur-xl">
        {/* HUD header */}
        <div className="flex items-center justify-between gap-3 border-b border-border/70 bg-card/70 px-4 py-2.5">
          <span className="flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.22em] text-muted-foreground uppercase">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-success" />
            Target sweep
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.22em] text-muted-foreground/70 uppercase sm:block">
            scrapeverse / orbit-01
          </span>
        </div>

        <div className="relative p-5 sm:p-7">
          {/* Radar circle */}
          <TiltCard maxTilt={4} className="mx-auto w-full max-w-[24rem]">
            <div className="relative aspect-square w-full">
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/15" />
              <div className="absolute inset-[18%] rounded-full border border-primary/10" />
              <div className="absolute inset-[36%] rounded-full border border-primary/10" />
              {/* Crosshairs */}
              <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-primary/10" />
              <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-primary/10" />

              {/* Sweep blade */}
              <div
                aria-hidden="true"
                className="animate-radar-sweep absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgb(47 212 190 / 0.34) 20deg, rgb(139 124 240 / 0.24) 40deg, transparent 66deg)",
                  filter: "blur(1.5px)",
                }}
              />

              {/* Scan line */}
              <div
                aria-hidden="true"
                className="animate-radar-scan absolute inset-x-[6%] top-0 h-10 rounded-full bg-[linear-gradient(to_bottom,transparent,rgb(47_212_190/0.12),transparent)]"
              />

              {/* Blips */}
              {BLIPS.map((b, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${b.x}%`, top: `${b.y}%` }}
                >
                  <span
                    className="animate-radar-blip block size-2.5 rounded-full"
                    style={{
                      backgroundColor: b.color,
                      boxShadow: `0 0 14px 3px ${b.color}66`,
                      animationDelay: `${0.4 * i}s`,
                    }}
                  />
                  {b.match && (
                    <span
                      className="animate-radar-ping absolute inset-0 rounded-full"
                      style={{
                        backgroundColor: `${b.color}33`,
                        animationDelay: `${0.4 * i}s`,
                      }}
                    />
                  )}
                </div>
              ))}

              {/* Hub */}
              <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <span className="absolute inset-0 animate-radar-ping rounded-full bg-primary/25" />
                <span className="animate-pulse-dot relative flex size-11 items-center justify-center rounded-full border border-primary/30 bg-gradient-to-br from-primary via-brand-mid to-brand-end shadow-glow">
                  <HugeiconsIcon
                    icon={SparklesIcon}
                    size={18}
                    className="text-primary-foreground"
                  />
                </span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Console */}
        <div className="border-t border-border/70 bg-card/70 px-4 py-3">
          <TypewriterConsole />
        </div>
      </div>

      {/* HUD accents */}
      <HubAccent className="animate-float -top-8 -right-3 hidden lg:flex" />
      <FabAccent className="animate-float-delayed -bottom-8 -left-3 hidden lg:flex" />
    </div>
  );
}
