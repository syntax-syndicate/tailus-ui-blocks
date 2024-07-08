import { Card } from "@components/Card"
import { Calendar } from "@react-ui/calendar/Calendar"

const selectedDates = Array.from({ length: 12 }, (_, i) => {
  const date = new Date();
  date.setMonth(i);
  date.setDate(Math.floor(Math.random() * 28) + 1);
  return date;
});

export const CalendarCard = () => {
    return (
        <Card variant="outlined" className="feedback-shadow">
            <Calendar
                selected={selectedDates}
                fromYear={2024}
                toYear={2024}
                handDrawn
                intent="primary"
            />
        </Card>
    )
}