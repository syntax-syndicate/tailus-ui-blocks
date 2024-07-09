import { Card } from '@tailus-ui/Card';
import { PaletteSwitcher } from './PaletteSwitcher';
import { RoundedSwitcher } from './RoundedSwitcher';
import { ShadeSwitcher } from './ShadeSwitcher';
import CodeSnippet from '@components/utilities/CodeSnippet';
import * as Tabs from '@radix-ui/react-tabs';
import { Layers2, Palette, Settings2, Square } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { $palette, $rounded, $shade } from '@store/switchers';
import { useStore } from '@nanostores/react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Title, Text } from '@tailus-ui/typography';
import { Cross1Icon } from '@radix-ui/react-icons';

export type TabsAppProps = 'palette' | 'shade' | 'rounded';

const item = {
    hidden: { opacity: 0, transition: { duration: 0 } },
    show: { opacity: 1, transition: { duration: 0.5 } }
};

const container = {
    hidden: {
        y: 12,
        height: '44px',
        width: '156px',
        borderRadius: '32px'
    },
    show: {
        y: 0,
        height: '342px',
        width: '372px',
        borderRadius: '16px'
    }
};

export const CustomizerPill = () => {
    const palette = useStore($palette);
    const rounded = useStore($rounded);
    const shade = useStore($shade);

    const [state, setState] = useState<TabsAppProps>('palette');
    const [isOpen, setIsOpen] = useState(false);
    const spanRef = useRef<HTMLSpanElement>(null);

    const [spanLeft, setSpanLeft] = useState(0);
    const [spanWidth, setSpanWidth] = useState(0);

    useEffect(() => {
        const activeTrigger = document.getElementById(state!) as HTMLElement;
        if (activeTrigger) {
            setSpanLeft(activeTrigger.offsetLeft);
            setSpanWidth(activeTrigger.offsetWidth);
        }
    }, [state]);

    return (
        <div>
            <motion.div
                layout
                initial="hidden"
                variants={container}
                animate={isOpen ? 'show' : 'hidden'}
                transition={{
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.5,
                    delayChildren: 0.5,
                    staggerChildren: 0.1
                }}
                className="fancy-border fixed inset-x-0 bottom-8 z-[51] mx-auto rounded-2xl bg-[--ui-soft-bg] p-1 dark:bg-gray-800/50 dark:shadow-xl dark:shadow-gray-950/40 dark:backdrop-blur-xl">
                <button onClick={() => setIsOpen(!isOpen)} className={twMerge('-mt-px flex h-9 items-center justify-center gap-2.5 px-4 text-[--title-text-color]', isOpen && 'absolute right-2 top-2 z-10 w-9 px-0')}>
                    {isOpen ? (
                        <Cross1Icon className="size-3" />
                    ) : (
                        <>
                            Customize
                            <span className="flex size-8 max-h-8 max-w-8 translate-x-2 items-center justify-center rounded-full bg-primary-600">
                                <Settings2 className="size-4 text-white" />
                            </span>
                        </>
                    )}
                </button>
                <motion.div initial="hidden" variants={item} animate={isOpen ? 'show' : 'hidden'} className="space-y-1">
                    <Card className="rounded-b-md rounded-t-xl dark:border-white/5 dark:bg-gray-700/25 dark:shadow-lg dark:shadow-gray-950/35" variant="mixed">
                        <Title as="div" size="base" weight="medium">
                            Customize the theme
                        </Title>
                        <Text as="p" size="sm" className="mb-4 mt-1">
                            Make it entirely yours
                        </Text>

                        <Tabs.Root defaultValue={state} onValueChange={(value) => setState(value as TabsAppProps)} className="text-[--title-text-color]" data-shade="800">
                            <Tabs.List className="relative -mx-3.5 mb-5 flex h-9 p-1 ">
                                <motion.span
                                    animate={{
                                        left: spanLeft,
                                        width: spanWidth,
                                        transition: { type: 'spring', bounce: 0.2, duration: 0.5 }
                                    }}
                                    className="absolute inset-y-1 -z-[1] block rounded-full border bg-primary-100 dark:border-white/5 dark:bg-gray-500/25"
                                    ref={spanRef}
                                />
                                <Tabs.Trigger value="palette" id="palette" className="flex h-full items-center gap-2 px-2.5 text-sm duration-200 data-[state=inactive]:opacity-50">
                                    <Palette className="size-4" />
                                    <span>Palette</span>
                                </Tabs.Trigger>
                                <Tabs.Trigger value="shade" id="shade" className="flex h-full items-center gap-2 px-2.5 text-sm duration-200 data-[state=inactive]:opacity-50">
                                    <Layers2 className="size-4" />
                                    <span>Shade</span>
                                </Tabs.Trigger>
                                <Tabs.Trigger value="rounded" id="rounded" className="flex h-full items-center gap-2 px-2.5 text-sm duration-200 data-[state=inactive]:opacity-50">
                                    <Square className="size-4" />
                                    <span>Rounded</span>
                                </Tabs.Trigger>
                            </Tabs.List>
                            <Tabs.Content value="palette">
                                <PaletteSwitcher />
                            </Tabs.Content>
                            <Tabs.Content value="shade">
                                <ShadeSwitcher />
                            </Tabs.Content>
                            <Tabs.Content value="rounded">
                                <RoundedSwitcher />
                            </Tabs.Content>
                        </Tabs.Root>
                    </Card>
                    <Card variant="mixed" className="max-w-full overflow-hidden rounded-b-xl rounded-t-md p-0 dark:border-white/5 dark:bg-gray-700/25 dark:shadow-lg dark:shadow-gray-950/35">
                        <CodeSnippet
                            className="w-full rounded-none border-none bg-none dark:bg-transparent"
                            code={`<html 
    data-palette="${palette}"
    data-shade="${shade}"
    data-rounded="${rounded}"
>`}
                            lang="html"
                        />
                    </Card>
                </motion.div>
            </motion.div>
        </div>
    );
};
