import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const base = '';
  const routes = ['/', '/about/', '/skills/', '/projects/', '/blog/', '/certificates/', '/contact/'];
  const urls = [...routes, ...posts.map((post) => `/blog/${post.id}/`)]
    .map((path) => `<url><loc>${new URL(`${base}${path}`, site)}</loc></url>`)
    .join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
