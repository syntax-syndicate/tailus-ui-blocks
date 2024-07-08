import { AlignCenter, AlignJustify, AlignLeft, AlignRight, List, ListOrdered } from "lucide-react";
import ToggleGroup from "./ToggleGroup";
import SeparatorRoot from "@react-ui/separator/Separator";

export const Alignment = () => (
    <ToggleGroup.Root size="sm" type="single" data-shade="900" aria-label="Text alignment">
        <ToggleGroup.Item value="left">
            <ToggleGroup.Icon size="xs">
                <AlignLeft />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="center">
            <ToggleGroup.Icon size="xs">
                <AlignCenter />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="right">
            <ToggleGroup.Icon size="xs">
                <AlignRight />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="justify">
            <ToggleGroup.Icon size="xs">
                <AlignJustify />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
  </ToggleGroup.Root>
)

export const ToolbarAlignment = () => (
    <ToggleGroup.Root size="xl" type="single" variant="softToSolid" aria-label="Text alignment" className="gap-0 h-12">
        <ToggleGroup.Item value="left" className="w-1/4 rounded-r-none">
            <ToggleGroup.Icon size="lg">
                <AlignLeft />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <SeparatorRoot orientation="vertical" className="dark:bg-gray-800"/>
        <ToggleGroup.Item value="center" className="w-1/4" data-rounded="none">
            <ToggleGroup.Icon size="lg">
                <AlignCenter />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <SeparatorRoot orientation="vertical" className="dark:bg-gray-800"/>
        <ToggleGroup.Item value="right" className="w-1/4" data-rounded="none">
            <ToggleGroup.Icon size="lg">
                <AlignRight />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <SeparatorRoot orientation="vertical" className="dark:bg-gray-800"/>
        <ToggleGroup.Item value="justify" className="w-1/4 rounded-l-none">
            <ToggleGroup.Icon size="lg">
                <AlignJustify />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
    </ToggleGroup.Root>
)

export const ToolbarLists = () => (
    <ToggleGroup.Root size="xl" type="single" variant="softToSolid" aria-label="List format" className="gap-0 h-12">
        <ToggleGroup.Item value="bullet" className="w-1/2 rounded-r-none">
            <ToggleGroup.Icon size="lg">
                <List />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <SeparatorRoot orientation="vertical" className="dark:bg-gray-800"/>
        <ToggleGroup.Item value="ordered" className="w-1/2 rounded-l-none">
            <ToggleGroup.Icon size="lg">
                <ListOrdered />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
    </ToggleGroup.Root>
)

const exampleCode = `import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import ToggleGroup from "@tailus-ui/ToggleGroup";

export const Alignment = () => (
    <ToggleGroup.Root size="sm" type="single" aria-label="Text alignment">
        <ToggleGroup.Item value="left">
            <ToggleGroup.Icon size="xs">
                <AlignLeft />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="center">
            <ToggleGroup.Icon size="xs">
                <AlignCenter />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="right">
            <ToggleGroup.Icon size="xs">
                <AlignRight />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="justify">
            <ToggleGroup.Icon size="xs">
                <AlignJustify />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
  </ToggleGroup.Root>
)`

export const alignmentCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]