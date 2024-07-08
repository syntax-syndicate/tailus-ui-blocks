import Avatar from "./../Avatar"
import { type AvatarFallbackProps } from "@tailus/themer"

const intents:AvatarFallbackProps["intent"][] = ["primary", "secondary", "accent", "danger", "success", "warning", "info", "gray"]

export const Colors = () => {
    return (
        <div className="flex gap-12 py-6">
            <div className="space-y-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">Solid</span>
                {
                    intents.map((intent, index) => {
                        return (
                            <Avatar.Root key={index}>
                                <Avatar.Fallback children="AB" className="text-sm" intent={intent} />
                            </Avatar.Root>
                        )
                    })
                }
            </div>
            <div className="space-y-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">Soft</span>
                {
                    intents.map((intent, index) => {
                        return (
                            <Avatar.Root key={index}>
                                <Avatar.Fallback variant="soft" className="text-sm" intent={intent} children="AB" />
                            </Avatar.Root>
                        )
                    })
                }
            </div>
        </div>
    )
}


const code = `import Avatar from "@tailus-ui/Avatar"
import { type AvatarFallbackProps } from "@tailus/themer"

const intents:AvatarFallbackProps["intent"][] = ["primary", "secondary", "accent", "danger", "success", "warning", "info", "gray"]

export const Colors = () => {
    return (
        <div className="flex gap-x-4">
            {
                intents.map((intent, index) => {
                    return (
                        <Avatar.Root key={index}>
                            <Avatar.Fallback children="AB" intent={intent} />
                        </Avatar.Root>
                    )
                })
            }
        </div>
    )
}`

export const colorsCode = [
    {
        code: code,
        lang: "tsx",
        file: "tsx",
        filename:"Colors.tsx"
    }
]