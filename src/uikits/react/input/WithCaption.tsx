import Label from "@react-ui/label/Label";
import Input from "@react-ui/input/Input";
import { Caption } from "@components/typography";

export const WithCaption = () => (
    <div className="max-w-xs w-full space-y-2" data-shade="900">
        <Label htmlFor="name2">Name</Label>
        <Input id="name2" className="px-3 rounded-[--btn-radius] dark:bg-[--ui-bg]" />
        <Caption>Enter your name</Caption>
    </div>
)

const code = `import Label from "@tailus-ui/Label";
import Input from "@tailus-ui/Input";
import { Caption } from "@tailus-ui/typography";

const WithLabel = () => (
    <div className="space-y-2">
        <Label htmlFor="name2">Name</Label>
        <Input id="name2" />
        <Caption>Enter your name</Caption>
    </div>
)`

export const withCaptionCode = [
    {
        code: code,
        lang: 'tsx',
    }
]