import { cn } from '../../lib/utils';
import { TailwindIcon, TSIcon, JSIcon, ReactIcon, SvelteIcon, VueIcon, TerminalIcon, AstroIcon, ViteIcon, JsonIcon, SvgIcon, CssIcon } from './icons';

export type FileType = "ts" | "js" | "tsx" | "jsx" | "svelte" | "vue" | "terminal" | "bash" | "tailwind" | "react" | "astro" | "vite" | "json" | "css" | "svg" | "css";

export interface FileProps extends React.HTMLAttributes<HTMLModElement> {
    file : FileType;
}

export const File: React.FC<FileProps> = ({
    className,
    children,
    file,
    ...props
  }) => {
   
    return(
        {
            ts: <TSIcon className={cn(className)} {...props} />,
            js: <JSIcon className={cn(className)} {...props} />,
            tsx: <ReactIcon className={cn(className)} {...props} />,
            jsx: <ReactIcon className={cn(className)} {...props} />,
            react: <ReactIcon className={cn(className)} {...props} />,
            svelte: <SvelteIcon className={cn(className)} {...props} />,
            vue: <VueIcon className={cn(className)} {...props} />,
            terminal: <TerminalIcon className={cn(className)} {...props} />,
            bash: <TerminalIcon className={cn(className)} {...props} />,
            tailwind: <TailwindIcon className={cn(className)} {...props} />,
            astro: <AstroIcon className={cn("size-4 text-white", className)} {...props} />,
            vite: <ViteIcon className={cn(className)} {...props} />,
            json: <JsonIcon className={cn(className)} {...props} />,
            svg: <SvgIcon className={cn(className)} {...props} />,
            css: <CssIcon className={cn(className)} {...props} />,
        }[file]
    )
  }

export default File;
