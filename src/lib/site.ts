import { readFileSync } from 'node:fs';
import path from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';
import { imageSize } from 'image-size';

export const SITE = {
  title: 'David Gildeh',
  tagline:
    'SaaS Entrepreneur. CEO/Founder SambaStream, acquired by Alfresco where I became Director of Cloud Services launching their Enterprise Cloud Business. Now CEO/Founder of Dataloop.IO, a monitoring tool for DevOps',
  author: 'David Gildeh',
  postsPerPage: 10,
  /** Google Analytics 4 measurement ID, added to every page in production builds. */
  googleAnalyticsId: 'G-1BF9MNFJ7T',
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/about/' },
  { label: 'Twitter', href: 'https://twitter.com/dgildeh' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davidgildeh' },
  { label: 'YouTube', href: 'https://www.youtube.com/user/dgildeh' },
];

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-');
}

/** Tag name -> post count, for the tag cloud. */
export function tagCounts(posts: Post[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const p of posts) for (const t of p.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return new Map([...counts].sort((a, b) => a[0].localeCompare(b[0], 'en', { sensitivity: 'base' })));
}

/**
 * The post's publish date as WordPress showed it. Taken from the permalink so
 * it is the author's local date rather than the UTC date.
 */
export function postDate(post: Post): { iso: string; label: string } {
  const [, y, m, d] = post.data.permalink.match(/^\/(\d{4})\/(\d{2})\/(\d{2})\//)!;
  const date = new Date(Date.UTC(+y, +m - 1, +d));
  return {
    iso: `${y}-${m}-${d}`,
    label: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }),
  };
}

/** Pixel size of an image in public/, read at build time so cards reserve space before it loads. */
export function publicImageSize(src: string): { width: number; height: number } | undefined {
  try {
    const { width, height } = imageSize(readFileSync(path.join(process.cwd(), 'public', decodeURI(src))));
    return width && height ? { width, height } : undefined;
  } catch {
    return undefined;
  }
}
