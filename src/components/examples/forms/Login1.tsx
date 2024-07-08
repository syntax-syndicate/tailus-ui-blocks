import Card from '@react-ui/card/Card';
import Button from '@react-ui/button/Button';
import { Text, Link, Caption, Title } from '@components/typography';
import Input from '@react-ui/input/Input';
import Label from '@react-ui/label/Label';
import Separator from '@react-ui/separator/Separator';
import { Google, Microsoft } from './icons';
import type { BlockPreviewProps } from '@components/BlockPreview';

export function LoginExample1() {
    return (
        <main className="inset-0 z-10 m-auto h-fit max-w-md px-6 py-12 lg:absolute">
            <Card className="relative h-fit p-1 shadow-xl shadow-gray-950/10" variant="mixed">
                <div data-rounded="large" className="p-10">
                    <div>
                        <Title size="xl" className="mb-1">
                            Sign In to Tailus UI
                        </Title>
                        <Text className="my-0" size="sm">
                            Welcome back! Sign in to continue
                        </Text>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <Button.Root variant="outlined" intent="gray" size="sm" className="w-full">
                            <Button.Icon type="leading" size="xs">
                                <Google />
                            </Button.Icon>
                            <Button.Label>Google</Button.Label>
                        </Button.Root>
                        <Button.Root variant="outlined" intent="gray" size="sm" className="w-full">
                            <Button.Icon type="leading" size="xs">
                                <Microsoft />
                            </Button.Icon>
                            <Button.Label>Microsoft</Button.Label>
                        </Button.Root>
                    </div>

                    <form className="mx-auto mt-8 space-y-6">
                        <div className="space-y-6 rounded-[--btn-radius] shadow-sm shadow-gray-500/5">
                            <div className="relative my-6 grid items-center gap-3 [grid-template-columns:1fr_auto_1fr]">
                                <Separator className="h-px border-b" />
                                <Caption as="span" className="block" size="sm">
                                    Or continue with
                                </Caption>
                                <Separator className="h-px border-b" />
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2.5">
                                    <Label size="sm" htmlFor="email">
                                        Your email
                                    </Label>
                                    <Input id="email" name="email" type="email" required variant="outlined" size="md" />
                                </div>
                                <div className="space-y-2.5">
                                    <div className="flex items-center justify-between">
                                        <Label size="sm" htmlFor="password">
                                            Password
                                        </Label>
                                        <Link href="#" size="sm">
                                            Forgot your Password ?
                                        </Link>
                                    </div>
                                    <Input id="password" name="password" type="password" required variant="outlined" size="md" />
                                </div>
                            </div>
                        </div>

                        <Button.Root className="w-full">
                            <Button.Label>Sign In</Button.Label>
                        </Button.Root>
                    </form>
                </div>

                <Card variant="soft" data-shade="925" className="rounded-[calc(var(--card-radius)-0.25rem)] dark:bg-gray-925">
                    <Caption className="my-0" size="sm" align="center">
                        Don't have an account ?{' '}
                        <Link intent="neutral" size="sm" variant="underlined" href="/examples/forms/register1">
                            Create account
                        </Link>
                    </Caption>
                </Card>
            </Card>
        </main>
    );
}

const code = `import Card from '@tailus-ui/Card';
import Button from '@tailus-ui/Button';
import { Text, Link, Caption, Title } from '@tailus-ui/typography';
import Input from '@tailus-ui/Input';
import Label from '@tailus-ui/Label';
import Separator from '@tailus-ui/Separator';
import { Google, Microsoft } from './icons';

export function LoginExample1() {
    return (
        <main className="inset-0 z-10 m-auto h-fit max-w-md px-6 py-12 lg:absolute">
            <Card className="relative h-fit p-1 shadow-xl shadow-gray-950/10" variant="mixed">
                <div data-rounded="large" className="p-10">
                    <div>
                        <Title size="xl" className="mb-1">
                            Sign In to Tailus UI
                        </Title>
                        <Text className="my-0" size="sm">
                            Welcome back! Sign in to continue
                        </Text>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <Button.Root variant="outlined" intent="gray" size="sm" className="w-full">
                            <Button.Icon type="leading" size="xs">
                                <Google />
                            </Button.Icon>
                            <Button.Label>Google</Button.Label>
                        </Button.Root>
                        <Button.Root variant="outlined" intent="gray" size="sm" className="w-full">
                            <Button.Icon type="leading" size="xs">
                                <Microsoft />
                            </Button.Icon>
                            <Button.Label>Microsoft</Button.Label>
                        </Button.Root>
                    </div>

                    <form className="mx-auto mt-8 space-y-6">
                        <div className="space-y-6 rounded-[--btn-radius] shadow-sm shadow-gray-500/5">
                            <div className="relative my-6 grid items-center gap-3 [grid-template-columns:1fr_auto_1fr]">
                                <Separator className="h-px border-b" />
                                <Caption as="span" className="block" size="sm">
                                    Or continue with
                                </Caption>
                                <Separator className="h-px border-b" />
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2.5">
                                    <Label size="sm" htmlFor="email">
                                        Your email
                                    </Label>
                                    <Input id="email" name="email" type="email" required variant="outlined" size="md" />
                                </div>
                                <div className="space-y-2.5">
                                    <div className="flex items-center justify-between">
                                        <Label size="sm" htmlFor="password">
                                            Password
                                        </Label>
                                        <Link href="#" size="sm">
                                            Forgot your Password ?
                                        </Link>
                                    </div>
                                    <Input id="password" name="password" type="password" required variant="outlined" size="md" />
                                </div>
                            </div>
                        </div>

                        <Button.Root className="w-full">
                            <Button.Label>Sign In</Button.Label>
                        </Button.Root>
                    </form>
                </div>

                <Card variant="soft" data-shade="925" className="rounded-[calc(var(--card-radius)-0.25rem)] dark:bg-gray-925">
                    <Caption className="my-0" size="sm" align="center">
                        Don't have an account ?{' '}
                        <Link intent="neutral" size="sm" variant="underlined" href="/examples/forms/register1">
                            Create account
                        </Link>
                    </Caption>
                </Card>
            </Card>
        </main>
    );
}`;

export const login1Preview: BlockPreviewProps = {
    id: 'login1',
    title: 'Login Example 1',
    code,
    category: 'Forms',
    description: 'A simple login form with social login buttons wrapped in a card.',
    src: '/examples/forms/login1'
};
