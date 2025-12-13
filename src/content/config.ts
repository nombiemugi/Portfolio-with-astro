// src/content/config.ts
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        img: z.string(),
        url: z.string(),
        author: z.string(),
        technologies: z.array(z.string()),        
        tags: z.array(z.string()),
        order: z.number().optional(), 
    })
});

export const collections = { projects }