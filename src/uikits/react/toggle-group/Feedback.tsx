import { Angry, Annoyed, Frown, Meh, Smile } from "lucide-react";
import ToggleGroup from "./ToggleGroup";

export const Feedback = () => (
    <ToggleGroup.Root size="md" variant="mixed" intent="primary" type="single" data-shade="900" aria-label="user feedback">
        <ToggleGroup.Item value="smile">
            <ToggleGroup.Icon size="sm">
                <Smile />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="meh">
            <ToggleGroup.Icon size="sm">
                <Meh />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="frown">
            <ToggleGroup.Icon size="sm">
                <Frown />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="annoyed">
            <ToggleGroup.Icon size="sm">
                <Annoyed />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="angry">
            <ToggleGroup.Icon size="sm">
                <Angry />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
    </ToggleGroup.Root>
)


const exampleCode = `import { Angry, Frown, Meh, Smile } from "lucide-react";
import ToggleGroup from "@tailus-ui/ToggleGroup";

export const Feedback = () => (
    <ToggleGroup.Root size="sm" variant="mixed" intent="gray" type="single" data-shade="900" aria-label="user feedback">
        <ToggleGroup.Item value="smile">
            <ToggleGroup.Icon size="xs">
                <Smile />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="meh">
            <ToggleGroup.Icon size="xs">
                <Meh />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="frown">
            <ToggleGroup.Icon size="xs">
                <Frown />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="annoyed">
            <ToggleGroup.Icon size="sm">
                <Annoyed />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="angry">
            <ToggleGroup.Icon size="xs">
                <Angry />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
  </ToggleGroup.Root>
)`

export const feedbackCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]