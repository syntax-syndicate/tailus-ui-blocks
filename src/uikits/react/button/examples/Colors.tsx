import { Caption } from "@components/typography";
import Button from "../Button";
import { type ButtonProps } from "@tailus/themer";

const colors:ButtonProps["intent"][] = ["primary", "secondary", "accent", "info", "danger", "warning", "success", "gray", "neutral"]

type Variant = {
    variant: ButtonProps["variant"],
    colors : ButtonProps["intent"][]
}

const variants:Variant[] = [
    {
        variant: "solid",
        colors,
    },
    {
        variant: "outlined",
        colors,
    },
    {
        variant: "soft",
        colors,
    },
    {
        variant: "ghost",
        colors,
    }
]

export const ColoredButtons = () => (
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
                                    <Button.Root key={index} variant={variant.variant} size="sm" intent={color}>
                                        <Button.Label>Generate</Button.Label>
                                    </Button.Root>
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