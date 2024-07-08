import Input from "@react-ui/input/Input";
import Label from "./Label";

export const Overview = () => (
    <div className="space-y-2" data-rounded="medium" data-shade="900">
        <Label size="md" htmlFor="name">Full Name</Label>
        <Input className="px-3 rounded-[--btn-radius] dark:bg-[--ui-bg]" size="md" variant="mixed" id="name"/>
    </div>
)