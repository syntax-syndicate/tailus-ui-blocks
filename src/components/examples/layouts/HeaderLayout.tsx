import BrandIcon from '@components/utilities/BrandIcon';
import Separator from '@react-ui/separator/Separator';
import { UserSelect } from './../sidebar/UserSelect';
import { Notifications } from '../sidebar/Notifications';
import { UserDropdown } from '../UserDropdown';
import { AppContent } from './Content';
import Button from '@react-ui/button/Button';
import { twMerge } from 'tailwind-merge';

export function HeaderLayout() {
    return (
        <>
            <header className="feedback-bg fixed top-0 z-10 w-full border-b">
                <div className="mx-auto max-w-6xl px-5">
                    <div className="flex items-center justify-between py-4">
                        <div className="flex h-7 items-center gap-4">
                            <a href="#" hidden className="sm:block">
                                <BrandIcon />
                            </a>
                            <Separator hidden className="rotate-12 sm:block" orientation="vertical" />
                            <UserSelect variant="plain" />
                        </div>
                        <div className="flex items-center gap-4">
                            <Link link="#" label="Help" mainNav={false} />
                            <Notifications />
                            <div className="hidden sm:block">
                                <UserDropdown />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <nav className="relative flex h-10 gap-2 pb-2">
                            <Link link="#" label="Home" isActive />
                            <Link link="#" label="Store" />
                            <Link link="#" label="Team" />
                            <Link link="#" label="Inbox" />
                            <Link link="#" label="Settings" />
                        </nav>
                    </div>
                </div>
            </header>
            <main className="mx-auto mt-28 h-full max-w-6xl px-5 py-6">
                <AppContent />
            </main>
        </>
    );
}

const Link = ({ link, label, isActive = false, mainNav = true }: { link: string; label: string; isActive?: boolean; mainNav?: boolean }) => (
    <Button.Root variant={isActive && !mainNav ? 'soft' : 'ghost'} intent="gray" href={link} size="sm" className={twMerge(isActive && mainNav && 'relative before:absolute before:inset-x-0 before:-bottom-2 before:h-0.5 before:rounded-t-full before:bg-primary-600')}>
        <Button.Label>{label}</Button.Label>
    </Button.Root>
);
