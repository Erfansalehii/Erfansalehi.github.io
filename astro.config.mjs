import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://erfansalehii.github.io',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
