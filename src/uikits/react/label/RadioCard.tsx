import { Text, Title } from "@components/typography";
import Label from "./Label";
import RadioGroup from "@react-ui/radio-group/RadioGroup";

export const RadioCards = () => (
    <RadioGroup.Root className="space-y-3 [--card-padding:theme(spacing.4)] max-w-md w-full" data-shade="900">
        <RadioCard value="personal">
            <div className="flex gap-2 justify-between items-center">
                <Title size="base" className="text-sm" as="div" weight="medium">Personal</Title>
                <Text className="my-0" size="sm">$9.99</Text>
            </div>
            <Text size="sm" className="mb-0 mt-0.5">For personal projects</Text>
        </RadioCard>
        <RadioCard value="startup">
            <div className="flex gap-2 justify-between items-center">
                <Title size="base" className="text-sm" as="div" weight="medium">Business</Title>
                <Text className="my-0" size="sm">$39.99</Text>
            </div>
            <Text className="mb-0 mt-0.5" size="sm">For startups and small businesses</Text>
        </RadioCard>
        <RadioCard value="enterprise">
            <div className="flex gap-2 justify-between items-center">
                <Title size="base" className="text-sm" as="div" weight="medium">Enterprise</Title>
                <Text className="my-0" size="sm">$99.99</Text>
            </div>
            <Text size="sm" className="mb-0 mt-0.5">For large organizations</Text>
        </RadioCard>
    </RadioGroup.Root>
)

export const RadioCard = ({value, children}) => (
    <Label htmlFor={value} size="sm" className="block border p-[--card-padding] rounded-[--card-radius] bg-[--ui-bg] card-shadow has-[[data-state='checked']]:ring-2 -ring-offset-px ring-primary-600 dark:has-[[data-state='checked']]:bg-[--ui-soft-bg]">
        {children}
        <RadioGroup.Item value={value} id={value} className="hidden">
            <RadioGroup.Indicator />
        </RadioGroup.Item>
    </Label>
)

const exampleCode = `import { Text, Title } from "@tailus-ui/typography";
import Label from "@tailus-ui/Label";
import RadioGroup from "@tailus-ui/RadioGroup";

export const RadioCards = () => (
    <RadioGroup.Root className="space-y-3 [--card-padding:theme(spacing.4)] max-w-md w-full">
        <RadioCard value="personal">
            <div className="flex gap-2 justify-between items-center">
                <Title size="base" className="text-sm" as="div" weight="medium">Personal</Title>
                <Text className="my-0" size="sm">$9.99</Text>
            </div>
            <Text size="sm" className="mb-0 mt-0.5">For personal projects</Text>
        </RadioCard>
        <RadioCard value="startup">
            <div className="flex gap-2 justify-between items-center">
                <Title size="base" className="text-sm" as="div" weight="medium">Business</Title>
                <Text className="my-0" size="sm">$39.99</Text>
            </div>
            <Text className="mb-0 mt-0.5" size="sm">For startups and small businesses</Text>
        </RadioCard>
        <RadioCard value="enterprise">
            <div className="flex gap-2 justify-between items-center">
                <Title size="base" className="text-sm" as="div" weight="medium">Enterprise</Title>
                <Text className="my-0" size="sm">$99.99</Text>
            </div>
            <Text size="sm" className="mb-0 mt-0.5">For large organizations</Text>
        </RadioCard>
    </RadioGroup.Root>
)

const RadioCard = ({value, children}) => (
    <Label htmlFor={value} size="sm" className="block border p-[--card-padding] rounded-[--card-radius] bg-[--ui-bg] card-shadow has-[[data-state='checked']]:ring-2 -ring-offset-px ring-primary-600 dark:has-[[data-state='checked']]:bg-[--ui-soft-bg]">
        {children}
        <RadioGroup.Item value={value} id={value} className="hidden">
            <RadioGroup.Indicator />
        </RadioGroup.Item>
    </Label>
)`

export const radioCardsCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]