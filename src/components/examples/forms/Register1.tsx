import Button from '@react-ui/button/Button';
import { Text, Link, Caption, Title } from '@components/typography';
import Input from '@react-ui/input/Input';
import Label from '@react-ui/label/Label';
import type { BlockPreviewProps } from '@components/BlockPreview';
import Card from '@react-ui/card/Card';
import { Check } from 'lucide-react';
import BrandLogo from '@components/utilities/BrandLogo';
import Avatar from '@react-ui/avatar/Avatar';
import { Google, Microsoft } from './icons';
import Separator from '@react-ui/separator/Separator';

export function Register1() {
    return (
        <main className="z-10 m-auto max-w-lg px-6 py-6 sm:py-12 md:py-20 lg:absolute lg:inset-0 lg:m-auto lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-16 lg:px-12 xl:gap-32 xl:px-0">
            <div className="py-6">
                <BrandLogo className="h-7" />

                <div className="my-12 hidden space-y-6 lg:block">
                    <div className="grid gap-3 [grid-template-columns:auto_1fr]">
                        <div className="flex size-6 rounded-full border bg-[--ui-bg]">
                            <Check strokeWidth={3} className="m-auto size-3 text-primary-600 dark:text-primary-400" />
                        </div>

                        <div className="space-y-2">
                            <Title as="span" size="base" weight="medium">
                                Get Started
                            </Title>
                            <Text size="sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</Text>
                        </div>
                    </div>

                    <div className="grid gap-3 [grid-template-columns:auto_1fr]">
                        <div className="flex size-6 rounded-full border bg-[--ui-bg]">
                            <Check strokeWidth={3} className="m-auto size-3 text-primary-600 dark:text-primary-400" />
                        </div>

                        <div className="space-y-2">
                            <Title as="span" size="base" weight="medium">
                                Start Build
                            </Title>
                            <Text size="sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</Text>
                        </div>
                    </div>

                    <div className="grid gap-3 [grid-template-columns:auto_1fr]">
                        <div className="flex size-6 rounded-full border bg-[--ui-bg]">
                            <Check strokeWidth={3} className="m-auto size-3 text-primary-600 dark:text-primary-400" />
                        </div>

                        <div className="space-y-2">
                            <Title as="span" size="base" weight="medium">
                                Earn
                            </Title>
                            <Text size="sm">Doluta nostrum? Quod voluptate dolor repellat. Accusantium.</Text>
                        </div>
                    </div>
                </div>

                <div data-shade="950" className="hidden border lg:block">
                    <div className="mx-auto max-w-xs p-6">
                        <Text align="center" size="sm">
                            Great work on tailfolio template. This is one of the best personal website that I have seen so far :)
                        </Text>
                    </div>

                    <div className="flex items-center justify-center gap-3 border-t border-gray-950/10 py-3 dark:border-white/5">
                        <Avatar.Root>
                            <Avatar.Image src="https://tailus.io/images/reviews/yucel.webp" />
                            <Avatar.Fallback>YF</Avatar.Fallback>
                        </Avatar.Root>

                        <div className="flex flex-col">
                            <Title as="div" className="text-sm" weight="normal">
                                Yucel Faruksahan
                            </Title>
                            <Caption size="xs">Creator of Tailkits</Caption>
                        </div>
                    </div>
                </div>
            </div>

            <Card className="relative h-fit p-1 shadow-xl shadow-gray-950/10 lg:mb-12" variant="mixed">
                <div data-rounded="large" className="p-10">
                    <div>
                        <Title size="xl" className="mb-1">
                            Welcome to Tailus UI
                        </Title>

                        <Text className="my-0" size="sm">
                            Create an account to continue
                        </Text>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <Button.Root variant="outlined" intent="gray" size="sm" className="w-full">
                            <Button.Icon type="leading" size="sm">
                                <Google />
                            </Button.Icon>
                            <Button.Label>Google</Button.Label>
                        </Button.Root>

                        <Button.Root variant="outlined" intent="gray" size="sm" className="w-full">
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
                                        <Input id="firstname" name="firstname" type="text" required variant="outlined" size="md" />
                                    </div>

                                    <div className="space-y-2.5">
                                        <Label size="sm" htmlFor="lastname">
                                            Last name
                                        </Label>
                                        <Input id="lastname" name="lastname" type="text" required variant="outlined" size="md" />
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <Label size="sm" htmlFor="email">
                                        Your email
                                    </Label>
                                    <Input id="email" name="email" type="email" required variant="outlined" size="md" />
                                </div>

                                <div className="space-y-2.5">
                                    <Label size="sm" htmlFor="password">
                                        Password
                                    </Label>
                                    <Input id="password" name="password" type="password" required variant="outlined" size="md" />
                                </div>
                            </div>
                        </div>

                        <Button.Root className="w-full">
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
            </Card>
        </main>
    );
}

const code = `import Button from '@tailus-ui/Button';
import { Text, Link, Caption, Title } from '@tailus-ui/typography';
import Input from '@tailus-ui/Input';
import Label from '@tailus-ui/Label';
import Card from '@tailus-ui/Card';
import { Check } from 'lucide-tailus';
import Avatar from '@tailus-ui/Avatar';
import { Google, Microsoft } from './icons';
import Separator from '@tailus-ui/Separator';

export function Register1() {
    return (
        <main className="z-10 m-auto max-w-lg px-6 py-6 sm:py-12 md:py-20 lg:absolute lg:inset-0 lg:m-auto lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-16 lg:px-12 xl:gap-32 xl:px-0">
            <div className="py-6">

                // Your logo

                <div className="my-12 hidden space-y-6 lg:block">
                    <div className="grid gap-3 [grid-template-columns:auto_1fr]">
                        <div className="flex size-6 rounded-full border bg-[--ui-bg]">
                            <Check strokeWidth={3} className="m-auto size-3 text-primary-600 dark:text-primary-400" />
                        </div>

                        <div className="space-y-2">
                            <Title as="span" size="base" weight="medium">
                                Get Started
                            </Title>
                            <Text size="sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</Text>
                        </div>
                    </div>

                    <div className="grid gap-3 [grid-template-columns:auto_1fr]">
                        <div className="flex size-6 rounded-full border bg-[--ui-bg]">
                            <Check strokeWidth={3} className="m-auto size-3 text-primary-600 dark:text-primary-400" />
                        </div>

                        <div className="space-y-2">
                            <Title as="span" size="base" weight="medium">
                                Start Build
                            </Title>
                            <Text size="sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</Text>
                        </div>
                    </div>

                    <div className="grid gap-3 [grid-template-columns:auto_1fr]">
                        <div className="flex size-6 rounded-full border bg-[--ui-bg]">
                            <Check strokeWidth={3} className="m-auto size-3 text-primary-600 dark:text-primary-400" />
                        </div>

                        <div className="space-y-2">
                            <Title as="span" size="base" weight="medium">
                                Earn
                            </Title>
                            <Text size="sm">Doluta nostrum? Quod voluptate dolor repellat. Accusantium.</Text>
                        </div>
                    </div>
                </div>

                <div data-shade="950" className="hidden border lg:block">
                    <div className="mx-auto max-w-xs p-6">
                        <Text align="center" size="sm">
                            Great work on tailfolio template. This is one of the best personal website that I have seen so far :)
                        </Text>
                    </div>

                    <div className="flex items-center justify-center gap-3 border-t border-gray-950/10 py-3 dark:border-white/5">
                        <Avatar.Root>
                            <Avatar.Image src="https://tailus.io/images/reviews/yucel.webp" />
                            <Avatar.Fallback>YF</Avatar.Fallback>
                        </Avatar.Root>

                        <div className="flex flex-col">
                            <Title as="div" className="text-sm" weight="normal">
                                Yucel Faruksahan
                            </Title>
                            <Caption size="xs">Creator of Tailkits</Caption>
                        </div>
                    </div>
                </div>
            </div>

            <Card className="relative h-fit p-1 shadow-xl shadow-gray-950/10 lg:mb-12" variant="mixed">
                <div data-rounded="large" className="p-10">
                    <div>
                        <Title size="xl" className="mb-1">
                            Welcome to Tailus UI
                        </Title>

                        <Text className="my-0" size="sm">
                            Create an account to continue
                        </Text>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <Button.Root variant="outlined" intent="gray" size="sm" className="w-full">
                            <Button.Icon type="leading" size="sm">
                                <Google />
                            </Button.Icon>
                            <Button.Label>Google</Button.Label>
                        </Button.Root>

                        <Button.Root variant="outlined" intent="gray" size="sm" className="w-full">
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
                                        <Input id="firstname" name="firstname" type="text" required variant="outlined" size="md" />
                                    </div>

                                    <div className="space-y-2.5">
                                        <Label size="sm" htmlFor="lastname">
                                            Last name
                                        </Label>
                                        <Input id="lastname" name="lastname" type="text" required variant="outlined" size="md" />
                                    </div>
                                </div>

                                <div className="space-y-2.5">
                                    <Label size="sm" htmlFor="email">
                                        Your email
                                    </Label>
                                    <Input id="email" name="email" type="email" required variant="outlined" size="md" />
                                </div>

                                <div className="space-y-2.5">
                                    <Label size="sm" htmlFor="password">
                                        Password
                                    </Label>
                                    <Input id="password" name="password" type="password" required variant="outlined" size="md" />
                                </div>
                            </div>
                        </div>

                        <Button.Root className="w-full">
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
            </Card>
        </main>
    );
}`;

export const register1Preview: BlockPreviewProps = {
    id: 'register1',
    title: 'Sign Up Example 1',
    code,
    category: 'Forms',
    description: 'Sign up form wrapped in a card with features on left',
    src: '/examples/forms/register1'
};
