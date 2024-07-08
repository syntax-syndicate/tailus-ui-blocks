import { Archive, ChevronRight, Trash } from "lucide-react";
import ContextMenu from "./ContextMenu";
import BrandIcon from "@components/utilities/BrandIcon";
import { Caption } from "@components/typography";

export const Overview = () => (
    <ContextMenu.Root>
      <div>
        <Caption align="center">Right click 👇</Caption>
        <ContextMenu.Trigger className="mt-4 mx-auto w-fit p-[--card-padding] rounded-[--card-radius] border border-dashed">
            <div className="mb-2 mx-auto size-12 border p-0.5 rounded-full shadow-sm dark:shadow-gray-950">
                <div data-shade="800" className="size-full overflow-hidden flex border bg-gray-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-700 rounded-full relative before:absolute before:inset-y-0 before:left-0 before:w-1/3 before:border-r dark:before:bg-gray-900/15 after:absolute after:right-0 after:top-0 after:left-1/3 after:h-1/3 after:border-b after:bg-gray-100 dark:after:bg-gray-900/50">
                    <BrandIcon className="relative z-[1] m-auto rounded-full bg-white dark:bg-gray-700" />
                </div>
            </div>
            <Caption size="xs" neutral>tailus-logo.png</Caption>
        </ContextMenu.Trigger>
      </div>

      <ContextMenu.Portal>
        <ContextMenu.Content mixed data-shade="800" variant="solid" intent="primary" className="z-50 min-w-56">
          <ContextMenu.Item>
            Scale <ContextMenu.Command>⌘S</ContextMenu.Command>
          </ContextMenu.Item>
          <ContextMenu.Item>
            Set to Primary <ContextMenu.Command>⌘P</ContextMenu.Command>
          </ContextMenu.Item>
          <ContextMenu.Separator/>
          <ContextMenu.Item>Copy </ContextMenu.Item>
          <ContextMenu.Item>Share... </ContextMenu.Item>
          <ContextMenu.Separator/>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>
                Download
                <ChevronRight className="size-4 ml-auto"/>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent mixed data-shade="800" variant="solid" intent="primary" className="min-w-fit z-[51]" sideOffset={2} alignOffset={-5}>
                <ContextMenu.Item>Logomark </ContextMenu.Item>
                <ContextMenu.Item>Logotype </ContextMenu.Item>
                <ContextMenu.Separator/>
                <ContextMenu.Item>All </ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>
          <ContextMenu.Separator/>
          <ContextMenu.Item disabled intent="warning">
                <ContextMenu.Icon>
                    <Archive className="size-4"/>
                </ContextMenu.Icon>
                    Archive
                    <ContextMenu.Command>⌘A</ContextMenu.Command>
          </ContextMenu.Item>
            <ContextMenu.Item intent="danger">
                <Trash className="size-4"/>
                Delete
                <ContextMenu.Command>⌘D</ContextMenu.Command>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
)

const exampleCode = `import { Archive, ChevronRight, Trash } from "lucide-react";
import ContextMenu from "@tailus-ui/ContextMenu";
import { Caption } from "@tailus-ui/typography";

export const Overview = () => (
    <ContextMenu.Root>
      <div>
        <Caption align="center">Right click 👇</Caption>
        <ContextMenu.Trigger className="mt-4 mx-auto w-fit p-[--card-padding] rounded-[--card-radius] border border-dashed">
            <Caption size="xs" neutral>tailus-logo.png</Caption>
        </ContextMenu.Trigger>
      </div>

      <ContextMenu.Portal>
        <ContextMenu.Content mixed data-shade="800" variant="solid" intent="primary" className="min-w-56">
          <ContextMenu.Item>
            Scale <ContextMenu.Command>⌘S</ContextMenu.Command>
          </ContextMenu.Item>
          <ContextMenu.Item>
            Set to Primary <ContextMenu.Command>⌘P</ContextMenu.Command>
          </ContextMenu.Item>
          <ContextMenu.Separator/>
          <ContextMenu.Item>Copy </ContextMenu.Item>
          <ContextMenu.Item>Share... </ContextMenu.Item>
          <ContextMenu.Separator/>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>
                Download
                <ChevronRight className="size-4 ml-auto"/>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent mixed data-shade="800" variant="solid" intent="primary" className="min-w-fit" sideOffset={2} alignOffset={-5}>
                <ContextMenu.Item>Logomark </ContextMenu.Item>
                <ContextMenu.Item>Logotype </ContextMenu.Item>
                <ContextMenu.Separator/>
                <ContextMenu.Item>All </ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>
          <ContextMenu.Separator/>
          <ContextMenu.Item disabled intent="warning">
                <ContextMenu.Icon>
                    <Archive className="size-4"/>
                </ContextMenu.Icon>
                Archive
                <ContextMenu.Command>⌘A</ContextMenu.Command>
            </ContextMenu.Item>
            <ContextMenu.Item intent="danger">
                <Trash className="size-4"/>
                Delete
                <ContextMenu.Command>⌘D</ContextMenu.Command>
            </ContextMenu.Item>
        </ContextMenu.Content>
        </ContextMenu.Portal>
    </ContextMenu.Root>
)`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]