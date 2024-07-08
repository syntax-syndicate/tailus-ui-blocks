import { Archive, ChevronDown, ChevronRight, Download, File, Pencil, Trash } from "lucide-react";
import DropdownMenu from "./Dropdown";
import Button from "@react-ui/button/Button";

export const Overview = () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button.Root variant="outlined" intent="gray">
          <Button.Label>Dropdown</Button.Label>
          <Button.Icon type="trailing">
            <ChevronDown />
          </Button.Icon>
        </Button.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={5} mixed className="z-50">
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <Pencil/>
            </DropdownMenu.Icon>
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <File/>
            </DropdownMenu.Icon>
            Duplicate
          </DropdownMenu.Item>
          <DropdownMenu.Separator/>
          <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>
              <DropdownMenu.Icon>
                <Download />
              </DropdownMenu.Icon>
              Download
              <DropdownMenu.Icon className="-mr-2">
                <ChevronRight />
              </DropdownMenu.Icon>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent sideOffset={2} alignOffset={-5} className="z-[51]">
                <DropdownMenu.Item>Logomark </DropdownMenu.Item>
                <DropdownMenu.Item>Logotype </DropdownMenu.Item>
                <DropdownMenu.Separator/>
                <DropdownMenu.Item>All </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Item disabled>
            <DropdownMenu.Icon>
              <Archive/>
            </DropdownMenu.Icon>
            Archive
          </DropdownMenu.Item>
          <DropdownMenu.Item intent="danger">
            <DropdownMenu.Icon>
              <Trash/>
            </DropdownMenu.Icon>
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
)

const exampleCode = `import { Archive, ChevronDown, ChevronRight, Download, File, Pencil, Trash } from "lucide-react";
import DropdownMenu from "@tailus-ui/DropdownMenu";
import Button from "@tailus-ui/Button";

export const Overview = () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button.Root variant="outlined" intent="gray">
          <Button.Label>Dropdown</Button.Label>
          <Button.Icon type="trailing">
            <ChevronDown />
          </Button.Icon>
        </Button.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content mixed sideOffset={5}>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <Pencil/>
            </DropdownMenu.Icon>
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <File/>
            </DropdownMenu.Icon>
            Duplicate
          </DropdownMenu.Item>
          <DropdownMenu.Separator/>
          <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>
              <DropdownMenu.Icon>
                <Download />
              </DropdownMenu.Icon>
              Download
              <DropdownMenu.Icon className="-mr-2">
                <ChevronRight />
              </DropdownMenu.Icon>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent sideOffset={2} alignOffset={-5}>
                <DropdownMenu.Item>Logomark </DropdownMenu.Item>
                <DropdownMenu.Item>Logotype </DropdownMenu.Item>
                <DropdownMenu.Separator/>
                <DropdownMenu.Item>All </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Item disabled>
            <DropdownMenu.Icon>
              <Archive/>
            </DropdownMenu.Icon>
            Archive
          </DropdownMenu.Item>
          <DropdownMenu.Item intent="danger">
            <DropdownMenu.Icon>
              <Trash/>
            </DropdownMenu.Icon>
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
)
)`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]