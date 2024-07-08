import Badge from "./Badge";
import { type BadgeProps } from "@tailus/themer";

const variants: BadgeProps["variant"][] = ["solid", "outlined", "soft"]
const sizes: BadgeProps["size"][] = ["xs", "sm", "md", "lg"]

export const Sizes = () => {
    return (
        <div className="grid gap-4">
            {
                variants.map((variant, index) => (
                    <div key={index} className="flex gap-4 items-end">
                        {
                            sizes.map((size, index) => (
                                <Badge key={index} intent="primary" variant={variant} size={size} className="capitalize">
                                    {size}
                                </Badge>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

const code = `import Badge from "@tailus-ui/Badge";
import { type BadgeProps } from "@tailus/themer";

const variants: BadgeProps["variant"][] = ["solid", "outlined", "soft"]
const sizes: BadgeProps["size"][] = ["xs", "sm", "md", "lg"]

export const Sizes = () => {
    return (
        <div className="grid gap-4">
            {
                variants.map((variant, index) => (
                    <div key={index} className="flex gap-4 items-end">
                        {
                            sizes.map((size, index) => (
                                <Badge key={index} intent="primary" variant={variant} size={size} className="capitalize">
                                    {size}
                                </Badge>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};`

export const sizesCode = [
    {
        code: code,
        lang: "tsx",
        file: "tsx",
        filename:"Colors.tsx"
    }
]