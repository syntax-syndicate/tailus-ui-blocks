import type { ReactNode } from "react";
import React from "react";
import cn from "../lib/utils";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLModElement> {
    children: ReactNode,
    className?: string,
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
    children,
    className,
 }) => {

    return (
        <div className={cn("relative flex justify-center items-center p-2 sm:p-12 aspect-auto sm:mx-0 min-h-32 sm:min-h-56 rounded-[--card-radius] border bg-white dark:bg-gray-925", className)}>
            {children}
        </div>   
    )
}

export default ComponentPreview;