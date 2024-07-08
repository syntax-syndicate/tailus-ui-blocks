import BrandIcon from '@components/utilities/BrandIcon';
import Separator from '@react-ui/separator/Separator';
import { BarChartIcon, Building, Copy, Flag, Folder, HelpCircle, Home, Inbox, Menu, Settings, Star, Store, Users } from 'lucide-react';
import { Caption, Title } from '@components/typography';
import * as Link from './../sidebar/Link';
import { IconLink } from './../sidebar/IconLink';
import { UserSelect } from './../sidebar/UserSelect';
import { AppContent } from './Content';
import { Notifications } from '../sidebar/Notifications';
import Button from '@react-ui/button/Button';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { WorkspaceIcon } from '../sidebar/WorkspaceIcon';

export const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div data-shade="900" className="grid h-screen w-full bg-gray-50 [grid-template-columns:auto_1fr] dark:bg-gray-950">
            <aside className="sticky top-0 flex h-screen">
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex w-10">
                        <BrandIcon className="mx-auto" />
                    </div>
                    <div className="mt-4 space-y-1">
                        <IconLink link="#" label="Home" isActive>
                            <Home />
                        </IconLink>
                        <IconLink link="#" label="Store">
                            <Store />
                        </IconLink>
                        <IconLink link="#" label="Team">
                            <Users />
                        </IconLink>
                        <IconLink link="#" label="Inbox">
                            <Inbox />
                        </IconLink>
                    </div>
                    <div className="mt-4">
                        <Caption hidden>Workspaces</Caption>
                        <Separator className="my-4" />
                        <div className="space-y-1">
                            <IconLink link="#" label="Tailus UI React">
                                <WorkspaceIcon intent="primary" />
                            </IconLink>
                            <IconLink link="#" label="Tailus UI HTML">
                                <WorkspaceIcon intent="accent" />
                            </IconLink>
                            <IconLink link="#" label="Tailus UI Themer">
                                <WorkspaceIcon intent="gray" />
                            </IconLink>
                        </div>
                    </div>
                    <div className="mt-auto h-fit">
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
                <div className={twMerge('w-0 scale-[0.98] overflow-hidden border-l opacity-0 transition-[width,opacity,transform] duration-300', isMenuOpen && 'w-56 scale-100 opacity-100')}>
                    <div className="h-full w-56 space-y-4 p-4">
                        <UserSelect />
                        <div className="space-y-1">
                            <Link.Root link="#">
                                <Link.Icon>
                                    <Inbox />
                                </Link.Icon>
                                <Link.Label>Inbox</Link.Label>
                            </Link.Root>
                            <Link.Root link="#">
                                <Link.Icon>
                                    <Star />
                                </Link.Icon>
                                <Link.Label>Star</Link.Label>
                            </Link.Root>
                            <Link.Root link="#">
                                <Link.Icon>
                                    <Users />
                                </Link.Icon>
                                <Link.Label>Users</Link.Label>
                            </Link.Root>
                            <Link.Root link="#">
                                <Link.Icon>
                                    <BarChartIcon />
                                </Link.Icon>
                                <Link.Label>Stats</Link.Label>
                            </Link.Root>
                            <Link.Root link="#">
                                <Link.Icon>
                                    <Copy />
                                </Link.Icon>
                                <Link.Label>Documents</Link.Label>
                            </Link.Root>
                            <Link.Root link="#">
                                <Link.Icon>
                                    <Flag />
                                </Link.Icon>
                                <Link.Label>Ownership</Link.Label>
                            </Link.Root>
                            <Link.Root link="#">
                                <Link.Icon>
                                    <Building />
                                </Link.Icon>
                                <Link.Label>Organization</Link.Label>
                            </Link.Root>
                            <Link.Root link="#">
                                <Link.Icon>
                                    <Folder />
                                </Link.Icon>
                                <Link.Label>Folder</Link.Label>
                            </Link.Root>
                        </div>
                    </div>
                </div>
            </aside>
            <main className={twMerge('max-w-[calc(100vw-2.5rem)] overflow-auto border border-b-0 bg-[--ui-bg] shadow-md lg:mr-1 lg:mt-1 lg:rounded-t-[--card-radius]', isMenuOpen && 'border-l')}>
                <div className="feedback-bg sticky top-0 z-10 border-b py-4">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
                        <div className="flex items-center gap-2">
                            <Button.Root size="sm" variant="ghost" intent="gray" className="-ml-2 focus:bg-transparent dark:focus:bg-transparent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <Button.Icon type="only">
                                    <Menu />
                                </Button.Icon>
                            </Button.Root>
                            <Title size="base" weight="medium">
                                Dashboard
                            </Title>
                        </div>
                        <div className="flex gap-3">
                            <Button.Root size="sm">
                                <Button.Label>New</Button.Label>
                            </Button.Root>
                            <Notifications />
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-6xl space-y-6 p-6">
                    <AppContent />
                </div>
            </main>
        </div>
    );
};
