import { Overview } from "./Overview"
import { Centered } from "./Centered"
import { IOs } from "./IOs"

export const Mixed = () => (
    <div className="flex gap-6 flex-wrap">
        <Overview mixed/>
        <Centered mixed/>
        <IOs mixed/>
    </div>
)

export const mixedCode = [
    {
        code: `<AlertDialog.Content mixed data-shade="800">`,
        lang: "tsx",
    }
]