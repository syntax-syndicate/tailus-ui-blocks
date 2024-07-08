import Button from '@react-ui/button/Button';
import { Text, Link, Caption, Title } from '@components/typography';
import Input from '@react-ui/input/Input';
import Label from '@react-ui/label/Label';
import Separator from '@react-ui/separator/Separator';
import type { BlockPreviewProps } from '@components/BlockPreview';
import BrandIcon from '@components/utilities/BrandIcon';

export function LoginExample3() {
    return (
        <main className="inset-0 z-10 m-auto h-fit px-6 py-24 lg:absolute lg:w-screen lg:max-w-full lg:px-0 lg:py-12">
            <div className="mx-auto max-w-sm">
                <div>
                    <div>
                        <a href="/examples/ecommerce">
                            <BrandIcon className="size-8" />
                        </a>

                        <Title size="2xl" className="mb-1 mt-12">
                            Sign In to Tailus UI
                        </Title>

                        <Text className="my-0" size="sm">
                            Welcome back! Sign in to continue
                        </Text>
                    </div>

                    <form className="mx-auto my-8 space-y-6">
                        <div className="space-y-6 rounded-[--btn-radius] shadow-sm shadow-gray-500/5">
                            <div className="space-y-4">
                                <div className="relative">
                                    <Label size="sm" htmlFor="email" className="sr-only">
                                        Your email
                                    </Label>
                                    <Input id="email" name="email" type="email" required size="xl" variant="soft" placeholder="Your email" className="rounded-[calc(var(--btn-radius)+6px)] pr-20" />
                                    <Button.Root intent="neutral" className="absolute inset-y-1.5 right-1.5">
                                        <Button.Label>Next</Button.Label>
                                    </Button.Root>
                                </div>
                            </div>
                        </div>
                    </form>

                    <Caption className="my-0" size="sm">
                        Don't have an account ?{' '}
                        <Link intent="neutral" size="sm" variant="underlined" href="/examples/forms/register4">
                            Create account
                        </Link>
                    </Caption>

                    <Separator fancy className="mb-6 mt-36 md:mt-40 lg:mt-24" />

                    <Caption>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Tailus and its affiliates to the number provided.</Caption>
                </div>
            </div>
        </main>
    );
}

const code = `import Button from '@tailus-ui/Button';
import { Text, Link, Caption, Title } from '@tailus-ui/typography';
import Input from '@tailus-ui/Input';
import Label from '@tailus-ui/Label';
import Separator from '@tailus-ui/Separator';

export function LoginExample3() {
    return (
        <main className="inset-0 z-10 m-auto h-fit px-6 py-24 lg:absolute lg:w-screen lg:max-w-full lg:px-0 lg:py-12">
            <div className="mx-auto max-w-sm">
                <div>
                    <div>
                        <a href="">
                            // Your logo here
                        </a>

                        <Title size="2xl" className="mb-1 mt-12">
                            Sign In to Tailus UI
                        </Title>

                        <Text className="my-0" size="sm">
                            Welcome back! Sign in to continue
                        </Text>
                    </div>

                    <form className="mx-auto my-8 space-y-6">
                        <div className="space-y-6 rounded-[--btn-radius] shadow-sm shadow-gray-500/5">
                            <div className="space-y-4">
                                <div className="relative">
                                    <Label size="sm" htmlFor="email" className="sr-only">
                                        Your email
                                    </Label>
                                    <Input id="email" name="email" type="email" required size="xl" variant="soft" placeholder="Your email" className="rounded-[calc(var(--btn-radius)+6px)] pr-20" />
                                    <Button.Root intent="neutral" className="absolute inset-y-1.5 right-1.5">
                                        <Button.Label>Next</Button.Label>
                                    </Button.Root>
                                </div>
                            </div>
                        </div>
                    </form>

                    <Caption className="my-0" size="sm">
                        Don't have an account ? {' '}
                        <Link intent="neutral" size="sm" variant="underlined" href="">
                            Create account
                        </Link>
                    </Caption>

                    <Separator fancy className="mb-6 mt-36 md:mt-40 lg:mt-24" />

                    <Caption>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Tailus and its affiliates to the number provided.</Caption>
                </div>
            </div>
        </main>
    );
}`;

export const login3Preview: BlockPreviewProps = {
    id: 'login3',
    title: 'Login Example 3',
    code,
    category: 'Forms',
    description: 'Login Page with a soft input and next button',
    src: '/examples/forms/login3'
};
