import Button from "../Button"
import { Sparkles } from "lucide-react"

export const IconButtons = () => (
    <div className="space-y-4">
        <div className="flex gap-4 flex-wrap">
            <Button.Root>
                <Button.Icon size="sm" type="leading">
                    <Sparkles />
                </Button.Icon>
                <Button.Label>Leading</Button.Label>
            </Button.Root>
            <Button.Root>
                <Button.Icon size="sm" type="only">
                    <Sparkles />
                </Button.Icon>
            </Button.Root>
            <Button.Root>
                <Button.Label>Trailing</Button.Label>
                <Button.Icon size="sm" type="trailing">
                    <Sparkles />
                </Button.Icon>
            </Button.Root>
        </div>
        <div className="flex gap-4 flex-wrap">
            <Button.Root variant="outlined" intent="gray">
                <Button.Icon size="sm" type="leading">
                    <Sparkles />
                </Button.Icon>
                <Button.Label>Leading</Button.Label>
            </Button.Root>
            <Button.Root variant="outlined" intent="gray">
                <Button.Icon size="sm" type="only">
                    <Sparkles />
                </Button.Icon>
            </Button.Root>
            <Button.Root variant="outlined" intent="gray">
                <Button.Label>Trailing</Button.Label>
                <Button.Icon size="sm" type="trailing">
                    <Sparkles />
                </Button.Icon>
            </Button.Root>
        </div>
        <div className="flex gap-4 flex-wrap">
            <Button.Root variant="soft" intent="gray">
                <Button.Icon size="sm" type="leading">
                    <Sparkles />
                </Button.Icon>
                <Button.Label>Leading</Button.Label>
            </Button.Root>
            <Button.Root variant="soft" intent="gray">
                <Button.Icon size="sm" type="only">
                    <Sparkles />
                </Button.Icon>
            </Button.Root>
            <Button.Root variant="soft" intent="gray">
                <Button.Label>Trailing</Button.Label>
                <Button.Icon size="sm" type="trailing">
                    <Sparkles />
                </Button.Icon>
            </Button.Root>
        </div>
        <div className="flex gap-4 flex-wrap">
            <Button.Root variant="ghost" intent="gray">
                <Button.Icon size="sm" type="leading">
                    <Sparkles />
                </Button.Icon>
                <Button.Label>Leading</Button.Label>
            </Button.Root>
            <Button.Root variant="ghost" intent="gray">
                <Button.Icon size="sm" type="only">
                    <Sparkles />
                </Button.Icon>
            </Button.Root>
            <Button.Root variant="ghost" intent="gray">
                <Button.Label>Trailing</Button.Label>
                <Button.Icon size="sm" type="trailing">
                    <Sparkles />
                </Button.Icon>
            </Button.Root>
        </div>
    </div>
)