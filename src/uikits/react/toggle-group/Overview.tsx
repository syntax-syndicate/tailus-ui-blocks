import { ThumbsDown, ThumbsUp } from "lucide-react";
import ToggleGroup from "./ToggleGroup";

export const Overview = () => (
    <ToggleGroup.Root variant="mixed" type="single" data-shade="900" aria-label="User feedback">
        <ToggleGroup.Item value="like">
            <ToggleGroup.Icon>
                <ThumbsUp />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="dislike">
            <ToggleGroup.Icon>
                <ThumbsDown />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
  </ToggleGroup.Root>
)


const exampleCode = `import { ThumbsDown, ThumbsUp } from "lucide-react";
import ToggleGroup from "@tailus-ui/ToggleGroup";

export const Overview = () => (
    <ToggleGroup.Root variant="mixed" type="single" aria-label="User feedback">
        <ToggleGroup.Item value="like">
            <ToggleGroup.Icon>
                <ThumbsUp />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="dislike">
            <ToggleGroup.Icon>
                <ThumbsDown />
            </ToggleGroup.Icon>
        </ToggleGroup.Item>
  </ToggleGroup.Root>
)`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]