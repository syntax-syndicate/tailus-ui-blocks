import CodeSnippet from './utilities/CodeSnippet';
import type React from 'react';
import { useState, useRef } from 'react';
import { Check, ChevronRight, Code, Copy, Download, Maximize, Smartphone, Square, Tablet } from 'lucide-react';
import { Panel, PanelGroup, PanelResizeHandle, type ImperativePanelGroupHandle } from 'react-resizable-panels';
import { BlockThemeSwitcher } from './ThemeSwitcher';
import { BlockPaletteSwitcher } from './customizer/PaletteSwitcher';
import { BlockRoundedSwitcher } from './customizer/RoundedSwitcher';
import { BlockShadeSwitcher } from './customizer/ShadeSwitcher';
import Separator from '@tailus-ui/Separator';
import { DesktopIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import * as RadioGroup from '@radix-ui/react-radio-group';
import Toggle from '@tailus-ui/Toggle';
import Button from '@tailus-ui/Button';
import { Caption, Link, Title } from './tailus-ui/typography';
import Tooltip from '@tailus-ui/Tooltip';
import { useCopyToClipboard } from './Button/CodeCopyButton';

export interface BlockPreviewProps {
    code?: string;
    asCategoryPreview?: boolean;
    src: string;
    id?: string;
    downloadLink?: string;
    codesandboxLink?: string;
    title: string;
    category: 'Application' | 'Marketing' | 'Forms' | 'ECommerce';
    description: string;
}

const radioItem = 'rounded-[calc(var(--btn-radius)-2px)] flex items-center justify-center *:size-4 size-7 text-[--caption-text-color] transition-[color] hover:text-[--body-text-color] data-[state=checked]:text-[--title-text-color] data-[state=checked]:bg-white dark:data-[state=checked]:border data-[state=checked]:shadow dark:data-[state=checked]:shadow-gray-950/50 dark:data-[state=checked]:border-white/5 dark:data-[state=checked]:bg-[--ui-soft-bg]';

const DEFAULTSIZE = 100;
const SMSIZE = 30;
const MDSIZE = 59.75;
const LGSIZE = 79.65;

export const BlockPreview: React.FC<BlockPreviewProps> = ({ code, src, codesandboxLink, asCategoryPreview, id, title, description, category, downloadLink }) => {
    const [width, setWidth] = useState(DEFAULTSIZE);
    const { copied, copy } = useCopyToClipboard(code as string);

    const ref = useRef<ImperativePanelGroupHandle>(null);

    const setLayout = (width) => {
        const panelGroup = ref.current;
        if (panelGroup) {
            panelGroup.setLayout([width, 100 - width]);
        }
    };

    const tweetText = `Check out these stunning ${category} blocks built with Tailus UI React!

🔹 100% customizable
🔹 Modern and trendy
🔹 Open Source

@tailus_ui  ui.tailus.io/examples/${category.toLowerCase()}`;
    const encodedTweetText = encodeURI(tweetText);

    return (
        <div className="mt-16 md:mt-32">
            <div className="mb-6 space-y-3 px-4 lg:mb-12 lg:px-0">
                <div className="space-y-1">
                    <Title as="h2" weight="normal" className="text-sm">
                        {' '}
                        {title} <span className="opacity-15">/</span> <span className="opacity-50">{category}</span>{' '}
                    </Title>
                    <Caption as="p">{description}</Caption>
                </div>
            </div>
            <div className="mb-6 space-y-2 rounded-[calc(var(--card-radius)+4px)] border bg-gray-50 p-1 dark:bg-white/5">
                <div className="flex justify-between overflow-x-auto px-1 pt-1">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <BlockPaletteSwitcher id={`block-${id}`} />
                            <div className="hidden sm:flex">
                                <BlockRoundedSwitcher id={`block-${id}`} />
                            </div>
                            <BlockShadeSwitcher id={`block-${id}`} />
                        </div>
                        <Separator className="h-4" fancy orientation="vertical" />
                        <BlockThemeSwitcher size="sm" id={`block-${id}`} />

                        <Separator fancy orientation="vertical" className="hidden h-4 lg:block" />

                        <RadioGroup.Root
                            onValueChange={(value) => {
                                setLayout(Number(value));
                            }}
                            className="hidden gap-0.5 rounded-[--btn-radius] border-[0.5px] bg-gray-100 p-0.5 lg:flex dark:bg-gray-950/50">
                            <RadioGroup.Item aria-label="Mobile preview" value={`${SMSIZE}`} checked={width < MDSIZE} className={radioItem}>
                                <Smartphone />
                            </RadioGroup.Item>
                            <RadioGroup.Item aria-label="Tablet preview" value={`${MDSIZE}`} checked={width < LGSIZE && width >= MDSIZE} className={radioItem}>
                                <Tablet />
                            </RadioGroup.Item>
                            <RadioGroup.Item aria-label="Desktop and Laptop preview" value="100" checked={width >= LGSIZE} className={radioItem}>
                                <DesktopIcon />
                            </RadioGroup.Item>
                        </RadioGroup.Root>
                        <Separator fancy orientation="vertical" className="hidden h-4 lg:block" />
                        <Tooltip.Provider delayDuration={200} skipDelayDuration={0}>
                            <Tooltip.Root>
                                <Tooltip.Trigger asChild>
                                    <Button.Root href={src} target="_blank" size="sm" variant="ghost" intent="gray" aria-label="View in full screen">
                                        <Button.Icon size="xs" type="only">
                                            <Maximize />
                                        </Button.Icon>
                                    </Button.Root>
                                </Tooltip.Trigger>
                                <Tooltip.Content fancy className="z-10">
                                    Full Screen
                                </Tooltip.Content>
                            </Tooltip.Root>
                        </Tooltip.Provider>
                        {code && (
                            <>
                                <Separator fancy orientation="vertical" className="hidden h-4 lg:block" />
                                <Toggle.Root onClick={() => setLayout(50)} size="sm" value="code" intent="gray" withLabel disabled={width < 100} className="hidden lg:flex">
                                    <Toggle.Icon>
                                        <Code />
                                    </Toggle.Icon>
                                    <span>Code</span>
                                </Toggle.Root>
                            </>
                        )}
                    </div>

                    <div className="hidden items-center gap-0.5 lg:flex">
                        <Tooltip.Provider delayDuration={200} skipDelayDuration={0}>
                            <Tooltip.Root>
                                <Tooltip.Trigger asChild>
                                    <Button.Root href={`https://twitter.com/intent/tweet?text=${encodedTweetText}`} target="_blank" rel="noopener noreferrer" size="sm" variant="ghost" intent="gray" aria-label="share on x">
                                        <Button.Icon size="xs" type="only">
                                            <TwitterLogoIcon />
                                        </Button.Icon>
                                    </Button.Root>
                                </Tooltip.Trigger>
                                <Tooltip.Content fancy className="z-10">
                                    Share on 𝕏
                                </Tooltip.Content>
                            </Tooltip.Root>
                        </Tooltip.Provider>
                        <Separator className="h-4" fancy orientation="vertical" />
                        {downloadLink && (
                            <>
                                <Tooltip.Provider delayDuration={200} skipDelayDuration={0}>
                                    <Tooltip.Root>
                                        <Tooltip.Trigger asChild>
                                            <Button.Root href={downloadLink} download size="sm" variant="ghost" intent="gray" aria-label="download code">
                                                <Button.Icon size="xs" type="only">
                                                    <Download />
                                                </Button.Icon>
                                            </Button.Root>
                                        </Tooltip.Trigger>
                                        <Tooltip.Content fancy className="z-10 w-44 py-2 text-center">
                                            Download as multiple components
                                        </Tooltip.Content>
                                    </Tooltip.Root>
                                </Tooltip.Provider>
                                <Separator className="h-4" fancy orientation="vertical" />
                                <Tooltip.Provider delayDuration={200} skipDelayDuration={0}>
                                    <Tooltip.Root>
                                        <Tooltip.Trigger asChild>
                                            <Button.Root href={codesandboxLink} size="sm" variant="ghost" intent="gray" target="_blank" rel="noopener noreferrer" aria-label="view on code in CodeSandBox">
                                                <Button.Icon size="xs" type="only">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M0 24h24V0H0v2.455h21.546v19.09H2.454V0H0Z" />
                                                    </svg>
                                                </Button.Icon>
                                            </Button.Root>
                                        </Tooltip.Trigger>
                                        <Tooltip.Content fancy className="z-10 w-44 py-2 text-center">
                                            Edit In CodeSandBox
                                        </Tooltip.Content>
                                    </Tooltip.Root>
                                </Tooltip.Provider>
                            </>
                        )}
                        {code && (
                            <>
                                <Tooltip.Provider delayDuration={200} skipDelayDuration={0}>
                                    <Tooltip.Root>
                                        <Tooltip.Trigger asChild>
                                            <Button.Root onClick={copy} size="sm" variant="ghost" intent="gray" aria-label="copy code">
                                                <Button.Icon size="xs" type="only">
                                                    {copied ? <Check /> : <Copy />}
                                                </Button.Icon>
                                            </Button.Root>
                                        </Tooltip.Trigger>
                                        <Tooltip.Content fancy className="z-10">
                                            Copy single file
                                        </Tooltip.Content>
                                    </Tooltip.Root>
                                </Tooltip.Provider>
                            </>
                        )}
                    </div>
                </div>
                <PanelGroup direction="horizontal" tagName="div" ref={ref}>
                    <Panel
                        onResize={(size) => {
                            setWidth(Number(size));
                        }}
                        defaultSize={DEFAULTSIZE}
                        minSize={SMSIZE}
                        className="card-shadow h-fit rounded-[--card-radius] border dark:shadow dark:shadow-gray-950">
                        <iframe loading="lazy" title={title} className="block h-full min-h-[45rem] w-full" src={src} id={`block-${id}`} />
                    </Panel>
                    <PanelResizeHandle className="relative w-1 before:absolute before:inset-0 before:m-auto before:h-12 before:w-0.5 before:rounded-full before:bg-gray-300 before:transition-[height,background] hover:before:h-14 hover:before:bg-gray-400 focus:before:bg-gray-400 dark:before:bg-gray-600 dark:hover:before:bg-gray-500 dark:focus:before:bg-gray-400" />
                    <Panel defaultSize={100 - DEFAULTSIZE}>{code && <CodeSnippet asUIBlock className="bg-white" code={code as string} lang="tsx" />}</Panel>
                </PanelGroup>
            </div>
            {asCategoryPreview && (
                <Link className="flex items-center gap-2" size="sm" intent="neutral" variant="underlined" href={`/examples/${category.toLowerCase()}`}>
                    More examples
                    <ChevronRight strokeWidth={2} className="size-3 opacity-50" />
                </Link>
            )}
        </div>
    );
};
