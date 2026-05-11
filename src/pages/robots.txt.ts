import { siteConfig } from '../data/site';

export function GET() {
  const sitemapUrl = new URL('/sitemap-index.xml', siteConfig.siteUrl).toString();

  return new Response(
    ['User-agent: *', 'Allow: /', `Sitemap: ${sitemapUrl}`].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
