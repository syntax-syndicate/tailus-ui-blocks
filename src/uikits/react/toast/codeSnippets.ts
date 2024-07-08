const componentCode = `import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import {toast, type ToastProps} from "@tailus/themer";

const {root, title, description, viewport} = toast()

const ToastProvider = ToastPrimitive.Provider;
const ToastAction = ToastPrimitive.Action;
const ToastClose = ToastPrimitive.Close;

const ToastRoot = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentProps<typeof ToastPrimitive.Root> & ToastProps
  >(({fancy=false, mixed=false, withAction=false, className, ...props}, forwardedRef) => {
    
    if (mixed && fancy) {
      throw new Error("The properties 'fancy' and 'mixed' cannot be used together.")
    }

  return (
    <ToastPrimitive.Root
      ref={forwardedRef}
      className={root({fancy, mixed, withAction, className})}
      {...props}
    />
  );
});

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>((props, forwardedRef) => {
  return (
    <ToastPrimitive.Title
      ref={forwardedRef}
      className={title({class:props.className})}
      {...props}
    />
  );
});

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>((props, forwardedRef) => {
  return (
    <ToastPrimitive.Description
      ref={forwardedRef}
      className={description({class:props.className})}
      {...props}
    />
  );
});

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>((props, forwardedRef) => {
  return (
    <ToastPrimitive.Viewport
      ref={forwardedRef}
      className={viewport({ class: props.className })}
      {...props}
    />
  );
});

export default {
  Provider: ToastProvider,
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  Viewport: ToastViewport,
  Action: ToastAction,
  Close: ToastClose,
}

export {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastAction,
  ToastClose,
}`

const overviewCode = `import React from "react";
import Toast from "@tailus-ui/Toast";
import Button from "@tailus-ui/Button";

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
};`

export const installation = [
  {
    code: `npm install @radix-ui/react-toast`,
    lang: "bash",
  },
  {
    code: componentCode,
    lang: "tsx",
  }
]

export const overview = [
  {
    code: overviewCode,
    lang : "tsx"
  }
]