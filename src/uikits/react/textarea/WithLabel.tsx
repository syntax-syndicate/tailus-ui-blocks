import Label from "@react-ui/label/Label";
import Textarea from "./Textarea";

export const WithLabel = () => (
    <div className="max-w-xs w-full space-y-2 [--input-px:theme(spacing.3)]" data-rounded="medium" data-shade="900">
        <Label htmlFor="name">Name</Label>
        <Textarea id="name" rows={3} className="px-3 rounded-[--card-radius] dark:bg-[--ui-bg]"/>
    </div>
)

const code = `import Label from "@tailus-ui/Label";
import Textarea from "@tailus-ui/Textarea";

const WithLabel = () => (
    <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={3} />
    </div>
)`

export const withLabelCode = [
    {
        code: code,
        lang: 'tsx',
    }
]