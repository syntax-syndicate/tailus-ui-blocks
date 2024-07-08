import { Bold } from "lucide-react";
import Toggle from "./Toggle";

export const Overview = () => (
    <Toggle.Root data-shade="900" aria-label="Toggle bold">
        <Toggle.Icon>
            <Bold />
        </Toggle.Icon>
  </Toggle.Root>
)


const exampleCode = `import { Bold } from "lucide-react";
import Toggle from "@tailus-ui/Toggle";

export const Overview = () => (
    <Toggle.Root aria-label="Toggle bold">
        <Toggle.Icon>
            <Bold />
        </Toggle.Icon>
  </Toggle.Root>
)`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]