export default {
    head: {
        cells: ['Prop', 'Type', 'Usage'],
    },
    rows: [
        {
            cells: ['size', `"xs" | "sm" | "base" | "lg" | "xl"`, 'sz-[size]'],
        },
        {
            cells: ['variant', `"solid" | "soft" | "outlined" | "ghost"`, 'variant-[variant]'],
        },
        {
            cells: ['intent', `"primary" | "secondary" | "accent" | "info" | "danger" | "warning" | "success" | "gray" | "neutral"`, 'intent-[intent]'],
        },
    ],
}
