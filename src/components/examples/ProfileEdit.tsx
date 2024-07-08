import Avatar from "@react-ui/avatar/Avatar";
import { Title, Caption, Text } from "@components/typography";
import Button from "@react-ui/button/Button";
import {Card} from "@components/Card";
import { Camera, Check, ChevronDown, Save } from "lucide-react";
import { useState, type ReactNode } from "react";
import { button } from "@tailus/themer"
import { FormInput, FormControl, FormField, FormMessage, FormLabel, FormRoot } from "@react-ui/form"
import Select from "@components/Select";
import Label from "@react-ui/label/Label";

const countries = ["🇨🇩 DR Congo", "🇨🇬 Congo Braza", "🇦🇴 Angola", "🇫🇷 France", "🇬🇧 United Kingdom", "🇪🇸 Spain"];

export const ProfileEdit = () => {
    const [imageSrc, setImageSrc] = useState('https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            setImageSrc(url);
        } else {
            console.error('No file selected');
        }
    };
    return (
        <Card className="p-0 border bg-gray-50 dark:bg-gray-925 dark:border-gray-800/50" variant="soft">
            <Card variant="outlined" className="-m-px feedback-shadow">
                <Title size="lg" as="h3" weight="medium">Account info</Title>
                <Text className="my-0">View and update your account details</Text>

                <div className="size-fit my-8 relative">
                    <div className="absolute z-[1] size-fit bottom-0 right-0">
                        <label htmlFor="avatar-input" className={button.outlined({size:"sm", intent:"gray", class:"rounded-full p-0 size-7 dark:bg-gray-700/75 dark:backdrop-blur"})}>
                            <input hidden type="file" accept="image/png, image/jpeg, image/jpg, image/webp" onChange={handleImageChange} id="avatar-input" name="avatar-input" />
                                <Camera className="size-4" />
                        </label>
                    </div>
                    <Avatar.Root size="3xl">
                        <Avatar.Image src={imageSrc} width={256} height={256} loading="lazy" className="object-cover" />
                        <Avatar.Fallback children="MI" />
                    </Avatar.Root>
                </div>

                <FormRoot>
                    <div className="grid sm:grid-cols-2 gap-6" data-shade="800">
                        <FormField name="name" className="w-full space-y-2.5" variant="outlined" size="md">
                            <FormLabel size="md">Name</FormLabel>
                            <FormControl asChild>
                                <FormInput
                                    type="text"
                                    required
                                    variant="mixed"
                                    size="md"
                                    defaultValue="Méschac Irung"
                                    className="rounded-[--btn-radius] dark:bg-[--ui-bg]"
                                />
                            </FormControl>
                            <FormMessage> </FormMessage>
                        </FormField>
                        <FormField name="email" className="w-full space-y-2.5" variant="outlined" size="md">
                            <FormLabel size="md">Email</FormLabel>
                            <FormControl asChild>
                                <FormInput
                                    type="email"
                                    required
                                    variant="mixed"
                                    size="md"
                                    defaultValue="m.irung@tailus.io"
                                    className="rounded-[--btn-radius] dark:bg-[--ui-bg]"
                                />
                            </FormControl>
                            <FormMessage> </FormMessage>
                        </FormField>
                        <FormField name="role" className="w-full space-y-2.5" variant="outlined" size="md">
                            <FormLabel size="md">Role</FormLabel>
                            <FormControl asChild>
                                <FormInput
                                    type="email"
                                    required
                                    variant="mixed"
                                    size="md"
                                    defaultValue="Frontend Developer"
                                    className="rounded-[--btn-radius] dark:bg-[--ui-bg]"
                                />
                            </FormControl>
                            <FormMessage> </FormMessage>
                        </FormField>

                        <div className="space-y-2.5 -mb-0.5">
                            <Label size="md">Country</Label>
                            <Select.Root defaultValue="🇨🇩 DR Congo">
                                <Select.Trigger variant="mixed" size="md" className="rounded-[calc(var(--btn-radius)-3px)]">
                                    <Select.Value placeholder="Role" />
                                    <Select.TriggerIcon className="ml-auto">
                                        <ChevronDown className="size-3.5" />
                                    </Select.TriggerIcon>
                                </Select.Trigger>

                                <Select.Portal>
                                    <Select.Content mixed variant="solid" data-shade="glassy">
                                        <Select.Viewport>
                                            {
                                                countries.map((country) => (
                                                    <SelectItem value={country} key={country}>{country}</SelectItem>
                                                ))
                                            }
                                        </Select.Viewport>
                                    </Select.Content>
                                </Select.Portal>
                            </Select.Root>
                            <Caption>Pick your home country</Caption>
                        </div>
                    </div>
                </FormRoot>
            </Card>
            <div className="p-[calc(var(--card-padding)/2)] flex justify-end gap-3">
                <Button.Root variant="outlined" intent="gray" size="sm">
                    <Button.Label>Cancel</Button.Label>
                </Button.Root>
                <Button.Root variant="solid" intent="primary" size="sm">
                    <Button.Icon type="leading" size="sm">
                        <Save className=""/>
                    </Button.Icon>
                    <Button.Label>Save</Button.Label>
                </Button.Root>
            </div>
        </Card>
    )
}

export const SelectItem = ({value, children}:{value:string, children:ReactNode}) => {
  return (
      <Select.Item value={value}>
        <Select.ItemIndicator>
            <Check />
        </Select.ItemIndicator>
        <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
};