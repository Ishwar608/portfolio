import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Hero } from "@/components/sections/hero";
import { experiences, person, projects } from "@/lib/cv-data";

export default function HomePage() {
  const latestRole = experiences[0];
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:gap-16">
          <Reveal>
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Current focus</h2>
              <p className="mt-2 text-sm text-muted">
                {latestRole.period} · {latestRole.company}
              </p>
              <div className="mt-8 space-y-4">
                {latestRole.bullets.slice(0, 3).map((b) => (
                  <div
                    key={b}
                    className="rounded-2xl border border-zinc-200/70 bg-white/60 p-4 text-sm leading-relaxed text-zinc-700 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-950/35 dark:text-zinc-300"
                  >
                    {b}
                  </div>
                ))}
              </div>
              <Link
                href="/experience"
                className="mt-8 inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                Full timeline
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-zinc-200/80 bg-zinc-50/70 p-6 dark:border-zinc-800 dark:bg-zinc-950/40">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Contact</p>
              <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                Based in {person.location}. Open to senior IC roles, product engineering, and high-trust delivery
                environments.
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs uppercase tracking-wide text-muted">Email</dt>
                  <dd>
                    <a className="font-medium text-foreground hover:underline" href={`mailto:${person.email}`}>
                      {person.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs uppercase tracking-wide text-muted">Profiles</dt>
                  <dd className="flex flex-wrap gap-x-4 gap-y-2">
                    <a className="font-medium hover:underline" href={person.linkedinUrl} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                    <a className="font-medium hover:underline" href={person.githubUrl} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </dd>
                </div>
              </dl>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
              >
                Contact form
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-zinc-200/70 pt-16 dark:border-zinc-800/80">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Selected projects</h2>
                <p className="mt-2 max-w-xl text-sm text-muted">
                  SaaS, marketplace automation, fintech, and collaboration domains — including Listing IQ and Zikhara AI.
                </p>
              </div>
              <Link
                href="/projects"
                className="text-sm font-medium text-accent underline-offset-4 hover:underline sm:shrink-0"
              >
                All projects
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={0.05 * i}>
                <article className="flex h-full flex-col rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/40">
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  {p.subtitle ? <p className="mt-1 text-sm text-muted">{p.subtitle}</p> : null}
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {p.bullets[0]}
                  </p>
                  {p.links ? (
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium">
                      {p.links.product ? (
                        <a
                          className="text-accent underline-offset-4 hover:underline"
                          href={p.links.product}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Product site
                        </a>
                      ) : null}
                      {p.links.app ? (
                        <a
                          className="text-accent underline-offset-4 hover:underline"
                          href={p.links.app}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          App (Pricing IQ)
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">Stack</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {p.stack.slice(0, 6).join(" · ")}
                    {p.stack.length > 6 ? " · …" : ""}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
