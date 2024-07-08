import Avatar from "@react-ui/avatar/Avatar"
import Card from "@react-ui/card/Card"
import { twMerge } from "tailwind-merge"
import { Caption } from "@components/typography"

export const Message = ({ message, date, isMe = false }: { message: string, date: string, isMe?: boolean }) => {
    return (
        <div className={twMerge("flex gap-2 mb-4", isMe ? "justify-end" : "justify-start")}>
            {
                !isMe && (
                    <Avatar.Root size="xxs" className="mt-auto mb-1">
                        <Avatar.Image src="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" loading="lazy" alt="User Avatar" width={120} height={120} />
                        <Avatar.Fallback children="MI" />
                    </Avatar.Root>
                )
            }
            <Card className={twMerge("px-3 py-2 text-sm max-w-[75%] text-[--body-text-color]", !isMe && "bg-white border dark:bg-[--ui-soft-bg] dark:border-transparent")} variant="soft" data-shade={isMe ? "925" : "800"}>
                {message}
                <Caption className={twMerge("block -mb-0.5 mt-1", isMe && "text-white/50" )} as="span" size="xs" align="right">{date}</Caption>
            </Card>
        </div>
    )
}