import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, SITE } from '../lib/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.title,
    description: SITE.tagline,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: post.data.permalink,
      categories: post.data.tags,
    })),
  });
}
