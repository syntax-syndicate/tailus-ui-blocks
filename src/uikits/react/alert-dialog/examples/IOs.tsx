import { Trash } from "lucide-react"
import AlertDialog from "../AlertDialog"
import Button from "@react-ui/button/Button"
import SeparatorRoot from "@react-ui/separator/Separator"

export const IOs = ({mixed=false, fancy=false} : {mixed?:boolean, fancy?:boolean}) => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button.Root variant="soft" intent="danger">
            <Button.Icon type="leading" size="sm">
                <Trash />
            </Button.Icon>
            <Button.Label>Delete</Button.Label>
        </Button.Root>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="z-40"/>
            <AlertDialog.Content className="overflow-hidden p-0 max-w-[18rem] w-full z-50" fancy={fancy} mixed={mixed} data-shade="800">
                <div className="p-[--feedback-padding] text-center">
                    <AlertDialog.Title align="center">
                        Are you absolutely sure?
                    </AlertDialog.Title>
                    <AlertDialog.Description align="center" className="mt-2">
                        This photo will be deleted from your iCloud Photos.
                    </AlertDialog.Description>
                </div>
                <div>
                    <SeparatorRoot fancy={fancy}/>
                    <AlertDialog.Actions className="mt-0 overflow-hidden gap-0 h-full">
                        <AlertDialog.Cancel asChild>
                            <Button.Root
                                variant="ghost"
                                intent="gray"
                                size="md"
                                className="rounded-none w-1/2"
                            >
                                <Button.Label>Cancel</Button.Label>
                            </Button.Root>
                        </AlertDialog.Cancel>
                        <SeparatorRoot fancy={fancy} orientation="vertical" className="h-9" />
                        <AlertDialog.Action asChild>
                            <Button.Root
                                variant="ghost"
                                intent="danger"
                                size="md"
                                className="rounded-none w-1/2"
                            >
                                <Button.Label>Yes, Delete</Button.Label>
                            </Button.Root>
                        </AlertDialog.Action>
                    </AlertDialog.Actions>
                </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
)

const exampleCode = `
import { Trash } from "lucide-react"
import AlertDialog from "@tailus-ui/AlertDialog"
import Button from "@tailus-ui/Button"
import SeparatorRoot from "@tailus-ui/Separator"

export const IOs = () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button.Root variant="soft" intent="danger">
            <Button.Icon type="leading" size="sm">
                <Trash />
            </Button.Icon>
            <Button.Label>Delete</Button.Label>
        </Button.Root>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
            <AlertDialog.Content className="overflow-hidden p-0 max-w-[18rem]" data-shade="800">
                <div className="p-[--feedback-padding] text-center">
                    <AlertDialog.Title align="center">
                        Are you absolutely sure?
                    </AlertDialog.Title>
                    <AlertDialog.Description align="center" className="mt-2">
                        This photo will be deleted from your iCloud Photos.
                    </AlertDialog.Description>
                </div>
                <div>
                    <SeparatorRoot />
                    <AlertDialog.Actions className="mt-0 overflow-hidden gap-0 h-full">
                        <AlertDialog.Cancel asChild>
                            <Button.Root
                                variant="ghost"
                                intent="gray"
                                size="md"
                                className="rounded-none w-1/2"
                            >
                                <Button.Label>Cancel</Button.Label>
                            </Button.Root>
                        </AlertDialog.Cancel>
                        <SeparatorRoot orientation="vertical" className="h-9" />
                        <AlertDialog.Action asChild>
                            <Button.Root
                                variant="ghost"
                                intent="danger"
                                size="md"
                                className="rounded-none w-1/2"
                            >
                                <Button.Label>Yes, Delete</Button.Label>
                            </Button.Root>
                        </AlertDialog.Action>
                    </AlertDialog.Actions>
                </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
)
`

export const iOsCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]