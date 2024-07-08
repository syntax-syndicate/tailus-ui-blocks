import React from "react";
import Toast from "./Toast";
import Button from "../button/Button.tsx";

// Custom hooks for managing state and effects
const useToastState = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    const timer = timerRef.current;

    return () => clearTimeout(timer);
  }, []);

  return {open, setOpen, eventDateRef, timerRef};
};

export const Overview = () => {
    const { open, setOpen, eventDateRef, timerRef } = useToastState();

    const handleOpen = () => {
        setOpen(false);
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
        }, 100);
    }

    return (
        <Toast.Provider>
            <Button.Root onClick={handleOpen}>
                <Button.Label>Schedule Catch up</Button.Label>
            </Button.Root>
            <Toast.Root open={open} onOpenChange={setOpen} mixed>
                <Toast.Title>Scheduled: Catch up</Toast.Title>
                <Toast.Description asChild>
                    <time dateTime={eventDateRef.current.toISOString()}>
                        {prettyDate(eventDateRef.current)}
                    </time>
                </Toast.Description>
            </Toast.Root>
            <Toast.Viewport />
        </Toast.Provider>
    )
}

const WEEK_IN_DAYS = 7;
const DATE_OPTIONS: Intl.DateTimeFormatOptions = {dateStyle: "full", timeStyle: "short"};

const oneWeekAway = () => {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + WEEK_IN_DAYS);
  return new Date(inOneWeek);
};

const prettyDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", DATE_OPTIONS).format(date);
};