export const root = {
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
                `"xxs" | "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl"`,
                "md",
            ]
        },
        {
            cells: [
                "status",
                `"online" | "offline" | "busy" | "away"`,
                "-",
            ]
        },
        {
            cells: [
                "topStatus",
                `boolean`,
                "false",
            ]
        },
        {
            cells: [
                "bottomStatus",
                `boolean`,
                "false",
            ]
        }
    ]
}

export const fallback = {
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
                "variant",
                `"solid" | "soft"`,
                "solid",
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
