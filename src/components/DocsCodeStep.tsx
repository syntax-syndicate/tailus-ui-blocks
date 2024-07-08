import CodeSnippet from "./utilities/CodeSnippet"
import { type FileType } from "./utilities/File"
import cn from "./../lib/utils"

interface DocsCodeStepProps extends React.HTMLAttributes<HTMLModElement>{
    code: string,
    lang: string,
    highlightedLines: string,
    highlightStart : string,
    file: FileType,
    filename: string,
    isCentered? : boolean
}

export const DocsCodeStep: React.FC<DocsCodeStepProps> = ({ 
    children,
    code,
    lang,
    highlightedLines,
    highlightStart,
    file,
    filename,
    isCentered=true,
    className,
 }) => {

    return (
        <div className={cn("mt-6 gap-6 grid sm:grid-cols-2 border-y", isCentered && "items-center", className)}>
            <div>
                {children}
            </div>
            <CodeSnippet className="my-6" code={code} lang={lang} file={file} filename={filename} highlightedLines={highlightedLines} highlightStart={highlightStart} />
        </div>
    )
}

export default DocsCodeStep