import Button from '@react-ui/button/Button';
import { Text, Link, Caption, Title } from '@components/typography';
import Input from '@react-ui/input/Input';
import Label from '@react-ui/label/Label';
import type { BlockPreviewProps } from '@components/BlockPreview';
import { Google, Microsoft } from './icons';
import Separator from '@react-ui/separator/Separator';
import BrandIcon from '@components/utilities/BrandIcon';
import Card from '@react-ui/card/Card';

export function Register4() {
    return (
        <>
            <img className="fixed inset-0 hidden size-full object-cover dark:block" src="https://images.unsplash.com/photo-1496147539180-13929f8aa03a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className="fixed inset-0 size-full object-cover dark:hidden" src="https://images.unsplash.com/photo-1518972734183-c5b490a7c637?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <main className="relative">
                <Card variant="mixed" className="feedback-bg m-6 mx-auto flex h-full min-h-[calc(100vh-3rem)] p-6 sm:w-2/3 lg:w-1/2 lg:p-12">
                    <div data-rounded="medium" className="m-auto h-fit max-w-sm space-y-12">
                        <div>
                            <div>
                                <BrandIcon className="h-8" />
                                <Title size="lg" weight="semibold" className="mb-1 mt-12">
                                    Create your Tailus UI account
                                </Title>

                                <Text className="my-0" size="sm">
                                    Create an account to continue
                                </Text>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-3">
                                <Button.Root variant="soft" intent="gray" className="w-full">
                                    <Button.Icon type="leading" size="sm">
                                        <Google />
                                    </Button.Icon>
                                    <Button.Label>Google</Button.Label>
                                </Button.Root>

                                <Button.Root variant="soft" intent="gray" className="w-full">
                                    <Button.Icon type="leading" size="sm">
                                        <Microsoft />
                                    </Button.Icon>
                                    <Button.Label>Microsoft</Button.Label>
                                </Button.Root>
                            </div>

                            <form className="mx-auto mt-8 space-y-8">
                                <div className="space-y-6 rounded-[--btn-radius] shadow-sm shadow-gray-500/5">
                                    <div className="relative grid items-center gap-3 [grid-template-columns:1fr_auto_1fr]">
                                        <Separator />

                                        <Caption as="span" className="block" size="sm">
                                            Or continue with
                                        </Caption>

                                        <Separator />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-3">
                                            <div className="space-y-2.5">
                                                <Label size="sm" htmlFor="firstname">
                                                    First name
                                                </Label>
                                                <Input id="firstname" name="firstname" type="text" required variant="outlined" />
                                            </div>

                                            <div className="space-y-2.5">
                                                <Label size="sm" htmlFor="lastname">
                                                    Last name
                                                </Label>
                                                <Input id="lastname" name="lastname" type="text" required variant="outlined" />
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label size="sm" htmlFor="email">
                                                Your email
                                            </Label>
                                            <Input id="email" name="email" type="email" required variant="outlined" />
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label size="sm" htmlFor="password">
                                                Password
                                            </Label>
                                            <Input id="password" name="password" type="password" required variant="outlined" />
                                        </div>
                                    </div>
                                </div>

                                <Button.Root intent="neutral" className="w-full">
                                    <Button.Label>Create Account</Button.Label>
                                </Button.Root>
                            </form>
                        </div>

                        <Card variant="soft" data-shade="925" className="rounded-[calc(var(--card-radius)-0.25rem)] dark:bg-[--ui-bg]">
                            <Caption className="my-0" size="sm" align="center">
                                Already have an account ? {''}
                                <Link intent="neutral" size="sm" variant="underlined" href="/examples/forms/login1">
                                    Login
                                </Link>
                            </Caption>
                        </Card>
                    </div>
                </Card>
            </main>
        </>
    );
}

const code = `import Button from '@tailus-ui/Button';
import { Text, Link, Caption, Title } from '@tailus-ui/typography';
import Input from '@tailus-ui/Input';
import Label from '@tailus-ui/Label';
import { Google, Microsoft } from './icons';
import Separator from '@tailus-ui/Separator';
import Card from '@tailus-ui/Card';

export function Register4() {
    return (
        <>
            <img className="fixed inset-0 hidden size-full object-cover dark:block" src="https://images.unsplash.com/photo-1496147539180-13929f8aa03a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className="fixed inset-0 size-full object-cover dark:hidden" src="https://images.unsplash.com/photo-1518972734183-c5b490a7c637?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <main className="relative">
                <Card variant="mixed" className="feedback-bg m-6 mx-auto flex h-full min-h-[calc(100vh-3rem)] p-6 sm:w-2/3 lg:w-1/2 lg:p-12">
                    <div data-rounded="medium" className="m-auto h-fit max-w-sm space-y-12">
                        <div>
                            <div>
                                
                                // Your logo here

                                <Title size="lg" weight="semibold" className="mb-1 mt-12">
                                    Create your Tailus UI account
                                </Title>

                                <Text className="my-0" size="sm">
                                    Create an account to continue
                                </Text>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-3">
                                <Button.Root variant="soft" intent="gray" className="w-full">
                                    <Button.Icon type="leading" size="sm">
                                        <Google />
                                    </Button.Icon>
                                    <Button.Label>Google</Button.Label>
                                </Button.Root>

                                <Button.Root variant="soft" intent="gray" className="w-full">
                                    <Button.Icon type="leading" size="sm">
                                        <Microsoft />
                                    </Button.Icon>
                                    <Button.Label>Microsoft</Button.Label>
                                </Button.Root>
                            </div>

                            <form className="mx-auto mt-8 space-y-8">
                                <div className="space-y-6 rounded-[--btn-radius] shadow-sm shadow-gray-500/5">
                                    <div className="relative grid items-center gap-3 [grid-template-columns:1fr_auto_1fr]">
                                        <Separator />

                                        <Caption as="span" className="block" size="sm">
                                            Or continue with
                                        </Caption>

                                        <Separator />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-3">
                                            <div className="space-y-2.5">
                                                <Label size="sm" htmlFor="firstname">
                                                    First name
                                                </Label>
                                                <Input id="firstname" name="firstname" type="text" required variant="outlined" />
                                            </div>

                                            <div className="space-y-2.5">
                                                <Label size="sm" htmlFor="lastname">
                                                    Last name
                                                </Label>
                                                <Input id="lastname" name="lastname" type="text" required variant="outlined" />
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label size="sm" htmlFor="email">
                                                Your email
                                            </Label>
                                            <Input id="email" name="email" type="email" required variant="outlined" />
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label size="sm" htmlFor="password">
                                                Password
                                            </Label>
                                            <Input id="password" name="password" type="password" required variant="outlined" />
                                        </div>
                                    </div>
                                </div>

                                <Button.Root intent="neutral" className="w-full">
                                    <Button.Label>Create Account</Button.Label>
                                </Button.Root>
                            </form>
                        </div>

                        <Card variant="soft" data-shade="925" className="rounded-[calc(var(--card-radius)-0.25rem)] dark:bg-[--ui-bg]">
                            <Caption className="my-0" size="sm" align="center">
                                Already have an account ? {''}
                                <Link intent="neutral" size="sm" variant="underlined" href="">
                                    Login
                                </Link>
                            </Caption>
                        </Card>
                    </div>
                </Card>
            </main>
        </>
    );
}`;

export const register4Preview: BlockPreviewProps = {
    id: 'register4',
    title: 'Sign Up Example 4',
    code,
    category: 'Forms',
    description: 'Sign Up form wrapped in a card.',
    src: '/examples/forms/register4'
};
