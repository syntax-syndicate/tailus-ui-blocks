import type { ReactNode } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLModElement> {
    children: ReactNode;
    className?: string;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({ children, className }) => {
    return <div className={twMerge('relative flex aspect-auto min-h-32 items-center justify-center rounded-[--card-radius] border bg-white p-2 sm:mx-0 sm:min-h-56 sm:p-12 dark:bg-gray-925', className)}>{children}</div>;
};

export default ComponentPreview;
