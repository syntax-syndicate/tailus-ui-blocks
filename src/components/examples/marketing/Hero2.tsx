import Button from '@react-ui/button/Button';
import { Display, Text, Title } from '@components/typography';
import { Lock, Plus, Menu, X } from 'lucide-react';
import type { BlockPreviewProps } from '@components/BlockPreview';
import { useState, useEffect, type ReactNode } from 'react';
import BrandLogo from '@components/utilities/BrandLogo';
import { twMerge } from 'tailwind-merge';

const links = [
    { href: '#', label: 'Products' },
    { href: '#', label: 'Features' },
    { href: '#', label: 'Enterprise' },
    { href: '#', label: 'Docs' },
    { href: '#', label: 'Pricing' }
];

export function HeroSection2() {
    return (
        <>
            <SiteHeader />

            <img className="absolute inset-0 hidden -scale-x-100 scale-y-125 opacity-15 blur-lg contrast-150 grayscale hue-rotate-180 lg:-top-1/4 dark:block" src="/images/gradient.webp" alt="gradient bg" loading="eager" aria-hidden />
            <div className="absolute inset-0 hidden bg-gradient-to-b from-primary-950/50 dark:block" aria-hidden />
            <main className="relative">
                <section className="pb-40 pt-32 md:pt-40 lg:pt-20">
                    <div className="mx-auto max-w-6xl px-6">
                        <Display align="center" className="text-4xl md:text-5xl lg:text-6xl dark:text-primary-100">
                            Apprenez, <br />
                            Certifiez Vous
                        </Display>
                        <Text className="mx-auto mb-8 mt-6 max-w-xl" size="lg" align="center">
                            Provident quo nobis dolor vitae similique tenetur praesentium omnis fugiat provident quidem maiores voluptate iste rerum.
                        </Text>
                        <div className="mx-auto w-fit rounded-[calc(var(--btn-radius)+4px)] border border-gray-950/5 p-1 dark:border-white/5 dark:bg-white/5 dark:shadow-lg dark:shadow-white/5">
                            <Button.Root href="/examples/forms/register3">
                                <Button.Label>Get Started</Button.Label>
                            </Button.Root>
                        </div>

                        <div className="mx-auto mt-12 max-w-3xl md:mt-20">
                            <Title size="base" align="center" as="div" weight="medium">
                                Used by Teams at
                            </Title>
                            <Title as="h2" className="sr-only">
                                Customers
                            </Title>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 brightness-0 grayscale sm:gap-x-12 md:gap-x-20 dark:invert">
                                <img src="https://ampire.netlify.app/images/clients/lilly.png" alt="" className="h-9 w-auto" />
                                <img src="https://ampire.netlify.app/images/clients/ge.svg" alt="" className="h-8 w-auto" />
                                <img src="https://ampire.netlify.app/images/clients/microsoft.svg" alt="" className="h-10 w-auto" />
                            </div>
                        </div>

                        <div data-shade="950" data-rounded="2xlarge" className="mx-auto mb-12 mt-12 rounded-[--card-radius] p-px shadow-xl shadow-gray-950/5 sm:mb-16 sm:mt-20 md:mb-20 dark:border-transparent dark:shadow-gray-950/50">
                            <div className="space-y-1 rounded-[calc(var(--card-radius)-1px)] border bg-[--ui-bg] p-1 backdrop-blur-2xl">
                                <div className="flex items-center justify-between px-3">
                                    <div className="flex gap-1.5">
                                        <div aria-hidden className="size-2 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                        <div aria-hidden className="size-2 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                        <div aria-hidden className="size-2 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                    </div>
                                    <div data-rounded="large" className="relative flex h-6 w-56 items-center justify-center gap-4 rounded-[--card-radius] bg-gray-200/50 px-3 text-xs text-[--caption-text-color] dark:bg-[--ui-bg]">
                                        <Lock className="absolute left-3 size-2.5" />
                                        https://ui.tailus.io
                                    </div>
                                    <Plus aria-hidden className="size-4 text-[--caption-text-color]" />
                                </div>
                                <img className="aspect-[4/3] rounded-[calc(var(--card-radius)-5px)] border dark:hidden" src="/images/showcase/card.png" alt="" />
                                <img className="hidden aspect-[4/3] rounded-[calc(var(--card-radius)-5px)] border dark:block" src="/images/showcase/card-layout-dark.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

function SiteHeader() {
    const [isActionActive, setIsActionActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 75) {
                setIsActionActive(true);
            } else {
                setIsActionActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const root = document.querySelector('body') as HTMLElement;
        const navItems = document.querySelector('#navItems') as HTMLElement;

        if (isOpen) {
            navItems.style.setProperty('--nav-items-height', `${navItems.scrollHeight}px`);
            root.classList.add('overflow-hidden');
        } else {
            root.classList.remove('overflow-hidden');
            navItems.style.setProperty('--nav-items-height', '0px');
        }
    }, [isOpen]);
    return (
        <>
            <header
                data-state={isOpen ? 'open' : 'closed'}
                data-shade="glassy"
                className="group card-shadow fixed inset-x-2 top-2 z-10 rounded border bg-white/50 lg:relative lg:inset-x-0 lg:top-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none dark:border-white/5 dark:bg-white/5 lg:dark:bg-transparent"
                style={{
                    backdropFilter: 'blur(20px)'
                }}>
                <div className="mx-auto max-w-6xl px-6 py-3 sm:py-4 lg:flex lg:justify-between">
                    <div className="lg:flex lg:items-center lg:gap-8">
                        <div className="flex w-full items-center justify-between lg:w-fit">
                            <a href="/" aria-label="home">
                                <BrandLogo className="h-7" />
                            </a>
                            <div className="flex gap-2 lg:hidden">
                                <Button.Root href="/examples/forms/login2" size="sm" intent="neutral">
                                    <Button.Label>Login</Button.Label>
                                </Button.Root>

                                <Button.Root onClick={() => setIsOpen(!isOpen)} intent="gray" size="sm" variant="ghost" aria-label="toggle menu button" className="relative -mr-3">
                                    <Button.Icon size="md" type="only" className="absolute inset-0 m-auto -rotate-90 scale-125 opacity-0 duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100">
                                        <X />
                                    </Button.Icon>
                                    <Button.Icon size="md" type="only" className="duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-0">
                                        <Menu />
                                    </Button.Icon>
                                </Button.Root>
                            </div>
                        </div>
                        <nav id="navItems" className="-mx-3 h-[--nav-items-height] w-full overflow-hidden transition-[height] lg:feedback-shadow lg:fixed lg:inset-x-0 lg:top-6 lg:m-auto lg:mx-auto lg:flex lg:h-fit lg:w-fit lg:rounded lg:border lg:bg-white/50 lg:px-2 lg:py-2 lg:backdrop-blur-3xl lg:dark:border-white/5 lg:dark:bg-white/5">
                            <div className="absolute left-1.5 top-1.5 size-1 rounded-full bg-gray-950/10 lg:left-1 lg:top-1 lg:size-0.5 dark:bg-white/20" aria-hidden></div>
                            <div className="absolute right-1.5 top-1.5 size-1 rounded-full bg-gray-950/10 lg:right-1 lg:top-1 lg:size-0.5 dark:bg-white/20" aria-hidden></div>
                            <div className="absolute bottom-1.5 left-1.5 size-1 rounded-full bg-gray-950/10 lg:bottom-1 lg:left-1 lg:size-0.5 dark:bg-white/20" aria-hidden></div>
                            <div className="absolute bottom-1.5 right-1.5 size-1 rounded-full bg-gray-950/10 lg:bottom-1 lg:right-1 lg:size-0.5 dark:bg-white/20" aria-hidden></div>

                            <div className={twMerge('space-y-6 py-4 lg:mr-6 lg:flex lg:gap-1 lg:space-y-0 lg:py-0', isActionActive && 'lg:mr-2')}>
                                {links.map(({ href, label }) => (
                                    <NavLink href={href}>{label}</NavLink>
                                ))}
                            </div>

                            <Button.Root href="/examples/forms/login2" size="xs" intent="gray" variant="outlined" className={twMerge('hidden lg:flex', !isActionActive && '-mr-6 w-0 origin-right scale-50 justify-start overflow-hidden px-0 opacity-0 blur-lg')}>
                                <Button.Label>Login</Button.Label>
                            </Button.Root>
                        </nav>
                    </div>

                    <div className="hidden gap-2 lg:flex">
                        <Button.Root href="/examples/forms/login2" size="xs" intent="gray" variant="outlined">
                            <Button.Label>Login</Button.Label>
                        </Button.Root>
                    </div>
                </div>
            </header>
            {isOpen && <div onClick={() => setIsOpen(false)} data-state={isOpen ? 'open' : 'closed'} className="fixed inset-0 z-[9] bg-white/50 data-[state=open]:animate-overlayShow lg:hidden dark:bg-[--overlay-bg]" aria-hidden data-aria-hidden="true" />}
        </>
    );
}

const NavLink = ({ href, children, isActive }: { href: string; children: ReactNode; isActive?: boolean }) => (
    <Button.Root variant={isActive ? 'soft' : 'ghost'} intent="gray" size="xs" href={href} className="justify-start">
        <Button.Label>{children}</Button.Label>
    </Button.Root>
);

const code = `import Button from '@tailus-ui/Button';
import { Display, Text, Title } from '@tailus/typography';
import { Lock, Plus, Menu, X } from 'lucide-react';
import { useState, useEffect, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const links = [
    { href: '#', label: 'Products' },
    { href: '#', label: 'Features' },
    { href: '#', label: 'Enterprise' },
    { href: '#', label: 'Docs' },
    { href: '#', label: 'Pricing' }
];

export function HeroSection2() {
    return (
        <>
            <SiteHeader />

            <img className="absolute inset-0 hidden -scale-x-100 scale-y-125 opacity-15 blur-lg contrast-150 grayscale hue-rotate-180 lg:-top-1/4 dark:block" src="/images/gradient.jpg" alt="" aria-hidden />
            <div className="absolute inset-0 hidden bg-gradient-to-b from-primary-950/50 dark:block" aria-hidden />
            <main className="relative">
                <section className="pb-40 pt-32 md:pt-40 lg:pt-20">
                    <div className="mx-auto max-w-6xl px-6">
                        <Display align="center" className="text-4xl md:text-5xl lg:text-6xl dark:text-primary-100">
                            Apprenez, <br />
                            Certifiez Vous
                        </Display>
                        <Text className="mx-auto mb-8 mt-6 max-w-xl" size="lg" align="center">
                            Provident quo nobis dolor vitae similique tenetur praesentium omnis fugiat provident quidem maiores voluptate iste rerum.
                        </Text>
                        <div className="mx-auto w-fit rounded-[calc(var(--btn-radius)+4px)] border border-gray-950/5 p-1 dark:border-white/5 dark:bg-white/5 dark:shadow-lg dark:shadow-white/5">
                            <Button.Root href="/examples/forms/register3">
                                <Button.Label>Get Started</Button.Label>
                            </Button.Root>
                        </div>

                        <div className="mx-auto mt-12 max-w-3xl md:mt-20">
                            <Title size="base" align="center" as="div" weight="medium">
                                Used by Teams at
                            </Title>
                            <Title as="h2" className="sr-only">
                                Customers
                            </Title>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 brightness-0 grayscale sm:gap-x-12 md:gap-x-20 dark:invert">
                                <img src="https://ampire.netlify.app/images/clients/lilly.png" alt="" className="h-9 w-auto" />
                                <img src="https://ampire.netlify.app/images/clients/ge.svg" alt="" className="h-8 w-auto" />
                                <img src="https://ampire.netlify.app/images/clients/microsoft.svg" alt="" className="h-10 w-auto" />
                            </div>
                        </div>

                        <div data-shade="950" data-rounded="2xlarge" className="mx-auto mb-12 mt-12 rounded-[--card-radius] p-px shadow-xl shadow-gray-950/5 sm:mb-16 sm:mt-20 md:mb-20 dark:border-transparent dark:shadow-gray-950/50">
                            <div className="space-y-1 rounded-[calc(var(--card-radius)-1px)] border bg-[--ui-bg] p-1 backdrop-blur-2xl">
                                <div className="flex items-center justify-between px-3">
                                    <div className="flex gap-1.5">
                                        <div aria-hidden className="size-2 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                        <div aria-hidden className="size-2 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                        <div aria-hidden className="size-2 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                    </div>
                                    <div data-rounded="large" className="relative flex h-6 w-56 items-center justify-center gap-4 rounded-[--card-radius] bg-gray-200/50 px-3 text-xs text-[--caption-text-color] dark:bg-[--ui-bg]">
                                        <Lock className="absolute left-3 size-2.5" />
                                        https://ui.tailus.io
                                    </div>
                                    <Plus aria-hidden className="size-4 text-[--caption-text-color]" />
                                </div>
                                <img className="aspect-[4/3] rounded-[calc(var(--card-radius)-5px)] border dark:hidden" src="/images/showcase/card.png" alt="" />
                                <img className="hidden aspect-[4/3] rounded-[calc(var(--card-radius)-5px)] border dark:block" src="/images/showcase/card-layout-dark.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

function SiteHeader() {
    const [isActionActive, setIsActionActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 75) {
                setIsActionActive(true);
            } else {
                setIsActionActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const root = document.querySelector('body') as HTMLElement;
        const navItems = document.querySelector('#navItems') as HTMLElement;

        if (isOpen) {
            navItems.style.setProperty('--nav-items-height', \`\${navItems.scrollHeight}px\`);
            root.classList.add('overflow-hidden');
        } else {
            root.classList.remove('overflow-hidden');
            navItems.style.setProperty('--nav-items-height', '0px');
        }
    }, [isOpen]);
    return (
        <>
            <header
                data-state={isOpen ? 'open' : 'closed'}
                data-shade="glassy"
                className="group card-shadow fixed inset-x-2 top-2 z-10 rounded border bg-white/50 lg:relative lg:inset-x-0 lg:top-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none dark:border-white/5 dark:bg-white/5 lg:dark:bg-transparent"
                style={{
                    backdropFilter: 'blur(20px)'
                }}>
                <div className="mx-auto max-w-6xl px-6 py-3 sm:py-4 lg:flex lg:justify-between">
                    <div className="lg:flex lg:items-center lg:gap-8">
                        <div className="flex w-full items-center justify-between lg:w-fit">
                            <a href="/" aria-label="home">
                                <BrandLogo className="h-7" />
                            </a>
                            <div className="flex gap-2 lg:hidden">
                                <Button.Root href="/examples/forms/login2" size="sm" intent="neutral">
                                    <Button.Label>Login</Button.Label>
                                </Button.Root>

                                <Button.Root onClick={() => setIsOpen(!isOpen)} intent="gray" size="sm" variant="ghost" aria-label="toggle menu button" className="relative -mr-3">
                                    <Button.Icon size="md" type="only" className="absolute inset-0 m-auto -rotate-90 scale-125 opacity-0 duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100">
                                        <X />
                                    </Button.Icon>
                                    <Button.Icon size="md" type="only" className="duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-0">
                                        <Menu />
                                    </Button.Icon>
                                </Button.Root>
                            </div>
                        </div>
                        <nav id="navItems" className="-mx-3 h-[--nav-items-height] w-full overflow-hidden transition-[height] lg:feedback-shadow lg:fixed lg:inset-x-0 lg:top-6 lg:m-auto lg:mx-auto lg:flex lg:h-fit lg:w-fit lg:rounded lg:border lg:bg-white/50 lg:px-2 lg:py-2 lg:backdrop-blur-3xl lg:dark:border-white/5 lg:dark:bg-white/5">
                            <div className="absolute left-1.5 top-1.5 size-1 rounded-full bg-gray-950/10 lg:left-1 lg:top-1 lg:size-0.5 dark:bg-white/20" aria-hidden></div>
                            <div className="absolute right-1.5 top-1.5 size-1 rounded-full bg-gray-950/10 lg:right-1 lg:top-1 lg:size-0.5 dark:bg-white/20" aria-hidden></div>
                            <div className="absolute bottom-1.5 left-1.5 size-1 rounded-full bg-gray-950/10 lg:bottom-1 lg:left-1 lg:size-0.5 dark:bg-white/20" aria-hidden></div>
                            <div className="absolute bottom-1.5 right-1.5 size-1 rounded-full bg-gray-950/10 lg:bottom-1 lg:right-1 lg:size-0.5 dark:bg-white/20" aria-hidden></div>

                            <div className={twMerge('space-y-6 py-4 lg:mr-6 lg:flex lg:gap-1 lg:space-y-0 lg:py-0', isActionActive && 'lg:mr-2')}>
                                {links.map(({ href, label }) => (
                                    <NavLink href={href}>{label}</NavLink>
                                ))}
                            </div>

                            <Button.Root href="/examples/forms/login2" size="xs" intent="gray" variant="outlined" className={twMerge('hidden lg:flex', !isActionActive && '-mr-6 w-0 origin-right scale-50 justify-start overflow-hidden px-0 opacity-0 blur-lg')}>
                                <Button.Label>Login</Button.Label>
                            </Button.Root>
                        </nav>
                    </div>

                    <div className="hidden gap-2 lg:flex">
                        <Button.Root href="/examples/forms/login2" size="xs" intent="gray" variant="outlined">
                            <Button.Label>Login</Button.Label>
                        </Button.Root>
                    </div>
                </div>
            </header>
            {isOpen && <div onClick={() => setIsOpen(false)} data-state={isOpen ? 'open' : 'closed'} className="fixed inset-0 z-[9] bg-white/50 data-[state=open]:animate-overlayShow lg:hidden dark:bg-[--overlay-bg]" aria-hidden data-aria-hidden="true" />}
        </>
    );
}

const NavLink = ({ href, children, isActive }: { href: string; children: ReactNode; isActive?: boolean }) => (
    <Button.Root variant={isActive ? 'soft' : 'ghost'} intent="gray" size="xs" href={href} className="justify-start">
        <Button.Label>{children}</Button.Label>
    </Button.Root>
);`;

export const hero2Preview: BlockPreviewProps = {
    id: 'herosection2',
    title: 'Hero Section 2',
    code,
    category: 'Marketing',
    description: 'Hero section with, showcase and logo cloud',
    src: '/examples/marketing/landing3'
};
