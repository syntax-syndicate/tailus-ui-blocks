import Popover from "@react-ui/popover/Popover";
import { Calendar } from "@react-ui/calendar/Calendar"
import Button from "@react-ui/button/Button";
import { useState, type ReactNode } from "react";
import { format } from "date-fns"
import { type DateRange } from "react-day-picker"
import { CalendarIcon } from "@radix-ui/react-icons";
import ToggleGroup from "@react-ui/toggle-group/ToggleGroup"
import Select from "@react-ui/select/Select";
import Separator from "@react-ui/separator/Separator"
import { Title } from "@components/typography";
import { FormInput } from "@react-ui/form";

export const WithPresetsInputs = () => {
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

    const [date, setDate] = useState<DateRange | undefined>({
        from: lastMonth,
        to: today,
    })

    const handleValueChange = (value: string) => {
        const today = new Date();
        let from, to;
        switch (value) {
            case 'today':
                from = to = today;
                break;
            case 'yesterday':
                from = to = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
                break;
            case 'last-week':
                from = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
                to = today;
                break;
            case 'last-month':
                from = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
                to = today;
                break;
            case 'last-3-months':
                from = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
                to = today;
                break;
            case 'last-12-months':
                from = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
                to = today;
                break;
            case 'month-to-date':
                from = new Date(today.getFullYear(), today.getMonth(), 1);
                to = today;
                break;
            case 'life-time':
                from = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
                to = today;
                break;
            default:
                break;
        }
        setDate({ from, to });
    }
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button.Root variant="outlined" intent="gray">
                    <Button.Icon type="leading">
                        <CalendarIcon />
                    </Button.Icon>
                    <Button.Label className="text-sm">
                        {date?.from ? (
                            date.to ? (
                                <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                            ) : (
                            <span>Select a date</span>
                        )}
                    </Button.Label>
                </Button.Root>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content sideOffset={6} mixed data-shade="900" className="z-40 pb-0 sm:pt-0 max-w-fit">
                    <div className="sm:flex sm:gap-[--card-padding] sm:divide-x">
                        <ToggleGroup.Root
                            className="hidden h-fit space-y-2 sm:block py-[--card-padding]"
                            type="single"
                            onValueChange={handleValueChange}
                            defaultValue="last-month"
                            intent="primary"
                            size="sm"
                        >
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="today">Today</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="yesterday">Yesterday</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="last-week">Last Week</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="last-month">Last Month</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="last-3-months">Last 3 Months</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="last-12-months">Last 12 Months</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="month-to-date">Month to date</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="life-time">Life time</ToggleGroup.Item>
                        </ToggleGroup.Root>
                        <div className="sm:hidden">
                            <Select.Root onValueChange={handleValueChange} defaultValue="last-month" >
                                <Select.Trigger>
                                    <Select.Value placeholder="Pick a range" />
                                    <Select.Icon />
                                </Select.Trigger>

                                <Select.Portal>
                                    <Select.Content mixed position="popper" sideOffset={6} data-shade="800" className="z-50 w-[--radix-select-trigger-width]">
                                        <Select.Viewport>
                                            <SelectItem value="today">Today</SelectItem>
                                            <SelectItem value="yesterday">Yesterday</SelectItem>
                                            <SelectItem value="last-week">Last Week</SelectItem>
                                            <SelectItem value="last-month">Last Month</SelectItem>
                                            <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                                            <SelectItem value="last-12-months">Last 12 Months</SelectItem>
                                            <SelectItem value="month-to-date">Month to date</SelectItem>
                                            <SelectItem value="life-time">Life time</SelectItem>
                                        </Select.Viewport>
                                    </Select.Content>
                                </Select.Portal>
                            </Select.Root>
                        </div>
                        <div className="sm:pl-[--card-padding] sm:py-[--card-padding]">
                            <div hidden className="sm:block">
                                <Title as="h3" size="base">Pick a date</Title>
                                <div className="mt-4 grid gap-3 items-center [grid-template-columns:1fr_auto_1fr]">
                                    <FormInput variant="outlined" size="md" className="px-3 rounded-[--btn-radius]" placeholder="From" defaultValue={date?.from ? format(date.from, "LLL dd, y") : ""} />
                                    <Separator className="w-2" />
                                    <FormInput variant="outlined" size="md" className="px-3 rounded-[--btn-radius]" placeholder="To" defaultValue={date?.to ? format(date.to, "LLL dd, y") : ""} />
                                </div>
                            </div>
                            <div className="-mx-[--card-padding]">
                                <Separator className="mt-4 sm:mb-6"/>
                            </div>
                            <div className="overflow-y-auto h-72 py-6 sm:py-0 sm:h-fit sm:overflow-visible">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={2}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-[--card-padding] mb-4">
                        <Separator />
                    </div>
                    <div className="flex gap-3 justify-end pb-4">
                        <Popover.Close asChild className="relative top-auto bottom-auto">
                            <Button.Root variant="outlined" intent="gray" size="sm">
                                <Button.Label>Cancel</Button.Label>
                            </Button.Root>
                        </Popover.Close>
                        <Button.Root variant="solid" intent="primary" size="sm">
                            <Button.Label>Apply</Button.Label>
                        </Button.Root>
                    </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

export const SelectItem = ({value, children}:{value:string, children:ReactNode}) => {
  return (
      <Select.Item value={value}>
        <Select.ItemIndicator />
        <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
};

const exampleCode = `import Popover from "@tailus-ui/Popover";
import { Calendar } from "@tailus-ui/Calendar"
import Button from "@tailus-ui/Button";
import { useState, type ReactNode } from "react";
import { format } from "date-fns"
import { type DateRange } from "react-day-picker"
import { CalendarIcon } from "@radix-ui/react-icons";
import ToggleGroup from "@tailus-ui/ToggleGroup"
import Select from "@tailus-ui/Select";
import Separator from "@tailus-ui/Separator"
import { Title } from "@tailus/typography";
import { FormInput } from "@tailus-ui/form";

export const WithPresetsInputs = () => {
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

    const [date, setDate] = useState<DateRange | undefined>({
        from: lastMonth,
        to: today,
    })

    const handleValueChange = (value: string) => {
        const today = new Date();
        let from, to;
        switch (value) {
            case 'today':
                from = to = today;
                break;
            case 'yesterday':
                from = to = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
                break;
            case 'last-week':
                from = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
                to = today;
                break;
            case 'last-month':
                from = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
                to = today;
                break;
            case 'last-3-months':
                from = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
                to = today;
                break;
            case 'last-12-months':
                from = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
                to = today;
                break;
            case 'month-to-date':
                from = new Date(today.getFullYear(), today.getMonth(), 1);
                to = today;
                break;
            case 'life-time':
                from = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
                to = today;
                break;
            default:
                break;
        }
        setDate({ from, to });
    }
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button.Root variant="outlined" intent="gray">
                    <Button.Icon type="leading">
                        <CalendarIcon />
                    </Button.Icon>
                    <Button.Label className="text-sm">
                        {date?.from ? (
                            date.to ? (
                                <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                            ) : (
                            <span>Select a date</span>
                        )}
                    </Button.Label>
                </Button.Root>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content sideOffset={6} mixed className="pb-0 sm:pt-0 max-w-fit">
                    <div className="sm:flex sm:gap-[--card-padding] sm:divide-x">
                        <ToggleGroup.Root
                            className="hidden h-fit space-y-2 sm:block py-[--card-padding]"
                            type="single"
                            onValueChange={handleValueChange}
                            defaultValue="last-month"
                            intent="primary"
                            size="sm"
                        >
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="today">Today</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="yesterday">Yesterday</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="last-week">Last Week</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="last-month">Last Month</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="last-3-months">Last 3 Months</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="last-12-months">Last 12 Months</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="month-to-date">Month to date</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start" value="life-time">Life time</ToggleGroup.Item>
                        </ToggleGroup.Root>
                        <div className="sm:hidden">
                            <Select.Root onValueChange={handleValueChange} defaultValue="last-month" >
                                <Select.Trigger>
                                    <Select.Value placeholder="Pick a range" />
                                    <Select.Icon />
                                </Select.Trigger>

                                <Select.Portal>
                                    <Select.Content mixed position="popper" sideOffset={6} data-shade="800" className="w-[--radix-select-trigger-width]">
                                        <Select.Viewport>
                                            <SelectItem value="today">Today</SelectItem>
                                            <SelectItem value="yesterday">Yesterday</SelectItem>
                                            <SelectItem value="last-week">Last Week</SelectItem>
                                            <SelectItem value="last-month">Last Month</SelectItem>
                                            <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                                            <SelectItem value="last-12-months">Last 12 Months</SelectItem>
                                            <SelectItem value="month-to-date">Month to date</SelectItem>
                                            <SelectItem value="life-time">Life time</SelectItem>
                                        </Select.Viewport>
                                    </Select.Content>
                                </Select.Portal>
                            </Select.Root>
                        </div>
                        <div className="sm:pl-[--card-padding] sm:py-[--card-padding]">
                            <div hidden className="sm:block">
                                <Title as="h3" size="base">Pick a date</Title>
                                <div className="mt-4 grid gap-3 items-center [grid-template-columns:1fr_auto_1fr]">
                                    <FormInput variant="outlined" size="md" className="px-3" placeholder="From" defaultValue={date?.from ? format(date.from, "LLL dd, y") : ""} />
                                    <Separator className="w-2" />
                                    <FormInput variant="outlined" size="md" className="px-3" placeholder="To" defaultValue={date?.to ? format(date.to, "LLL dd, y") : ""} />
                                </div>
                            </div>
                            <div className="-mx-[--card-padding]">
                                <Separator className="mt-4 sm:mb-6"/>
                            </div>
                            <div className="overflow-y-auto h-72 sm:h-fit sm:overflow-visible">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={2}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-[--card-padding] mb-4">
                        <Separator />
                    </div>
                    <div className="flex gap-3 justify-end pb-4">
                        <Popover.Close asChild className="relative top-auto bottom-auto">
                            <Button.Root variant="outlined" intent="gray" size="sm">
                                <Button.Label>Cancel</Button.Label>
                            </Button.Root>
                        </Popover.Close>
                        <Button.Root variant="solid" intent="primary" size="sm">
                            <Button.Label>Apply</Button.Label>
                        </Button.Root>
                    </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

export const SelectItem = ({value, children}:{value:string, children:ReactNode}) => {
  return (
      <Select.Item value={value}>
        <Select.ItemIndicator />
        <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
};`

export const withPresetsInputsCode = [
    {
        code: exampleCode,
        lang: "tsx",
    },
]