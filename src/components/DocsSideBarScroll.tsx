import { useEffect, useRef } from 'react';
import type { ReactNode } from "react";
import ScrollArea from "@components/ScrollArea";

export default ({ children }: {children:ReactNode}) => {
    let timeoutId;
    const scrollAreaRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = (event) => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            sessionStorage.setItem("scrollPosition", event.target.scrollTop)
        }, 100); 
    }

    useEffect(() => {
        const currentScroll = sessionStorage.getItem('scrollPosition');
        if (currentScroll && scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = JSON.parse(currentScroll);
        }
    }, []);

    return (
        <ScrollArea.Root className="h-[calc(100dvh-10rem)] mt-auto overflow-y-auto w-full">
            <ScrollArea.Viewport ref={scrollAreaRef} onScrollCapture={handleScroll} className="h-full w-full">
                {children}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical"/>
        </ScrollArea.Root>
    )
}