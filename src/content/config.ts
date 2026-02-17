import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '*.md', base: './notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    day: z.number().optional(),
    lang: z.enum(['en', 'id']).optional(),
  }),
});

export const collections = { notes };
