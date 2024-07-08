import { Caption } from "@components/typography";
import { type ToggleRootProps } from "@tailus/themer";
import Toggle from "./Toggle";
import { Bold } from "lucide-react";

const colors:ToggleRootProps["intent"][] = ["primary", "secondary", "accent", "gray", "neutral"]

type Variant = {
    variant: ToggleRootProps["variant"],
    colors : ToggleRootProps["intent"][]
}

const variants:Variant[] = [
    {
        variant: "plain",
        colors,
    },
    {
        variant: "soft",
        colors,
    },
    {
        variant: "softToSolid",
        colors,
    },
    {
        variant: "mixed",
        colors,
    }
]

export const Colors = () => (
    <div className="grid items-end [grid-template-columns:1fr_auto] gap-4">
        <div className="py-4 space-y-4">
            {
                colors.map((color, index) => (
                    <div key={index} className="h-9 flex items-center">
                        <Caption className="capitalize">{color}</Caption>
                    </div>
                ))
            }
        </div>
        <div className="overflow-x-auto sm:overflow-visible">
            <div className="w-max space-y-4">
                <div className="px-4 grid gap-4 grid-cols-4">
                    {
                        variants.map((variant, index) => (
                            <Caption key={index} className="capitalize">{variant.variant}</Caption>
                        ))
                    }
                </div>
                <div className="border p-4 grid grid-cols-4 gap-4 rounded-[--card-radius]">
                
                {
                    variants.map((variant, index) => (
                        <div key={index} className="space-y-4">
                            {
                                variant.colors.map((color, index) => (
                                    <Toggle.Root key={index} data-shade="900" variant={variant.variant} intent={color} data-state="on" aria-label="Toggle bold">
                                        <Toggle.Icon>
                                            <Bold />
                                        </Toggle.Icon>
                                    </Toggle.Root>
                                ))
                            }
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
)

const exampleCode = `import { Caption } from "@tailus-ui/typography";
import { type ToggleRootProps } from "@tailus/themer";
import Toggle from "@tailus-ui/Toggle";
import { Bold } from "lucide-react";

const colors:ToggleRootProps["intent"][] = ["primary", "secondary", "accent", "gray", "neutral"]

type Variant = {
    variant: ToggleRootProps["variant"],
    colors : ToggleRootProps["intent"][]
}

const variants:Variant[] = [
    {
        variant: "plain",
        colors,
    },
    {
        variant: "soft",
        colors,
    },
    {
        variant: "softToSolid",
        colors,
    },
    {
        variant: "mixed",
        colors,
    }
]

export const Colors = () => (
    <div className="grid items-end [grid-template-columns:1fr_auto] gap-4">
        <div className="py-4 space-y-4">
            {
                colors.map((color, index) => (
                    <div key={index} className="h-8 flex items-center">
                        <Caption className="capitalize">{color}</Caption>
                    </div>
                ))
            }
        </div>
        <div className="overflow-x-auto sm:overflow-visible">
            <div className="w-max space-y-4">
                <div className="px-4 grid gap-4 grid-cols-4">
                    {
                        variants.map((variant, index) => (
                            <Caption key={index} className="capitalize last:pl-3.5">{variant.variant}</Caption>
                        ))
                    }
                </div>
                <div className="border p-4 grid grid-cols-4 gap-4 rounded-[--card-radius]">
                
                {
                    variants.map((variant, index) => (
                        <div key={index} className="space-y-4">
                            {
                                variant.colors.map((color, index) => (
                                    <Toggle.Root variant={variant.variant} intent={color} aria-label="Toggle bold">
                                        <Toggle.Icon>
                                            <Bold />
                                        </Toggle.Icon>
                                    </Toggle.Root>
                                ))
                            }
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
)`

export const colorsCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]