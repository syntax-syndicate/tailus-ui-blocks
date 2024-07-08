import { Caption } from "@components/typography";
import Button from "../Button";
import { type ButtonProps } from "@tailus/themer";

const sizes:ButtonProps["size"][] = ["xs", "sm", "md", "lg", "xl"]

type Variant = {
    variant: ButtonProps["variant"],
    sizes : ButtonProps["size"][]
}

const variants:Variant[] = [
    {
        variant: "solid",
        sizes,
    },
    {
        variant: "outlined",
        sizes,
    },
    {
        variant: "soft",
        sizes,
    },
    {
        variant: "ghost",
        sizes,
    }
]

export const SizeButtons = () => (
    <div className="grid items-end [grid-template-columns:1fr_auto] gap-4">
        <div className="overflow-x-auto">
            <div className="w-max space-y-4 p-2">
                {
                    variants.map((variant, index) => (
                        <div  key={index} className="flex gap-4 items-end">
                            {
                                variant.sizes.map((size, index) => (
                                    <Button.Root key={index} variant={variant.variant} size={size} intent="primary">
                                        <Button.Label>{size}</Button.Label>
                                    </Button.Root>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)