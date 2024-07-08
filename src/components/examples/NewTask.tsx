import Button from "@react-ui/button/Button";
import {Card} from "@components/Card";
import { FormInput, FormControl, FormField, FormMessage, FormTextArea, FormLabel, FormRoot } from "@react-ui/form"
import Select from "@components/Select";
import Popover from "@components/Popover";
import { Calendar } from "@react-ui/calendar/Calendar";
import { useState } from "react";
import { format } from "date-fns"
import { Bold, CalendarDays, Check, Heading, Heading1, Heading2, Heading3, Italic, List, ListChecks, ListOrdered, Pilcrow, Strikethrough, Underline, User } from "lucide-react";
import Avatar from "@react-ui/avatar/Avatar";
import ToggleGroup from "@react-ui/toggle-group/ToggleGroup";
import { BERNARD_AVATAR, GLODIE_AVATAR, MESCHAC_AVATAR, THEO_AVATAR } from "src/const";

type Member = {
    avatar: string;
    name:string
}

const members:Member[] = [
    {
        avatar: MESCHAC_AVATAR,
        name:"Méschac Irung",
    },
    {
        avatar: GLODIE_AVATAR,
        name:"Glodie Lukose",
    },
    {
        avatar:THEO_AVATAR,
        name:"Théo Balick",
    },
    {
        avatar:BERNARD_AVATAR,
        name:"Bernard Ng",
    }
]

export const NewTask = () => {
    const [selected, setSelected] = useState<Date>();
    return (
        <Card className="p-0 border bg-gray-50 dark:bg-gray-925 dark:border-gray-800/50 max-w-lg w-full" variant="soft">
            <Card variant="outlined" className="-m-px card-shadow">
                <FormRoot>
                    <div className="space-y-6">
                        <div className="space-y-6 -mt-2">
                            <FormField name="title" className="w-full space-y-2.5">
                                <FormLabel className="sr-only" size="md">Task title</FormLabel>
                                <FormControl asChild>
                                    <FormInput
                                        type="text"
                                        required
                                        variant="plain"
                                        size="sm"
                                        placeholder="Task Title..."
                                        className="text-xl"
                                    />
                                </FormControl>
                                <FormMessage match="valueMissing"></FormMessage>
                            </FormField>
                            <div className="flex gap-3">
                                <Select.Root>
                                    <Select.Trigger className="w-fit" variant="mixed" size="md">
                                        <Select.TriggerIcon size="md">
                                            <User />
                                        </Select.TriggerIcon>
                                        <Select.Value placeholder="Assign"/>
                                    </Select.Trigger>

                                    <Select.Portal>
                                        <Select.Content mixed position="popper" sideOffset={5} intent="gray" className="z-10">
                                            <Select.Viewport>
                                                {
                                                    members.map((member, index) => (
                                                        <Select.Item className="flex h-fit py-1.5" key={index} value={member.name}>
                                                            <Select.ItemIndicator className="mr-2">
                                                                <Check className="size-3"/>
                                                            </Select.ItemIndicator>
                                                            <Avatar.Root size="xxs">
                                                                <Avatar.Image src={member.avatar} />
                                                            </Avatar.Root>
                                                            <Select.ItemText className="flex">
                                                                {member.name}
                                                            </Select.ItemText>
                                                        </Select.Item>
                                                    ))
                                                }
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                                <FormField name="date" className="w-fit" size="md">
                                    <FormLabel size="md" className="sr-only">Due date</FormLabel>
                                    <div className="relative">
                                        <FormControl asChild>
                                            <FormInput
                                                type="text"
                                                variant="mixed"
                                                size="md"
                                                defaultValue={
                                                    selected && (
                                                        format(selected, "PPP")
                                                    )
                                                }
                                                placeholder="Due date"
                                                className="rounded-[--btn-radius] dark:bg-[--ui-bg]"
                                            />
                                        </FormControl>
                                        <div className="absolute right-0.5 inset-y-0.5">
                                            <Popover.Root>
                                                <Popover.Trigger asChild>
                                                    <Button.Root className="rounded-[calc(var(--btn-radius)-2px)]" variant="ghost" intent="gray" size="sm">
                                                        <Button.Icon type="only" size="sm">
                                                            <CalendarDays />
                                                        </Button.Icon>
                                                    </Button.Root>
                                                </Popover.Trigger>
                                                <Popover.Portal>
                                                    <Popover.Content sideOffset={5} mixed className="max-w-fit">
                                                        <Calendar
                                                            initialFocus
                                                            mode="single"
                                                            defaultMonth={selected}
                                                            selected={selected}
                                                            onSelect={(day: Date) => setSelected(day)}
                                                            intent="primary"
                                                        />
                                                    </Popover.Content>
                                                </Popover.Portal>
                                            </Popover.Root>
                                        </div>
                                    </div>
                                    <FormMessage match="valueMissing"></FormMessage>
                                </FormField>
                            </div>
                        </div>
                        <div className="relative" >
                            <div className="absolute z-[1] top-10 left-1.5 flex gap-px" data-rounded="default">
                                <Popover.Root>
                                    <Popover.Trigger asChild>
                                        <Button.Root size="xs" variant="ghost" intent="gray">
                                            <Button.Icon type="only" size="xs">
                                                <Bold />
                                            </Button.Icon>
                                        </Button.Root>
                                    </Popover.Trigger>
                                    <Popover.Portal>
                                        <Popover.Content align="start" className="p-1" mixed data-rounded="default">
                                            <ToggleGroup.Root
                                                type="multiple"
                                                aria-label="text formatting options"
                                                variant="soft"
                                            >
                                                <ToggleGroup.Item value="bold" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Bold/>
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="italic" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Italic/>
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="underline" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Underline/>
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="strikethrough" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Strikethrough />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                            </ToggleGroup.Root>
                                        </Popover.Content>
                                    </Popover.Portal>
                                </Popover.Root>
                                <Popover.Root>
                                    <Popover.Trigger asChild>
                                        <Button.Root size="xs" variant="ghost" intent="gray">
                                            <Button.Icon type="only" size="xs">
                                                <Heading />
                                            </Button.Icon>
                                        </Button.Root>
                                    </Popover.Trigger>
                                    <Popover.Portal>
                                        <Popover.Content align="start" className="p-1" mixed data-rounded="default">
                                            <ToggleGroup.Root
                                                type="single"
                                                aria-label="text formatting options"
                                                variant="soft"
                                            >
                                                <ToggleGroup.Item value="h1" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Heading1/>
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="h2" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Heading2/>
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="h3" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Heading3/>
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="body" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Pilcrow />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="list" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <List />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="list" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <ListOrdered />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                            </ToggleGroup.Root>
                                        </Popover.Content>
                                    </Popover.Portal>
                                </Popover.Root>
                                <Button.Root size="xs" variant="ghost" intent="gray">
                                    <Button.Icon type="only" size="xs">
                                        <ListChecks />
                                    </Button.Icon>
                                </Button.Root>
                            </div>
                            <FormField name="description" className="w-full space-y-2.5" size="md">
                                <FormLabel size="md">Description</FormLabel>
                                <FormControl asChild>
                                    <FormTextArea
                                        required
                                        variant="mixed"
                                        size="md"
                                        rows={6}
                                        placeholder="Add your project description"
                                        className="pt-9 rounded-[--card-radius] dark:bg-[--ui-bg]"
                                    />
                                </FormControl>
                                <FormMessage match="valueMissing"></FormMessage>
                            </FormField>
                        </div>
                    </div>
                </FormRoot>
            </Card>
            <div className="p-[calc(var(--card-padding)/2)] flex justify-end gap-3">
                <Button.Root variant="outlined" intent="gray" size="sm">
                    <Button.Label>Cancel</Button.Label>
                </Button.Root>
                <Button.Root variant="solid" intent="primary" size="sm">
                    <Button.Label>Next</Button.Label>
                </Button.Root>
            </div>
        </Card>
    )
}