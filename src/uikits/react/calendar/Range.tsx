import { Card } from "@react-ui/card/Card"
import { Calendar } from "@react-ui/calendar/Calendar"
import { useState } from "react"
import { type DateRange } from "react-day-picker"

export const Range = () => {
    const today = new Date();
    const fiveDaysLater = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5);

    const [date, setDate] = useState<DateRange | undefined>({
        from: today,
        to: fiveDaysLater,
    });

    return (
        <Card>
            <Calendar
                mode="range"
                selected={date}
                fromYear={2024}
                toYear={2024}
            />
        </Card>
    )
}