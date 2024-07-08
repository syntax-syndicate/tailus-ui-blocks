import Button from '@react-ui/button/Button';
import { Text, Link, Caption, Title } from '@components/typography';
import Input from '@react-ui/input/Input';
import Label from '@react-ui/label/Label';
import type { BlockPreviewProps } from '@components/BlockPreview';
import BrandIcon from '@components/utilities/BrandIcon';
import Card from '@react-ui/card/Card';

export function LoginExample4() {
    return (
        <main className="relative inset-0 z-10 m-auto h-fit px-6 py-24 lg:absolute lg:w-screen lg:max-w-full lg:px-0 lg:py-12">
            <div className="mx-auto max-w-md">
                <Card variant="mixed" className="mb-20 p-10 shadow-lg shadow-gray-950/5 sm:p-12 dark:border">
                    <div>
                        <BrandIcon className="size-8" />

                        <Title size="xl" className="mb-1 mt-8">
                            Sign In to Tailus UI
                        </Title>

                        <Text className="my-0" size="sm">
                            Welcome back! Sign in to continue
                        </Text>
                    </div>

                    <form data-shade="800" className="mb-8 space-y-6">
                        <div className="space-y-6 rounded-[--btn-radius] shadow-sm shadow-gray-500/5">
                            <div className="space-y-4">
                                <div className="space-y-2.5">
                                    <Label size="sm" htmlFor="email" className="sr-only">
                                        Your email
                                    </Label>
                                    <Input id="email" name="email" type="email" required variant="bottomOutlined" size="lg" placeholder="Your email" />
                                </div>
                            </div>
                        </div>

                        <Button.Root className="w-full">
                            <Button.Label>Continue</Button.Label>
                        </Button.Root>
                    </form>

                    <Caption className="my-0" size="sm">
                        Don't have an account ? {''}
                        <Link intent="neutral" size="sm" variant="underlined" href="/examples/forms/register3">
                            Create account
                        </Link>
                    </Caption>
                </Card>
                <Caption>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Tailus and its affiliates to the number provided.</Caption>
            </div>
        </main>
    );
}

const code = `import Button from '@tailus-ui/Button';
import { Text, Link, Caption, Title } from '@tailus-ui/typography';
import Input from '@tailus-ui/Input';
import Label from '@tailus-ui/Label';
import Card from '@tailus-ui/Card';

export function LoginExample4() {
    return (
        <main className="relative inset-0 z-10 m-auto h-fit px-6 py-24 lg:absolute lg:w-screen lg:max-w-full lg:px-0 lg:py-12">
            <div className="mx-auto max-w-md">
                <Card variant="mixed" className="mb-20 p-10 shadow-lg shadow-gray-950/5 sm:p-12 dark:border">
                    <div>
                        // Your logo here

                        <Title size="xl" className="mb-1 mt-8">
                            Sign In to Tailus UI
                        </Title>

                        <Text size="sm">
                            Welcome back! Sign in to continue
                        </Text>
                    </div>

                    <form data-shade="800" className="mb-8 space-y-6">
                        <div className="space-y-6 rounded-[--btn-radius] shadow-sm shadow-gray-500/5">
                            <div className="space-y-4">
                                <div className="space-y-2.5">
                                    <Label size="sm" htmlFor="email" className="sr-only">
                                        Your email
                                    </Label>
                                    <Input id="email" name="email" type="email" required variant="bottomOutlined" size="lg" placeholder="Your email" />
                                </div>
                            </div>
                        </div>

                        <Button.Root className="w-full">
                            <Button.Label>Continue</Button.Label>
                        </Button.Root>
                    </form>

                    <Caption className="my-0" size="sm">
                        Don't have an account ? {''}
                        <Link intent="neutral" size="sm" variant="underlined" href="">
                            Create account
                        </Link>
                    </Caption>
                </Card>
                <Caption>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Tailus and its affiliates to the number provided.</Caption>
            </div>
        </main>
    );
}`;

export const login4Preview: BlockPreviewProps = {
    id: 'login4',
    title: 'Login Example 4',
    code,
    category: 'Forms',
    description: 'Simple login form wrapped in a card.',
    src: '/examples/forms/login4'
};
