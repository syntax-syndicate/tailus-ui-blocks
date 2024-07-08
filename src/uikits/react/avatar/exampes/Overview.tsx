import Avatar from "../Avatar";

export const Overview = () => (
    <div className="flex gap-4">
        <Avatar.Root>
            <Avatar.Image src="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" width={400} height={400} loading="lazy" />
            <Avatar.Fallback>MI</Avatar.Fallback>
        </Avatar.Root>

        <Avatar.Root>
            <Avatar.Fallback>MI</Avatar.Fallback>
        </Avatar.Root>

        <Avatar.Root>
            <Avatar.Fallback variant="soft">MI</Avatar.Fallback>
        </Avatar.Root>
    </div>
)