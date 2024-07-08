import { Card } from "@components/Card"
import { PaletteSwitcher } from "@components/customizer/PaletteSwitcher"
import { RoundedSwitcher } from "@components/customizer/RoundedSwitcher"
import { ShadeSwitcher } from "@components/customizer/ShadeSwitcher"
import CodeSnippet from "@components/utilities/CodeSnippet"
import * as Tabs from "@radix-ui/react-tabs"
import { Layers2, Palette, Settings2, Square } from "lucide-react"
import { useState, useRef, useEffect } from "react";
import { $palette, $rounded, $shade } from "@store/switchers"
import { useStore } from "@nanostores/react"
import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"
import { Title, Text } from "@components/typography"
import { Cross1Icon } from "@radix-ui/react-icons"

export type TabsAppProps = "palette" | "shade" | "rounded"

const item = {
    hidden: { opacity: 0, transition : {duration:0}},
    show: { opacity: 1, transition : {duration:0.5}}
}

const container = {
    hidden: {
        y : 12,
        height: "44px",
        width: "156px",
        borderRadius : "32px"
    },
    show: {
        y : 0,
        height: "342px",
        width: "372px",
        borderRadius : "16px"
    }
}

export const CustomizerPill = () => {
    const palette = useStore($palette)
    const rounded = useStore($rounded)
    const shade = useStore($shade)

    const [state, setState] = useState<TabsAppProps>("palette");
    const [isOpen, setIsOpen] = useState(false)
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
                animate={isOpen ? "show" : "hidden"}
                transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.5,
                    delayChildren: 0.5,
                    staggerChildren: 0.1
                }}
                className="fixed bg-[--ui-soft-bg] fancy-border rounded-2xl bottom-8 mx-auto z-[51] inset-x-0 p-1 dark:bg-gray-800/50 dark:backdrop-blur-xl dark:shadow-xl dark:shadow-gray-950/40"
            >
            <button onClick={() => setIsOpen(!isOpen)} className={twMerge("h-9 -mt-px px-4 flex gap-2.5 items-center justify-center text-[--title-text-color]", isOpen && "absolute z-10 right-2 top-2 px-0 w-9")}>
                {
                    isOpen ? (
                        <Cross1Icon className="size-3" />
                        ) : <>
                                Customize
                                <span className="translate-x-2 flex items-center justify-center size-8 max-w-8 max-h-8 rounded-full bg-primary-600">
                                    <Settings2 className="size-4 text-white"/>
                                </span>
                            </>   
                }
            </button>
            <motion.div
                initial="hidden"
                variants={item}
                animate={isOpen ? "show" : "hidden"}
                className="space-y-1"
            >
                <Card className="dark:bg-gray-700/25 dark:border-white/5 rounded-t-xl rounded-b-md dark:shadow-lg dark:shadow-gray-950/35" variant="mixed">
                    <Title as="div" size="base" weight="medium">Customize the theme</Title>
                    <Text as="p" size="sm" className="mt-1 mb-4">Make it entirely yours</Text>

                    <Tabs.Root
                        defaultValue={state}
                        onValueChange={(value) => setState(value as TabsAppProps)}
                        className="text-[--title-text-color]"
                        data-shade="800"
                    >
                        <Tabs.List className="mb-5 p-1 h-9 -mx-3.5 flex relative ">
                            <motion.span
                                animate={{
                                    left: spanLeft,
                                    width: spanWidth,
                                    transition: { type: "spring", bounce: 0.2, duration: 0.5 }
                                }}
                                className="block bg-primary-100 inset-y-1 -z-[1] absolute rounded-full border dark:border-white/5 dark:bg-gray-500/25"
                                ref={spanRef}
                            />
                            <Tabs.Trigger value="palette" id="palette" className="flex h-full data-[state=inactive]:opacity-50 duration-200 px-2.5 items-center gap-2 text-sm">
                                <Palette className="size-4" />
                                <span>Palette</span>
                            </Tabs.Trigger>
                            <Tabs.Trigger value="shade" id="shade" className="flex h-full data-[state=inactive]:opacity-50 duration-200 px-2.5 items-center gap-2 text-sm">
                                <Layers2 className="size-4" />
                                <span>Shade</span>
                            </Tabs.Trigger>
                            <Tabs.Trigger value="rounded" id="rounded" className="flex h-full data-[state=inactive]:opacity-50 duration-200 px-2.5 items-center gap-2 text-sm">
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
                <Card variant="mixed" className="rounded-b-xl dark:shadow-lg dark:shadow-gray-950/35 overflow-hidden rounded-t-md p-0 max-w-full dark:bg-gray-700/25 dark:border-white/5">
                    <CodeSnippet className="w-full border-none rounded-none bg-none dark:bg-transparent" code={`<html 
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
    )
}