import Prism from 'prismjs';
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-json"
import "prismjs/components/prism-shell-session"
import "prismjs/plugins/line-highlight/prism-line-highlight"
import "@styles/code-line-highlight.css"
import "@styles/code-theme.css"
import { useEffect } from 'react';
import { type FileType } from "./File"
import CodeCopyButton from '../Button/CodeCopyButton';
import { twMerge } from 'tailwind-merge';
import ScrollArea from '@components/ScrollArea';

export interface CodeSnippetProps extends React.HTMLAttributes<HTMLModElement>{
    code: string,
    lang?: string,
    file?: FileType,
    filename?: string,
    highlightedLines?: string
    highlightStart?: string
    asUIBlock? : boolean
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
    code,
    lang,
    className,
    highlightedLines,
    highlightStart,
    asUIBlock
}) =>{

    useEffect(() => {
        Prism.highlightAll();
    }, [code, lang]);

    return (
        <div data-pagefind-ignore className={twMerge("w-full relative group/snippet rounded-[--card-radius] border dark:bg-gray-950/50 backdrop-blur-xl", className)}>
            {
                !asUIBlock &&
                <CodeCopyButton
                    code={code}
                    className="absolute z-10 ml-auto right-1 top-1 group rounded-lg opacity-0 scale-75 transition-all invisible duration-200 group-hover/snippet:opacity-100 group-hover/snippet:visible group-hover/snippet:scale-100"
                />
            }
            
            <ScrollArea.Root className={twMerge('max-h-[20rem]', asUIBlock && "max-h-[45rem]" )} type="scroll">
                <ScrollArea.Viewport className='w-full'>
                    <pre data-line={highlightedLines} data-start={highlightStart} className={`h-max text-sm p-4 w-full`}>
                        <code className={`language-${lang} font-mono text-sm`}>
                            {code}
                        </code>
                    </pre>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="horizontal" />
                <ScrollArea.Scrollbar orientation="vertical"/>
            </ScrollArea.Root>
        </div>
    )
}

export default CodeSnippet;