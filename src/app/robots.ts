import { MetadataRoute } from 'next'
import { data } from '@/lib/data'

export const dynamic = 'force-static'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${data.siteUrl}/sitemap.xml`,
  }
}
