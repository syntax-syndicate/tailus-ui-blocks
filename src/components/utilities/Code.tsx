import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const codeVariants = cva(['text-sm rounded-md px-1.5 py-0.5 dark:border-white/5 border font-mono'], {
    variants: {
        intent: {
            primary: "bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-950/60 dark:text-primary-300",
            secondary: "bg-secondary-100 text-secondary-700 border-secondary-200 dark:bg-secondary-950/60 dark:text-secondary-300",
            success: "bg-success-100 text-success-700 border-success-200 dark:bg-success-950/60 dark:text-success-300",
            danger: "bg-danger-100 text-danger-700 border-danger-200 dark:bg-danger-950/60 dark:text-danger-300",
            warning: "bg-warning-100 text-warning-800 border-warning-200 dark:bg-warning-950/60 dark:text-warning-300",
            info: "bg-info-100 text-info-700 border-info-200 dark:bg-info-950/60 dark:text-info-300",
            accent: "bg-accent-100 text-accent-700 border-accent-200 dark:bg-accent-950/60 dark:text-accent-300",
            gray : "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800/70 dark:text-white",
        }
    },
    defaultVariants: {
        intent: 'gray',
    }
  });


export interface CodeProps extends React.HTMLAttributes<HTMLModElement>, VariantProps<typeof codeVariants> {}

export const Code: React.FC<CodeProps> = ({
    className,
    intent,
    children,
    ...props
  }) => {
   
    return(
        <code className={cn(codeVariants({ intent, className }))} {...props}>
            {children}
        </code>
    )
  }

Code.defaultProps = {
    intent: "gray"
}

export default Code;
