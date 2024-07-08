import Label from "@react-ui/label/Label";
import Textarea from "@react-ui/textarea/Textarea";
import { Caption } from "@components/typography";

export const Disabled = () => (
     <div className="max-w-xs w-full space-y-2 [--input-px:theme(spacing.3)] *:has-[:disabled]:opacity-50 *:has-[:disabled]:pointer-events-none" data-rounded="medium" data-shade="900">
        <Label htmlFor="message3">Message</Label>
        <Textarea disabled id="message3" rows={3} className="px-3 rounded-[--card-radius] dark:bg-[--ui-bg]"/>
        <Caption>Enter your name</Caption>
    </div>
)

const code = `import Label from "@tailus-ui/Label";
import Textarea from "@tailus-ui/Textarea";
import { Caption } from "@tailus-ui/typography";

const WithLabel = () => (
    <div className="space-y-2 *:has-[:disabled]:opacity-50 *:has-[:disabled]:pointer-events-none">
        <Label htmlFor="message">Message</Label>
        <Textarea disabled id="message" rows={3} />
        <Caption>Enter your message</Caption>
    </div>
)`

export const disabledCode = [
    {
        code: code,
        lang: 'tsx',
    }
]