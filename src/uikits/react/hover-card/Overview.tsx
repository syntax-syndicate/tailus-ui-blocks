import { Card } from "@components/Card"
import { Link, Text, Title } from "@components/typography"
import * as HoverCard from "@radix-ui/react-hover-card"

export const Overview = () => (
    <HoverCard.Root>
        <HoverCard.Trigger href="#">
            <Link intent="neutral" variant="underlined">Tailus UI React</Link>
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <HoverCard.Content className="max-w-[18rem] z-50 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade ">
                <Card variant="mixed" className="feedback-shadow p-0 overflow-hidden">
                    <img src="/og-cover-light.png" className="dark:hidden"/>
                    <img src="/og-cover.png" className="hidden dark:block" />
                    
                    <div className="p-4 border-t">
                        <Title as="h3" className="text-sm" weight="medium">Tailus UI React</Title>
                        <Text size="sm" className="mb-0 mt-2">Highly custoizable components for crafting modern, personalized websites and applications.</Text>
                    </div>
                </Card>
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
)