import Label from "@react-ui/label/Label";
import Input from "@react-ui/input/Input";

export const WithLabel = () => (
    <div className="max-w-xs w-full space-y-2" data-shade="900">
        <Label htmlFor="name">Name</Label>
        <Input id="name" className="px-3 rounded-[--btn-radius] dark:bg-[--ui-bg]"/>
    </div>
)

const code = `import Label from "@tailus-ui/Label";
import Input from "@tailus-ui/Input";

const WithLabel = () => (
    <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" />
    </div>
)`

export const withLabelCode = [
    {
        code: code,
        lang: 'tsx',
    }
]