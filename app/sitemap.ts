import { MetadataRoute } from 'next'
import businesses from '../data/businesses.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://bespoketravelcolombia.com';
  
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/business/${businesses.businesses[0].slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
