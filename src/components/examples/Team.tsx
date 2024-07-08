import Avatar from "@react-ui/avatar/Avatar";
import { Title, Caption, Text } from "@components/typography";
import Button from "@react-ui/button/Button";
import Select from "@components/Select";
import { FormControl, FormInput, FormField, FormRoot } from "@react-ui/form";
import {Card} from "@components/Card";
import { FormSubmit } from "@radix-ui/react-form";
import { Check, ChevronDown, EllipsisVertical, Link, Pencil, Trash } from "lucide-react";
import type { ReactNode } from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import Dropdown from "@react-ui/dropdown/Dropdown";
import { twMerge } from "tailwind-merge";
import { BERNARD_AVATAR, GLODIE_AVATAR, MESCHAC_AVATAR, THEO_AVATAR } from "src/const";

export const Team = () => {
    return (
        <Card className="p-0 border bg-gray-50 dark:bg-gray-925 dark:border-gray-800/50" variant="soft">
            <Card variant="outlined" className="-m-px feedback-shadow">
                <Title size="lg" as="h3" weight="medium">Your team</Title>
                <Text className="my-0">Invite your team to collaborate on "Tailus UI"</Text>

                <InvitationForm />

                <div >
                    <Title size="base" as="h4" weight="medium">Members</Title>
                    <Members />
                </div>
            </Card>
            <div className="p-[calc(var(--card-padding)/2)]">
                <Button.Root variant="ghost" intent="info" size="sm">
                    <Button.Icon type="leading" size="sm">
                        <Link className=""/>
                    </Button.Icon>
                    <Button.Label>Copy Link</Button.Label>
                </Button.Root>
            </div>
        </Card>
    )
}

export const SelectItem = ({value, children}:{value:string, children:ReactNode}) => {
  return (
    <Select.Item value={value}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator>
        <Check />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

type MemberType = {
    avatar: string;
    name: string;
    email: string;
    role?: string;
}

export const InvitationForm = () => (
    <div className="my-8">
        <FormRoot className="grid gap-3 items-center [grid-template-columns:1fr_auto]">
            <div className="relative">
                <FormField name="email">
                    <FormControl asChild>
                        <FormInput
                            type="email"
                            variant="mixed"
                            required
                            size="lg"
                            placeholder="Email"
                            className="px-3 rounded-[--btn-radius] dark:bg-[--ui-bg]"
                        />
                    </FormControl>
                </FormField>
                <div data-shade="900" className="absolute right-1 inset-y-1">
                    <Select.Root defaultValue="member">
                        <Select.Trigger variant="plain" size="sm" className="rounded-[calc(var(--btn-radius)-3px)]">
                            <Select.Value placeholder="Role" />
                            <Select.TriggerIcon>
                                <ChevronDown className="size-3.5" />
                            </Select.TriggerIcon>
                        </Select.Trigger>

                        <Select.Portal>
                            <Select.Content className="z-50" mixed variant="solid" data-shade="glassy">
                                <Select.Viewport>
                                    <SelectItem value="owner">Owner</SelectItem>
                                    <SelectItem value="admin">Admin</SelectItem>
                                    <SelectItem value="member">Member</SelectItem>
                                </Select.Viewport>
                            </Select.Content>
                        </Select.Portal>
                    </Select.Root>
                </div>
            </div>
            <FormSubmit asChild>
                <Button.Root variant="solid" size="md" intent="primary">
                    <Button.Label>Invite</Button.Label>
                </Button.Root>
            </FormSubmit>
        </FormRoot>
    </div>
)

export const Members = ({withActions=true}:{withActions?:boolean}) => (
    <div className="mt-3">
        <Member
            member={
                {
                    avatar: MESCHAC_AVATAR,
                    name:"Méschac Irung",
                    email: "you",
                    role:"owner"
                }
            }
            withActions={withActions}
        />
        <Member
            member={
                {
                    avatar: BERNARD_AVATAR,
                    name:"Bernard Ng",
                    email: "hello@tailus.io",
                    role:"member"
                }
            }
            withActions={withActions}
        />
        <Member
            member={
                {
                    avatar: THEO_AVATAR,
                    name:"Théo Balick",
                    email: "hello@tailus.io",
                    role:"admin"
                }
            }
            withActions={withActions}
        />
        <Member
            member={
                {
                    avatar: GLODIE_AVATAR,
                    name:"Glodie Lukose",
                    email: "hello@tailus.io",
                    role:"member"
                }
            }
            withActions={withActions}
        />
    </div>
)

export const Member = ({member, withActions=false}:{member:MemberType, withActions?:boolean}) => {
    return (
        <div className="grid gap-3 [grid-template-columns:auto_1fr] items-center group">
            <Avatar.Root size="xs">
                <Avatar.Image src={member.avatar} width="520" height="520" />
                <Avatar.Fallback>MI</Avatar.Fallback>
            </Avatar.Root>
            <div className={twMerge("py-2 border-b border-dashed group-last:border-none flex gap-3 justify-between", !withActions && "py-3 border-solid")}>
                <div className="flex gap-1.5 items-center">
                    <Title as="div" className="text-sm" weight="normal">{member.name}</Title>
                    <div aria-hidden className="size-1 rounded-full bg-[--ui-border-color]"></div>
                    <Caption>{member.email}</Caption>
                </div>
                {
                    withActions &&
                    <div className="flex">
                        {
                            member.role == "owner" ? (
                                <Caption size="sm">Owner</Caption>
                            ) : (
                                <>
                                    <div data-shade="800">
                                        <Select.Root defaultValue={member.role}>
                                            <Select.Trigger variant="plain" size="sm" className="gap-1.5 rounded-[calc(var(--btn-radius)-3px)]">
                                                <Select.Value placeholder="Role" />
                                                <Select.TriggerIcon>
                                                    <CaretSortIcon className="size-4 opacity-50" />
                                                </Select.TriggerIcon>
                                            </Select.Trigger>

                                            <Select.Portal>
                                                <Select.Content className="z-50" position="popper" sideOffset={5} align="center" mixed variant="solid" data-shade="glassy">
                                                    <Select.Viewport>
                                                        <SelectItem value="owner">Owner</SelectItem>
                                                        <SelectItem value="admin">Admin</SelectItem>
                                                        <SelectItem value="member">Member</SelectItem>
                                                    </Select.Viewport>
                                                </Select.Content>
                                            </Select.Portal>
                                        </Select.Root>
                                    </div>

                                    <Dropdown.Root>
                                        <Dropdown.Trigger asChild>
                                            <Button.Root variant="ghost" size="sm" intent="gray">
                                                <Button.Icon size="sm" type="only">
                                                    <EllipsisVertical />
                                                </Button.Icon>
                                            </Button.Root>
                                        </Dropdown.Trigger>
                                        <Dropdown.Portal>
                                            <Dropdown.Content className="z-50" align="end" sideOffset={5} data-shade="glassy" mixed>
                                                <Dropdown.Item>
                                                    <Dropdown.Icon>
                                                        <Pencil />
                                                    </Dropdown.Icon>
                                                    Edit
                                                </Dropdown.Item>
                                                <Dropdown.Item intent="danger">
                                                    <Dropdown.Icon>
                                                        <Trash />
                                                    </Dropdown.Icon>
                                                    Delete
                                                </Dropdown.Item>
                                            </Dropdown.Content>
                                        </Dropdown.Portal>
                                    </Dropdown.Root>
                                </>
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}