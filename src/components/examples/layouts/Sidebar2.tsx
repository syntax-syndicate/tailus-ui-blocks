import BrandIcon from "@components/utilities/BrandIcon";
import Button from "@react-ui/button/Button";
import Separator from "@react-ui/separator/Separator";
import { HelpCircle, Home, Inbox, Paperclip, PenBox, SendHorizonal, Settings, Store, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Avatar from "@react-ui/avatar/Avatar";
import { Caption, Text, Title } from "@components/typography";
import { FormInput } from "@react-ui/form";
import Tabs from "@react-ui/tabs/Tabs";
import {
  type TabsListProps as ListProps,
  type TabsIndicatorProps as IndicatorProps,
  button
} from "@tailus/themer";
import ScrollArea from "@components/ScrollArea";
import { IconLink } from "./../sidebar/IconLink";
import { Message } from "./../sidebar/ChatBubble";
import { Search } from "./../sidebar/Search";
import { ChatLink } from "./../sidebar/ChatLink";

export type TabsAppProps = "chat" | "files" 

export interface TabsUIProps extends ListProps {
  indicatorVariant? : IndicatorProps["variant"]
}

const ChatLinks = () => {
    return (
        <Tabs.Root defaultValue="all" className="space-y-4 -mx-3">
            <Tabs.List className="w-fit gap-2 px-3 [--tabs-radius:9999px]" variant="plain" triggerVariant="softToSoft" size="sm" intent="primary">
                <Tabs.Trigger value="all">All</Tabs.Trigger>
                <Tabs.Trigger value="unread">Unread</Tabs.Trigger>
                <Tabs.Trigger value="archived">Archived</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="all" className="space-y-1">
                <ChatLink isActive userName="Méschac Irung" avatar="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" lastMessage="Hello, how are you doing today?" date="12:00 PM" link="#" />
                <ChatLink userName="Tailus UI" unread={3} avatar="https://mars-images.imgix.net/1704976070160-1704976065843icon.png?auto=compress&fit=max&w=128" lastMessage="Hello, how are you doing today?" date="12:00 PM" link="#" />
                <ChatLink userName="Bernard Ng" avatar="https://pbs.twimg.com/profile_images/1660255666617892866/aJV_B5cN_400x400.jpg" lastMessage="We're live 🚀" date="24 May" link="#" />
                <ChatLink userName="Théo Balick" unread={12} avatar="https://pbs.twimg.com/profile_images/1679957923823247360/47FJpyBb_400x400.jpg" lastMessage="Good news ! I'll be working on the CLI this week" date="20 May" link="#" />
            </Tabs.Content>
            <Tabs.Content value="unread" className="space-y-1">
                <ChatLink userName="Tailus UI" unread={3} avatar="https://mars-images.imgix.net/1704976070160-1704976065843icon.png?auto=compress&fit=max&w=128" lastMessage="Hello, how are you doing today?" date="12:00 PM" link="#" />
                <ChatLink userName="Théo Balick" unread={12} avatar="https://pbs.twimg.com/profile_images/1679957923823247360/47FJpyBb_400x400.jpg" lastMessage="Good news ! I'll be working on the CLI this week" date="20 May" link="#" />
            </Tabs.Content>
            <Tabs.Content value="archived" className="space-y-1">
                <ChatLink userName="Glodie Lukose" avatar="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg" lastMessage="Hello, how are you doing today?" date="12:00 PM" link="#" />
            </Tabs.Content>
        </Tabs.Root>
    )
}

export const Sidebar2 = () => {
    const [state, setState] = useState<TabsAppProps>("chat");
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const activeTrigger = document.getElementById(state) as HTMLElement;
        if (spanRef.current) {
            spanRef.current.style.left = activeTrigger.offsetLeft + "px";
            spanRef.current.style.width = activeTrigger.offsetWidth + "px";
        }
    }, [state]);
    
    return (
        <div className="grid [grid-template-columns:auto_1fr] w-full h-screen">
            <aside className="h-screen flex divide-x border-r">
                <div data-shade="950" className="flex flex-col gap-4 p-4 bg-[--ui-bg]">
                    <div className="w-10 flex">
                        <BrandIcon className="mx-auto" />
                    </div>
                    <div className="mt-4 space-y-1">
                        <IconLink link="#" label="Home">
                            <Home />
                        </IconLink>
                        <IconLink link="#" label="Store">
                            <Store />
                        </IconLink>
                        <IconLink link="#" label="Team">
                            <Users />
                        </IconLink>
                        <IconLink link="#" label="Inbox" isActive>
                            <Inbox />
                        </IconLink>
                    </div>
                    <div className="mt-4">
                        <Caption hidden>Workspaces</Caption>
                        <Separator className="my-4" />
                        <div className="space-y-1">
                            <IconLink link="#" label="Tailus UI React">
                                <span className="block !size-2 rounded-full bg-primary-600"></span>
                            </IconLink>
                            <IconLink link="#" label="Tailus UI HTML">
                                <span className="block !size-2 rounded-full bg-accent-600"></span>
                            </IconLink>
                            <IconLink link="#" label="Tailus UI Themer">
                                <span className="block !size-2 rounded-full bg-gray-600"></span>
                            </IconLink>
                        </div>
                    </div>
                    <div className="h-fit mt-auto">
                        <Separator className="my-4" />
                        <div className="space-y-1">
                            <IconLink link="#" label="Help">
                                <HelpCircle />
                            </IconLink>
                            <IconLink link="#" label="Settings">
                                <Settings />
                            </IconLink>
                        </div>
                    </div>
                </div>
                <div data-shade="925" className="sm:w-96 bg-[--ui-bg] p-4 space-y-4">
                    <div className="h-7 flex items-center">
                        <Title size="base" weight="medium">Inbox</Title>
                        <Button.Root variant="ghost" intent="gray" className="ml-auto" size="sm">
                            <Button.Label hidden>Compose</Button.Label>
                            <Button.Icon type="only">
                                <PenBox />
                            </Button.Icon>
                        </Button.Root>
                    </div>
                    <Search />

                    <ChatLinks />
                </div>
            </aside>
            <div data-shade="925" hidden className="md:block h-full bg-[--ui-bg] overflow-hidden">
                <div data-shade="900" className="p-4 grid items-center [grid-template-columns:auto_1fr] gap-3 bg-[--ui-bg]">
                    <Avatar.Root size="sm" bottomStatus status="online">
                        <Avatar.Image src="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" loading="lazy" alt="User Avatar" width={120} height={120} />
                        <Avatar.Fallback children="MI" />
                    </Avatar.Root>
                    <div>
                        <Text as="p" size="sm" weight="medium" className="my-0">Méschac Irung</Text>
                        <Caption as="p" size="xs" className="my-0">Online</Caption>
                    </div>
                </div>
                <Tabs.Root className="h-[calc(100%-4.2rem)]" defaultValue={state} onValueChange={(value) => setState(value as TabsAppProps)}>
                    <div data-shade="900" className="border-b bg-[--ui-bg]">
                        <Tabs.List variant="plain" triggerVariant="plain" size="sm" className="px-4 gap-1.5 w-fit pb-1">
                            <Tabs.Indicator ref={spanRef} variant="bottom"/>
                            <Tabs.Trigger className="w-fit" value="chat" id="chat">Chat</Tabs.Trigger>
                            <Tabs.Trigger disabled className="w-fit" value="files" id="files">Files</Tabs.Trigger>
                        </Tabs.List>
                    </div>
                    <Tabs.Content value="chat" className="px-4 pt-4 pb-0.5 h-[calc(100%-2rem)] gap-4 grid [grid-template-rows:1fr_auto]">
                        <div>
                            <ScrollArea.Root>
                                <ScrollArea.Viewport className="overflow-auto w-full">
                                    <Message message="Hello there !" date="12:00 PM" />
                                    <Message message="Hello, how are you doing today?" date="12:00 PM" isMe />
                                    <Message message="Hello, how are you doing today?" date="12:00 PM" />
                                    <Message message="Highly customizable components for crafting modern, personalized websites and applications." date="12:00 PM" isMe />
                                </ScrollArea.Viewport>
                                <ScrollArea.Scrollbar orientation="vertical"/>
                            </ScrollArea.Root>
                        </div>
                        <div className="flex items-center border-t py-4 -mx-4 px-4 bg-[--ui-bg]" data-shade="900" data-rounded="full">
                            <form className="w-full relative grid gap-1 [grid-template-columns:auto_1fr_auto]">
                                <div>
                                    <label htmlFor="file" className={button.ghost({intent:"gray", size:"md", className:"size-9 px-0"})}>
                                        <Paperclip className="size-4 m-auto"/>
                                        <input type="file" id="file" name="file" hidden />
                                    </label>
                                </div>
                                <FormInput variant="soft" size="md" className="px-3" placeholder="Type a message" />
                                <Button.Root variant="ghost" intent="gray">
                                    <Button.Label hidden>Send</Button.Label>
                                    <Button.Icon type="only" size="md">
                                        <SendHorizonal />
                                    </Button.Icon>
                                </Button.Root>
                            </form>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content value="files" className="border-8 px-4 pt-4 h-56">
                        <div className="max-w-sm mx-auto">
                            <Title as="h3" size="base" weight="medium">No files found</Title>
                            <Text as="p" size="sm" className="my-0">You haven't sent any file each other</Text>
                        </div>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
    )
}