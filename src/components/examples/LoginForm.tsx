import { Card } from "@components/Card"
import { Caption, Link, Text, Title } from "@components/typography"
import BrandIcon from "@components/utilities/BrandIcon"
import Button from "@react-ui/button/Button"
import { FormInput, FormMessage, FormControl, FormField, FormLabel, FormRoot, FormSubmit } from "@react-ui/form"

export const LoginForm = () => {
    return (
        <Card className="p-0 border bg-gray-50 dark:bg-gray-925 dark:border-gray-800/50" variant="soft">
            <Card className="-m-px py-10 px-12 flex flex-col justify-center card-shadow" variant="outlined">
                <div>
                    <div className="mb-6 size-10 group mx-auto hidden justify-center items-center rounded-full [--radial-opacity:0.75] text-white dark:[--radial-opacity:0] [background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--radial-opacity))_0%,transparent_100%)] transition-[filter] duration-150 ease-in-out active:brightness-95 dark:shadow-inner dark:border-t dark:border-t-white/35 dark:shadow-white/20 bg-gray-900 [box-shadow:rgba(255,255,255,0.2)_0px_1px_0px_0px_inset,theme(colors.gray.900)_0px_0px_0px_1px] hover:brightness-125 dark:bg-white">
                        <BrandIcon className="m-auto !size-6 invert" />
                    </div>
                    <div className="mb-6 size-12 border p-0.5 rounded-full shadow-sm dark:shadow-gray-950">
                        <div data-shade="800" className="size-full overflow-hidden flex border bg-gray-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-700 rounded-full relative before:absolute before:inset-y-0 before:left-0 before:w-1/3 before:border-r dark:before:bg-gray-900/15 after:absolute after:right-0 after:top-0 after:left-1/3 after:h-1/3 after:border-b after:bg-gray-100 dark:after:bg-gray-900/50">
                            <BrandIcon className="relative z-[1] m-auto rounded-full bg-white dark:bg-gray-700" />
                        </div>
                    </div>
                    <Title size="lg">Welcome to Tailus UI</Title>
                    <Text className="my-0" size="base">Please Sign In to continue</Text>
                </div>
                <FormRoot data-shade="800" className="mt-6 space-y-6 mx-auto">
                    <div className="-space-y-px shadow-sm rounded-[--btn-radius] shadow-gray-500/5">
                        <FormField name="email" className="w-full space-y-2.5" variant="outlined" size="md">
                            <FormLabel size="md">Your email</FormLabel>
                                <FormControl asChild>
                                    <FormInput
                                        type="email"
                                        required
                                    variant="mixed"
                                    size="md"
                                        className="rounded-[--btn-radius] dark:bg-[--ui-bg]"
                                    />
                                </FormControl>
                            <FormMessage> </FormMessage>
                        </FormField>
                    </div>
                    <FormSubmit asChild>
                        <Button.Root variant="solid" intent="primary" size="sm" className="w-full">
                            <Button.Label>Continue</Button.Label>
                        </Button.Root>
                    </FormSubmit>
                </FormRoot>
            </Card>
            <div className="px-[--card-padding] py-[calc(var(--card-padding)/1.5)]">
                <Caption className="my-0" size="sm" align="center">New here ? <Link intent="neutral" size="sm" variant="underlined" href="#">Create an account</Link> </Caption>
            </div>
        </Card>
    )
}