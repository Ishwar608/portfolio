import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/lib/cv-data";
import { siteName, shortDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected projects and systems work for ${siteName}. ${shortDescription}`,
  openGraph: {
    title: `Projects · ${siteName}`,
    description: shortDescription,
  },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Projects</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Selected work</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Product surfaces where performance, reliability, and operator clarity had to move together.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={0.04 * i}>
            <article className="rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/40 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{p.name}</h2>
                  {p.subtitle ? <p className="mt-1 text-sm text-muted">{p.subtitle}</p> : null}
                  {p.links ? (
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
                      {p.links.product ? (
                        <a
                          className="text-accent underline-offset-4 hover:underline"
                          href={p.links.product}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Zikhara marketing site
                        </a>
                      ) : null}
                      {p.links.app ? (
                        <a
                          className="text-accent underline-offset-4 hover:underline"
                          href={p.links.app}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Beta app → Pricing IQ
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted sm:text-right">Stack</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.stack.join(" · ")}</p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
