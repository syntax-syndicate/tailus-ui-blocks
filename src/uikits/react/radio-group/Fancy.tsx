import * as RadioGroup from '@radix-ui/react-radio-group';

export const FancyRadioGroup = () => (
    <form className="w-72 p-[--card-padding] rounded-[--card-radius] bg-gray-100 dark:bg-gray-900">
        <fieldset className="block relative border border-gray-300 rounded-md outline-1 outline -outline-offset-2 outline-white dark:outline-gray-800 dark:border-gray-950">
            <legend className="absolute left-2 text-xs block -top-2 px-1 bg-gray-100 dark:bg-gray-900 text-[--body-text-color]">Select Gender</legend>

            <RadioGroup.Root className='space-y-2 p-6'>
                <div className="flex gap-2 items-center">
                    <RadioGroup.Item 
                        value="male"
                        id="male"
                        className="scale-90 relative size-4 rounded-full border border-gray-400 bg-[--ui-bg] data-[state=checked]:bg-transparent data-[state=checked]:before:hidden before:absolute before:inset-0 before:size-3.5 before:m-auto before:rounded-full before:border before:border-gray-100 before:shadow-inner before:shadow-gray-950/30"
                    >
                        <RadioGroup.Indicator className='size-2.5 absolute inset-0 m-auto rounded-full bg-blue-800 border-[0.5px] border-gray-950/35 [background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,1)_0%,transparent_100%)]'/>
                    </RadioGroup.Item>
                    <label htmlFor="male" className='text-sm text-[--title-text-color]'>Male</label>
                </div>      
                <div className="flex gap-2 items-center">
                    <RadioGroup.Item 
                        value="female"
                        id="female"
                        className="scale-90 relative size-4 rounded-full border border-gray-400 bg-[--ui-bg] data-[state=checked]:bg-transparent data-[state=checked]:before:hidden before:absolute before:inset-0 before:size-3.5 before:m-auto before:rounded-full before:border before:border-gray-100 before:shadow-inner before:shadow-gray-950/30"
                    >
                        <RadioGroup.Indicator className='size-2.5 absolute inset-0 m-auto rounded-full bg-blue-800 border-[0.5px] border-gray-950/35 [background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,1)_0%,transparent_100%)]'/>
                    </RadioGroup.Item>
                    <label htmlFor="female" className='text-sm text-[--title-text-color]'>Female</label>
                </div>           
            </RadioGroup.Root>
        </fieldset>
    </form>
)