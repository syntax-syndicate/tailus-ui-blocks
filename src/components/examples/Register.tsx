import { Card } from "@components/Card"
import { Caption, Link, Text, Title } from "@components/typography"
import BrandIcon from "@components/utilities/BrandIcon"
import { FormMessage } from "@radix-ui/react-form"
import Button from "@react-ui/button/Button"
import { FormInput, FormControl, FormField, FormLabel, FormRoot, FormSubmit } from "@react-ui/form"
import { Separator } from "@radix-ui/react-select";
import { FigmaLogoIcon} from "@radix-ui/react-icons"
import Avatar from "@react-ui/avatar/Avatar"

export const RegisterForm = () => {
    return (
        <Card className="relative p-0 md:p-1 md:grid md:grid-cols-2 dark:md:bg-gray-925 dark:md:border" variant="soft">
            <svg className="absolute pointer-events-none inset-0 h-full w-full stroke-gray-300 dark:stroke-gray-500/15 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" aria-hidden="true">
                <defs>
                    <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="100" height="100" x="50%" y="-1" patternUnits="userSpaceOnUse">
                        <path d="M100 200V.5M.5 .5H200" fill="none"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
            </svg>
            <div className="hidden relative p-10 md:flex justify-end items-end">
                <div>
                    <Text align="center" size="sm">
                        Great work on tailfolio template. This is one of the best personal website that I have seen so far :)
                    </Text>

                    <div className="flex gap-3 justify-center items-center">
                        <Avatar.Root size="sm">
                            <Avatar.Image src="https://tailus.io/images/reviews/yucel.webp" width="520" height="520" />
                            <Avatar.Fallback>RT</Avatar.Fallback>
                        </Avatar.Root>

                        <div className="flex flex-col">
                            <Title as="div" className="text-sm" weight="normal">Yucel Faruksahan</Title>
                            <Caption size="xs">Creator of Tailkits</Caption>
                        </div>
                    </div>
                </div>
            </div>
            <Card className="border md:border-none relative p-10 flex flex-col justify-center md:rounded-[calc(var(--card-radius)-4px)] feedback-shadow" variant="elevated">
                <div>
                    <div className="mb-6 mx-auto size-12 border p-0.5 rounded-full shadow-sm dark:shadow-gray-950">
                        <div data-shade="800" className="size-full overflow-hidden flex border bg-gray-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-700 rounded-full relative before:absolute before:inset-y-0 before:left-0 before:w-1/3 before:border-r dark:before:bg-gray-900/15 after:absolute after:right-0 after:top-0 after:left-1/3 after:h-1/3 after:border-b after:bg-gray-100 dark:after:bg-gray-900/50">
                            <BrandIcon className="relative z-[1] m-auto rounded-full bg-white dark:bg-gray-700" />
                        </div>
                    </div>
                    <Title size="lg" align="center">Welcome to Tailus UI</Title>
                    <Text className="my-0" size="base" align="center">Create an account to continue</Text>
                </div>
                <FormRoot data-shade="800" className="mt-6 space-y-6 mx-auto">
                    <div className="space-y-4 shadow-sm rounded-[--btn-radius] shadow-gray-500/5">
                        <div>
                            <Button.Root variant="outlined" intent="gray" size="sm" className="w-full">
                                <Button.Icon type="leading" size="sm">
                                    <FigmaLogoIcon />
                                </Button.Icon>
                                <Button.Label>
                                    Continue with Figma
                                </Button.Label>
                            </Button.Root>
                        </div>
                        <div className="mt-6 relative grid gap-3 items-center [grid-template-columns:1fr_auto_1fr]">
                            <Separator className="h-px border-b"/>
                                <Caption as="span" className="block">Or continue with</Caption>
                            <Separator className="h-px border-b"/>
                        </div>
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

                <Separator className="my-6 h-px border-b border-dashed" />

                <Caption className="my-0" size="sm" align="center">Already have an account ? <Link intent="neutral" size="sm" variant="underlined" href="#">Login</Link> </Caption>
            </Card>
        </Card>
    )
}