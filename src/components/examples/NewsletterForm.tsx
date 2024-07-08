import { Caption, Text, Title } from "@components/typography"
import Button from "@react-ui/button/Button"
import { FormInput, FormMessage, FormControl, FormField, FormLabel, FormRoot, FormSubmit } from "@react-ui/form"


export const NewsletterForm = () => {
    return (
        <div className="max-w-md">
            <div>
                <Title size="2xl" weight="medium">Join our Newsletter</Title>
                <Text className="mt-6" size="base">Never miss an update about all our ressources, be the first to know about our next moves.</Text>
            </div>

            <FormRoot className="mt-6 space-y-6 mx-auto">
                <FormField name="email" className="w-full space-y-3" variant="outlined" size="lg" floating>
                    <div className="relative">
                        <FormControl asChild>
                            <FormInput
                                type="email"
                                required
                                placeholder=""
                                className="rounded-[--btn-radius] dark:bg-[--ui-bg] transition-none"
                            />
                        </FormControl>
                        <FormLabel>Your email</FormLabel>
                    </div>
                    <FormMessage match="valueMissing">
                        Please enter your email
                    </FormMessage>
                    <FormMessage match="typeMismatch">
                        Please provide a valid email
                    </FormMessage>
                </FormField>
                <FormSubmit asChild>
                    <Button.Root variant="solid" intent="primary" size="sm">
                        <Button.Label>Surbscribe</Button.Label>
                    </Button.Root>
                </FormSubmit>
            </FormRoot>
        </div>
    )
}