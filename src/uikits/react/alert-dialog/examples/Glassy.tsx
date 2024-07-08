import { Overview } from "./Overview"

export const Glassy = () => (
    <div className="flex gap-6 flex-wrap">
        <Overview glassy/>
        <Overview fancy glassy/>
        <Overview fancy glassy/>
    </div>
)

export const glassyCode = [
    {
        code: `<AlertDialog.Content data-shade="glassy">
<AlertDialog.Content mixed data-shade="glassy">
<AlertDialog.Content fancy data-shade="glassy">`,
        lang: "tsx",
    }
]