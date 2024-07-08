export const listProps = {
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
                `"soft" | "plain" | "outlined" | "mixed" | "bottomOutlined"`,
                "bottomOutlined",
            ]
        },
        {
            cells: [
                "triggerVariant",
                `"plain" | "softToSoft" | "outlinedToSolid" | "softToSolid"`,
                "plain",
            ]
        },
        {
            cells: [
                "intent",
                `"primary" | "secondary" | "accent" | "gray" | "neutral"`,
                "primary",
            ]
        },
        {
            cells: [
                "size",
                `"sm" | "md" | "lg" | "xl" | "2xl"`,
                "md",
            ]
        }
    ]
}

export const indicatorProps = {
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
                `"outlined" | "mixed" | "bottom" | "elevated" | "fancy"`,
                "bottom",
            ]
        }
    ]
}