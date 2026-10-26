# Portfolio website

A fast, accessible portfolio built with Astro and Markdown for free hosting on GitHub Pages.

## Local development

Requirements: Node.js 24 or newer and npm.

```bash
npm ci
npm run dev -- --host 0.0.0.0
```

Run `npm run build` before opening a pull request. The production output is generated in `dist/`.

## Personalize the site

Start with `src/site-config.ts` for your name, title, location, public email, availability, and social links. The placeholder initials in `src/components/Header.astro` and `src/components/Footer.astro` can be changed after you set your name.

Most content is Markdown:

- Profile pages: `src/content/pages/`
- Blog posts: `src/content/posts/`
- Projects: `src/content/projects/`
- Certificates: `src/content/certificates/`

Copy an existing Markdown file to add an entry. Keep `draft: true` on unfinished blog posts and change it to `false` when approved.

## Natural-language management

Examples of future requests:

- “Publish a blog post about my latest project.”
- “Change the accent colors to warm earth tones.”
- “Add this project and feature it on the home page.”
- “Update my About section with this biography.”

For each request, review the local build summary or pull-request preview before merging. Merging to `main` triggers the deployment workflow.

## Publish with GitHub Pages

1. Review and commit these starter files to the `main` branch.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and confirm the “Build and deploy portfolio” workflow succeeds.
5. The current repository name makes this a project site at `https://erfansalehii.github.io/Erfansalehi.github.io/`.

For a cleaner root URL, rename the repository to `Erfansalehii.github.io`, then remove the `base` line from `astro.config.mjs`, update the sitemap and robots URLs, and rebuild.

GitHub Pages is static hosting. Blog posts are files in the repository, so there is no database or paid service; practical capacity is governed by GitHub repository, Actions, and Pages limits.
