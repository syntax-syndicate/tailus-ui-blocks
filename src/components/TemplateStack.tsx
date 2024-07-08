import type React from 'react';
import { AstroIcon, HTMLIcon, NuxtIcon, NextIcon} from './utilities/icons';
import type { ReactNode } from 'react';

export interface StackProps extends React.HTMLAttributes<HTMLModElement> {
    stack : "html" | "next" | "nuxt" | "astro";
}

export const TemplateStack:React.FC<StackProps> = ({stack}) => {
    return (
        {
            html: <StackCard><HTMLIcon className="h-4 w-4 -mb-0.5" /></StackCard>,
            next: <StackCard><NextIcon className="h-4 w-4" /></StackCard>,
            nuxt: <StackCard><NuxtIcon className="h-4 w-4" /></StackCard>,
            astro: <StackCard><AstroIcon className="h-4 w-4 -mb-0.5" /></StackCard>,
        }[stack]
    )
}

const StackCard = ({children}:{children:ReactNode}) => {
    return (
        <div className="size-7 rounded-[--card-radius] border bg-[--ui-bg] flex justify-center items-center dark:shadow-inner dark:shadow-white/5">
            {children}
        </div>
    )
}