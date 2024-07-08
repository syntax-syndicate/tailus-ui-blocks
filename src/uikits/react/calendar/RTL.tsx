import { Card } from "@react-ui/card/Card"
import { Calendar } from "@react-ui/calendar/Calendar"
import { arSA } from 'date-fns/locale';

const selectedDates = Array.from({ length: 12 }, (_, i) => {
  const date = new Date();
  date.setMonth(i);
  date.setDate(Math.floor(Math.random() * 28) + 1);
  return date;
});

export const RTL = () => {
    return (
        <Card>
            <Calendar
                selected={selectedDates}
                fromYear={2024}
                toYear={2024}
                locale={arSA}
                dir="rtl"
            />
        </Card>
    )
}