import Banner from "@components/Banner";
import { Link, Text } from "@components/typography";
import { CircleAlert } from "lucide-react";

export const Overview = () => (
    <div className="space-y-4">
        <Banner.Root intent="danger" className="p-[--toast-padding]">
            <Banner.Content>
                <CircleAlert className="size-5 text-[--body-text-color]"/>
                <div className="space-y-2">
                    <Text size="sm" className="my-0 text-danger-800 dark:text-danger-300">
                        Almost out of storage (95% used). If you run out, you can’t back up photos, or send and receive email in Gmail. {` `}
                        <Link className="text-danger-900 dark:text-danger-200" href="#" intent="danger" size="sm" variant="underlined">Manage Storage</Link>
                    </Text>
                </div>
            </Banner.Content>
        </Banner.Root>

        <Banner.Root intent="info" className="p-[--toast-padding]">
            <Banner.Content>
                <CircleAlert className="size-5 text-[--body-text-color]"/>
                <div className="space-y-2">
                    <Text size="sm" className="my-0 text-info-800 dark:text-info-300">
                        Almost out of storage (95% used). If you run out, you can’t back up photos, or send and receive email in Gmail. {` `}
                        <Link className="text-info-900 dark:text-info-200" href="#" intent="info" size="sm" variant="underlined">Manage Storage</Link>
                    </Text>
                    
                </div>
            </Banner.Content>
        </Banner.Root>

        <Banner.Root intent="success" className="p-[--toast-padding]">
            <Banner.Content>
                <CircleAlert className="size-5 text-[--body-text-color]"/>
                <div className="space-y-2">
                    <Text size="sm" className="my-0 text-success-800 dark:text-success-300">
                        Almost out of storage (95% used). If you run out, you can’t back up photos, or send and receive email in Gmail. {` `}
                        <Link className="text-success-900 dark:text-success-200" href="#" intent="success" size="sm" variant="underlined">Manage Storage</Link>
                    </Text>
                </div>
            </Banner.Content>
        </Banner.Root>

        <Banner.Root intent="warning" className="p-[--toast-padding]">
            <Banner.Content>
                <CircleAlert className="size-5 text-[--body-text-color]"/>
                <div className="space-y-2">
                    <Text size="sm" className="my-0 text-warning-900 dark:text-warning-300">
                        Almost out of storage (95% used). If you run out, you can’t back up photos, or send and receive email in Gmail. {` `}
                        <Link className="text-warning-900 dark:text-warning-200" href="#" intent="warning" size="sm" variant="underlined">Manage Storage</Link>
                    </Text>
                </div>
            </Banner.Content>
        </Banner.Root>

        <Banner.Root intent="gray" className="p-[--toast-padding]">
            <Banner.Content>
                <CircleAlert className="size-5 text-[--body-text-color]"/>
                <div className="space-y-2">
                    <Text size="sm" className="my-0 text-gray-800 dark:text-gray-300">
                        Almost out of storage (95% used). If you run out, you can’t back up photos, or send and receive email in Gmail. {` `}
                        <Link className="text-gray-900 dark:text-gray-200" href="#" intent="gray" size="sm" variant="underlined">Manage Storage</Link>
                    </Text>
                </div>
            </Banner.Content>
        </Banner.Root>
    </div>
)

const exampleCode = `import Banner from "@tailus-ui/Banner";
import { Link, Text } from "@tailus-ui/typography";
import { CircleAlert } from "lucide-react";

export const Overview = () => (
    <div className="space-y-4">
        <Banner.Root intent="danger" className="p-[--toast-padding]">
            <Banner.Content>
                <CircleAlert className="size-5 text-[--body-text-color]"/>
                <div className="space-y-2">
                    <Text size="sm" className="my-0 text-danger-800 dark:text-danger-300">
                        Almost out of storage (95% used). If you run out, you can’t back up photos, or send and receive email in Gmail. {' '}
                        <Link className="text-danger-900 dark:text-danger-200" href="#" intent="danger" size="sm" variant="underlined">Manage Storage</Link>
                    </Text>
                </div>
            </Banner.Content>
        </Banner.Root>

        <Banner.Root intent="info" className="p-[--toast-padding]">
            <Banner.Content>
                <CircleAlert className="size-5 text-[--body-text-color]"/>
                <div className="space-y-2">
                    <Text size="sm" className="my-0 text-info-800 dark:text-info-300">
                        Almost out of storage (95% used). If you run out, you can’t back up photos, or send and receive email in Gmail. {' '}
                        <Link className="text-info-900 dark:text-info-200" href="#" intent="info" size="sm" variant="underlined">Manage Storage</Link>
                    </Text>
                    
                </div>
            </Banner.Content>
        </Banner.Root>

        <Banner.Root intent="success" className="p-[--toast-padding]">
            <Banner.Content>
                <CircleAlert className="size-5 text-[--body-text-color]"/>
                <div className="space-y-2">
                    <Text size="sm" className="my-0 text-success-800 dark:text-success-300">
                        Almost out of storage (95% used). If you run out, you can’t back up photos, or send and receive email in Gmail. {' '}
                        <Link className="text-success-900 dark:text-success-200" href="#" intent="success" size="sm" variant="underlined">Manage Storage</Link>
                    </Text>
                </div>
            </Banner.Content>
        </Banner.Root>

        <Banner.Root intent="warning" className="p-[--toast-padding]">
            <Banner.Content>
                <CircleAlert className="size-5 text-[--body-text-color]"/>
                <div className="space-y-2">
                    <Text size="sm" className="my-0 text-warning-900 dark:text-warning-300">
                        Almost out of storage (95% used). If you run out, you can’t back up photos, or send and receive email in Gmail. {' '}
                        <Link className="text-warning-900 dark:text-warning-200" href="#" intent="warning" size="sm" variant="underlined">Manage Storage</Link>
                    </Text>
                </div>
            </Banner.Content>
        </Banner.Root>

        <Banner.Root intent="gray" className="p-[--toast-padding]">
            <Banner.Content>
                <CircleAlert className="size-5 text-[--body-text-color]"/>
                <div className="space-y-2">
                    <Text size="sm" className="my-0 text-gray-800 dark:text-gray-300">
                        Almost out of storage (95% used). If you run out, you can’t back up photos, or send and receive email in Gmail. {' '}
                        <Link className="text-gray-900 dark:text-gray-200" href="#" intent="gray" size="sm" variant="underlined">Manage Storage</Link>
                    </Text>
                </div>
            </Banner.Content>
        </Banner.Root>
    </div>
)`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    },
]