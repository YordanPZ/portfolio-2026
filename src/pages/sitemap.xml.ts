import type { APIRoute } from 'astro';
import { site } from '~/data/site';

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ['/', '/llms.txt', site.cvUrl];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${site.url}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
