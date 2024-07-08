import { Trash } from "lucide-react"
import AlertDialog from "../AlertDialog"
import Button from "@react-ui/button/Button"

export const Overview = ({mixed=false, fancy=false, glassy=false} : {mixed?:boolean, fancy?:boolean, glassy?:boolean}) => (
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
        <AlertDialog.Content className="max-w-sm z-50" mixed={mixed} fancy={fancy} data-shade={glassy ? "glassy" : "800"}>
            <AlertDialog.Title>
                Are you absolutely sure?
            </AlertDialog.Title>
            <AlertDialog.Description className="mt-2">
                This photo will be deleted from your iCloud Photos.
            </AlertDialog.Description>
            <AlertDialog.Actions>
                <AlertDialog.Cancel asChild>
                <Button.Root
                    variant="outlined"
                    intent="gray"
                    size="sm"
                >
                    <Button.Label>Cancel</Button.Label>
                </Button.Root>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                <Button.Root
                    variant="solid"
                    intent="danger"
                    size="sm"
                >
                    <Button.Label>Yes, Delete</Button.Label>
                </Button.Root>
                </AlertDialog.Action>
            </AlertDialog.Actions>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
)

const exampleCode = `
import { Trash } from "lucide-react"
import AlertDialog from "@tailus-ui/AlertDialog"
import Button from "@tailus-ui/Button"

export const Centered = () => (
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
        <AlertDialog.Content className="max-w-sm" data-shade="800">
            <AlertDialog.Title>
                Are you absolutely sure?
            </AlertDialog.Title>
            <AlertDialog.Description className="mt-2">
                This photo will be deleted from your iCloud Photos.
            </AlertDialog.Description>
            <AlertDialog.Actions>
                <AlertDialog.Cancel asChild>
                    <Button.Root
                        variant="outlined"
                        intent="gray"
                        size="sm"
                    >
                        <Button.Label>Cancel</Button.Label>
                    </Button.Root>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                    <Button.Root
                        variant="solid"
                        intent="danger"
                        size="sm"
                    >
                        <Button.Label>Yes, Delete</Button.Label>
                    </Button.Root>
                </AlertDialog.Action>
            </AlertDialog.Actions>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
)
`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]