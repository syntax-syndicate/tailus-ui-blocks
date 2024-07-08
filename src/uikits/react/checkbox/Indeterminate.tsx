import { useState } from 'react';
import Checkbox from './Checkbox';
import Label from '@react-ui/label/Label';
import { Aligner } from '@react-ui/form';
import { Caption } from '@components/typography';
import { CheckIcon, Minus } from 'lucide-react';

export const Indeterminate = () => {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');

    const handleCheckboxChange = () => {
        if (checked === 'indeterminate') {
            setChecked(true);
        } else if (checked === true) {
            setChecked(false);
        } else if (checked === false) {
            setChecked(true);
        }
    };

    return (
        <Aligner className="max-w-md">
            <Checkbox.Root checked={checked} id="c3" onClick={handleCheckboxChange}>
                <Checkbox.Indicator asChild>{checked === 'indeterminate' ? <Minus className="size-3.5" strokeWidth={3} /> : <CheckIcon className="size-3.5" strokeWidth={3} />}</Checkbox.Indicator>
            </Checkbox.Root>
            <Label htmlFor="c3">Create a private project</Label>
            <Caption as="p" size="sm" className="col-start-2 row-start-2">
                As a private project, only admins could rewrite
            </Caption>
        </Aligner>
    );
};

const code = `import { useState } from 'react';
import Checkbox from "@tailus-ui/Checkbox";
import Label from "@tailus-ui/Label";
import Aligner from "@tailus-ui/Aligner";
import { Caption } from "@tailus-ui/typography";
import { CheckIcon, Minus } from "lucide-react";

export const Indeterminate = () => {
    const [checked, setChecked] = useState<boolean | "indeterminate">('indeterminate');

    const handleCheckboxChange = () => {
        if (checked === "indeterminate") {
            setChecked(true);
        } else if (checked === true) {
            setChecked(false);
        } else if (checked === false) {
            setChecked(true);
        }
    };

    return (
        <Aligner className="max-w-md">
            <Checkbox.Root checked={checked} id="c3" onClick={handleCheckboxChange}>
                <Checkbox.Indicator asChild>
                    {
                        checked === "indeterminate" ?
                            <Minus className="size-3.5" strokeWidth={3} /> :
                            <CheckIcon className="size-3.5" strokeWidth={3} />
                    }
                </Checkbox.Indicator>
            </Checkbox.Root>
            <Label htmlFor="c3">
                Create a private project
            </Label>
            <Caption as="p" size="sm" className="row-start-2 col-start-2">As a private project, only admins could rewrite</Caption>
        </Aligner>
    );
}`;

export const indeterminateCode = [
    {
        code: code,
        lang: 'tsx'
    }
];
