import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import {
  certificates,
  education,
  languages,
  professionalSummary,
  skillGroups,
} from "@/lib/cv-data";
import { siteName, shortDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `${shortDescription} Background, education, and technical craft for ${siteName}.`,
  openGraph: {
    title: `About · ${siteName}`,
    description: shortDescription,
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">About</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Profile & craft</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          A concise view of how I work, what I optimize for, and the foundations that shape long-term product
          engineering.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
        <Reveal delay={0.05}>
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-lg font-semibold tracking-tight">
              Operating thesis
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {professionalSummary.map((line) => (
                <li
                  key={line}
                  className="rounded-2xl border border-zinc-200/70 bg-white/65 p-4 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/40"
                >
                  {line}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="space-y-6 rounded-3xl border border-zinc-200/80 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-950/40">
            <div>
              <h2 className="text-sm font-semibold tracking-tight">Education</h2>
              <ul className="mt-4 space-y-5">
                {education.map((edu) => (
                  <li key={edu.degree}>
                    <p className="text-sm font-medium text-foreground">{edu.degree}</p>
                    <p className="mt-1 text-sm text-muted">{edu.institution}</p>
                    <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">{edu.period}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80">
              <h2 className="text-sm font-semibold tracking-tight">Certificates</h2>
              <ul className="mt-4 space-y-3">
                {certificates.map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="font-medium">{c.name}</span>
                    <span className="shrink-0 text-xs tabular-nums text-muted">{c.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80">
              <h2 className="text-sm font-semibold tracking-tight">Languages</h2>
              <dl className="mt-4 space-y-2 text-sm">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-baseline justify-between gap-4">
                    <dt className="font-medium">{lang.name}</dt>
                    <dd className="text-muted">{lang.level}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </Reveal>
      </div>

      <section className="mt-16 border-t border-zinc-200/70 pt-16 dark:border-zinc-800/80">
        <Reveal>
          <h2 className="text-lg font-semibold tracking-tight">Technical breadth</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Groupings mirror how tooling shows up across real delivery — not exhaustive keyword stuffing.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={0.04 * i}>
              <article className="h-full rounded-3xl border border-zinc-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/40">
                <h3 className="text-sm font-semibold tracking-tight">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-zinc-200/80 bg-zinc-50 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
