import Accordion from "../Accordion";
import items from "./items";

export const Mixed = () => {
    return (
        <Accordion.Root
            type="single"
            collapsible
            variant="mixed"
            className="max-w-md w-full"
            fancy
        >
            {
                items.map((item) => (
                    <Accordion.Item value={item.question} key={items.indexOf(item)}>
                        <Accordion.Trigger>
                            {item.question}
                        </Accordion.Trigger>
                        <Accordion.Content>
                            {item.answer}
                        </Accordion.Content>
                    </Accordion.Item>
                ))
            }
            
        </Accordion.Root>
    )
}

const code = `import Accordion from "tailus-ui/Accordion";

const items = [
    // ... your questions and answers here
]

export const OutlinedElevated = () => {
    return (
        <Accordion.Root
            type="single"
            collapsible
            variant="outlinedElevated"
            className="max-w-md w-full"
        >
            {
                items.map((item) => (
                    <Accordion.Item value={item.question} key={items.indexOf(item)}>
                        <Accordion.Trigger>
                            {item.question}
                        </Accordion.Trigger>
                        <Accordion.Content>
                            {item.answer}
                        </Accordion.Content>
                    </Accordion.Item>
                ))
            }
            
        </Accordion.Root>
    )
}`

export const MixedCode = [
    {
        code: code,
        lang: "tsx",
        file: "jsx",
        filename:"Mixed.tsx"
    }
]