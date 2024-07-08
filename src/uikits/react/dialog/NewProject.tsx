import { Caption } from '@components/typography';
import Button from '@react-ui/button/Button';
import { Aligner } from '@react-ui/form';
import Label from '@react-ui/label/Label';
import Separator from '@react-ui/separator/Separator';
import Checkbox from '@react-ui/checkbox/Checkbox';
import Dialog from './Dialog';
import { Check, Plus } from 'lucide-react';
import Input from '@react-ui/input/Input';
import Textarea from '@react-ui/textarea/Textarea';

export const NewProject = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button.Root size="sm">
                    <Button.Icon>
                        <Plus />
                    </Button.Icon>
                    <Button.Label>New Project</Button.Label>
                </Button.Root>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="z-40" />
                <Dialog.Content mixed className="z-50 max-w-lg">
                    <Dialog.Title>New project</Dialog.Title>
                    <Dialog.Description size="sm" className="mt-1">
                        Create a new project to host
                    </Dialog.Description>

                    <Separator dashed className="my-6" />

                    <form>
                        <div className="space-y-6">
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="url">
                                    Repository url *
                                </Label>
                                <Input type="url" id="url" required />
                                <Caption as="p">Description</Caption>
                            </div>
                            <Aligner>
                                <Checkbox.Root id="visibility">
                                    <Checkbox.Indicator>
                                        <Check className="size-3.5" strokeWidth={3} />
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                                <Label htmlFor="visibility">Create a private project</Label>
                                <Caption as="p" className="col-start-2">
                                    As a private project, only admins could rewrite
                                </Caption>
                            </Aligner>
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="message">
                                    Description
                                </Label>
                                <Textarea required id="message" placeholder="Add your project description" className="h-28 max-h-36 min-h-12" />
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
                            <Button.Label>Next</Button.Label>
                        </Button.Root>
                    </Dialog.Actions>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const code = `import { Caption } from '@tailus-ui/typography';
import Button from '@tailus-ui/Button';
import Aligner from '@tailus-ui/Aligner';
import Label from '@react-ui/Label';
import Separator from '@tailus-ui/Separator';
import Checkbox from '@tailus-ui/Checkbox';
import Dialog from '@tailus-ui/Dialog';
import { Check, Plus } from 'lucide-react';
import Input from '@tailus-ui/Input';
import Textarea from '@tailus-ui/Textarea';

export const NewProject = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button.Root size="sm">
                    <Button.Icon>
                        <Plus />
                    </Button.Icon>
                    <Button.Label>New Project</Button.Label>
                </Button.Root>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="z-40" />
                <Dialog.Content mixed className="z-50 max-w-lg">
                    <Dialog.Title>New project</Dialog.Title>
                    <Dialog.Description size="sm" className="mt-1">
                        Create a new project to host
                    </Dialog.Description>

                    <Separator dashed className="my-6" />

                    <form>
                        <div className="space-y-6">
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="url">
                                    Repository url *
                                </Label>
                                <Input type="url" id="url" required />
                                <Caption as="p">Description</Caption>
                            </div>
                            <Aligner>
                                <Checkbox.Root id="visibility">
                                    <Checkbox.Indicator>
                                        <Check className="size-3.5" strokeWidth={3} />
                                    </Checkbox.Indicator>
                                </Checkbox.Root>
                                <Label htmlFor="visibility">Create a private project</Label>
                                <Caption as="p" className="col-start-2">
                                    As a private project, only admins could rewrite
                                </Caption>
                            </Aligner>
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="message">
                                    Description
                                </Label>
                                <Textarea required id="message" placeholder="Add your project description" className="h-28 max-h-36 min-h-12" />
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
                            <Button.Label>Next</Button.Label>
                        </Button.Root>
                    </Dialog.Actions>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};`;

export const newProjectCode = [
    {
        code,
        lang: 'tsx'
    }
];
