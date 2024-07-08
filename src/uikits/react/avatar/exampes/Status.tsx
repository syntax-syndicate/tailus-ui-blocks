import { Caption } from "@components/typography"
import Avatar from "./../Avatar"
import { type AvatarRootProps } from "@tailus/themer"
const statuses: AvatarRootProps["status"][] = ["online", "offline", "away", "busy"]

export const AStatus = () => {
    return (
        <div className="flex items-end gap-12 py-6">
            <div className="space-y-4 -mr-6">
                {
                    statuses.map((status, index) => {
                        return (
                            <div className="h-9 flex items-center" key={index}>
                                <Caption size="sm">{status}</Caption>
                            </div>
                        )
                    })
                }
            </div>
            <div className="space-y-4">
                <Caption size="sm">Top</Caption>
                {
                    statuses.map((status, index) => {
                        return (
                            <Avatar.Root key={index} status={status} topStatus>
                                <Avatar.Image src="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" width={400} height={400} loading="lazy" />
                                <Avatar.Fallback className="text-sm" children="MI" />
                            </Avatar.Root>
                        )
                    })
                }
            </div>
            <div className="space-y-4">
                <Caption size="sm">Bottom</Caption>
                {
                    statuses.map((status, index) => {
                        return (
                            <Avatar.Root key={index} status={status} bottomStatus>
                                <Avatar.Image src="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" width={400} height={400} loading="lazy" />
                                <Avatar.Fallback className="text-sm" children="MI" />
                            </Avatar.Root>
                        )
                    })
                }
            </div>
        </div>
    )
}

const code = `import { Caption } from "@components/typography"
import Avatar from "@tailus-ui/Avatar"
import { type AvatarRootProps } from "@tailus/themer"
const statuses: AvatarRootProps["status"][] = ["online", "offline", "away", "busy"]

export const AStatus = () => {
    return (
        <div className="flex items-end gap-12 py-6">
            <div className="space-y-4 -mr-6">
                {
                    statuses.map((status, index) => {
                        return (
                            <div className="h-9 flex items-center" key={index}>
                                <Caption size="sm">{status}</Caption>
                            </div>
                        )
                    })
                }
            </div>
            <div className="space-y-4">
                <Caption size="sm">Top</Caption>
                {
                    statuses.map((status, index) => {
                        return (
                            <Avatar.Root key={index} status={status} topStatus>
                                <Avatar.Image src="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" width={400} height={400} loading="lazy" />
                                <Avatar.Fallback className="text-sm" children="MI" />
                            </Avatar.Root>
                        )
                    })
                }
            </div>
            <div className="space-y-4">
                <Caption size="sm">Bottom</Caption>
                {
                    statuses.map((status, index) => {
                        return (
                            <Avatar.Root key={index} status={status} bottomStatus>
                                <Avatar.Image src="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" width={400} height={400} loading="lazy" />
                                <Avatar.Fallback className="text-sm" children="MI" />
                            </Avatar.Root>
                        )
                    })
                }
            </div>
        </div>
    )
}`

export const statusCode = [
    {
        code: code,
        lang: "tsx",
        file: "tsx",
        filename:"Colors.tsx"
    }
]