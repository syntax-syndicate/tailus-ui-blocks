import RadioGroup from './RadioGroup';
import Label from '@react-ui/label/Label';
import { Aligner } from '@react-ui/form';
import { Caption } from '@components/typography';

export const Overview = () => (
    <RadioGroup.Root aria-label="User feedback" defaultValue="problem" className="space-y-4">
        <Aligner>
            <RadioGroup.Item value="problem" id="problem">
                <RadioGroup.Indicator />
            </RadioGroup.Item>
            <Label htmlFor="problem">Solved my problem</Label>
            <Caption className="col-start-2">Description</Caption>
        </Aligner>
        <Aligner>
            <RadioGroup.Item value="understanding" id="understanding">
                <RadioGroup.Indicator />
            </RadioGroup.Item>
            <Label htmlFor="understanding">Easy understanding</Label>
            <Caption className="col-start-2">Description</Caption>
        </Aligner>
        <Aligner>
            <RadioGroup.Item value="other" id="other">
                <RadioGroup.Indicator />
            </RadioGroup.Item>
            <Label htmlFor="other">Other</Label>
            <Caption className="col-start-2">Description</Caption>
        </Aligner>
    </RadioGroup.Root>
);

const code = `import RadioGroup from "@tailus-ui/RadioGroup";
import Label from "@tailus-ui/Label";
import Aligner from "@tailus-ui/Aligner";
import { Caption } from "@tailus-ui/typography";

export const MyComponent = () => (
    <RadioGroup.Root
        aria-label="User feedback"
        defaultValue="problem"
        className="space-y-4"
    >   
        <Aligner>
            <RadioGroup.Item value="problem" id="problem">
                <RadioGroup.Indicator />
            </RadioGroup.Item>
            <Label htmlFor="problem">Solved my problem</Label>
            <Caption className="col-start-2">Description</Caption>
        </Aligner>
        <Aligner>
            <RadioGroup.Item value="understanding" id="understanding">
                <RadioGroup.Indicator />
            </RadioGroup.Item>
            <Label htmlFor="understanding">Easy understanding</Label>
            <Caption className="col-start-2">Description</Caption>
        </Aligner>
        <Aligner>
            <RadioGroup.Item value="other" id="other">
                <RadioGroup.Indicator />
            </RadioGroup.Item>
            <Label htmlFor="other">Other</Label>
            <Caption className="col-start-2">Description</Caption>
        </Aligner>
    </RadioGroup.Root>
)`;

export const overviewCode = [
    {
        code,
        lang: 'tsx'
    }
];
