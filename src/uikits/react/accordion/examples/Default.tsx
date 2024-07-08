import Accordion from "../Accordion";
import items from "./items";

export const Default = () => {
    return (
        <Accordion.Root
            type="single"
            collapsible
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

export const Default = () => {
    return (
        <Accordion.Root
            type="single"
            collapsible
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

export const DefaultCode =[{
    code: code,
    lang: "tsx",
    file: "jsx",
    filename:"DefaultAccordion.tsx"
}]