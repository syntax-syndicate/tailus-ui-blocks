import Textarea from "./Textarea"

export const Overview = () => (
    <div data-shade="900" data-rounded="medium" className="max-w-xs space-y-6 [--input-px:theme(spacing.3)] [--input-bg:theme(colors.gray.100)]">
        <Textarea variant="plain" placeholder="Enter your message" />
        <Textarea rows={3} variant="soft" placeholder="Enter your message" className="rounded-[--card-radius]"/>
        <Textarea rows={3} variant="outlined" placeholder="Enter your message" className="rounded-[--card-radius]"/>
        <Textarea rows={3} variant="mixed" placeholder="Enter your message" className="rounded-[--card-radius] dark:bg-[--ui-bg]"/>
        <Textarea rows={3} variant="bottomOutlined" placeholder="Enter your message"/>
    </div>
)

const code = `import Textarea from "@tailus-ui/Textarea";

const Overview = () => (
    <div className="max-w-xs space-y-6">
        <Textarea variant="plain" placeholder="Enter your message" />
        <Textarea rows={3} variant="soft" placeholder="Enter your message"/>
        <Textarea rows={3} variant="outlined" placeholder="Enter your message"/>
        <Textarea rows={3} variant="mixed" placeholder="Enter your message"/>
        <Textarea rows={3} variant="bottomOutlined" placeholder="Enter your message"/>
    </div>
)`

export const overviewCode = [
    {
        code: code,
        lang: 'tsx',
    }
]