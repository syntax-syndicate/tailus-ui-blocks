import Button from '@react-ui/button/Button';
import Popover from '@components/Popover';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Title } from '@components/typography/Title';
import { Text } from '@components/typography/Text';

export const TablePopover = ({ title, description }) => {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button.Root variant="ghost" intent="gray" size='xs' aria-label="Type">
                    <Button.Icon type="only" size="xs">
                        <InfoCircledIcon />
                    </Button.Icon>
                </Button.Root>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content fancy side="top" data-shade="800" className="max-w-sm z-50">
                    <Title as="h3" weight="medium" size="base">{`Enum: ${title}`}</Title>
                    <Text className="mt-3 mb-0">
                        {description}
                    </Text>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}