import { MetadataRoute } from 'next'
import { data } from '@/lib/data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteUrl, navigation } = data;

  const navLinks = navigation.navItems.map(item => ({
    url: `${siteUrl}/#${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Add contact section to sitemap
  navLinks.push({
    url: `${siteUrl}/#contact`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  })

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...navLinks
  ]
}
