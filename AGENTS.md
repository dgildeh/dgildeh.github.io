## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project notes

- Blog posts live in `src/content/blog/*.md`. The `permalink` frontmatter field (`/YYYY/MM/DD/slug/`) sets the URL and must be kept for migrated posts so old WordPress links keep working.
- Each post's images live in `public/imgs/blogs/<slug>/`, where `<slug>` is the last part of its permalink. About page images are in `public/imgs/pages/about/`.
- Use pnpm, not npm (`pnpm install`, `pnpm build`). The version is pinned via `packageManager` in package.json.
- `pnpm build` runs `astro build` and then `pagefind` (search index). Search only works on a built site.
- See README.md for the post template and deployment.
