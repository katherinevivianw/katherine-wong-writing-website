import type { APIRoute } from 'astro';

const routes = ['/', '/about/', '/writing/', '/contact/'];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://katherinevwong.com');
  const entries = routes
    .map((route) => `  <url><loc>${new URL(route, baseUrl)}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    },
  );
};
