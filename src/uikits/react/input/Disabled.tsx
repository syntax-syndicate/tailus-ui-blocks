import Label from "@react-ui/label/Label";
import Input from "@react-ui/input/Input";
import { Caption } from "@components/typography";

export const Disabled = () => (
    <div className="max-w-xs w-full space-y-2 *:has-[:disabled]:opacity-50 *:has-[:disabled]:pointer-events-none" data-shade="900">
        <Label htmlFor="name3">Name</Label>
        <Input disabled id="name3" className="px-3 rounded-[--btn-radius] dark:bg-[--ui-bg]" />
        <Caption>Enter your name</Caption>
    </div>
)

const code = `import Label from "@tailus-ui/Label";
import Input from "@tailus-ui/Input";
import { Caption } from "@tailus-ui/typography";

const WithLabel = () => (
    <div className="space-y-2 *:has-[:disabled]:opacity-50 *:has-[:disabled]:pointer-events-none">
        <Label htmlFor="name3">Name</Label>
        <Input disabled id="name3" />
        <Caption>Enter your name</Caption>
    </div>
)`

export const disabledCode = [
    {
        code: code,
        lang: 'tsx',
    }
]