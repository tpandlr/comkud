import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

export const dynamic = "force-static";

const paths = ["", "/about", "/services", "/industries", "/why-us", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
