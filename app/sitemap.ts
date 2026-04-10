import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nbreform.ca';
  const now = new Date();

  const staticPages = [
    { path: '/', priority: 1, changefreq: 'daily' as const },
    { path: '/healthcare/', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/housing/', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/oligarchy/', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/corruption/', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/economy/', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/environment/', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/intimidation/', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/infrastructure/', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/issues/', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/budget-2026/', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/child-poverty/', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/climate-energy/', priority: 0.9, changefreq: 'weekly' as const },
    { path: '/resources/', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/faq/', priority: 0.6, changefreq: 'monthly' as const },
    { path: '/donate/', priority: 0.9, changefreq: 'monthly' as const },
    { path: '/about/', priority: 0.5, changefreq: 'monthly' as const },
    { path: '/contact/', priority: 0.3, changefreq: 'yearly' as const },
    { path: '/seniors/', priority: 0.7, changefreq: 'weekly' as const },
    { path: '/indigenous-rights/', priority: 0.7, changefreq: 'weekly' as const },
    { path: '/education/', priority: 0.7, changefreq: 'weekly' as const },
    { path: '/mental-health/', priority: 0.7, changefreq: 'weekly' as const },
    { path: '/rural-healthcare/', priority: 0.7, changefreq: 'weekly' as const },
    { path: '/fisheries/', priority: 0.7, changefreq: 'weekly' as const },
    { path: '/tax-fairness/', priority: 0.7, changefreq: 'weekly' as const },
    { path: '/articles/', priority: 0.9, changefreq: 'daily' as const },
    { path: '/take-action/', priority: 1, changefreq: 'daily' as const },
    { path: '/sources/', priority: 0.7, changefreq: 'daily' as const },
    { path: '/privacy/', priority: 0.3, changefreq: 'yearly' as const },
    // Article pages
    { path: '/articles/atcon-scandal/', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/articles/blaine-higgs-controversies/', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/articles/dornan-firing-settlement/', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/articles/holt-lobbying-scandal/', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/articles/irving-tax-nb-extraction/', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/articles/irving-monopoly-forestry-media/', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/articles/irving-company-province/', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/articles/nb-power-rate-hearing-2026/', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/articles/healthcare-crisis-2026/', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/articles/nb-power-50-percent-hike-explained/', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/articles/nb-community-voices-nb-power/', priority: 0.7, changefreq: 'monthly' as const },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
