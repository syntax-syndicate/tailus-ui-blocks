import Checkbox from './Checkbox';
import Label from '@react-ui/label/Label';
import { Aligner } from '@react-ui/form';
import { Caption } from '@components/typography';
import { CheckIcon } from 'lucide-react';

export const Overview = () => {
    return (
        <Aligner className="max-w-md">
            <Checkbox.Root id="c1">
                <Checkbox.Indicator asChild>
                    <CheckIcon className="size-3.5" strokeWidth={3} />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <Label htmlFor="c1">Create a private project</Label>
            <Caption as="p" size="sm" className="col-start-2 row-start-2">
                As a private project, only admins could rewrite
            </Caption>
        </Aligner>
    );
};

const code = `import Checkbox from "@tailus-ui/Checkbox";
import Label from "@tailus-ui/Label";
import Aligner from "@tailus-ui/Aligner";
import { Caption } from "@tailus-ui/typography";
import { CheckIcon } from "lucide-react";

export const MyComponent = () => {
    return (
        <Aligner className="max-w-md">
            <Checkbox.Root id="c1">
                <Checkbox.Indicator asChild>
                    <CheckIcon className="size-3.5" strokeWidth={3} />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <Label htmlFor="c1">
                Create a private project
            </Label>
            <Caption as="p" size="sm" className="row-start-2 col-start-2">As a private project, only admins could rewrite</Caption>
        </Aligner>
    );
}`;

export const overviewCode = [
    {
        code: code,
        lang: 'tsx'
    }
];
