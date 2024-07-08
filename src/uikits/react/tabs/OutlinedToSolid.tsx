import Tabs from "@react-ui/tabs/Tabs"

export const OutlinedToSolid = () => {
    return (
        <Tabs.Root className="space-y-4" defaultValue="all">
            <Tabs.List data-shade="900" variant="plain" triggerVariant="outlinedToSolid" intent="primary" size="md">
                <Tabs.Trigger value="all">All</Tabs.Trigger>
                <Tabs.Trigger value="unread">Unread</Tabs.Trigger>
                <Tabs.Trigger value="archived">Archived</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="all" className="text-[--caption-text-color]">
                All
            </Tabs.Content>
            <Tabs.Content value="unread" className="text-[--caption-text-color]">
                Unread
            </Tabs.Content>
            <Tabs.Content value="archived" className="text-[--caption-text-color]">
                Archived
            </Tabs.Content>
        </Tabs.Root>
    )
}

const exampleCode = `import Tabs from "@tailus-ui/tabs/Tabs"

export const SoftToSolid = () => {
    return (
        <Tabs.Root className="space-y-4" defaultValue="all">
            <Tabs.List data-shade="900" variant="plain" triggerVariant="outlinedToSolid" intent="primary" size="md">
                <Tabs.Trigger value="all">All</Tabs.Trigger>
                <Tabs.Trigger value="unread">Unread</Tabs.Trigger>
                <Tabs.Trigger value="archive">Archived</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="all" className="text-[--caption-text-color]">
                All
            </Tabs.Content>
            <Tabs.Content value="unread" className="text-[--caption-text-color]">
                Unread
            </Tabs.Content>
            <Tabs.Content value="archived" className="text-[--caption-text-color]">
                Archived
            </Tabs.Content>
        </Tabs.Root>
    )
}`

export const outlinedToSolidCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]