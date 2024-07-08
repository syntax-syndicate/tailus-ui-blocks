import { Bold } from "lucide-react";
import Toggle from "./Toggle";

export const WithLabel = () => (
    <Toggle.Root withLabel data-shade="900" aria-label="Toggle bold">
        <Toggle.Icon>
            <Bold />
        </Toggle.Icon>
        <span>Bold</span>
  </Toggle.Root>
)


const exampleCode = `import { Bold } from "lucide-react";
import Toggle from "@tailus-ui/Toggle";

export const Overview = () => (
    <Toggle.Root withLabel aria-label="Toggle bold">
        <Toggle.Icon>
            <Bold />
        </Toggle.Icon>
        <span>Bold</span>
  </Toggle.Root>
)`

export const withLabelCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]