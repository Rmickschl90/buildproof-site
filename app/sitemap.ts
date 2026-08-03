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
    "/blog/how-landlords-and-property-managers-can-keep-dispute-ready-records",
    "/blog/change-orders-why-undocumented-scope-changes-cause-payment-disputes",
    "/blog/what-belongs-in-a-client-approval-record",
    "/blog/tracking-partial-payments-and-deposits-without-losing-the-paper-trail",
    "/blog/a-field-guide-to-working-offline-why-connectivity-shouldnt-break-your-documentation",
    "/blog/subcontractor-documentation-protecting-yourself-without-the-contract",
    "/blog/what-actually-holds-up-when-a-project-dispute-goes-to-mediation-or-court",
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
