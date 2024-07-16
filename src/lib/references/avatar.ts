export default {
    head: {
        cells: ['Prop', 'Type', 'Usage'],
    },
    rows: [
        {
            cells: ['size', `"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"`, 'sz-[size]'],
        },
        {
            cells: ['status', `"online" | "offline" | "busy" | "away"`, 'status-[status]'],
        },
        {
            cells: ['fallbackVariant', `"solid" | "soft"`, 'fallback-[variant]'],
        },
        {
            cells: ['fallback-intent', `"primary" | "secondary" | "accent" | "info" | "danger" | "warning" | "success" | "gray" | "neutral"`, 'intent-[intent]'],
        },
    ],
}
