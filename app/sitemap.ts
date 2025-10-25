import businesses from '../data/businesses.json';

export async function GET() {
  const siteUrl = 'https://bespoketravelcolombia.com';
  const urls = [
    '/',
    '/faq',
    `/business/${businesses.businesses[0].slug}`,
  ];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  for (const url of urls) {
    xml += `\n  <url>\n    <loc>${siteUrl}${url}</loc>\n  </url>`;
  }
  xml += '\n</urlset>';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' }});
}
