import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { person } from "@/lib/cv-data";
import { siteName, shortDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${siteName} for opportunities and collaborations. ${shortDescription}`,
  openGraph: {
    title: `Contact · ${siteName}`,
    description: shortDescription,
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Contact</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s build something durable</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Share a short note about the problem space, timeline, and what “good” looks like. I typically reply within one
            business day.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">Email</dt>
              <dd className="mt-1">
                <a className="font-medium text-foreground hover:underline" href={`mailto:${person.email}`}>
                  {person.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">Phone</dt>
              <dd className="mt-1 font-medium tabular-nums">{person.phone}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">Location</dt>
              <dd className="mt-1 font-medium">{person.location}</dd>
              <dd className="mt-1 text-muted">{person.addressLine}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.06}>
          <ContactForm />
        </Reveal>
      </div>
    </main>
  );
}
