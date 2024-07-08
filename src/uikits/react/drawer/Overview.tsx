import Drawer from "./Drawer";
import Button from "@react-ui/button/Button";
import { Text, Link } from "@components/typography";

export const Overview = () => {
    return (
        <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
                <Button.Root variant="outlined" intent="gray">
                    <Button.Label>Open Drawer</Button.Label>
                </Button.Root>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="z-40" />
                <Drawer.Content className="z-50">
                    <div className="max-w-md mx-auto mt-6">
                        <Drawer.Title>Drawer for React</Drawer.Title> 
                        <Text className="my-3">
                            This component can be used as a Dialog replacement on mobile and tablet devices. You can read about why and how it was built {' '}
                            <Link href="https://emilkowal.ski/ui/building-a-drawer-component" target="_blank">here</Link>
                        </Text>
                        <Text className="mb-3">
                            It comes unstyled and has gesture-driven animations, and is made by {' '}
                            <Link href="https://emilkowal.ski" target="_blank">Emil</Link>
                        </Text>
                        <Text className="mb-8">
                            It uses {' '}
                            <Link href="https://www.radix-ui.com/docs/primitives/components/dialog" target="_blank">Radix's Dialog primitive</Link> {' '}
                            under the hood and is inspired by {' '}
                            <Link href="https://twitter.com/devongovett/status/1674470185783402496" target="_blank">this tweet.</Link>
                        </Text>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}

const exampleCode = `import Drawer from "@tailus-ui/Drawer";
import Button from "@tailus-ui/button/Button";
import { Text, Link } from "@tailus-ui/typography";

export const Overview = () => {
    return (
        <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
                <Button.Root variant="outlined" intent="gray">
                    <Button.Label>Open Drawer</Button.Label>
                </Button.Root>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay />
                <Drawer.Content >
                    <div className="max-w-md mx-auto mt-6">
                        <Drawer.Title>Drawer for React</Drawer.Title> 
                        <Text className="my-3">
                            This component can be used as a Dialog replacement on mobile and tablet devices. You can read about why and how it was built {' '}
                            <Link href="https://emilkowal.ski/ui/building-a-drawer-component" target="_blank">here</Link>
                        </Text>
                        <Text className="mb-3">
                            It comes unstyled and has gesture-driven animations, and is made by {' '}
                            <Link href="https://emilkowal.ski" target="_blank">Emil</Link>
                        </Text>
                        <Text className="mb-8">
                            It uses {' '}
                            <Link href="https://www.radix-ui.com/docs/primitives/components/dialog" target="_blank">Radix's Dialog primitive</Link> {' '}
                            under the hood and is inspired by {' '}
                            <Link href="https://twitter.com/devongovett/status/1674470185783402496" target="_blank">this tweet.</Link>
                        </Text>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}`

export const overviewCode = [
    {
        code: exampleCode,
        lang: "tsx",
    }
]