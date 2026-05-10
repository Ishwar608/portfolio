import Link from "next/link";
import { person } from "@/lib/cv-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200/70 bg-zinc-50/50 dark:border-zinc-800/80 dark:bg-zinc-950/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{person.fullName}</p>
          <p className="mt-1 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            {person.title} · {person.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            className="text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
            href={`mailto:${person.email}`}
          >
            Email
          </a>
          <a
            className="text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
            href={person.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
            href={person.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <Link
            className="text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-500 lg:text-right">
          © {year} {person.fullName}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
