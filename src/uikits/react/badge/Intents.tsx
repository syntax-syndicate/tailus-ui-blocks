import { Caption } from "@components/typography";
import Badge from "./Badge";
import { type BadgeProps } from "@tailus/themer";

const intents:BadgeProps["intent"][] = ["primary", "secondary", "accent", "info", "danger", "warning", "success", "gray"]
const variants:BadgeProps["variant"][] = ["solid", "outlined", "soft"]

export const Intents = () => {
    return (
        <div className="grid grid-cols-3 gap-4 justify-center">
            {
                variants.map((variant, index) => (
                    <div key={index} className="space-y-4">
                        <Caption className="capitalize">{variant}</Caption>
                        {
                            intents.map((intent, index) => (
                                <Badge key={index} intent={intent} variant={variant} size="sm" className="capitalize">
                                    {intent}
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
import { Caption } from "@components/typography";
import { type BadgeProps } from "@tailus/themer";

const intents:BadgeProps["intent"][] = ["primary", "secondary", "accent", "info", "danger", "warning", "success", "gray"]
const variants:BadgeProps["variant"][] = ["solid", "outlined", "soft"]

export const Intents = () => {
    return (
        <div className="grid grid-cols-3 gap-6 py-12 justify-center">
            {
                variants.map((variant, index) => (
                    <div key={index} className="space-y-4">
                        <Caption className="capitalize">{variant}</Caption>
                        {
                            intents.map((intent, index) => (
                                <Badge key={index} intent={intent} variant={variant} className="capitalize">
                                    {intent}
                                </Badge>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};`

export const intentsCode = [
    {
        code: code,
        lang: "tsx",
        file: "tsx",
        filename:"Colors.tsx"
    }
]