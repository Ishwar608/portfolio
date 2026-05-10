const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Canonical site origin — set `NEXT_PUBLIC_SITE_URL` in production for accurate metadata URLs. */
export const siteOrigin = raw.replace(/\/$/, "");

export const siteName = "Ishwar Suthar";
export const shortDescription =
  "Full stack developer specializing in React, Next.js, NestJS, and cloud-backed product delivery.";
