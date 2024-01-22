import { z, defineCollection } from "astro:content";
export const collections = {
  ramblings: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
      summary: z.string().max(280),
      date: z.date(),
    }),
  }),
};
