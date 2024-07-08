import BrandIcon from '@components/utilities/BrandIcon';
import { Home, Inbox, Menu, Settings, Store, Users, X } from 'lucide-react';
import { Caption, Text, Title } from '@components/typography';
import { useState } from 'react';
import { Search } from './../sidebar/Search';
import Card from '@react-ui/card/Card';
import Progress from '@react-ui/progress/Progress';
import Button from '@react-ui/button/Button';
import { AppContent } from './Content';
import { WorkspaceIcon } from '../sidebar/WorkspaceIcon';
import { twMerge } from 'tailwind-merge';
import * as LinkList from './LinkList';
import * as Link from './../sidebar/Link';
import ScrollArea from '@react-ui/scroll-area/ScrollArea';
import { UserDropdown2 } from './UserDropdown2';

export const Sidebar4 = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full bg-gray-50 lg:flex lg:[grid-template-columns:auto_1fr] dark:bg-gray-950">
            <div className={twMerge('invisible fixed inset-y-0 top-0 flex h-screen w-fit origin-top scale-[0.98] overflow-hidden opacity-0 transition-all duration-300 lg:visible lg:scale-100 lg:opacity-100', isMenuOpen && 'visible scale-100 opacity-100')}>
                <div className="flex w-72 flex-col gap-4 px-6 py-4">
                    <div className="flex w-10">
                        <BrandIcon className="mx-auto" />
                    </div>
                    <Search />
                    <ScrollArea.Root className="-mx-1 -my-4">
                        <ScrollArea.Viewport className="w-full px-1 py-4">
                            <div className="space-y-1">
                                <Link.Root link="#" isActive>
                                    <Link.Icon>
                                        <Home />
                                    </Link.Icon>
                                    <Link.Label>Dashboard</Link.Label>
                                </Link.Root>
                                <LinkList.Root>
                                    <LinkList.Group value="store">
                                        <LinkList.Trigger>
                                            <LinkList.Icon>
                                                <Store />
                                            </LinkList.Icon>
                                            Store
                                        </LinkList.Trigger>
                                        <LinkList.Content>
                                            <LinkList.Link link="/">Customers</LinkList.Link>
                                            <LinkList.Link link="/">Orders</LinkList.Link>
                                            <LinkList.Link link="/">Products</LinkList.Link>
                                            <LinkList.Link link="/">Discounts</LinkList.Link>
                                        </LinkList.Content>
                                    </LinkList.Group>
                                    <LinkList.Group value="team">
                                        <LinkList.Trigger>
                                            <LinkList.Icon>
                                                <Users />
                                            </LinkList.Icon>
                                            Team
                                        </LinkList.Trigger>
                                        <LinkList.Content>
                                            <LinkList.Link link="/">General</LinkList.Link>
                                            <LinkList.Link link="/">Affiliates</LinkList.Link>
                                            <LinkList.Link link="/">Products</LinkList.Link>
                                            <LinkList.Link link="/">Discounts</LinkList.Link>
                                        </LinkList.Content>
                                    </LinkList.Group>
                                    <LinkList.Group value="settings">
                                        <LinkList.Trigger>
                                            <LinkList.Icon>
                                                <Settings />
                                            </LinkList.Icon>
                                            Settings
                                        </LinkList.Trigger>
                                        <LinkList.Content>
                                            <LinkList.Link link="/">General</LinkList.Link>
                                            <LinkList.Link link="/">Affiliates</LinkList.Link>
                                            <LinkList.Link link="/">Products</LinkList.Link>
                                            <LinkList.Link link="/">Discounts</LinkList.Link>
                                        </LinkList.Content>
                                    </LinkList.Group>
                                </LinkList.Root>
                                <Link.Root link="#">
                                    <Link.Icon>
                                        <Inbox />
                                    </Link.Icon>
                                    <Link.Label>Inbox</Link.Label>
                                </Link.Root>
                            </div>
                            <div className="mt-4">
                                <Caption className="mx-2">Workspaces</Caption>
                                <div className="mt-4 space-y-1">
                                    <Link.Root link="#">
                                        <Link.Icon>
                                            <WorkspaceIcon intent="primary" />
                                        </Link.Icon>
                                        <Link.Label>Tailus UI React</Link.Label>
                                    </Link.Root>
                                    <Link.Root link="#">
                                        <Link.Icon>
                                            <WorkspaceIcon intent="secondary" />
                                        </Link.Icon>
                                        <Link.Label>Tailus UI Themer</Link.Label>
                                    </Link.Root>
                                    <Link.Root link="#">
                                        <Link.Icon>
                                            <WorkspaceIcon intent="accent" />
                                        </Link.Icon>
                                        <Link.Label>Tailus UI HTML</Link.Label>
                                    </Link.Root>
                                </div>
                            </div>
                        </ScrollArea.Viewport>
                        <ScrollArea.Scrollbar orientation="vertical" />
                    </ScrollArea.Root>
                    <div className="mt-auto h-fit space-y-4">
                        {isBannerVisible && (
                            <Card variant="soft" className="relative [--card-padding:1.25rem] dark:[--ui-soft-bg:theme(colors.gray.500/0.10)]">
                                <Button.Root className="absolute right-2 top-2" size="xs" variant="ghost" intent="gray" onClick={() => setIsBannerVisible(false)}>
                                    <Button.Icon type="only" size="xs">
                                        <X />
                                    </Button.Icon>
                                </Button.Root>
                                <Title as="div" size="base" className="text-sm">
                                    Storage almost full
                                </Title>
                                <Text size="sm" className="mb-0 mt-2">
                                    Upgrade your plan to get more storage
                                </Text>
                                <Progress.Root value={80} data-orientation="vertical" size="sm" className="mt-4">
                                    <Progress.Indicator className="w-4/5" intent="warning" loading="warning" complete="danger" />
                                </Progress.Root>
                                <Button.Root variant="outlined" intent="gray" size="xs" className="mt-4 font-medium">
                                    <Button.Label className="text-primary-600 dark:text-primary-400">Upgrade plan</Button.Label>
                                </Button.Root>
                            </Card>
                        )}
                        <UserDropdown2 />
                    </div>
                </div>
            </div>
            <main data-shade="900" className={twMerge('relative h-screen overflow-auto border-x bg-[--ui-bg] transition-transform duration-300 lg:ml-auto lg:mr-1 lg:mt-1 lg:h-[calc(100vh-4px)] lg:w-[calc(100vw-18rem)] lg:rounded-t-[--card-radius] lg:border-t lg:shadow-md lg:shadow-gray-600/10', isMenuOpen && 'translate-x-72 lg:translate-x-0')}>
                <div className="feedback-bg sticky top-0 z-10 flex items-center justify-between border-b px-6 py-3 lg:rounded-t-[--card-radius] lg:py-4">
                    <div className="flex items-center gap-2">
                        <Button.Root size="sm" variant="ghost" intent="gray" className="-ml-2 focus:bg-transparent lg:hidden dark:focus:bg-transparent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <Button.Icon type="only">
                                <Menu />
                            </Button.Icon>
                        </Button.Root>
                        <Title size="base" weight="medium">
                            Dashboard
                        </Title>
                    </div>
                </div>

                <div className="p-6">
                    <AppContent />
                </div>
            </main>
        </div>
    );
};
