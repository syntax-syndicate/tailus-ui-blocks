import { Bold } from "lucide-react";
import Toggle from "./Toggle";

export const Mixed = () => (
    <Toggle.Root data-shade="900" variant="mixed" aria-label="Toggle bold">
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

export const mixedCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]