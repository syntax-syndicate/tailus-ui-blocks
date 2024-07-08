import { Card } from "@react-ui/card/Card"
import { Calendar } from "@react-ui/calendar/Calendar"

const selectedDates = Array.from({ length: 12 }, (_, i) => {
  const date = new Date();
  date.setMonth(i);
  date.setDate(Math.floor(Math.random() * 28) + 1);
  return date;
});

export const HandDrawn = () => {
    return (
        <Card>
            <Calendar
                selected={selectedDates}
                fromYear={2024}
                toYear={2024}
                handDrawn
            />
        </Card>
    )
}