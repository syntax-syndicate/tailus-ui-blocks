import Tabs from "@react-ui/tabs/Tabs"
import {
  type TabsListProps as ListProps,
  type TabsIndicatorProps as IndicatorProps,
} from "@tailus/themer";
import { useEffect, useRef, useState } from "react";

export type TabsAppProps = "all" | "unread" | "archived" 

export interface TabsUIProps extends ListProps {
  indicatorVariant? : IndicatorProps["variant"]
}

export const Overview = () => {

    const [state, setState] = useState<TabsAppProps>("all");
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const activeTrigger = document.getElementById(state) as HTMLElement;
        if (spanRef.current) {
            spanRef.current.style.left = activeTrigger.offsetLeft + "px";
            spanRef.current.style.width = activeTrigger.offsetWidth + "px";
        }
    }, [state]);

    return (
        <Tabs.Root className="space-y-4" defaultValue={state} onValueChange={(value) => setState(value as TabsAppProps)}>
            <Tabs.List data-shade="925" variant="soft" triggerVariant="plain" size="md">
                <Tabs.Indicator ref={spanRef} variant="elevated" className="bg-white"/>
                <Tabs.Trigger value="all" id="all">All</Tabs.Trigger>
                <Tabs.Trigger value="unread" id="unread">Unread</Tabs.Trigger>
                <Tabs.Trigger value="archived" id="archived">Archived</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="all" className="text-[--caption-text-color]">
                All
            </Tabs.Content>
            <Tabs.Content value="unread" className="text-[--caption-text-color]">
                Unread
            </Tabs.Content>
            <Tabs.Content value="archived" className="text-[--caption-text-color]">
                Archived
            </Tabs.Content>
        </Tabs.Root>
    )
}

const exampleCode = `import Tabs from "@tailus-ui/tabs/Tabs"
import {
  type TabsListProps as ListProps,
  type TabsIndicatorProps as IndicatorProps,
} from "@tailus/themer";
import { useEffect, useRef, useState } from "react";

type TabsAppProps = "all" | "unread" | "archived" 

interface TabsUIProps extends ListProps {
  indicatorVariant? : IndicatorProps["variant"]
}

export const Overview = () => {

    const [state, setState] = useState<TabsAppProps>("all");
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const activeTrigger = document.getElementById(state) as HTMLElement;
        if (spanRef.current) {
            spanRef.current.style.left = activeTrigger.offsetLeft + "px";
            spanRef.current.style.width = activeTrigger.offsetWidth + "px";
        }
    }, [state]);

    return (
        <Tabs.Root className="space-y-4" defaultValue={state} onValueChange={(value) => setState(value as TabsAppProps)}>
            <Tabs.List data-shade="925" variant="soft" triggerVariant="plain" size="md">
                <Tabs.Indicator ref={spanRef} variant="elevated" className="bg-white"/>
                <Tabs.Trigger value="all" id="all">All</Tabs.Trigger>
                <Tabs.Trigger value="unread" id="unread">Unread</Tabs.Trigger>
                <Tabs.Trigger value="archived" id="archived">Archived</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="all" className="text-[--caption-text-color]">
                All
            </Tabs.Content>
            <Tabs.Content value="unread" className="text-[--caption-text-color]">
                Unread
            </Tabs.Content>
            <Tabs.Content value="archived" className="text-[--caption-text-color]">
                Archived
            </Tabs.Content>
        </Tabs.Root>
    )
}`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]