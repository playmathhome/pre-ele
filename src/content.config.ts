import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const mathUnits = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: 'src/content/math-units' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'math-units': mathUnits,
};
