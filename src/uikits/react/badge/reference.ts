export const badgeProps = {
    head : {
        cells : [
            "Prop",
            "Type",
            "Default",
        ]
    },
    rows: [
        {
            cells: [
                "size",
                `"xs" | "sm" | "md" | "lg"`,
                "sm",
            ]
        },
        {
            cells: [
                "variant",
                `"solid" | "outlined" | "soft"`,
                "soft",
            ]
        },
        {
            cells: [
                "intent",
                `"primary" | "secondary" | "accent" | "info" | "danger" | "warning" | "success" | "gray" | "neutral"`,
                "primary",
            ]
        }
    ]
}