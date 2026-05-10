import { existsSync } from "node:fs";
import { join } from "node:path";

const PUBLIC_LOGO_FILES = ["logo.svg", "logo.png", "brand.svg", "brand.png"] as const;

function resolveBrandLogoSrc(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_BRAND_LOGO?.trim();
  if (fromEnv) return fromEnv;

  const publicDir = join(process.cwd(), "public");
  for (const file of PUBLIC_LOGO_FILES) {
    if (existsSync(join(publicDir, file))) {
      return `/${file}`;
    }
  }
  return null;
}

/** Public URL path (e.g. `/logo.png`), full HTTPS URL, or `null` to use the monogram fallback. */
export const brandLogoSrc = resolveBrandLogoSrc();

/** Two letters: first + last initial when possible, else first two letters of the first name. */
export function monogramFromFullName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const a = parts[0][0];
    const b = parts[parts.length - 1][0];
    if (a && b) return `${a}${b}`.toUpperCase();
  }
  const word = parts[0] ?? "?";
  return word.slice(0, Math.min(2, word.length)).toUpperCase();
}
