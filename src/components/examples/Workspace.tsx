import React from "react";
import { Caption, Text, Title } from "@components/typography"
import Button from "@react-ui/button/Button"
import Separator from "@react-ui/separator/Separator";
import { Card } from "@components/Card";
import Avatar from "@react-ui/avatar/Avatar";
import type { AvatarFallbackProps } from "@tailus/themer";
import { Plus } from "lucide-react";

export const Workspace = () => {
    return (
        <div>
            <div className="px-[--card-padding]">
                <Title size="lg" weight="medium">Join Workspaces</Title>
                <Text className="my-0" size="base">Tailus UI is better with Workspaces</Text>
            </div>

            <Card className="space-y-2 mt-6 mb-3 mx-auto dark:bg-[--ui-bg] dark:border dark:border-gray-900" variant="soft">
                <WorkspaceItem intent="primary" icon="TT" name="Tailus Themer" membersNumber={15} />
                <Separator className="ml-[3.25rem] w-auto" dashed />
                <WorkspaceItem intent="accent" icon="TR" name="Tailus UI React" membersNumber={5} />
                <Separator className="ml-[3.25rem] w-auto" dashed />
                <WorkspaceItem intent="secondary" icon="TB" name="Tailus HTML UI Blocks" membersNumber={32} />
            </Card>
            <Button.Root variant="ghost" intent="primary" size="sm" className="ml-[--card-padding]">
                <Button.Icon type="leading" size="sm">
                    <Plus />
                </Button.Icon>
                <Button.Label>Create a new Workspace</Button.Label>
            </Button.Root>
        </div>
    )
}

interface WorkspaceItemProps {
    intent: AvatarFallbackProps["intent"];
    icon: string;
    name: string;
    membersNumber: number;
}

const WorkspaceItem: React.FC<WorkspaceItemProps> = ({
    intent,
    icon,
    name,
    membersNumber
}) => {
    return (
        <div className="flex items-center justify-between w-full sm:min-w-[22rem]">
            <div className="flex gap-3 items-center">
                <Avatar.Root size="lg" >
                    <Avatar.Fallback intent={intent} variant="soft" className="rounded-lg">
                        {icon}
                    </Avatar.Fallback>
                </Avatar.Root>
                <div>
                    <Title as="div" className="text-sm" weight="medium">{name}</Title>
                    <Caption as="span" className="mt-0.5 block" size="xs">{membersNumber} members</Caption>
                </div>
            </div>
            <Button.Root variant="soft" intent="gray" size="xs" className="bg-gray-200">
                <Button.Label>Join</Button.Label>
            </Button.Root>
        </div>
    )
}

const code = `import React from "react";
import { Caption, Text, Title } from "@tailus-ui/typography"
import Button from "@tailus-ui/Button"
import Separator from "@tailus-ui/Separator";
import Card from "@tailus-ui/Card";
import Avatar from "@tailus-ui/Avatar";
import { type AvatarFallbackProps } from "@tailus/themer";
import { Plus } from "lucide-react";

export const Workspace = () => {
    return (
        <div>
            <div className="px-[--card-padding]">
                <Title size="lg" weight="medium">Join Workspaces</Title>
                <Text>Tailus UI is better with Workspaces</Text>
            </div>

            <Card className="space-y-2 mt-6 mb-3 dark:bg-[--ui-bg]" variant="soft">
                <WorkspaceItem intent="primary" icon="TT" name="Tailus Themer" membersNumber={15} />
                <Separator className="ml-[3.25rem] w-auto" dashed />
                <WorkspaceItem intent="accent" icon="TR" name="Tailus UI React" membersNumber={5} />
                <Separator className="ml-[3.25rem] w-auto" dashed />
                <WorkspaceItem intent="secondary" icon="TB" name="Tailus HTML UI Blocks" membersNumber={32} />
            </Card>
            <Button.Root variant="ghost" intent="primary" size="sm" className="ml-[--card-padding]">
                <Button.Icon type="leading" size="sm">
                    <Plus />
                </Button.Icon>
                <Button.Label>Create a new Workspace</Button.Label>
            </Button.Root>
        </div>
    )
}

interface WorkspaceItemProps {
    intent: AvatarFallbackProps["intent"];
    icon: string;
    name: string;
    membersNumber: number;
}

const WorkspaceItem: React.FC<WorkspaceItemProps> = ({
    intent,
    icon,
    name,
    membersNumber
}) => {
    return (
        <div className="flex items-center justify-between w-full sm:min-w-[22rem]">
            <div className="flex gap-3 items-center">
                <Avatar.Root size="lg" >
                    <Avatar.Fallback intent={intent} variant="soft" className="rounded-lg">
                        {icon}
                    </Avatar.Fallback>
                </Avatar.Root>
                <div>
                    <Title as="div" className="text-sm" weight="medium">{name}</Title>
                    <Caption as="span" className="mt-0.5 block" size="xs">{membersNumber} members</Caption>
                </div>
            </div>
            <Button.Root variant="soft" intent="gray" size="xs" className="bg-gray-200">
                <Button.Label>Join</Button.Label>
            </Button.Root>
        </div>
    )
}`

export const workspaceCode = [{
    code,
    lang : "tsx"
}]