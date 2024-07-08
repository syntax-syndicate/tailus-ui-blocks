import BrandIcon from "@components/utilities/BrandIcon";
import Separator from "@react-ui/separator/Separator";
import { UserSelect } from "./UserSelect";
import { tabs } from "@tailus/themer";
import Tabs from "@tailus-ui/tabs/Tabs"
import { useEffect, useRef, useState } from "react";

const { trigger, indicator } = tabs()

type TabsAppProps = "home" | "store" | "team" | "inbox" | "settings"; 

export function HeaderLayout() {
    const [state, setState] = useState<TabsAppProps>("home");
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const activeTrigger = document.getElementById(state) as HTMLElement;
        if (spanRef.current) {
            spanRef.current.style.left = activeTrigger.offsetLeft + "px";
            spanRef.current.style.width = activeTrigger.offsetWidth + "px";
        }
    }, [state]);
    return (
        <div className="w-full">
        <header className="w-full border-b bg-[--ui-bg] rounded-t-[--card-radius]">
            <div className="max-w-6xl mx-auto px-5">
                <div className="py-4 flex justify-between">
                    <div className="flex gap-3 items-center h-8">
                        <a href="#">
                            <BrandIcon />
                        </a>
                        <Separator orientation="vertical" />
                        <UserSelect variant="plain" />
                    </div>
                </div>
                    <div className="flex gap-1">
                        <Tabs.Root className="space-y-4" defaultValue={state} onValueChange={(value) => setState(value as TabsAppProps)}>
            <Tabs.List data-shade="900" variant="bottomOutlined" triggerVariant="plain" size="sm" className="gap-2 pb-2 h-10 border-none">
                <Tabs.Indicator ref={spanRef} variant="bottom"/>
                <Tabs.Trigger value="home" id="home">Home</Tabs.Trigger>
                <Tabs.Trigger value="store" id="unread">store</Tabs.Trigger>
                <Tabs.Trigger value="team" id="team">Team</Tabs.Trigger>
                <Tabs.Trigger value="inbox" id="inbox">Inbox</Tabs.Trigger>
                <Tabs.Trigger value="settings" id="inbox">Settings</Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
                    <nav className="hidden pb-2 h-10 relative">
                        <span className={indicator({indicatorVariant:"bottom", intent:"primary", className:"block w-32"})}></span>
                        <Link link="#" label="Home" isActive />
                        <Link link="#" label="Store" />
                        <Link link="#" label="Team" />
                        <Link link="#" label="Inbox" />
                        <Link link="#" label="Settings" />
                    </nav>
                </div>
            </div>
        </header>
            <div className="h-96">
                <div className="h-full max-w-6xl mx-auto p-5">
                    <div className="h-full border border-dashed">

                    </div>
                </div>
        </div>
        </div>
    )
}

const Link = ({ link, label, isActive=false }: { link: string, label:string, isActive?: boolean }) => (
    <a href={link} className={trigger({triggerVariant:"plain", size:"sm"})}>
        {label}
    </a>
) 