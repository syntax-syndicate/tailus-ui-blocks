import Tabs from "@react-ui/tabs/Tabs"
import {
  type TabsListProps as ListProps,
  type TabsIndicatorProps as IndicatorProps,
} from "@tailus/themer";
import { useEffect, useRef, useState } from "react";

export type TabsAppProps = "all2" | "unread2" | "archived2" 

export interface TabsUIProps extends ListProps {
  indicatorVariant? : IndicatorProps["variant"]
}

export const BottomIndicator = () => {

    const [state, setState] = useState<TabsAppProps>("all2");
    const spanRef2 = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const activeTrigger = document.getElementById(state) as HTMLElement;
        if (spanRef2.current) {
            spanRef2.current.style.left = activeTrigger.offsetLeft + "px";
            spanRef2.current.style.width = activeTrigger.offsetWidth + "px";
        }
    }, [state]);

    return (
        <Tabs.Root className="space-y-4" defaultValue={state} onValueChange={(value) => setState(value as TabsAppProps)}>
            <Tabs.List data-shade="900" variant="bottomOutlined" triggerVariant="plain" size="md" className="gap-2">
                <Tabs.Indicator ref={spanRef2} variant="bottom"/>
                <Tabs.Trigger value="all2" id="all2">All</Tabs.Trigger>
                <Tabs.Trigger value="unread2" id="unread2">Unread</Tabs.Trigger>
                <Tabs.Trigger value="archived2" id="archived2">Archived</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="all2" className="text-[--caption-text-color]">
                All
            </Tabs.Content>
            <Tabs.Content value="unread2" className="text-[--caption-text-color]">
                Unread
            </Tabs.Content>
            <Tabs.Content value="archived2" className="text-[--caption-text-color]">
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

export const BottomIndicator = () => {

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
            <Tabs.List data-shade="900" variant="bottomOutlined" triggerVariant="plain" size="md" className="gap-2">
                <Tabs.Indicator ref={spanRef} variant="bottom"/>
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

export const bottomIndicatorCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]