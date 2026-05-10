import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { person, professionalSummary } from "@/lib/cv-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/60 dark:border-zinc-800/80">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,var(--accent),transparent_72%)] blur-3xl dark:opacity-40" />
        <div className="absolute -right-24 bottom-[-6rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(closest-side,var(--ring),transparent_70%)] blur-3xl dark:opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            {person.title}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-3xl font-sans text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Shipping calm, measurable product quality across the stack.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{person.headline}</p>
        </Reveal>

        <Reveal delay={0.14}>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {professionalSummary.map((line) => (
              <li
                key={line}
                className="rounded-2xl border border-zinc-200/70 bg-white/70 p-4 text-sm leading-relaxed text-zinc-700 shadow-sm backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:text-zinc-300"
              >
                {line}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground shadow-sm transition-transform active:translate-y-px"
            >
              Start a conversation
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200/80 bg-white/60 px-6 text-sm font-medium text-zinc-800 backdrop-blur-sm transition-colors hover:border-zinc-300 hover:bg-white dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
            >
              View selected work
            </Link>
            <Link
              href={person.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              LinkedIn profile
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
