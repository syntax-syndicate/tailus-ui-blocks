import { Badge } from "@components/Badge";
import Tabs from "@react-ui/tabs/Tabs"
import {
  type TabsListProps as ListProps,
  type TabsIndicatorProps as IndicatorProps,
} from "@tailus/themer";
import { Grape, Hop, IceCreamBowl } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type TabsAppProps = "grape" | "hop" | "icecream" 

export interface TabsUIProps extends ListProps {
  indicatorVariant? : IndicatorProps["variant"]
}

export const WithIconBadge = () => {

    const [state, setState] = useState<TabsAppProps>("grape");
    const spanRef3 = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const activeTrigger = document.getElementById(state) as HTMLElement;
        if (spanRef3.current) {
            spanRef3.current.style.left = activeTrigger.offsetLeft + "px";
            spanRef3.current.style.width = activeTrigger.offsetWidth + "px";
        }
    }, [state]);

    return (
        <Tabs.Root className="space-y-4 w-fit" defaultValue={state} onValueChange={(value) => setState(value as TabsAppProps)}>
            <Tabs.List data-shade="900" variant="bottomOutlined" triggerVariant="plain" size="lg" className="pb-2 w-full max-w-full">
                <Tabs.Indicator ref={spanRef3} variant="bottom"/>
                <Tabs.Trigger value="grape" id="grape" className="text-nowrap">
                    <Grape className="size-4 opacity-50 mr-2"/>
                    Grape
                </Tabs.Trigger>
                <Tabs.Trigger value="hop" id="hop" className="text-nowrap">
                    <Hop className="size-4 opacity-50 mr-2"/>
                    Hop
                    <Badge className="ml-2 border" size="xs" variant="soft" intent="gray">3</Badge>
                </Tabs.Trigger>
                <Tabs.Trigger value="icecream" id="icecream" className="text-nowrap">
                    <IceCreamBowl className="size-4 opacity-50 mr-2"/>
                    Ice Cream
                    <Badge className="ml-2 border" size="xs" variant="soft" intent="gray">12</Badge>
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="grape" className="text-[--caption-text-color]">
                Grape
            </Tabs.Content>
            <Tabs.Content value="hop" className="text-[--caption-text-color]">
                Hop
            </Tabs.Content>
            <Tabs.Content value="icecream" className="text-[--caption-text-color]">
                Ice cream
            </Tabs.Content>
        </Tabs.Root>
    )
}

const exampleCode = `import Badge from "@tailus-ui/Badge";
import Tabs from "@tailus-ui/tabs/Tabs"
import {
  type TabsListProps as ListProps,
  type TabsIndicatorProps as IndicatorProps,
} from "@tailus/themer";
import { Grape, Hop, IceCreamBowl } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type TabsAppProps = "grape" | "hop" | "icecream" 

export interface TabsUIProps extends ListProps {
  indicatorVariant? : IndicatorProps["variant"]
}

export const WithIconBadge = () => {

    const [state, setState] = useState<TabsAppProps>("grape");
    const spanRef3 = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const activeTrigger = document.getElementById(state) as HTMLElement;
        if (spanRef3.current) {
            spanRef3.current.style.left = activeTrigger.offsetLeft + "px";
            spanRef3.current.style.width = activeTrigger.offsetWidth + "px";
        }
    }, [state]);

    return (
        <Tabs.Root className="space-y-4 w-fit" defaultValue={state} onValueChange={(value) => setState(value as TabsAppProps)}>
            <Tabs.List data-shade="900" variant="bottomOutlined" triggerVariant="plain" size="lg" className="pb-2 w-full max-w-full">
                <Tabs.Indicator ref={spanRef3} variant="bottom"/>
                <Tabs.Trigger value="grape" id="grape" className="text-nowrap">
                    <Grape className="size-4 opacity-50 mr-2"/>
                    Grape
                </Tabs.Trigger>
                <Tabs.Trigger value="hop" id="hop" className="text-nowrap">
                    <Hop className="size-4 opacity-50 mr-2"/>
                    Hop
                    <Badge className="ml-2 border" size="xs" variant="soft" intent="gray">3</Badge>
                </Tabs.Trigger>
                <Tabs.Trigger value="icecream" id="icecream" className="text-nowrap">
                    <IceCreamBowl className="size-4 opacity-50 mr-2"/>
                    Ice Cream
                    <Badge className="ml-2 border" size="xs" variant="soft" intent="gray">12</Badge>
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="grape" className="text-[--caption-text-color]">
                Grape
            </Tabs.Content>
            <Tabs.Content value="hop" className="text-[--caption-text-color]">
                Hop
            </Tabs.Content>
            <Tabs.Content value="icecream" className="text-[--caption-text-color]">
                Ice cream
            </Tabs.Content>
        </Tabs.Root>
    )
}`

export const withIconBadgeCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]