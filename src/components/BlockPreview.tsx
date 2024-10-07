import CodeSnippet from './utilities/CodeSnippet'
import type React from 'react'
import { useState, useRef } from 'react'
import { Check, Code2, Copy, Eye } from 'lucide-react'
import { Panel, PanelGroup, PanelResizeHandle, type ImperativePanelGroupHandle } from 'react-resizable-panels'
import Separator from '@tailus-ui/Separator'
import { TwitterLogoIcon } from '@radix-ui/react-icons'
import * as RadioGroup from '@radix-ui/react-radio-group'
import Button from '@tailus-ui/Button'
import { Caption, Title } from './tailus-ui/typography'
import Tooltip from '@tailus-ui/Tooltip'
import { useCopyToClipboard } from './Button/CodeCopyButton'
import { twMerge } from 'tailwind-merge'

export interface BlockPreviewProps {
    code?: string
    src: string
    title: string
}

const radioItem = 'rounded-[calc(var(--btn-radius)-2px)] duration-300 flex border border-transparent items-center justify-center h-7 px-2.5 gap-2 text-[--caption-text-color] transition-[color] hover:text-[--body-text-color] data-[state=checked]:text-[--title-text-color] data-[state=checked]:bg-white data-[state=checked]:shadow dark:data-[disabled]:bg-transparent dark:data-[state=checked]:shadow-gray-950/50 dark:data-[state=checked]:border-white/5 dark:data-[state=checked]:bg-[--ui-soft-bg]'

const DEFAULTSIZE = 100
const SMSIZE = 30
const MDSIZE = 62
const LGSIZE = 82

export const BlockPreview: React.FC<BlockPreviewProps> = ({ code, src, title }) => {
    const [width, setWidth] = useState(DEFAULTSIZE)
    const [mode, setMode] = useState<'preview' | 'code'>('preview')
    const { copied, copy } = useCopyToClipboard(code as string)
    const ref = useRef<ImperativePanelGroupHandle>(null)

    const tweetText = `Check out these stunning ${title} blocks built with Tailus UI React!

🔹 100% customizable
🔹 Modern and trendy
🔹 Open Source

@tailus_ui  html.tailus.io/blocks/${title.toLowerCase()}`
    const encodedTweetText = encodeURI(tweetText)

    return (
        <div className="group mb-32 border-b dark:border-white/5">
            <div className="relative border-y border-gray-950/5  dark:border-white/5">
                <div className="absolute inset-x-0 -top-16 bottom-0 mx-auto max-w-7xl">
                    <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent to-gray-950/5 to-75% dark:to-white/5"></div>
                    <div className="absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-transparent to-gray-950/5 to-75% dark:to-white/5"></div>
                </div>
                <div className="relative z-10 mx-auto flex max-w-7xl justify-between py-2 lg:px-8">
                    <div className="flex items-center gap-6">
                        <Title as="h2" weight="normal" className="text-sm">
                            {title}
                        </Title>
                        {code && (
                            <>
                                <Separator fancy orientation="vertical" className="hidden h-4 lg:block" />
                                <RadioGroup.Root className="hidden gap-0.5 rounded-[--btn-radius] border border-gray-950/5 bg-gray-950/5 p-0.5 lg:flex dark:border-white/5 dark:bg-gray-950/50">
                                    <RadioGroup.Item onClick={() => setMode('preview')} aria-label="Block preview" value="100" checked={mode == 'preview'} className={radioItem}>
                                        <Eye className="size-4" />
                                        <span className="text-sm">Preview</span>
                                    </RadioGroup.Item>
                                    <RadioGroup.Item onClick={() => setMode('code')} aria-label="Code" value="0" checked={mode == 'code'} className={radioItem}>
                                        <Code2 className="size-4" />
                                        <span className="text-sm">Code</span>
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </>
                        )}

                        {mode == 'preview' && (
                            <>
                                <Separator fancy orientation="vertical" className="hidden h-4 lg:block" />
                                <Caption>{width < MDSIZE ? 'Mobile' : width < LGSIZE ? 'Tablet' : 'Desktop'}</Caption>{' '}
                            </>
                        )}
                    </div>
                    <div className="hidden items-center gap-0.5 lg:flex">
                        <Tooltip.Provider delayDuration={200} skipDelayDuration={0}>
                            <Tooltip.Root>
                                <Tooltip.Trigger asChild>
                                    {/* @ts-ignore */}
                                    <Button.Root href={`https://twitter.com/intent/tweet?text=${encodedTweetText}`} target="_blank" rel="noopener noreferrer" size="sm" variant="ghost" intent="gray" aria-label="share on x">
                                        <Button.Icon size="xs" type="only">
                                            <TwitterLogoIcon />
                                        </Button.Icon>
                                    </Button.Root>
                                </Tooltip.Trigger>
                                <Tooltip.Content fancy className="z-10" inverted={false}>
                                    Share on 𝕏
                                </Tooltip.Content>
                            </Tooltip.Root>
                        </Tooltip.Provider>
                        <Separator className="h-4" fancy orientation="vertical" />
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
                                        <Tooltip.Content fancy className="z-10" inverted={false}>
                                            Copy block
                                        </Tooltip.Content>
                                    </Tooltip.Root>
                                </Tooltip.Provider>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-x-0 -bottom-14 mx-auto h-14 max-w-7xl">
                    <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-gray-950/5 dark:from-white/5"></div>
                    <div className="absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-gray-950/5 dark:from-white/5"></div>
                </div>
                <div className="relative z-10 mx-auto max-w-7xl border-r dark:border-white/5">
                    <div className={twMerge(mode == 'code' && 'hidden')}>
                        <PanelGroup direction="horizontal" tagName="div" ref={ref}>
                            <Panel
                                onResize={(size) => {
                                    setWidth(Number(size))
                                }}
                                defaultSize={DEFAULTSIZE}
                                minSize={SMSIZE}
                                className="card-shadow h-fit border-x border-gray-950/5 dark:border-white/10 dark:shadow dark:shadow-gray-950">
                                <iframe loading="lazy" title={title} className="block h-full min-h-[45rem] w-full" src={src} id={`block-${title}`} />
                            </Panel>
                            <PanelResizeHandle className="relative w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-gray-300 before:transition-[height,background] hover:before:h-16 hover:before:bg-gray-400 focus:before:bg-gray-400 dark:before:bg-gray-600 dark:hover:before:bg-gray-500 dark:focus:before:bg-gray-400" />
                            <Panel defaultSize={100 - DEFAULTSIZE} className="-mr-[0.5px] ml-px"></Panel>
                        </PanelGroup>
                    </div>
                    {mode == 'code' && <CodeSnippet asUIBlock className="rounded-none border-y-0 border-r-0 border-white/5 bg-white px-4" code={code as string} lang="tsx" />}
                </div>
            </div>
        </div>
    )
}

export default BlockPreview
