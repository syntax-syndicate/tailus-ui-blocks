import { Text, Title } from "@components/typography";
import Label from "./Label";
import Checkbox from "@react-ui/checkbox/Checkbox";
import { Check } from "lucide-react";
import { AstroIcon, HTMLIcon, NextIcon, NuxtIcon } from "@components/utilities/icons";

export const CheckboxCards = () => (
    <div className="grid sm:grid-cols-2 gap-3 [--card-padding:theme(spacing.4)] w-fit" data-shade="900">
        <CheckGroup value="html">
            <div className="flex gap-2 items-center">
                <HTMLIcon className="size-4"/>
                <Title size="base" as="div" weight="medium">HTML</Title>
                <Text className="my-0" size="sm">$19.99</Text>
            </div>
        </CheckGroup>
        <CheckGroup value="astro">
            <div className="flex gap-2 items-center">
                <AstroIcon className="size-4"/>
                <Title size="base" as="div" weight="medium">Astro</Title>
                <Text className="my-0" size="sm">$29.99</Text>
            </div>
        </CheckGroup>
        <CheckGroup value="next">
            <div className="flex gap-2 items-center">
                <NextIcon className="size-4"/>
                <Title size="base" as="div" weight="medium">Next</Title>
                <Text className="my-0" size="sm">$39.99</Text>
            </div>
        </CheckGroup>
        <CheckGroup value="nuxt">
            <div className="flex gap-2 items-center">
                <NuxtIcon className="size-4"/>
                <Title size="base" as="div" weight="medium">Nuxt</Title>
                <Text className="my-0" size="sm">$39.99</Text>
            </div>
        </CheckGroup>
    </div>
)

const CheckGroup = ({value, children}) => (
    <Label htmlFor={value} size="sm" className="flex items-center gap-12 justify-between border p-[--card-padding] rounded-[--card-radius] bg-[--ui-bg] shadow-sm shadow-gray-950/5 dark:has-[[data-state='checked']]:ring-0 has-[[data-state='checked']]:bg-[--ui-soft-bg]">
        {children}
        <Checkbox.Root value={value} id={value} className="size-4">
            <Checkbox.Indicator>
                <Check className="size-3.5"/>
            </Checkbox.Indicator>
        </Checkbox.Root>
    </Label>
)

const exampleCode = `import { Text, Title } from "@tailus-ui/typography";
import Label from "@tailus-ui/Label";
import Checkbox from "@tailus-ui/checkbox/Checkbox";
import { Check } from "lucide-react";

export const CheckboxCards = () => (
    <div className="grid grid-cols-2 gap-3 [--card-padding:theme(spacing.4)]">
        <CheckGroup value="html">
            <div className="flex gap-2 items-center">
                <HTMLIcon className="size-4"/>
                <Title size="base" as="div" weight="medium">HTML</Title>
                <Text className="my-0" size="sm">$19.99</Text>
            </div>
        </CheckGroup>
        <CheckGroup value="astro">
            <div className="flex gap-2 items-center">
                <AstroIcon className="size-4"/>
                <Title size="base" as="div" weight="medium">Astro</Title>
                <Text className="my-0" size="sm">$29.99</Text>
            </div>
        </CheckGroup>
        <CheckGroup value="next">
            <div className="flex gap-2 items-center">
                <NextIcon className="size-4"/>
                <Title size="base" as="div" weight="medium">Next</Title>
                <Text className="my-0" size="sm">$39.99</Text>
            </div>
        </CheckGroup>
        <CheckGroup value="nuxt">
            <div className="flex gap-2 items-center">
                <NuxtIcon className="size-4"/>
                <Title size="base" as="div" weight="medium">Nuxt</Title>
                <Text className="my-0" size="sm">$39.99</Text>
            </div>
        </CheckGroup>
    </div>
)

const CheckGroup = ({value, children}) => (
    <Label htmlFor={value} size="sm" className="flex items-center gap-12 justify-between border p-[--card-padding] rounded-[--card-radius] bg-[--ui-bg] shadow-sm shadow-gray-950/5 dark:has-[[data-state='checked']]:ring-0 has-[[data-state='checked']]:bg-[--ui-soft-bg]">
        {children}
        <Checkbox.Root value={value} id={value} className="size-4">
            <Checkbox.Indicator>
                <Check className="size-3.5"/>
            </Checkbox.Indicator>
        </Checkbox.Root>
    </Label>
)`

export const checkCardsCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]