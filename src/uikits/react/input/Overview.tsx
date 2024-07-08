import Input from "./Input";

export const Overview = () => (
    <div data-shade="900" data-rounded="medium" className="max-w-xs space-y-6 [--input-px:theme(spacing.3)] [--input-bg:theme(colors.gray.100)]">
        <Input variant="plain" placeholder="Enter your name" className="rounded-[--btn-radius]" />
        <Input variant="soft" placeholder="Enter your name" className="rounded-[--btn-radius]"/>
        <Input variant="outlined" placeholder="Enter your name" className="rounded-[--btn-radius]"/>
        <Input variant="mixed" placeholder="Enter your name" className="dark:bg-[--ui-bg] rounded-[--btn-radius]"/>
        <Input variant="bottomOutlined" placeholder="Enter your name"/>
    </div>
)

const code = `import Input from "@tailus-ui/Input";

const Overview = () => (
    <div className="max-w-xs space-y-6">
        <Input variant="plain" placeholder="Enter your name" />
        <Input variant="soft" placeholder="Enter your name"/>
        <Input variant="outlined" placeholder="Enter your name"/>
        <Input variant="mixed" placeholder="Enter your name"/>
        <Input variant="bottomOutlined" placeholder="Enter your name"/>
    </div>
)
`

export const overviewCode = [
    {
        code: code,
        lang: 'tsx',
    }
]