import Accordion from "../Accordion";

const items = [
    {
        question: "What is Tailus Themer?",
        answer: "Tailus Themer is a versatile theming library designed to help you create modern and custom web User Interfaces with Tailwind CSS.",
        icon : "https://cdn-icons-png.flaticon.com/512/1904/1904883.png"
    },
    {
        question: "What are the supported frameworks?",
        answer: "Tailus Themer is framework-agnostic and can be used with any front-end framework that supports Tailwind CSS, such as React, Vue, Angular, and others.",
        icon : "https://cdn-icons-png.flaticon.com/512/1904/1904901.png"
    },
    {
        question: "Is it customizable?",
        answer: "Yes, Tailus Themer is highly customizable. It allows you to customize all aspects of your theme, including colors, typography, and more. You can also export your theme configuration to use in other projects.",
        icon : "https://cdn-icons-png.flaticon.com/512/1904/1904867.png"
    }
]

export const Custom = () => {
    return (
        <Accordion.Root
            type="single"
            className="max-w-md w-full"
            defaultValue="What is Tailus Themer?"
        >
            {
                items.map((item) => (
                    <Accordion.Item value={item.question} key={items.indexOf(item)}>
                        <Accordion.Trigger>
                            <img className="size-8" src={item.icon} alt="tailus accordion img" loading="lazy" width={512} height={512} />
                            {item.question}
                        </Accordion.Trigger>
                        <Accordion.Content className="ml-12">
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

export const Custom = () => {
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
                            <img className="size-8" src={item.icon} alt="tailus accordion img" loading="lazy" width={512} height={512} />
                            {item.question}
                        </Accordion.Trigger>
                        <Accordion.Content className="ml-12">
                            {item.answer}
                        </Accordion.Content>
                    </Accordion.Item>
                ))
            }
            
        </Accordion.Root>
    )
}`

export const CustomCode = [{
    code: code,
    lang: "tsx",
    file: "jsx",
    filename:"CustomAccordion.tsx"
}]