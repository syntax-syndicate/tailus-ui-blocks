import Button from '@react-ui/button/Button';
import Select from '@tailus-ui/select/Select';
import Popover from '@tailus-ui/popover/Popover';
import { Calendar } from '@react-ui/calendar/Calendar';
import { useState } from 'react';
import { format } from 'date-fns';
import { Bold, CalendarDays, Check, Heading, Heading1, Heading2, Heading3, Italic, List, ListChecks, ListOrdered, Pilcrow, Plus, Strikethrough, Underline, User } from 'lucide-react';
import Avatar from '@react-ui/avatar/Avatar';
import ToggleGroup from '@react-ui/toggle-group/ToggleGroup';
import { BERNARD_AVATAR, GLODIE_AVATAR, MESCHAC_AVATAR, THEO_AVATAR } from 'src/const';
import Dialog from './Dialog';
import Input from '@react-ui/input/Input';
import Label from '@react-ui/label/Label';
import { Caption } from '@components/typography';
import Textarea from '@react-ui/textarea/Textarea';

type Member = {
    avatar: string;
    name: string;
};

const members: Member[] = [
    {
        avatar: MESCHAC_AVATAR,
        name: 'Méschac Irung'
    },
    {
        avatar: GLODIE_AVATAR,
        name: 'Glodie Lukose'
    },
    {
        avatar: THEO_AVATAR,
        name: 'Théo Balick'
    },
    {
        avatar: BERNARD_AVATAR,
        name: 'Bernard Ng'
    }
];

export const NewTask = () => {
    const [selected, setSelected] = useState<Date>();
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button.Root size="sm">
                    <Button.Icon>
                        <Plus />
                    </Button.Icon>
                    <Button.Label>New</Button.Label>
                </Button.Root>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="z-40" />
                <Dialog.Content mixed className="z-50 max-w-lg">
                    <div className="space-y-6">
                        <div className="-mt-2 space-y-6">
                            <div className="space-y-2.5">
                                <Label className="sr-only">Task title</Label>
                                <Input type="text" required variant="plain" size="sm" placeholder="Task Title..." className="text-xl" />
                            </div>
                            <div className="flex flex-wrap gap-3 gap-y-6">
                                <Select.Root>
                                    <Select.Trigger className="w-fit rounded-[--btn-radius]" variant="mixed" size="md">
                                        <Select.Icon size="md">
                                            <User />
                                        </Select.Icon>
                                        <Select.Value placeholder="Assign" />
                                    </Select.Trigger>

                                    <Select.Portal>
                                        <Select.Content mixed position="popper" sideOffset={5} variant="soft" intent="gray" className="z-50">
                                            <Select.Viewport>
                                                {members.map((member, index) => (
                                                    <Select.Item className="flex h-fit py-1.5" key={index} value={member.name}>
                                                        <Select.ItemIndicator className="mr-2">
                                                            <Check className="size-3" />
                                                        </Select.ItemIndicator>

                                                        <Avatar.Root size="xxs">
                                                            <Avatar.Image src={member.avatar} />
                                                        </Avatar.Root>

                                                        <Select.ItemText className="flex">{member.name}</Select.ItemText>
                                                    </Select.Item>
                                                ))}
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                                <div className="w-fit">
                                    <Label className="sr-only" htmlFor="date">
                                        Due date
                                    </Label>
                                    <div className="relative">
                                        <Input type="text" id="date" defaultValue={selected && format(selected, 'PPP')} placeholder="Due date" className="rounded-[--btn-radius] dark:bg-[--ui-bg]" />
                                        <div className="absolute inset-y-0.5 right-0.5">
                                            <Popover.Root>
                                                <Popover.Trigger asChild>
                                                    <Button.Root className="rounded-[calc(var(--btn-radius)-2px)]" variant="ghost" intent="gray" size="sm">
                                                        <Button.Icon type="only" size="sm">
                                                            <CalendarDays />
                                                        </Button.Icon>
                                                    </Button.Root>
                                                </Popover.Trigger>
                                                <Popover.Portal>
                                                    <Popover.Content sideOffset={5} mixed className="z-50 max-w-fit">
                                                        <Calendar initialFocus mode="single" defaultMonth={selected} selected={selected} onSelect={(day: Date) => setSelected(day)} intent="primary" />
                                                    </Popover.Content>
                                                </Popover.Portal>
                                            </Popover.Root>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute left-1.5 top-10 z-[1] flex gap-px" data-rounded="default">
                                <Popover.Root>
                                    <Popover.Trigger asChild>
                                        <Button.Root size="xs" variant="ghost" intent="gray">
                                            <Button.Icon type="only" size="xs">
                                                <Bold />
                                            </Button.Icon>
                                        </Button.Root>
                                    </Popover.Trigger>
                                    <Popover.Portal>
                                        <Popover.Content align="start" className="z-50 p-1" mixed>
                                            <ToggleGroup.Root type="multiple" aria-label="text formatting options" variant="soft">
                                                <ToggleGroup.Item value="bold" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Bold />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="italic" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Italic />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="underline" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Underline />
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
                                        <Popover.Content align="start" className="z-50 p-1" mixed>
                                            <ToggleGroup.Root type="single" aria-label="text formatting options" variant="soft">
                                                <ToggleGroup.Item value="h1" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Heading1 />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="h2" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Heading2 />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="h3" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Heading3 />
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
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="dsc">
                                    Description
                                </Label>
                                <Textarea required rows={6} id="dsc" className="pt-10" placeholder="Add your project description" />
                                <Caption>Markdown is supported</Caption>
                            </div>
                        </div>
                    </div>
                    <Dialog.Actions>
                        <Dialog.Close asChild>
                            <Button.Root variant="outlined" intent="gray" size="sm">
                                <Button.Label>Cancel</Button.Label>
                            </Button.Root>
                        </Dialog.Close>
                        <Button.Root variant="solid" intent="primary" size="sm">
                            <Button.Label>Next</Button.Label>
                        </Button.Root>
                    </Dialog.Actions>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const code = `import Button from '@tailus-ui/Button';
import Select from '@tailus-ui/select/Select';
import Popover from '@tailus-ui/Popover';
import { Calendar } from '@tailus-ui/Calendar';
import { useState } from 'react';
import { format } from 'date-fns';
import { Bold, CalendarDays, Check, Heading, Heading1, Heading2, Heading3, Italic, List, ListChecks, ListOrdered, Pilcrow, Plus, Strikethrough, Underline, User } from 'lucide-react';
import Avatar from '@tailus-ui/Avatar';
import ToggleGroup from '@tailus-ui/ToggleGroup';
import { BERNARD_AVATAR, GLODIE_AVATAR, MESCHAC_AVATAR, THEO_AVATAR } from 'src/const';
import Dialog from '@tailus-ui/Dialog';
import Input from '@tailus-ui/Input';
import Label from '@tailus-ui/Label';
import { Caption } from '@tailus-ui/typography';
import Textarea from '@tailus-ui/Textarea';

type Member = {
    avatar: string;
    name: string;
};

const members: Member[] = [
    {
        avatar: MESCHAC_AVATAR,
        name: 'Méschac Irung'
    },
    {
        avatar: GLODIE_AVATAR,
        name: 'Glodie Lukose'
    },
    {
        avatar: THEO_AVATAR,
        name: 'Théo Balick'
    },
    {
        avatar: BERNARD_AVATAR,
        name: 'Bernard Ng'
    }
];

export const NewTask = () => {
    const [selected, setSelected] = useState<Date>();
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button.Root size="sm">
                    <Button.Icon>
                        <Plus />
                    </Button.Icon>
                    <Button.Label>New</Button.Label>
                </Button.Root>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="z-40" />
                <Dialog.Content mixed className="z-50 max-w-lg">
                    <div className="space-y-6">
                        <div className="-mt-2 space-y-6">
                            <div className="space-y-2.5">
                                <Label className="sr-only">Task title</Label>
                                <Input type="text" required variant="plain" size="sm" placeholder="Task Title..." className="text-xl" />
                            </div>
                            <div className="flex flex-wrap gap-3 gap-y-6">
                                <Select.Root>
                                    <Select.Trigger className="w-fit rounded-[--btn-radius]" variant="mixed" size="md">
                                        <Select.Icon size="md">
                                            <User />
                                        </Select.Icon>
                                        <Select.Value placeholder="Assign" />
                                    </Select.Trigger>

                                    <Select.Portal>
                                        <Select.Content mixed position="popper" sideOffset={5} variant="soft" intent="gray" className="z-50">
                                            <Select.Viewport>
                                                {members.map((member, index) => (
                                                    <Select.Item className="flex h-fit py-1.5" key={index} value={member.name}>
                                                        <Select.ItemIndicator className="mr-2">
                                                            <Check className="size-3" />
                                                        </Select.ItemIndicator>

                                                        <Avatar.Root size="xxs">
                                                            <Avatar.Image src={member.avatar} />
                                                        </Avatar.Root>

                                                        <Select.ItemText className="flex">{member.name}</Select.ItemText>
                                                    </Select.Item>
                                                ))}
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                                <div className="w-fit">
                                    <Label className="sr-only" htmlFor="date">
                                        Due date
                                    </Label>
                                    <div className="relative">
                                        <Input type="text" id="date" defaultValue={selected && format(selected, 'PPP')} placeholder="Due date" className="rounded-[--btn-radius] dark:bg-[--ui-bg]" />
                                        <div className="absolute inset-y-0.5 right-0.5">
                                            <Popover.Root>
                                                <Popover.Trigger asChild>
                                                    <Button.Root className="rounded-[calc(var(--btn-radius)-2px)]" variant="ghost" intent="gray" size="sm">
                                                        <Button.Icon type="only" size="sm">
                                                            <CalendarDays />
                                                        </Button.Icon>
                                                    </Button.Root>
                                                </Popover.Trigger>
                                                <Popover.Portal>
                                                    <Popover.Content sideOffset={5} mixed className="z-50 max-w-fit">
                                                        <Calendar initialFocus mode="single" defaultMonth={selected} selected={selected} onSelect={(day: Date) => setSelected(day)} intent="primary" />
                                                    </Popover.Content>
                                                </Popover.Portal>
                                            </Popover.Root>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute left-1.5 top-10 z-[1] flex gap-px" data-rounded="default">
                                <Popover.Root>
                                    <Popover.Trigger asChild>
                                        <Button.Root size="xs" variant="ghost" intent="gray">
                                            <Button.Icon type="only" size="xs">
                                                <Bold />
                                            </Button.Icon>
                                        </Button.Root>
                                    </Popover.Trigger>
                                    <Popover.Portal>
                                        <Popover.Content align="start" className="z-50 p-1" mixed>
                                            <ToggleGroup.Root type="multiple" aria-label="text formatting options" variant="soft">
                                                <ToggleGroup.Item value="bold" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Bold />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="italic" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Italic />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="underline" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Underline />
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
                                        <Popover.Content align="start" className="z-50 p-1" mixed>
                                            <ToggleGroup.Root type="single" aria-label="text formatting options" variant="soft">
                                                <ToggleGroup.Item value="h1" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Heading1 />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="h2" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Heading2 />
                                                    </ToggleGroup.Icon>
                                                </ToggleGroup.Item>
                                                <ToggleGroup.Item value="h3" size="xs">
                                                    <ToggleGroup.Icon>
                                                        <Heading3 />
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
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="dsc">
                                    Description
                                </Label>
                                <Textarea required rows={6} id="dsc" className="pt-10" placeholder="Add your project description" />
                                <Caption>Markdown is supported</Caption>
                            </div>
                        </div>
                    </div>
                    <Dialog.Actions>
                        <Dialog.Close asChild>
                            <Button.Root variant="outlined" intent="gray" size="sm">
                                <Button.Label>Cancel</Button.Label>
                            </Button.Root>
                        </Dialog.Close>
                        <Button.Root variant="solid" intent="primary" size="sm">
                            <Button.Label>Next</Button.Label>
                        </Button.Root>
                    </Dialog.Actions>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
`;

export const taskCode = [
    {
        code,
        lang: 'tsx'
    }
];
