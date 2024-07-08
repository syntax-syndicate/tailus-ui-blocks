import { Title, Caption, Text } from "@components/typography";
import Button from "@react-ui/button/Button";
import {Card} from "@components/Card";
import { Check, ChevronDown, Calendar as CalendarIcon } from "lucide-react";
import { type ReactNode } from "react";
import { FormInput, FormControl, FormField, FormMessage, FormLabel, FormRoot } from "@react-ui/form"
import Select from "@components/Select";
import Label from "@react-ui/label/Label";
import { Separator } from "@radix-ui/react-select";
import Popover from "@components/Popover";
import { Calendar } from "@react-ui/calendar/Calendar";
import { useState } from "react";
import { format } from "date-fns"

const countries = ["🇨🇩 DR Congo", "🇨🇬 Congo Braza", "🇦🇴 Angola", "🇫🇷 France", "🇬🇧 United Kingdom", "🇪🇸 Spain"];

export const NewProject2 = () => {
    const [selected, setSelected] = useState<Date>(new Date());

    return (
        <Card className="p-0 border bg-gray-50 dark:bg-gray-925 dark:border-gray-800/50 max-w-lg w-full" variant="soft">
            <Card variant="outlined" className="-m-px card-shadow">
                <Title size="lg" as="h3" weight="medium">New project</Title>
                <Text className="my-0">Create a new project to host</Text>

                <Separator className="my-6 h-px border-b border-dashed" />

                <FormRoot>
                    <div className="space-y-6" data-shade="800">
                        <FormField name="date" className="w-full space-y-2.5" variant="outlined" size="md">
                            <FormLabel size="md">Host date</FormLabel>
                            <div className="relative">
                                <FormControl asChild>
                                    <FormInput
                                        type="text"
                                        variant="mixed"
                                        size="md"
                                        defaultValue={format(selected, "PPP")}
                                        className="rounded-[--btn-radius] dark:bg-[--ui-bg]"
                                    />
                                </FormControl>
                                <div className="absolute right-0.5 inset-y-0.5">
                                    <Popover.Root>
                                        <Popover.Trigger asChild>
                                            <Button.Root className="rounded-[calc(var(--btn-radius)-2px)]" variant="ghost" intent="gray" size="sm">
                                                <Button.Icon type="only" size="sm">
                                                    <CalendarIcon />
                                                </Button.Icon>
                                            </Button.Root>
                                        </Popover.Trigger>
                                        <Popover.Portal>
                                            <Popover.Content sideOffset={6} fancy className="max-w-fit">
                                                <Calendar
                                                    initialFocus
                                                    mode="single"
                                                    defaultMonth={selected}
                                                    selected={selected}
                                                    onSelect={(day: Date) => setSelected(day)}
                                                    intent="primary"
                                                    fancy
                                                />
                                            </Popover.Content>
                                        </Popover.Portal>
                                    </Popover.Root>
                                </div>
                            </div>
                            <Caption as="p">Description</Caption>
                            <FormMessage> </FormMessage>
                        </FormField>
                        <div className="space-y-2.5 -mb-0.5">
                            <Label size="md">Country</Label>
                            <Select.Root defaultValue="🇨🇩 DR Congo">
                                <Select.Trigger variant="mixed" size="md" className="rounded-[calc(var(--btn-radius)-3px)]">
                                    <Select.Value placeholder="Role" />
                                    <Select.TriggerIcon className="ml-auto">
                                        <ChevronDown className="size-3.5" />
                                    </Select.TriggerIcon>
                                </Select.Trigger>

                                <Select.Portal>
                                    <Select.Content mixed variant="solid" data-shade="glassy">
                                        <Select.Viewport>
                                            {
                                                countries.map((country) => (
                                                    <SelectItem value={country} key={country}>{country}</SelectItem>
                                                ))
                                            }
                                        </Select.Viewport>
                                    </Select.Content>
                                </Select.Portal>
                            </Select.Root>
                            <Caption>Selecting a region will optimize where your database is stored.</Caption>
                        </div>
                    </div>
                </FormRoot>
            </Card>
            <div className="p-[calc(var(--card-padding)/2)] flex justify-end gap-3">
                <Button.Root variant="outlined" intent="gray" size="sm">
                    <Button.Label>Previous</Button.Label>
                </Button.Root>
                <Button.Root variant="solid" intent="primary" size="sm">
                    <Button.Label>Host</Button.Label>
                </Button.Root>
            </div>
        </Card>
    )
}

export const SelectItem = ({value, children}:{value:string, children:ReactNode}) => {
  return (
      <Select.Item value={value}>
        <Select.ItemIndicator>
            <Check />
        </Select.ItemIndicator>
        <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
};