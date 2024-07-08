import Button from '@react-ui/button/Button';
import { Text, Link, Caption, Title } from '@components/typography';
import Input from '@react-ui/input/Input';
import Label from '@react-ui/label/Label';
import type { BlockPreviewProps } from '@components/BlockPreview';
import { Google, Microsoft } from './icons';
import Separator from '@react-ui/separator/Separator';
import BrandIcon from '@components/utilities/BrandIcon';

export function Register3() {
    return (
        <>
            <img className="fixed inset-y-0 right-0 hidden h-screen w-1/2 object-cover object-left lg:block" src="https://images.unsplash.com/photo-1707581471193-183252f0d85b?q=80&w=2877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <main className="inset-0 z-10 m-auto h-fit px-8 py-12 lg:absolute lg:grid lg:w-screen lg:max-w-full lg:grid-cols-2 lg:gap-32 lg:px-0">
                <div>
                    <div className="mx-auto max-w-md lg:ml-auto lg:mr-0 lg:pr-12">
                        <div>
                            <div>
                                <BrandIcon />
                                <Title size="xl" className="mb-1 mt-12">
                                    Welcome to Tailus UI
                                </Title>
                                <Text className="my-0" size="sm">
                                    Create an account to continue
                                </Text>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-3">
                                <Button.Root variant="outlined" intent="gray" className="w-full">
                                    <Button.Icon type="leading" size="sm">
                                        <Google />
                                    </Button.Icon>
                                    <Button.Label>Google</Button.Label>
                                </Button.Root>

                                <Button.Root variant="outlined" intent="gray" className="w-full">
                                    <Button.Icon type="leading" size="sm">
                                        <Microsoft />
                                    </Button.Icon>
                                    <Button.Label>Microsoft</Button.Label>
                                </Button.Root>
                            </div>

                            <form className="mx-auto mt-8 space-y-6">
                                <div className="space-y-6 rounded-[--btn-radius] shadow-sm shadow-gray-500/5">
                                    <div className="relative grid items-center gap-3 [grid-template-columns:1fr_auto_1fr]">
                                        <Separator />

                                        <Caption as="span" className="block" size="sm">
                                            Or continue with
                                        </Caption>

                                        <Separator />
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-3">
                                            <div className="space-y-2.5">
                                                <Label size="sm" htmlFor="firstname">
                                                    First name
                                                </Label>
                                                <Input id="firstname" name="firstname" type="text" required size="md" />
                                            </div>
                                            <div className="space-y-2.5">
                                                <Label size="sm" htmlFor="lastname">
                                                    Last name
                                                </Label>
                                                <Input id="lastname" name="lastname" type="text" required size="md" />
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label size="sm" htmlFor="email">
                                                Your email
                                            </Label>
                                            <Input id="email" name="email" type="email" required size="md" />
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label size="sm" htmlFor="password">
                                                Password
                                            </Label>
                                            <Input id="password" name="password" type="password" required size="md" />
                                        </div>
                                    </div>
                                </div>

                                <Button.Root className="w-full">
                                    <Button.Label>Create Account</Button.Label>
                                </Button.Root>
                            </form>
                        </div>

                        <div className="mt-12">
                            <Caption className="my-0" size="sm" align="center">
                                Already have an account ?{''}
                                <Link intent="neutral" size="sm" variant="underlined" href="/examples/forms/login2">
                                    Login
                                </Link>
                            </Caption>
                        </div>
                    </div>
                </div>
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

export function Register3() {
    return (
        <>
            <img className="fixed inset-y-0 right-0 hidden h-screen w-1/2 object-cover object-left lg:block" src="https://images.unsplash.com/photo-1707581471193-183252f0d85b?q=80&w=2877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <main className="inset-0 z-10 m-auto h-fit px-8 py-12 lg:absolute lg:grid lg:w-screen lg:max-w-full lg:grid-cols-2 lg:gap-32 lg:px-0">
                <div>
                    <div className="mx-auto max-w-md lg:ml-auto lg:mr-0 lg:pr-12">
                        <div>
                            <div>
                                
                                // Your logo here

                                <Title size="xl" className="mb-1 mt-12">
                                    Welcome to Tailus UI
                                </Title>
                                <Text className="my-0" size="sm">
                                    Create an account to continue
                                </Text>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-3">
                                <Button.Root variant="outlined" intent="gray" className="w-full">
                                    <Button.Icon type="leading" size="sm">
                                        <Google />
                                    </Button.Icon>
                                    <Button.Label>Google</Button.Label>
                                </Button.Root>

                                <Button.Root variant="outlined" intent="gray" className="w-full">
                                    <Button.Icon type="leading" size="sm">
                                        <Microsoft />
                                    </Button.Icon>
                                    <Button.Label>Microsoft</Button.Label>
                                </Button.Root>
                            </div>

                            <form className="mx-auto mt-8 space-y-6">
                                <div className="space-y-6 rounded-[--btn-radius] shadow-sm shadow-gray-500/5">
                                    <div className="relative grid items-center gap-3 [grid-template-columns:1fr_auto_1fr]">
                                        <Separator />

                                        <Caption as="span" className="block" size="sm">
                                            Or continue with
                                        </Caption>

                                        <Separator />
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-3">
                                            <div className="space-y-2.5">
                                                <Label size="sm" htmlFor="firstname">
                                                    First name
                                                </Label>
                                                <Input id="firstname" name="firstname" type="text" required size="md" />
                                            </div>
                                            <div className="space-y-2.5">
                                                <Label size="sm" htmlFor="lastname">
                                                    Last name
                                                </Label>
                                                <Input id="lastname" name="lastname" type="text" required size="md" />
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label size="sm" htmlFor="email">
                                                Your email
                                            </Label>
                                            <Input id="email" name="email" type="email" required size="md" />
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label size="sm" htmlFor="password">
                                                Password
                                            </Label>
                                            <Input id="password" name="password" type="password" required size="md" />
                                        </div>
                                    </div>
                                </div>

                                <Button.Root className="w-full">
                                    <Button.Label>Create Account</Button.Label>
                                </Button.Root>
                            </form>
                        </div>

                        <div className="mt-12">
                            <Caption className="my-0" size="sm" align="center">
                                Already have an account ?{''}
                                <Link intent="neutral" size="sm" variant="underlined" href="/examples/forms/login2">
                                    Login
                                </Link>
                            </Caption>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}`;

export const register3Preview: BlockPreviewProps = {
    id: 'register3',
    title: 'Sign Up Example 3',
    code,
    category: 'Forms',
    description: 'Page with social buttons and a background image on right.',
    src: '/examples/forms/register3'
};
