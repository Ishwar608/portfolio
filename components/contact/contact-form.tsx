"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please add your name."),
  email: z.string().email("Use a valid email."),
  organization: z.string().optional(),
  message: z.string().min(20, "A bit more detail helps — aim for twenty characters."),
  honeypot: z.string().max(0),
});

export type ContactFormValues = z.infer<typeof schema>;

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
      honeypot: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        throw new Error("Could not submit the form right now.");
      }
      return data;
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await mutation.mutateAsync(values);
    form.reset();
  });

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/45"
      noValidate
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-muted">
            Name
          </label>
          <input
            id="name"
            autoComplete="name"
            className="mt-2 w-full rounded-2xl border border-zinc-200/90 bg-white/80 px-4 py-3 text-sm outline-none ring-foreground/15 transition-shadow focus:ring-[3px] dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100"
            {...form.register("name")}
          />
          {form.formState.errors.name?.message ? (
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">{form.formState.errors.name.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-muted">
            Email
          </label>
          <input
            id="email"
            autoComplete="email"
            type="email"
            className="mt-2 w-full rounded-2xl border border-zinc-200/90 bg-white/80 px-4 py-3 text-sm outline-none ring-foreground/15 transition-shadow focus:ring-[3px] dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100"
            {...form.register("email")}
          />
          {form.formState.errors.email?.message ? (
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">{form.formState.errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="organization" className="text-xs font-medium uppercase tracking-wide text-muted">
            Organization <span className="font-normal lowercase text-zinc-500">(optional)</span>
          </label>
          <input
            id="organization"
            autoComplete="organization"
            className="mt-2 w-full rounded-2xl border border-zinc-200/90 bg-white/80 px-4 py-3 text-sm outline-none ring-foreground/15 transition-shadow focus:ring-[3px] dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100"
            {...form.register("organization")}
          />
        </div>

        <div className="hidden" aria-hidden>
          <label htmlFor="website">Website</label>
          <input id="website" tabIndex={-1} autoComplete="off" {...form.register("honeypot")} />
        </div>

        <div>
          <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-muted">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            className="mt-2 w-full resize-y rounded-2xl border border-zinc-200/90 bg-white/80 px-4 py-3 text-sm leading-relaxed outline-none ring-foreground/15 transition-shadow focus:ring-[3px] dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-100"
            {...form.register("message")}
          />
          {form.formState.errors.message?.message ? (
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">{form.formState.errors.message.message}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={mutation.isPending}
          className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground shadow-sm transition-transform active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60"
        >
          {mutation.isPending ? "Sending…" : "Send message"}
        </button>
        {mutation.isSuccess ? (
          <p className="text-sm text-emerald-700 dark:text-emerald-400" role="status">
            Thanks — your note is on its way.
          </p>
        ) : null}
        {mutation.isError ? (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            Something went wrong. Try email instead.
          </p>
        ) : null}
      </div>
    </form>
  );
}
