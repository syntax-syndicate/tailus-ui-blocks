import { Caption } from '@components/typography';
import Button from '@react-ui/button/Button';
import Label from '@react-ui/label/Label';
import Separator from '@react-ui/separator/Separator';
import Dialog from './Dialog';
import Input from '@react-ui/input/Input';
import Select from '@tailus-ui/select/Select';
import Calendar from '@react-ui/calendar/Calendar';
import { useState } from 'react';
import { format } from 'date-fns';
import Popover from '@react-ui/popover/Popover';
import { Plus, Calendar as CalendarIcon } from 'lucide-react';

const countries = [
    { flag: '🇨🇩', name: 'DR Congo' },
    { flag: '🇨🇬', name: 'Congo Braza' },
    { flag: '🇦🇴', name: 'Angola' },
    { flag: '🇫🇷', name: 'France' },
    { flag: '🇬🇧', name: 'United Kingdom' },
    { flag: '🇪🇸', name: 'Spain' }
];

type Entry = {
    flag: string;
    name: string;
};

const SelectItem = ({ entry }: { entry: Entry }) => {
    return (
        <Select.Item value={entry.name} className="items-center pl-7">
            <Select.ItemIndicator />
            <Select.ItemText>
                <span role="img" aria-label={entry.name} className="mr-2">
                    {entry.flag}
                </span>
                {entry.name}
            </Select.ItemText>
        </Select.Item>
    );
};

export const NewProject2 = () => {
    const [selected, setSelected] = useState<Date>(new Date());

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button.Root size="sm">
                    <Button.Icon>
                        <Plus />
                    </Button.Icon>
                    <Button.Label>New Project</Button.Label>
                </Button.Root>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="z-40" />
                <Dialog.Content mixed className="z-50 max-w-lg">
                    <Dialog.Title>New project</Dialog.Title>
                    <Dialog.Description size="sm" className="mt-1">
                        Create a new project to host
                    </Dialog.Description>

                    <Separator dashed className="my-6" />

                    <form>
                        <div className="space-y-6">
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="date">
                                    Host date
                                </Label>
                                <div className="relative">
                                    <Input type="text" id="date" defaultValue={format(selected, 'PPP')} />
                                    <div className="absolute inset-y-0.5 right-0.5">
                                        <Popover.Root>
                                            <Popover.Trigger asChild>
                                                <Button.Root className="rounded-[calc(var(--btn-radius)-2px)]" variant="ghost" intent="gray" size="sm">
                                                    <Button.Icon type="only" size="sm">
                                                        <CalendarIcon />
                                                    </Button.Icon>
                                                </Button.Root>
                                            </Popover.Trigger>
                                            <Popover.Portal>
                                                <Popover.Content sideOffset={6} mixed className="z-50 max-w-fit">
                                                    <Calendar initialFocus mode="single" defaultMonth={selected} selected={selected} onSelect={(day: Date) => setSelected(day)} intent="primary" fancy />
                                                </Popover.Content>
                                            </Popover.Portal>
                                        </Popover.Root>
                                    </div>
                                </div>
                                <Caption>Description if any</Caption>
                            </div>
                            <div className="space-y-2.5">
                                <Label size="md">Country</Label>
                                <Select.Root defaultValue="DR Congo">
                                    <Select.Trigger className="w-full rounded-[--btn-radius]">
                                        <Select.Value placeholder="Country" />
                                        <Select.Icon />
                                    </Select.Trigger>

                                    <Select.Portal>
                                        <Select.Content mixed className="z-50">
                                            <Select.Viewport>
                                                {countries.map((country) => (
                                                    <SelectItem entry={country} key={country.name} />
                                                ))}
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                                <Caption>Selecting a region will optimize where your database is stored.</Caption>
                            </div>
                        </div>
                    </form>

                    <Dialog.Actions className="-mx-[--card-padding] border-t px-[--card-padding] pt-[--card-padding]">
                        <Dialog.Close asChild>
                            <Button.Root variant="outlined" intent="gray" size="sm">
                                <Button.Label>Previous</Button.Label>
                            </Button.Root>
                        </Dialog.Close>
                        <Button.Root variant="solid" intent="primary" size="sm">
                            <Button.Label>Host</Button.Label>
                        </Button.Root>
                    </Dialog.Actions>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const code = `import { Caption } from '@tailus-ui/typography';
import Button from '@tailus-ui/Button';
import Label from '@tailus-ui/Label';
import Separator from '@tailus-ui/Separator';
import Dialog from './Dialog';
import Input from '@tailus-ui/Input';
import Select from '@tailus-ui/Select';
import Calendar from '@tailus-ui/Calendar';
import { useState } from 'react';
import { format } from 'date-fns';
import Popover from '@tailus-ui/Popover';
import { Plus, Calendar as CalendarIcon } from 'lucide-react';

const countries = [
    { flag: '🇨🇩', name: 'DR Congo' },
    { flag: '🇨🇬', name: 'Congo Braza' },
    { flag: '🇦🇴', name: 'Angola' },
    { flag: '🇫🇷', name: 'France' },
    { flag: '🇬🇧', name: 'United Kingdom' },
    { flag: '🇪🇸', name: 'Spain' }
];

type Entry = {
    flag: string;
    name: string;
};

const SelectItem = ({ entry }: { entry: Entry }) => {
    return (
        <Select.Item value={entry.name} className="items-center pl-7">
            <Select.ItemIndicator />
            <Select.ItemText>
                <span role="img" aria-label={entry.name} className="mr-2">
                    {entry.flag}
                </span>
                {entry.name}
            </Select.ItemText>
        </Select.Item>
    );
};

export const NewProject2 = () => {
    const [selected, setSelected] = useState<Date>(new Date());
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button.Root size="sm">
                    <Button.Icon>
                        <Plus />
                    </Button.Icon>
                    <Button.Label>New Project</Button.Label>
                </Button.Root>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="z-40" />
                <Dialog.Content mixed className="z-50 max-w-lg">
                    <Dialog.Title>New project</Dialog.Title>
                    <Dialog.Description size="sm" className="mt-1">
                        Create a new project to host
                    </Dialog.Description>

                    <Separator dashed className="my-6" />

                    <form>
                        <div className="space-y-6">
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="date">
                                    Host date
                                </Label>
                                <div className="relative">
                                    <Input type="text" id="date" defaultValue={format(selected, 'PPP')} />
                                    <div className="absolute inset-y-0.5 right-0.5">
                                        <Popover.Root>
                                            <Popover.Trigger asChild>
                                                <Button.Root className="rounded-[calc(var(--btn-radius)-2px)]" variant="ghost" intent="gray" size="sm">
                                                    <Button.Icon type="only" size="sm">
                                                        <CalendarIcon />
                                                    </Button.Icon>
                                                </Button.Root>
                                            </Popover.Trigger>
                                            <Popover.Portal>
                                                <Popover.Content sideOffset={6} mixed className="z-50 max-w-fit">
                                                    <Calendar initialFocus mode="single" defaultMonth={selected} selected={selected} onSelect={(day: Date) => setSelected(day)} intent="primary" fancy />
                                                </Popover.Content>
                                            </Popover.Portal>
                                        </Popover.Root>
                                    </div>
                                </div>
                                <Caption>Description if any</Caption>
                            </div>
                            <div className="space-y-2.5">
                                <Label size="md">Country</Label>
                                <Select.Root defaultValue="DR Congo">
                                    <Select.Trigger className="w-full rounded-[--btn-radius]">
                                        <Select.Value placeholder="Country" />
                                        <Select.Icon />
                                    </Select.Trigger>

                                    <Select.Portal>
                                        <Select.Content mixed className="z-50">
                                            <Select.Viewport>
                                                {countries.map((country) => (
                                                    <SelectItem entry={country} key={country.name} />
                                                ))}
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                                <Caption>Selecting a region will optimize where your database is stored.</Caption>
                            </div>
                        </div>
                    </form>

                    <Dialog.Actions className="-mx-[--card-padding] border-t px-[--card-padding] pt-[--card-padding]">
                        <Dialog.Close asChild>
                            <Button.Root variant="outlined" intent="gray" size="sm">
                                <Button.Label>Previous</Button.Label>
                            </Button.Root>
                        </Dialog.Close>
                        <Button.Root variant="solid" intent="primary" size="sm">
                            <Button.Label>Host</Button.Label>
                        </Button.Root>
                    </Dialog.Actions>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};`;

export const newProject2Code = [
    {
        code,
        lang: 'tsx'
    }
];
