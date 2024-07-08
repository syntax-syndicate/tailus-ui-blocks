import { Title, Caption, Text } from "@components/typography";
import Button from "@react-ui/button/Button";
import {Card} from "@components/Card";
import { FormInput, FormControl, FormField, FormMessage, FormTextArea, FormLabel, FormRoot, Aligner } from "@react-ui/form"
import Label from "@react-ui/label/Label";
import { Separator } from "@radix-ui/react-select";
import Checkbox from "@react-ui/checkbox/Checkbox";
import CustomCheckIcon from "@components/utilities/CheckIcon";

export const NewProject = () => {
    return (
        <Card className="p-0 border bg-gray-50 dark:bg-gray-925 dark:border-gray-800/50 max-w-lg w-full" variant="soft">
            <Card variant="outlined" className="-m-px card-shadow">
                <Title size="lg" as="h3" weight="medium">New project</Title>
                <Text className="my-0">Create a new project to host</Text>

                <Separator className="my-6 h-px border-b border-dashed" />

                <FormRoot>
                    <div className="space-y-6" data-shade="800">
                        <FormField name="url" className="w-full space-y-2.5" variant="outlined" size="md">
                            <FormLabel size="md">Repository url *</FormLabel>
                            <FormControl asChild>
                                <FormInput
                                    type="url"
                                    required
                                    variant="mixed"
                                    size="md"
                                    className="rounded-[--btn-radius] dark:bg-[--ui-bg]"
                                />
                            </FormControl>
                            <Caption as="p">Description</Caption>
                            <FormMessage> </FormMessage>
                        </FormField>
                        <FormField name="visibility">
                            <Aligner>
                                <Checkbox.Root className="size-4" id="visibility" intent="primary" fancy>
                                    <Checkbox.Indicator>
                                        <CustomCheckIcon className="size-5" />
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                                <Label htmlFor="visibility">Create a private project</Label>
                                <Caption as="p" className="row-start-2 col-start-2">As a private project, only admins could rewrite</Caption>
                            </Aligner>
                        </FormField>
                        <FormField name="description" className="w-full space-y-2.5" variant="outlined" size="md">
                            <FormLabel size="md">Description</FormLabel>
                            <FormControl asChild>
                                <FormTextArea
                                    required
                                    variant="mixed"
                                    size="md"
                                    rows={4}
                                    placeholder="Add your project description"
                                    className="rounded-[--card-radius] dark:bg-[--ui-bg]"
                                />
                            </FormControl>
                            <FormMessage></FormMessage>
                        </FormField>
                    </div>
                </FormRoot>
            </Card>
            <div className="p-[calc(var(--card-padding)/2)] flex justify-end gap-3">
                <Button.Root variant="outlined" intent="gray" size="sm">
                    <Button.Label>Cancel</Button.Label>
                </Button.Root>
                <Button.Root variant="solid" intent="primary" size="sm">
                    <Button.Label>Next</Button.Label>
                </Button.Root>
            </div>
        </Card>
    )
}