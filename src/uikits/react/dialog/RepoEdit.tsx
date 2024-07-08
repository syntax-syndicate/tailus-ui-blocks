import { Caption } from '@components/typography';
import Button from '@react-ui/button/Button';
import { Aligner } from '@react-ui/form';
import Label from '@react-ui/label/Label';
import Separator from '@react-ui/separator/Separator';
import Checkbox from '@react-ui/checkbox/Checkbox';
import Input from '@react-ui/input/Input';
import Textarea from '@react-ui/textarea/Textarea';
import Dialog from './Dialog';
import { Check, Pencil } from 'lucide-react';

export const RepositoryEdit = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button.Root size="sm">
                    <Button.Icon size="xs">
                        <Pencil />
                    </Button.Icon>
                    <Button.Label>Edit Repo</Button.Label>
                </Button.Root>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="z-40" />
                <Dialog.Content mixed className="z-50 max-w-lg">
                    <Dialog.Title>Edit Repository</Dialog.Title>
                    <Dialog.Description className="mt-1" size="sm">
                        Edit repository details
                    </Dialog.Description>

                    <Separator dashed className="my-6" />

                    <form>
                        <div className="space-y-6" data-rounded="large">
                            <div className="w-full space-y-2.5">
                                <Label size="md" htmlFor="website">
                                    Website *
                                </Label>
                                <Input name="website" id="website" type="url" required defaultValue="https://tailus.io" className="rounded-[--btn-radius] dark:bg-[--ui-bg]" />
                                <Caption as="p">Description</Caption>
                            </div>
                            <div className="w-full space-y-2.5">
                                <Label size="md" htmlFor="description2">
                                    Description
                                </Label>
                                <Textarea name="description2" id="description2" required rows={3} placeholder="Add your project description" defaultValue="Highly customizable components for crafting modern, personalized websites and applications." className="rounded-[--card-radius] dark:bg-[--ui-bg]" />
                            </div>
                            <div className="space-y-3">
                                <Aligner>
                                    <Checkbox.Root defaultChecked id="releases">
                                        <Checkbox.Indicator>
                                            <Check className="size-3.5" strokeWidth={3} />
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                    <Label htmlFor="releases">Releases</Label>
                                </Aligner>
                                <Aligner>
                                    <Checkbox.Root id="packages">
                                        <Checkbox.Indicator>
                                            <Check className="size-3.5" strokeWidth={3} />
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                    <Label htmlFor="packages">Packages</Label>
                                </Aligner>
                                <Aligner>
                                    <Checkbox.Root defaultChecked id="env">
                                        <Checkbox.Indicator>
                                            <Check className="size-3.5" strokeWidth={3} />
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                    <Label htmlFor="env">Environments</Label>
                                </Aligner>
                            </div>
                        </div>
                    </form>
                    <Dialog.Actions className="-mx-[--card-padding] border-t px-[--card-padding] pt-[--card-padding]">
                        <Dialog.Close asChild>
                            <Button.Root variant="outlined" intent="gray" size="sm">
                                <Button.Label>Cancel</Button.Label>
                            </Button.Root>
                        </Dialog.Close>
                        <Button.Root variant="solid" intent="primary" size="sm">
                            <Button.Label>Save Changes</Button.Label>
                        </Button.Root>
                    </Dialog.Actions>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const code = `import { Caption } from '@tailus-ui/typography';
import Button from '@tailus-ui/Button';
import Aligner from '@tailus-ui/form';
import Label from '@tailus-ui/Label';
import Separator from '@tailus-ui/Separator';
import Checkbox from '@tailus-ui/Checkbox';
import Input from '@tailus-ui/Input';
import Textarea from '@tailus-ui/Textarea';
import Dialog from '@tailus-ui/Dialog';
import { Check, Pencil } from 'lucide-react';

export const RepositoryEdit = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button.Root size="sm">
                    <Button.Icon size="xs">
                        <Pencil />
                    </Button.Icon>
                    <Button.Label>Edit Repo</Button.Label>
                </Button.Root>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="z-40" />
                <Dialog.Content mixed className="z-50 max-w-lg">
                    <Dialog.Title>Edit Repository</Dialog.Title>
                    <Dialog.Description className="mt-1" size="sm">
                        Edit repository details
                    </Dialog.Description>

                    <Separator dashed className="my-6" />

                    <form>
                        <div className="space-y-6" data-rounded="large">
                            <div className="w-full space-y-2.5">
                                <Label size="md" htmlFor="website">
                                    Website *
                                </Label>
                                <Input name="website" id="website" type="url" required defaultValue="https://tailus.io" className="rounded-[--btn-radius] dark:bg-[--ui-bg]" />
                                <Caption as="p">Description</Caption>
                            </div>
                            <div className="w-full space-y-2.5">
                                <Label size="md" htmlFor="description2">
                                    Description
                                </Label>
                                <Textarea name="description2" id="description2" required rows={3} placeholder="Add your project description" defaultValue="Highly customizable components for crafting modern, personalized websites and applications." className="rounded-[--card-radius] dark:bg-[--ui-bg]" />
                            </div>
                            <div className="space-y-3">
                                <Aligner>
                                    <Checkbox.Root defaultChecked id="releases">
                                        <Checkbox.Indicator>
                                            <Check className="size-3.5" strokeWidth={3} />
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                    <Label htmlFor="releases">Releases</Label>
                                </Aligner>
                                <Aligner>
                                    <Checkbox.Root id="packages">
                                        <Checkbox.Indicator>
                                            <Check className="size-3.5" strokeWidth={3} />
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                    <Label htmlFor="packages">Packages</Label>
                                </Aligner>
                                <Aligner>
                                    <Checkbox.Root defaultChecked id="env">
                                        <Checkbox.Indicator>
                                            <Check className="size-3.5" strokeWidth={3} />
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                    <Label htmlFor="env">Environments</Label>
                                </Aligner>
                            </div>
                        </div>
                    </form>
                    <Dialog.Actions className="-mx-[--card-padding] border-t px-[--card-padding] pt-[--card-padding]">
                        <Dialog.Close asChild>
                            <Button.Root variant="outlined" intent="gray" size="sm">
                                <Button.Label>Cancel</Button.Label>
                            </Button.Root>
                        </Dialog.Close>
                        <Button.Root variant="solid" intent="primary" size="sm">
                            <Button.Label>Save Changes</Button.Label>
                        </Button.Root>
                    </Dialog.Actions>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};`;

export const repoEditCode = [
    {
        code,
        lang: 'tsx'
    }
];
