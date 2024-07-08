import { z, defineCollection } from 'astro:content';

export const faq = z.object({
    question: z.string(),
    answer: z.string()
});

export const template = defineCollection({
    type: 'content',
    schema: z.object({
        priority: z.number(),
        name: z.string(),
        title: z.string(),
        coverImageLink: z.string(),
        shortDescription: z.string(),
        purchaseLink: z.string().url(),
        githubLink : z.string().url().optional(),
        previewLink: z.string().url(),
        price: z.string().optional(),
        rating: z.object({
            rate: z.number(),
            count: z.number()
        }).optional(),
        stack: z.array(z.union([
            z.literal("html"),
            z.literal("next"),
            z.literal("nuxt"),
            z.literal("astro")
        ])),
    })
});

export const author = z.object({
    name: z.string(),
    role: z.string(),
    imageLink: z.string()
});

export const testimonial = defineCollection({
    type: 'data',
    schema: z.object({
        author: author,
        content: z.string()
    })
});
