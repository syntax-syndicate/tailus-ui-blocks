import { Caption } from "@components/typography";
import Button from "@react-ui/button/Button";
import { Calendar as CalendarIcon } from "lucide-react";
import { FormInput, FormControl, FormField, FormLabel, FormRoot } from "@react-ui/form"
import Popover from "@components/Popover";
import { Calendar } from "@react-ui/calendar/Calendar";
import { useState } from "react";
import { format } from "date-fns"

export const DatePicker = () => {
    const [selected, setSelected] = useState<Date>(new Date());

    return (
        <FormRoot>
            <FormField name="date" className="w-64 space-y-2.5" size="md">
                <FormLabel size="md">Host date</FormLabel>
                <div className="relative">
                    <FormControl asChild>
                        <FormInput
                            type="text"
                            variant="mixed"
                            size="md"
                            defaultValue={format(selected, "PPP")}
                            className="max-w-sm rounded-[--btn-radius] dark:bg-[--ui-bg]"
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
                                <Popover.Content sideOffset={6} mixed className="max-w-fit z-50">
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
                <Caption as="p">Description</Caption>
            </FormField>
        </FormRoot>
    )
}

const exampleCode = `import { Caption } from "@tailus-ui/typography";
import Button from "@tailus-ui/Button";
import { Calendar as CalendarIcon } from "lucide-react";
import { FormInput, FormControl, FormField, FormLabel, FormRoot } from "@tailus-ui/form"
import Popover from "@tailus-ui/Popover";
import { Calendar } from "@tailus-ui/Calendar";
import { useState } from "react";
import { format } from "date-fns"

export const DatePicker = () => {
    const [selected, setSelected] = useState<Date>(new Date());

    return (
        <FormRoot>
            <FormField name="date" className="w-64 space-y-2.5" size="md">
                <FormLabel size="md">Host date</FormLabel>
                <div className="relative">
                    <FormControl asChild>
                        <FormInput
                            type="text"
                            variant="mixed"
                            size="md"
                            defaultValue={format(selected, "PPP")}
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
                                <Popover.Content sideOffset={6} mixed className="max-w-fit">
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
                <Caption as="p">Description</Caption>
            </FormField>
        </FormRoot>
    )
}`

export const datePickerCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]