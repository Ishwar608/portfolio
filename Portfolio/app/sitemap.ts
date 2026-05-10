import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site-config";

const routes = ["", "/about", "/experience", "/projects", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((path) => ({
    url: `${siteOrigin}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
