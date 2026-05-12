import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { BLOG_CATEGORY_KEYS } from './data/content-taxonomy';

// Why: schema 像内容层的“类型合同”，它能在你写 Markdown 时提前发现字段遗漏。
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Why: 文章要落到清晰栏目里，显式分类比事后从标签里猜更稳定。
    category: z.enum(BLOG_CATEGORY_KEYS),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    updatedAt: z.coerce.date().optional(),
  }),
});

// Why: 博客和项目看起来都像文章，但它们字段需求不同，所以应该拆成两个集合。
const projectCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    techStack: z.array(z.string()).default([]),
    role: z.string().optional(),
    status: z.enum(['planned', 'building', 'completed']).default('completed'),
    period: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
