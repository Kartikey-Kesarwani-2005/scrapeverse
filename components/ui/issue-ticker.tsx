import { cn } from "@/lib/utils";
import { languageColorMap } from "@/lib/languages";

interface TickerItem {
  repo: string;
  title: string;
  lang: string;
}

const ITEMS: TickerItem[] = [
  { repo: "rust-lang/rust-analyzer", title: "Improve FP parse diagnostics", lang: "Rust" },
  { repo: "denoland/deno", title: "Custom file watcher support", lang: "TypeScript" },
  { repo: "neovim/neovim", title: "Document Lua API helpers", lang: "C" },
  { repo: "vercel/next.js", title: "Clarify rewrites check docs", lang: "TypeScript" },
  { repo: "microsoft/vscode", title: "Terminal shell pattern colors", lang: "TypeScript" },
  { repo: "pytorch/pytorch", title: "Nice error for empty tensor leaf", lang: "Python" },
  { repo: "facebook/react-native", title: "Android back handler test inv", lang: "Java" },
  { repo: "tailwindlabs/tailwindcss", title: "Prose: add marker styling", lang: "TypeScript" },
  { repo: "vuejs/core", title: "Transitionenter hooks docs", lang: "TypeScript" },
  { repo: "astral-sh/ruff", title: "Suggest map for manual loop", lang: "Rust" },
];

function TickerChip({ item }: { item: TickerItem }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border/70 bg-card/85 py-1.5 pr-4 pl-2.5 shadow-soft">
      <span
        aria-hidden="true"
        className="size-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: languageColorMap[item.lang] ?? "#5e7f79" }}
      />
      <span className="font-mono text-[11px] font-semibold text-secondary-foreground">
        {item.repo}
      </span>
      <span aria-hidden="true" className="text-border">
        /
      </span>
      <span className="truncate text-[11px] text-muted-foreground">
        {item.title}
      </span>
    </div>
  );
}

export function IssueTicker({ compact = false }: { compact?: boolean }) {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section className={cn("relative", compact ? "py-4" : "py-10 sm:py-14")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 font-mono text-[10px] font-medium tracking-[0.24em] text-muted-foreground uppercase">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-success" />
            Live feed · happening now
          </span>
          <span className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground/60 uppercase">
            auto-scanned
          </span>
        </div>

        <div className="issue-ticker mask-fade-x relative overflow-hidden">
          <div className="issue-ticker-track gap-3 pr-3">
            {doubled.map((item, i) => (
              <TickerChip key={`${item.repo}-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}