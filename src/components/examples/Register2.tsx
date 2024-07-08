import { Caption, Link, Text, Title } from "@components/typography"
import BrandIcon from "@components/utilities/BrandIcon"
import Button from "@react-ui/button/Button"
import { FormRoot } from "@react-ui/form"
import { Separator } from "@radix-ui/react-select";
import { FigmaLogoIcon} from "@radix-ui/react-icons"

export const RegisterForm2 = () => {
    return (
        <div>
            <div>
                <div className="mb-6 mx-auto size-12 border p-0.5 rounded-full shadow-sm dark:shadow-gray-950">
                    <div data-shade="800" className="size-full overflow-hidden flex border bg-gray-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-700 rounded-full relative before:absolute before:inset-y-0 before:left-0 before:w-1/3 before:border-r dark:before:bg-gray-900/15 after:absolute after:right-0 after:top-0 after:left-1/3 after:h-1/3 after:border-b after:bg-gray-100 dark:after:bg-gray-900/50">
                        <BrandIcon className="relative z-[1] m-auto rounded-full bg-white dark:bg-gray-700" />
                    </div>
                </div>
                <Title size="lg" align="center">Welcome to Tailus UI</Title>
                <Text className="my-0" size="base" align="center">Create an account to continue</Text>
            </div>

            <div className="space-y-6 my-6 mx-auto max-w-[14rem]">
                <FormRoot data-shade="800" className="space-y-">
                    <div className="space-y-4 shadow-sm rounded-[--btn-radius] shadow-gray-500/5">
                        <div>
                            <Button.Root variant="outlined" intent="gray" size="md" className="w-full">
                                <Button.Icon type="leading" size="sm">
                                    <FigmaLogoIcon />
                                </Button.Icon>
                                <Button.Label>
                                    Continue with Figma
                                </Button.Label>
                            </Button.Root>
                        </div>
                    </div>
                </FormRoot>

                <Separator className="h-px border-b border-dashed" />
            </div>

            <Caption className="my-0" size="sm" align="center">Already have an account ? <Link intent="neutral" size="sm" variant="underlined" href="#">Login</Link> </Caption>
        </div>
    )
}