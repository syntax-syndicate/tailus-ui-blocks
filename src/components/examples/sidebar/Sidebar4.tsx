import BrandIcon from "@components/utilities/BrandIcon";
import Separator from "@react-ui/separator/Separator";
import { ChevronDown, HelpCircle, Home, Inbox, Settings, Store, Users, X } from "lucide-react";
import { Caption, Text, Title } from "@components/typography";
import { UserDropdown } from "../UserDropdown";
import { Link } from "./Link";
import { Notifications } from "./Notifications";
import * as Accordion from "@radix-ui/react-accordion";
import { button } from "@tailus/themer";
import { useState, type ReactNode } from "react";
import { UserSelect } from "./UserSelect";
import { Search } from "./Search";
import Card from "@react-ui/card/Card";
import Progress from "@react-ui/progress/Progress";
import Button from "@react-ui/button/Button";

export const SubLink = ({ isActive=false, label, link }: { isActive?: boolean, label: string, link: string }) => (
    <a href={link} className={button.ghost({ intent: "gray", size: "md", className:"pl-[42px] pr-3 text-sm w-full justify-start" })}>
        {label}
    </a>
)

export const LinkGroup = ({ label, icon, children }:{label:string, icon?:ReactNode, children:ReactNode}) => {
    return (
        <Accordion.Item value={label}>
            <Accordion.Header>
                <Accordion.Trigger className={button.ghost({ intent: "gray", size: "md", className:"gap-3.5 px-3 text-sm w-full justify-start" })}>
                    <span className="size-4 *:size-4">
                        {icon}
                    </span>
                    {label}
                    <ChevronDown className="size-4 ml-auto opacity-75 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"/>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="space-y-1 overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                {children}
            </Accordion.Content>
        </Accordion.Item>
    )
}

export const Sidebar4 = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(true)
    return (
        <div data-shade="925" className="grid overflow-hidden [grid-template-columns:auto_1fr] w-full bg-gray-50/50 dark:bg-[--ui-bg] rounded-[--card-radius]">
            <div className="flex overflow-hidden">
                <div className="w-64 flex flex-col gap-4 h-[85vh] p-4">
                    <div className="w-10 flex">
                        <BrandIcon className="mx-auto" />
                    </div>
                    <Search />
                    <div className="space-y-1">
                        <Link link="#" label="Home" isActive>
                            <Home />
                        </Link>
                        <Accordion.Root type="multiple" className="space-y-1">
                            <LinkGroup label="Store" icon={<Store />}>
                                <SubLink label="Customers" link="#" />
                                <SubLink label="Orders" link="#" />
                                <SubLink label="Products" link="#" />
                            </LinkGroup>
                            <LinkGroup label="Team" icon={<Users />}>
                                <SubLink label="Link" link="#" />
                                <SubLink label="Link" link="#" />
                                <SubLink label="Link" link="#" />
                            </LinkGroup>
                            <LinkGroup label="Settings" icon={<Settings />}>
                                <SubLink label="Link" link="#" />
                                <SubLink label="Link" link="#" />
                                <SubLink label="Link" link="#" />
                            </LinkGroup>
                        </Accordion.Root>
                        <Link link="#" label="Inbox">
                            <Inbox />
                        </Link>
                    </div>
                    <div className="h-fit mt-auto space-y-4">
                        <Link link="#" label="Help">
                            <HelpCircle />
                        </Link>
                        {
                            isBannerVisible && (
                                <Card variant="soft" className="[--card-padding:1.25rem] relative dark:[--ui-soft-bg:theme(colors.gray.500/0.10)]">
                                    <Button.Root className="absolute right-2 top-2" size="xs" variant="ghost" intent="gray" onClick={() => setIsBannerVisible(false)}>
                                        <Button.Icon type="only" size="xs">
                                            <X />
                                        </Button.Icon>
                                    </Button.Root>
                                    <Title as="div" size="base" className="text-sm">Storage almost full</Title>
                                    <Text size="sm" className="mb-0 mt-2">Upgrade your plan to get more storage</Text>
                                    <Progress.Root
                                        value={80}
                                        data-orientation="vertical"
                                        size="sm"
                                        className="mt-4"
                                    >
                                        <Progress.Indicator className="w-4/5" intent="warning" loading="warning" complete="danger" />
                                    </Progress.Root>
                                    <Button.Root variant="outlined" intent="gray" size="xs" className="font-medium mt-4">
                                        <Button.Label className="text-primary-600 dark:text-primary-400">Upgrade plan</Button.Label>
                                    </Button.Root>
                                </Card>
                            )
                        }
                        <UserSelect />
                    </div>
                </div>
            </div>
            <div data-shade="900" className="grid [grid-template-rows:auto_1fr] border m-0.5 rounded-[calc(var(--card-radius)-2px)] shadow shadow-gray-600/10 bg-[--ui-bg]">
                <div hidden className="p-4 border-b items-center sm:flex justify-between">
                    <Title size="base" weight="medium">Dashboard</Title>
                </div>

                <div className="m-4 border border-dashed flex justify-center items-center">
                    <Caption hidden className="sm:block">Content</Caption>
                </div>
            </div>
        </div>
    )
}