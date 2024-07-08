import { Bold } from "lucide-react";
import Toggle from "./Toggle";

export const Plain = () => (
    <Toggle.Root data-shade="900" variant="plain" aria-label="Toggle bold">
        <Toggle.Icon>
            <Bold />
        </Toggle.Icon>
  </Toggle.Root>
)


const exampleCode = `import { Bold } from "lucide-react";
import Toggle from "@tailus-ui/Toggle";

export const Overview = () => (
    <Toggle.Root variant="mixed" aria-label="Toggle bold">
        <Toggle.Icon>
            <Bold />
        </Toggle.Icon>
  </Toggle.Root>
)`

export const plainCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]