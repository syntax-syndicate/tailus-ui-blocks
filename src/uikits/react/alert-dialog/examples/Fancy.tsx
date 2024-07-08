import { Overview } from "./Overview"
import { Centered } from "./Centered"
import { IOs } from "./IOs"

export const Fancy = () => (
    <div className="flex gap-6 flex-wrap">
        <Overview fancy/>
        <Centered fancy/>
        <IOs fancy/>
    </div>
)

export const fancyCode = [
    {
        code: `<AlertDialog.Content fancy data-shade="800">`,
        lang: "tsx",
    }
]