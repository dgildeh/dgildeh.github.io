import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Full URL path, e.g. /2018/11/06/my-post/ — kept identical to WordPress. */
    permalink: z.string().regex(/^\/\d{4}\/\d{2}\/\d{2}\/[^/]+\/$/),
    description: z.string().optional(),
    /** Featured image shown on the home page card. */
    image: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    wpId: z.number().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    permalink: z.string(),
    wpId: z.number().optional(),
  }),
});

export const collections = { blog, pages };
