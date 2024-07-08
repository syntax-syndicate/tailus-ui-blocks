import type { ReactNode } from 'react';
import Select from './Select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import BrandIcon from './utilities/BrandIcon';

export default ({ defaultValue }: { defaultValue: string }) => {
    const handleClick = (value) => {
        window.location.href = `/${value}/get-started/introduction`;
    };
    return (
        <Select.Root defaultValue={defaultValue} onValueChange={(value) => handleClick(value)}>
            <Select.Trigger variant="mixed" className='relative z-50 rounded-xl bg-white py-1 pl-1 pr-2 justify-between dark:bg-gray-925'>
                <Select.Value placeholder="UI Kits" />
                <ChevronDownIcon className="size-4 opacity-35" />
            </Select.Trigger>
            <Select.Portal>
                <Select.Content position="popper" align="center" sideOffset={5} intent="gray" fancy className="relative z-[60] bg-white dark:bg-gray-900" style={{ width: "var(--radix-select-trigger-width)" }}>
                    <Select.Viewport>
                        <SelectItem title="Tailus UI React" value='react' caption='React'>
                            <svg className="size-5 m-auto text-gray-950 dark:text-white" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.60001 20C4.90263 20 3.27476 19.3257 2.07453 18.1255C0.874296 16.9252 0.200012 15.2974 0.200012 13.6C0.200012 11.9026 0.874296 10.2747 2.07453 9.07452C3.27476 7.87428 4.90263 7.2 6.60001 7.2V20ZM6.60001 0V6.4H0.200012V0H6.60001ZM10.6 6.4C9.75132 6.4 8.93739 6.06286 8.33727 5.46274C7.73715 4.86263 7.40001 4.04869 7.40001 3.2C7.40001 2.35131 7.73715 1.53737 8.33727 0.937258C8.93739 0.337142 9.75132 0 10.6 0C11.4487 0 12.2626 0.337142 12.8628 0.937258C13.4629 1.53737 13.8 2.35131 13.8 3.2C13.8 4.04869 13.4629 4.86263 12.8628 5.46274C12.2626 6.06286 11.4487 6.4 10.6 6.4Z" fill="currentColor" />
                            </svg>
                        </SelectItem>
                        <SelectItem title="Themer" value='themer' caption='Styling'>
                            <BrandIcon className='h-6 w-6' />
                        </SelectItem>
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
};

const SelectItem = ({ title, caption, value, children }: { title: string, value:string, caption: string, children:ReactNode}) => (
    <Select.Item className="outline-none p-1 pr-4 h-fit rounded-[8px]" value={value}>
        <Select.ItemText>
            <div className="flex items-center gap-2">
                <div className="size-9 flex justify-center items-center rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700/50">
                    {children}
                </div>  
                <div className="text-left">
                    <div className="leading-none text-gray-800 dark:text-white text-sm font-medium">
                        {title}
                    </div>
                    <span className="block mt-0.5 text-xs text-gray-600 dark:text-gray-400">{caption}</span>
                </div>           
            </div>
        </Select.ItemText>
    </Select.Item>
)