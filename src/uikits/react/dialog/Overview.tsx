import { Bookmark } from "lucide-react";
import Dialog from "./Dialog";
import Button from "@react-ui/button/Button";

export const Overview = () => (
    <Dialog.Root>
    <Dialog.Trigger asChild>
        <Button.Root variant="ghost" intent="gray">
            <Button.Icon type="only">
                <Bookmark />
            </Button.Icon>
        </Button.Root>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="z-40"/>
      <Dialog.Content data-shade="800" className="max-w-sm z-50">
        <Dialog.Title>Sign in to bookmark</Dialog.Title>
        <Dialog.Description className="mt-2">You need to be signed in to save your frequently used components.</Dialog.Description>

        <Dialog.Actions>
          <Dialog.Close asChild>
            <Button.Root variant="outlined" size="sm" intent="gray">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button.Root size="sm">
              <Button.Label>Sign In</Button.Label>
            </Button.Root>
          </Dialog.Close>
        </Dialog.Actions>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)


const exampleCode = `import { Bookmark } from "lucide-react";
import Dialog from "@tailus-ui/Dialog";
import Button from "@tailus-ui/Button";

export const Overview = () => (
    <Dialog.Root>
    <Dialog.Trigger asChild>
        <Button.Root variant="ghost" intent="gray">
            <Button.Icon type="only">
                <Bookmark />
            </Button.Icon>
        </Button.Root>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay/>
      <Dialog.Content className="max-w-sm">
        <Dialog.Title>Sign in to bookmark</Dialog.Title>
        <Dialog.Description className="mt-2">You need to be signed in to save your frequently used components.</Dialog.Description>

        <Dialog.Actions>
          <Dialog.Close asChild>
            <Button.Root variant="outlined" size="sm" intent="gray">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button.Root size="sm">
              <Button.Label>Sign In</Button.Label>
            </Button.Root>
          </Dialog.Close>
        </Dialog.Actions>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]