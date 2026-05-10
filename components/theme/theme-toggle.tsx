"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsClient } from "@/hooks/use-is-client";

const themes = ["light", "dark", "system"] as const;

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <span
        className="inline-flex h-9 w-29 rounded-full border border-zinc-200/80 bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-900/40"
        aria-hidden
      />
    );
  }

  const cycle = () => {
    const current = themes.indexOf((theme ?? "system") as (typeof themes)[number]);
    const next = themes[(current + 1) % themes.length];
    setTheme(next);
  };

  const Icon =
    theme === "dark" || resolvedTheme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${theme ?? "system"}. Click to cycle light, dark, and system.`}
      className="group inline-flex h-9 items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-3 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-100 dark:hover:bg-zinc-900"
    >
      <Icon className="h-3.5 w-3.5 text-zinc-500 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-50" />
      <span className="hidden capitalize sm:inline">{theme ?? "system"}</span>
    </button>
  );
}
