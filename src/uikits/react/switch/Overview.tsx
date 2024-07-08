import Switch from './Switch';
import Label from '@react-ui/label/Label';
import { Aligner } from '@react-ui/form';
import { Caption } from '@components/typography';

export const Overview = () => (
    <Aligner fromRight className="max-w-md">
        <Label htmlFor="airplane-mode">Airplane mode</Label>
        <Switch.Root className="mt-1" id="airplane-mode">
            <Switch.Thumb />
        </Switch.Root>
        <Caption as="p" size="base">
            Switch components are used to allow users to toggle between two states, such as on and off.
        </Caption>
    </Aligner>
);

const code = `import Switch from "@tailus-ui/Switch";
import Label from "@tailus-ui/Label";
import Aligner from "@tailus-ui/Aligner";
import { Caption } from "@tailus-ui/typography";

export const Overview = () => (
    <Aligner fromRight className="max-w-md">
        <Label htmlFor="airplane-mode">
            Airplane mode
        </Label>
        <Switch.Root className="mt-1" id="airplane-mode">
            <Switch.Thumb />
        </Switch.Root>
        <Caption as="p" size="base">Switch components are used to allow users to toggle between two states, such as on and off.</Caption>
    </Aligner>
)`;

export const overviewCode = [
    {
        code,
        lang: 'tsx'
    }
];
