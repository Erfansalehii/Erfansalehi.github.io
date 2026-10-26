import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    description: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string().default('Project'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    accent: z.enum(['violet', 'cyan', 'coral', 'lime']).default('violet'),
    image: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    repository: z.url().optional(),
    demo: z.url().optional(),
  }),
});

const certificates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certificates' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    issuedAt: z.coerce.date().optional(),
    image: z.string().optional(),
    document: z.string().optional(),
    credentialUrl: z.url().optional(),
    skills: z.array(z.string()).default([]),
  }),
});

export const collections = { pages, posts, projects, certificates };
