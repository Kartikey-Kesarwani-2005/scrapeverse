import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-card ring-1 ring-white/10 shadow-[0_6px_16px_-4px_rgb(14_148_136/0.5),0_0_24px_-8px_rgb(47_212_190/0.55)]">
        <Image
          src="/logo.png"
          alt=""
          width={1254}
          height={1254}
          className="size-full rounded-xl object-cover"
        />
      </span>
      <span className="hidden bg-linear-to-r from-foreground via-primary to-brand-end bg-clip-text font-heading text-lg font-bold tracking-tight text-transparent sm:inline">
        Scrapeverse
      </span>
    </span>
  );
}
