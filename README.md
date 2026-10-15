# davidgildeh.com

Personal blog of David Gildeh, built with [Astro](https://astro.build) and hosted on GitHub Pages.
Migrated from WordPress.com in October 2026. The design recreates the WordPress "Avid" theme.

## Development

Uses [pnpm](https://pnpm.io). The version is pinned in `package.json` (`packageManager`), and pnpm switches to it automatically.

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static site + Pagefind search index in dist/
pnpm preview   # serve dist/ (search only works after a build)
```

## Writing a post

Add a Markdown file to `src/content/blog/`, named `YYYY-MM-DD-slug.md`:

```md
---
title: "My New Post"
date: "2026-10-14T09:00:00-07:00"
permalink: "/2026/10/14/my-new-post/"
description: "One or two sentences shown on the home page card and in search results."
image: "/imgs/blogs/my-new-post/cover.jpg"   # featured image for the home page card
tags:
  - "technology"
draft: false
---

Post body in Markdown…
```

- `permalink` sets the URL and must look like `/YYYY/MM/DD/slug/`. This keeps the WordPress URL format.
- Put the post's images in `public/imgs/blogs/<slug>/` (the slug from the permalink) and reference them as `/imgs/blogs/<slug>/file.jpg`.
- Embed a video with `<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/ID" title="…" allowfullscreen></iframe></div>`.
- To float a small image beside the text, use `<img src="…" class="alignleft" width="150" />` (or `alignright`).

## Layout

| Path | Purpose |
| --- | --- |
| `src/content/blog/` | Blog posts (Markdown) |
| `src/content/pages/about.md` | About page |
| `public/imgs/blogs/<slug>/` | Images for each post, one folder per post slug |
| `public/imgs/pages/about/` | Images for the About page |
| `src/styles/global.css` | All styling (Avid theme recreation) |
| `src/pages/[year]/[month]/[day]/[slug].astro` | Post template |
| `src/pages/index.astro`, `page/[page].astro` | Home page timeline and `/page/N/` pagination |
| `src/pages/tag/[tag].astro` | Tag archives |
| `src/pages/search.astro` | Static search ([Pagefind](https://pagefind.app)) |
| `src/pages/rss.xml.ts` | RSS feed at `/rss.xml` |

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.

One-time setup:

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Under **Custom domain**, enter `davidgildeh.com`. `public/CNAME` already contains it.
3. At your DNS provider, point the apex `davidgildeh.com` to GitHub Pages with `A` records
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   (and optionally the `AAAA` records). Add a `CNAME` record for `www` pointing to `<your-github-user>.github.io`.
4. Once DNS resolves, tick **Enforce HTTPS**.

If the domain is registered through WordPress.com, either change the DNS records in WordPress.com's domain
settings or transfer the domain out. Removing the domain from the WordPress site itself is not enough.
