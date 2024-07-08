import { Info, X } from "lucide-react";
import Popover from "./Popover";
import Button from "@react-ui/button/Button";
import { Text, Title } from "@components/typography";

export const Overview = () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button.Root variant="ghost" intent="gray">
          <Button.Icon type="only">
            <Info />
          </Button.Icon>
        </Button.Root>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content data-shade="800" mixed className="max-w-xs z-50">
          <Title size="base" as="div" weight="medium">Popover Title</Title>
          <Text className="mt-2 mb-0">Inventore perspiciatis atque consequatur? Autem reiciendis nemo error, rerum tempora.</Text>
          <Popover.Close asChild>
            <Button.Root variant="ghost" size="xs" intent="gray">
              <Button.Icon type="only" size="xs">
                <X />
              </Button.Icon>
            </Button.Root>
          </Popover.Close>
      </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
)


const exampleCode = `import { Info, X } from "lucide-react";
import Popover from "@tailus-ui/Popover";
import Button from "@tailus-ui/Button";
import { Text, Title } from "@tailus-ui/typography";

export const Overview = () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button.Root variant="ghost" intent="gray">
          <Button.Icon type="only">
            <Info />
          </Button.Icon>
        </Button.Root>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content mixed className="max-w-xs">
          <Title size="base" as="div" weight="medium">Popover Title</Title>
          <Text className="mt-2 mb-0">This is a description for the popover.</Text>
          <Popover.Close asChild>
            <Button.Root variant="outlined" size="sm" intent="gray">
              <Button.Icon type="only">
                <X />
              </Button.Icon>
            </Button.Root>
          </Popover.Close>
      </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
)`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]