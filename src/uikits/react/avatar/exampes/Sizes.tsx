import { Caption } from "@components/typography"
import Avatar from "./../Avatar"
import { type AvatarRootProps } from "@tailus/themer"
const sizes:AvatarRootProps["size"][] = ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"]

export const Sizes = () => {
    return (
        <div className="flex flex-wrap gap-4 items-end py-6">
            {
                sizes.map((size, index) => {
                    return (
                        <div>
                            <Avatar.Root size={size} key={index}>
                                <Avatar.Image src="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" width={400} height={400} loading="lazy" />
                                <Avatar.Fallback children="MI" />
                            </Avatar.Root>
                            <Caption size="xs" className="mt-1 w-fit mx-auto block">{size}</Caption>
                        </div>
                    )
                })
            }
        </div>
    )
}

const code = `import Avatar from "@tailus-ui/Avatar"
import { type AvatarRootProps } from "@tailus/themer"
const sizes:AvatarRootProps["size"][] = ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"]

export const Sizes = () => {
    return (
        <div className="flex flex-wrap gap-4 items-end">
            {
                sizes.map((size, index) => {
                    return (
                        <Avatar.Root size={size} key={index}>
                            <Avatar.Image src="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" width={400} height={400} loading="lazy" />
                            <Avatar.Fallback className="text-sm" children="MI" />
                        </Avatar.Root>
                    )
                })
            }
        </div>
    )
}`

export const sizesCode = [
    {
        code: code,
        lang: "tsx",
        file: "tsx",
        filename:"Colors.tsx"
    }
]