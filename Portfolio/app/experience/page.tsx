import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { experiences } from "@/lib/cv-data";
import { siteName, shortDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Experience",
  description: `Professional experience for ${siteName}. ${shortDescription}`,
  openGraph: {
    title: `Experience · ${siteName}`,
    description: shortDescription,
  },
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Experience</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Delivery track record</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Outcomes-first narrative: where I invested, what changed for users and systems, and how teams shipped with
          less thrash.
        </p>
      </Reveal>

      <ol className="mt-14 space-y-12">
        {experiences.map((role, i) => (
          <Reveal key={`${role.company}-${role.period}`} delay={0.05 * i}>
            <li className="relative grid gap-6 border-b border-zinc-200/70 pb-12 last:border-b-0 last:pb-0 dark:border-zinc-800/80 md:grid-cols-[220px_minmax(0,1fr)]">
              <div>
                <p className="text-sm font-semibold text-foreground">{role.title}</p>
                <p className="mt-2 text-sm text-muted">{role.company}</p>
                <p className="mt-2 text-xs tabular-nums text-zinc-500 dark:text-zinc-500">{role.period}</p>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">{role.location}</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </main>
  );
}
