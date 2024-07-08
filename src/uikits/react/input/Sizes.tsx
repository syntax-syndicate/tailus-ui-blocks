import Input from "@react-ui/input/Input";

export const Sizes = () => (
    <div className="max-w-xs w-full space-y-4" data-shade="900">
        <Input size="sm" placeholder="Size sm" className="px-2.5 rounded-[--btn-radius] dark:bg-[--ui-bg]"/>
        <Input size="md" placeholder="Size md" className="px-3 rounded-[--btn-radius] dark:bg-[--ui-bg]"/>
        <Input size="lg" placeholder="Size lg" className="px-4 rounded-[--btn-radius] dark:bg-[--ui-bg]"/>
        <Input size="xl" placeholder="Size xl" className="px-5 rounded-[--btn-radius] dark:bg-[--ui-bg]"/>
    </div>
)

const code = `import Input from "@tailus-ui/Input";

const WithLabel = () => (
    <div className="space-y-4">
        <Input size="sm" />
        <Input size="md" />
        <Input size="lg" />
        <Input size="xl" />
    </div>
)`

export const sizesCode = [
    {
        code: code,
        lang: 'tsx',
    }
]