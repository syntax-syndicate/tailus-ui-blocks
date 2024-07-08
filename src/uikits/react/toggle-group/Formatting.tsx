import { Bold, Code, Heading, Heading1, Heading2, Italic, Strikethrough, Type, Underline } from "lucide-react";
import ToggleGroup from "./ToggleGroup";
import SeparatorRoot from "@react-ui/separator/Separator";

export const Formatting = () => (
    <ToggleGroup.Root size="sm" type="multiple" data-shade="900" aria-label="Text formatting">
        <ToggleGroup.Item value="bold">
            <ToggleGroup.Icon size="xs">
                <Bold />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="italic">
            <ToggleGroup.Icon size="xs">
                <Italic />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="underline">
            <ToggleGroup.Icon size="xs">
                <Underline />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="strikethrough">
            <ToggleGroup.Icon size="xs">
                <Strikethrough />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
  </ToggleGroup.Root>
)

export const ToolbarFormatting = () => (
    <ToggleGroup.Root size="xl" type="multiple" variant="softToSolid" className="gap-0 h-12" aria-label="Text formatting">
        <ToggleGroup.Item value="bold" className="w-1/4 rounded-r-none">
            <ToggleGroup.Icon size="lg">
                <Bold />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <SeparatorRoot orientation="vertical" className="dark:bg-gray-800"/>
        <ToggleGroup.Item value="italic" className="w-1/4" data-rounded="none">
            <ToggleGroup.Icon size="lg">
                <Italic />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <SeparatorRoot orientation="vertical" className="dark:bg-gray-800"/>
        <ToggleGroup.Item value="underline" className="w-1/4" data-rounded="none">
            <ToggleGroup.Icon size="lg">
                <Underline />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <SeparatorRoot orientation="vertical" className="dark:bg-gray-800" />
        <ToggleGroup.Item value="strikethrough" className="w-1/4 rounded-l-none">
            <ToggleGroup.Icon size="lg">
                <Strikethrough />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
    </ToggleGroup.Root>
)

export const ToolbarText = () => (
    <ToggleGroup.Root size="xl" type="single" variant="soft" className="-mx-8 px-8 h-12 overflow-x-auto" aria-label="Text sizes">
        <ToggleGroup.Item value="title" withLabel className="font-bold">
            <ToggleGroup.Icon size="lg">
                <Heading />
            </ToggleGroup.Icon>
            Title
        </ToggleGroup.Item>
        <ToggleGroup.Item withLabel value="heading" className="font-semibold">
            <ToggleGroup.Icon size="lg">
                <Heading1 />
            </ToggleGroup.Icon>
            Heading
        </ToggleGroup.Item>
        <ToggleGroup.Item withLabel value="subheading" className="font-medium">
            <ToggleGroup.Icon size="lg">
                <Heading2 />
            </ToggleGroup.Icon>
            Subheading
        </ToggleGroup.Item>
        <ToggleGroup.Item withLabel value="body">
            <ToggleGroup.Icon size="lg">
                <Type />
            </ToggleGroup.Icon>
            Body
        </ToggleGroup.Item>
        <ToggleGroup.Item withLabel value="code" className="font-mono">
            <ToggleGroup.Icon size="lg">
                <Code />
            </ToggleGroup.Icon>
            Code
        </ToggleGroup.Item>
    </ToggleGroup.Root>
)


const exampleCode = `import { Bold, Italic, Strikethrough, Underline } from "lucide-react";
import ToggleGroup from "@tailus-ui/ToggleGroup";

export const Formating = () => (
    <ToggleGroup.Root size="sm" type="multiple" aria-label="Text formatting">
        <ToggleGroup.Item value="bold">
            <ToggleGroup.Icon size="xs">
                <Bold />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="italic">
            <ToggleGroup.Icon size="xs">
                <Italic />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="underline">
            <ToggleGroup.Icon size="xs">
                <Underline />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="strikethrough">
            <ToggleGroup.Icon size="xs">
                <Strikethrough />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
  </ToggleGroup.Root>
)`

export const formattingCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]