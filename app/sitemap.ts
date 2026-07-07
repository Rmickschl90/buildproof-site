import type { MetadataRoute } from "next";

const siteUrl = "https://getleeward.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/blog",
    "/blog/why-project-disputes-start-with-missing-documentation",
    "/blog/the-project-documentation-checklist-every-team-should-follow",
    "/blog/how-to-maintain-a-clear-project-history-from-start-to-finish",
    "/blog/why-text-messages-are-poor-project-records",
    "/blog/what-good-project-documentation-looks-like",
    "/privacy",
    "/terms",
    "/account-deletion",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.8 : 0.7,
  }));
}
