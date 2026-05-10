import Image from "next/image";
import Link from "next/link";
import { person } from "@/lib/cv-data";
import { brandLogoSrc, monogramFromFullName } from "@/lib/brand";
import { navLinks } from "@/lib/site-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function SiteHeader() {
  const monogram = monogramFromFullName(person.fullName);
  const isRemoteLogo = brandLogoSrc?.startsWith("http://") || brandLogoSrc?.startsWith("https://");

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-background/80 backdrop-blur-md dark:border-zinc-800/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex h-9 shrink-0 items-center gap-2 text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
          aria-label={`${person.fullName} — home`}
        >
          {brandLogoSrc ? (
            isRemoteLogo ? (
              // eslint-disable-next-line @next/next/no-img-element -- optional remote URL via env without image config
              <img
                src={brandLogoSrc}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-md object-contain"
              />
            ) : (
              <Image
                src={brandLogoSrc}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-md object-contain"
                priority
              />
            )
          ) : (
            <span className="flex h-8 min-w-8 items-center justify-center rounded-md bg-zinc-200 px-1.5 text-[11px] font-bold tabular-nums tracking-tight text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
              {monogram}
            </span>
          )}
        </Link>

        <div className="flex flex-1 items-center justify-end gap-8">
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 px-3 py-2 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-200 [&::-webkit-details-marker]:hidden">
        Menu
      </summary>
      <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-2xl border border-zinc-200/80 bg-white/95 p-2 shadow-lg backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95">
        <nav className="flex flex-col gap-0.5" aria-label="Mobile primary">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </details>
  );
}
