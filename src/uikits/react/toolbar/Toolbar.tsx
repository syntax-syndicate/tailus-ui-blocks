import { InvitationForm, Members } from "@components/examples/Team"
import { Link, Title } from "@components/typography"
import * as Toolbar from "@radix-ui/react-toolbar"
import Button from "@react-ui/button/Button"
import Card from "@react-ui/card/Card"
import Dialog from "@react-ui/dialog/Dialog"
import Drawer from "@react-ui/drawer/Drawer"
import SeparatorRoot from "@react-ui/separator/Separator"
import { Alignment, ToolbarAlignment, ToolbarLists } from "@react-ui/toggle-group/Alignment"
import { Formatting, ToolbarFormatting, ToolbarText } from "@react-ui/toggle-group/Formatting"
import Toggle from "@react-ui/toggle/Toggle"
import { CaseSensitive, Forward, LinkIcon, TextQuote } from "lucide-react"

export const Overview = () => (
    <Toolbar.Root data-rounded="medium" className="h-12 p-2 flex gap-2 border items-center bg-[--ui-bg] shadow shadow-gray-950/5 rounded-[calc(var(--btn-radius)+0.5rem)]">
        <Drawer.Root>
            <Toolbar.Button asChild className="lg:hidden">
                <Drawer.Trigger asChild>
                    <Button.Root size="sm" variant="ghost" intent="gray">
                        <Button.Icon type="only">
                            <CaseSensitive />
                        </Button.Icon>
                    </Button.Root>
                </Drawer.Trigger>
            </Toolbar.Button>
            <Drawer.Portal>
                <Drawer.Overlay className="z-40" />
                <Drawer.Content data-shade="glassy" className="z-50 px-8 before:hidden" withControler={false}>
                    <Drawer.Title size="lg" weight="medium" className="mb-4">Format</Drawer.Title>
                    <div>
                        <ToolbarText />
                        <div className="mt-2 gap-2 grid sm:grid-cols-2">
                            <ToolbarFormatting />
                            <div className="grid grid-cols-7 gap-2">
                                <div className="col-span-4">
                                    <ToolbarAlignment />
                                </div>
                                <div className="col-span-2">
                                    <ToolbarLists />
                                </div>
                                <Toggle.Root variant="softToSolid" size="xl" value="quote" aria-label="text quote" className="w-full">
                                    <Toggle.Icon size="lg">
                                        <TextQuote />
                                    </Toggle.Icon>
                                </Toggle.Root>
                            </div>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
        <div hidden className="lg:flex gap-2 h-8 items-center">
            <Formatting />
            <SeparatorRoot orientation="vertical" />
            <Alignment />
        </div>
        <SeparatorRoot orientation="vertical" />
        <Toolbar.Link asChild className="lg:ml-1.5 mr-12">
            <Link href="#" size="sm" intent="gray" variant="underlined">Edited 2 hours ago</Link>
        </Toolbar.Link>
        <Dialog.Root>
            <Toolbar.Button asChild className="hidden lg:flex">
                <Dialog.Trigger asChild>
                    <Button.Root size="sm">
                        <Button.Label>Share</Button.Label>
                    </Button.Root>
                </Dialog.Trigger>
            </Toolbar.Button>
            <Dialog.Portal>
                <Dialog.Overlay className="z-40" />
                <Dialog.Content className="z-50 max-w-fit p-0 dark:border">
                    <Card variant="outlined" className="-m-px">
                        <Dialog.Title size="lg" weight="medium">Share the docs</Dialog.Title>
                        <Dialog.Description className="mt-1 mb-0">Invite your team to collaborate on "Tailus UI"</Dialog.Description>

                        <InvitationForm />

                        <div >
                            <Title className="text-sm" as="h4" weight="medium">Members</Title>
                            <Members />
                        </div>
                    </Card>
                    <div className="p-[calc(var(--card-padding)/2)]">
                        <Button.Root variant="ghost" intent="info" size="sm">
                            <Button.Icon type="leading" size="sm">
                                <LinkIcon className=""/>
                            </Button.Icon>
                            <Button.Label>Copy Link</Button.Label>
                        </Button.Root>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
        <Drawer.Root>
            <Toolbar.Button asChild className="lg:hidden">
                <Drawer.Trigger asChild>
                    <Button.Root size="sm" variant="ghost" intent="gray">
                        <Button.Icon type="only">
                            <Forward />
                        </Button.Icon>
                    </Button.Root>
                </Drawer.Trigger>
            </Toolbar.Button>
            <Drawer.Portal>
                <Drawer.Overlay className="z-40" />
                <Drawer.Content data-shade="glassy" className="z-50 before:hidden" withControler={false}>
                    <Drawer.Title size="lg" weight="medium">Share the docs</Drawer.Title>
                    <Drawer.Description className="mt-1 mb-0">Invite your team to collaborate on "Tailus UI"</Drawer.Description>

                    <InvitationForm />

                    <div>
                        <Title className="text-sm" as="h4" weight="medium">Members</Title>
                        <Members withActions={false}/>
                    </div>

                    <SeparatorRoot className="my-4" />

                    <Button.Root variant="ghost" intent="info" size="sm" className="-ml-2.5">
                        <Button.Icon type="leading" size="sm">
                            <LinkIcon className=""/>
                        </Button.Icon>
                        <Button.Label>Copy Link</Button.Label>
                    </Button.Root>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    </Toolbar.Root>
)