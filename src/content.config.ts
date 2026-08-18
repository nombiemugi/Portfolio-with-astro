// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        img: z.string(),
        url: z.string(),
        technologies: z.array(z.string()),
        // Not rendered anywhere today, so they stay optional rather than
        // forcing every entry to carry dead frontmatter.
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        status: z.enum(["developed", "in-development"]),
    })
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.enum(["Remote", "Onsite", "Hybrid"]),
    startDate: z.number(),
    endDate: z.number().optional(),
    technologies: z.array(z.string()),
  }),
});

export const collections = {
  projects,
  experience,
};
