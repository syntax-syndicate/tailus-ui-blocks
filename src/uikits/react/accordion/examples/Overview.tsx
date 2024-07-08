import Accordion from "../Accordion";
import items from "./items";

export const Overview = () => {

    return (
        <Accordion.Root
            type="single"
            collapsible
            className="max-w-md w-full"
            variant="mixed"
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