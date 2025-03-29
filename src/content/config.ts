import { defineCollection, z } from "astro:content";
// z -> zoc schema

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        img: z.string(),
        url: z.string(),
        author: z.string(),
        technologies: z.string(),
        tags: z.string(),
    })
})

export const collections = { projects }