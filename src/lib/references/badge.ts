export default {
    head: {
        cells: ['Prop', 'Type', 'Usage'],
    },
    rows: [
        {
            cells: ['size', `"xs" | "sm" | "base" | "lg"`, 'sz-[size]'],
        },
        {
            cells: ['variant', `"solid" | "soft" | "outlined"`, 'variant-[variant]'],
        },
        {
            cells: ['intent', `"primary" | "secondary" | "accent" | "info" | "danger" | "warning" | "success" | "gray"`, 'intent-[intent]'],
        },
    ],
}
