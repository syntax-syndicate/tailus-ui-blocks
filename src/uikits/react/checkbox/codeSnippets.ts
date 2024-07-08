const componentCode = `import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React, {forwardRef} from "react";
import { checkbox, fancyCheckbox, type CheckboxProps as CheckboxVariants } from "@tailus/themer"

export interface CheckboxProps extends CheckboxVariants {
  className?: string;
  fancy?: boolean;
}

const CheckboxRoot = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
  >(({ className, intent, fancy, ...props }: CheckboxProps, forwardedRef) => {
    const classes = fancy ? fancyCheckbox({ intent, className }) : checkbox({ intent, className });
    return(
      <CheckboxPrimitive.Root
        ref={forwardedRef}
        className={classes}
        {...props}
      />
    )
});

const CheckboxIndicator = CheckboxPrimitive.Indicator;

export {
  CheckboxRoot,
  CheckboxIndicator,
};

export default {
  Root: CheckboxRoot,
  Indicator : CheckboxIndicator
}`;

const alignerCode = `import React from "react"
import { aligner, type AlignerProps as AlignerVariants } from "@tailus/themer"

export interface AlignerProps extends React.HTMLAttributes<HTMLDivElement>, AlignerVariants {}

export const Aligner = React.forwardRef<HTMLDivElement, AlignerProps>(
    ({className, children, fromRight, ...props }, forwardedRef) => {
        return (
            <div
                className={aligner({ fromRight, className})}
                ref={forwardedRef}
                children={children}
                {...props}
            />
        )
    })

export default Aligner;`;

export const installation = [
    {
        code: `npm install @radix-ui/react-checkbox`,
        lang: 'bash'
    },
    {
        code: componentCode,
        lang: 'tsx'
    }
];

export const aligner = {
    code: alignerCode,
    lang: 'tsx'
};
