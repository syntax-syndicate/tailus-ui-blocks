import { Title, Caption, Text } from "@components/typography";
import Button from "@react-ui/button/Button";
import {Card} from "@components/Card";
import { Aligner } from "@react-ui/form"
import Label from "@react-ui/label/Label";
import Separator from "@react-ui/separator/Separator";
import Checkbox from "@react-ui/checkbox/Checkbox";
import CustomCheckIcon from "@components/utilities/CheckIcon";
import Input from "@react-ui/input/Input";
import Textarea from "@react-ui/textarea/Textarea";

export const RepositoryEdit = () => {
    return (
        <Card className="p-0 overflow-hidden max-w-lg w-full feedback-shadow dark:shadow-lg dark:shadow-gray-950/50" variant="mixed">
            <div className="p-[--card-padding]">
                <Title size="base" as="h3" weight="medium">Edit Repository</Title>
                <Text className="mb-0 mt-1" size="sm">Edit repository details</Text>

                <Separator dashed className="my-6" />

                <form>
                    <div className="space-y-6">
                        <div className="w-full space-y-2.5">
                            <Label size="md" htmlFor="website">Website *</Label>
                            <Input
                                name="website"
                                id="website"
                                type="url"
                                required
                                variant="mixed"
                                size="md"
                                defaultValue="https://tailus.io"
                                className="rounded-[--btn-radius] dark:bg-[--ui-bg]"
                            />
                            <Caption as="p">Description</Caption>
                        </div>
                        <div className="w-full space-y-2.5">
                            <Label size="md" htmlFor="description">Description</Label>
                            <Textarea
                                name="description"
                                id="description"
                                required
                                variant="mixed"
                                size="md"
                                rows={3}
                                placeholder="Add your project description"
                                defaultValue="Highly customizable components for crafting modern, personalized websites and applications."
                                className="rounded-[--card-radius] dark:bg-[--ui-bg]"
                            />
                        </div>
                        <div className="space-y-3">
                            <Aligner>
                                <Checkbox.Root defaultChecked className="size-4" id="releases" intent="primary">
                                    <Checkbox.Indicator>
                                        <CustomCheckIcon className="size-5" />
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                                <Label htmlFor="releases">Releases</Label>
                            </Aligner>
                            <Aligner>
                                <Checkbox.Root className="size-4" id="packages" intent="primary">
                                    <Checkbox.Indicator>
                                        <CustomCheckIcon className="size-5" />
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                                <Label htmlFor="packages">Packages</Label>
                            </Aligner>
                            <Aligner>
                                <Checkbox.Root defaultChecked className="size-4" id="env" intent="primary">
                                    <Checkbox.Indicator>
                                        <CustomCheckIcon className="size-5" />
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                                <Label htmlFor="env">Environments</Label>
                            </Aligner>
                        </div>
                    </div>
                </form>
            </div>
            <div className="border-t p-[--card-padding] flex justify-end gap-3 bg-[--ui-bg]">
                <Button.Root variant="outlined" intent="gray" size="sm">
                    <Button.Label>Cancel</Button.Label>
                </Button.Root>
                <Button.Root variant="solid" intent="primary" size="sm">
                    <Button.Label>Save Changes</Button.Label>
                </Button.Root>
            </div>
        </Card>
    )
}