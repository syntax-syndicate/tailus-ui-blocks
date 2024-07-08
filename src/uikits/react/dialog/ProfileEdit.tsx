import Avatar from '@react-ui/avatar/Avatar';
import { Caption } from '@components/typography';
import Button from '@react-ui/button/Button';
import { Camera, Pencil } from 'lucide-react';
import { useState } from 'react';
import { button } from '@tailus/themer';
import Select from '@tailus-ui/select/Select';
import Label from '@react-ui/label/Label';
import Dialog from './Dialog';
import Input from '@react-ui/input/Input';

const countries = [
    { flag: '🇨🇩', name: 'DR Congo' },
    { flag: '🇨🇬', name: 'Congo Braza' },
    { flag: '🇦🇴', name: 'Angola' },
    { flag: '🇫🇷', name: 'France' },
    { flag: '🇬🇧', name: 'United Kingdom' },
    { flag: '🇪🇸', name: 'Spain' }
];

type Entry = {
    flag: string;
    name: string;
};

const SelectItem = ({ entry }: { entry: Entry }) => {
    return (
        <Select.Item value={entry.name} className="items-center pl-7">
            <Select.ItemIndicator />
            <Select.ItemText>
                <span role="img" aria-label={entry.name} className="mr-2">
                    {entry.flag}
                </span>
                {entry.name}
            </Select.ItemText>
        </Select.Item>
    );
};
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
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button.Root size="sm">
                    <Button.Icon size="xs">
                        <Pencil />
                    </Button.Icon>
                    <Button.Label>Edit Profile</Button.Label>
                </Button.Root>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="z-40" />
                <Dialog.Content mixed className="z-50 max-w-xl">
                    <Dialog.Title>Account info</Dialog.Title>
                    <Dialog.Description className="mt-1" size="sm">
                        View and update your account details
                    </Dialog.Description>

                    <div className="relative my-8 size-fit">
                        <div className="absolute bottom-0 right-0 z-[1] size-fit">
                            <label htmlFor="avatar-input" className={button.outlined({ size: 'sm', intent: 'gray', class: 'size-7 rounded-full p-0 dark:bg-gray-700/75 dark:backdrop-blur' })}>
                                <input hidden type="file" accept="image/png, image/jpeg, image/jpg, image/webp" onChange={handleImageChange} id="avatar-input" name="avatar-input" />
                                <Camera className="size-4" />
                            </label>
                        </div>

                        <Avatar.Root size="3xl">
                            <Avatar.Image src={imageSrc} width={256} height={256} loading="lazy" className="object-cover" />
                            <Avatar.Fallback children="MI" />
                        </Avatar.Root>
                    </div>

                    <form>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="name">
                                    Name
                                </Label>
                                <Input type="text" id="name" defaultValue="Méschac Irung" />
                            </div>
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="email">
                                    Email
                                </Label>
                                <Input type="email" id="email" defaultValue="m.irung@tailus.io" />
                            </div>

                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="role">
                                    Role
                                </Label>
                                <Input type="text" id="role" defaultValue="Frontend Developer" />
                            </div>

                            <div className="space-y-2.5">
                                <Label size="md">Country</Label>
                                <Select.Root defaultValue="DR Congo">
                                    <Select.Trigger className="rounded-[--btn-radius]">
                                        <Select.Value placeholder="Country" />
                                        <Select.Icon />
                                    </Select.Trigger>

                                    <Select.Portal>
                                        <Select.Content mixed className="z-50 ">
                                            <Select.Viewport>
                                                {countries.map((country) => (
                                                    <SelectItem entry={country} key={country.name} />
                                                ))}
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>

                                <Caption>Pick your home country</Caption>
                            </div>
                        </div>
                    </form>

                    <Dialog.Actions className="-mx-[--card-padding] border-t px-[--card-padding] pt-[--card-padding]">
                        <Dialog.Close asChild>
                            <Button.Root variant="outlined" intent="gray" size="sm">
                                <Button.Label>Cancel</Button.Label>
                            </Button.Root>
                        </Dialog.Close>
                        <Button.Root variant="solid" intent="primary" size="sm">
                            <Button.Label>Save Changes</Button.Label>
                        </Button.Root>
                    </Dialog.Actions>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const code = `import Avatar from '@tailus-ui/Avatar';
import { Caption } from '@components/typography';
import Button from '@tailus-ui/Button';
import { Camera, Pencil } from 'lucide-react';
import { useState } from 'react';
import { button } from '@tailus/themer';
import Select from '@tailus-ui/Select';
import Label from '@tailus-ui/Label';
import Dialog from '@tailus-ui/Dialog';
import Input from '@tailus-ui/Input';

const countries = [
    { flag: '🇨🇩', name: 'DR Congo' },
    { flag: '🇨🇬', name: 'Congo Braza' },
    { flag: '🇦🇴', name: 'Angola' },
    { flag: '🇫🇷', name: 'France' },
    { flag: '🇬🇧', name: 'United Kingdom' },
    { flag: '🇪🇸', name: 'Spain' }
];

type Entry = {
    flag: string;
    name: string;
};

const SelectItem = ({ entry }: { entry: Entry }) => {
    return (
        <Select.Item value={entry.name} className="items-center pl-7">
            <Select.ItemIndicator />
            <Select.ItemText>
                <span role="img" aria-label={entry.name} className="mr-2">
                    {entry.flag}
                </span>
                {entry.name}
            </Select.ItemText>
        </Select.Item>
    );
};
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
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button.Root size="sm">
                    <Button.Icon size="xs">
                        <Pencil />
                    </Button.Icon>
                    <Button.Label>Edit Profile</Button.Label>
                </Button.Root>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="z-40" />
                <Dialog.Content mixed className="z-50 max-w-xl">
                    <Dialog.Title>Account info</Dialog.Title>
                    <Dialog.Description className="mt-1" size="sm">
                        View and update your account details
                    </Dialog.Description>

                    <div className="relative my-8 size-fit">
                        <div className="absolute bottom-0 right-0 z-[1] size-fit">
                            <label htmlFor="avatar-input" className={button.outlined({ size: 'sm', intent: 'gray', class: 'size-7 rounded-full p-0 dark:bg-gray-700/75 dark:backdrop-blur' })}>
                                <input hidden type="file" accept="image/png, image/jpeg, image/jpg, image/webp" onChange={handleImageChange} id="avatar-input" name="avatar-input" />
                                <Camera className="size-4" />
                            </label>
                        </div>

                        <Avatar.Root size="3xl">
                            <Avatar.Image src={imageSrc} width={256} height={256} loading="lazy" className="object-cover" />
                            <Avatar.Fallback children="MI" />
                        </Avatar.Root>
                    </div>

                    <form>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="name">
                                    Name
                                </Label>
                                <Input type="text" id="name" defaultValue="Méschac Irung" />
                            </div>
                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="email">
                                    Email
                                </Label>
                                <Input type="email" id="email" defaultValue="m.irung@tailus.io" />
                            </div>

                            <div className="space-y-2.5">
                                <Label size="md" htmlFor="role">
                                    Role
                                </Label>
                                <Input type="text" id="role" defaultValue="Frontend Developer" />
                            </div>

                            <div className="space-y-2.5">
                                <Label size="md">Country</Label>
                                <Select.Root defaultValue="DR Congo">
                                    <Select.Trigger className="rounded-[--btn-radius]">
                                        <Select.Value placeholder="Country" />
                                        <Select.Icon />
                                    </Select.Trigger>

                                    <Select.Portal>
                                        <Select.Content mixed className="z-50 ">
                                            <Select.Viewport>
                                                {countries.map((country) => (
                                                    <SelectItem entry={country} key={country.name} />
                                                ))}
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>

                                <Caption>Pick your home country</Caption>
                            </div>
                        </div>
                    </form>

                    <Dialog.Actions className="-mx-[--card-padding] border-t px-[--card-padding] pt-[--card-padding]">
                        <Dialog.Close asChild>
                            <Button.Root variant="outlined" intent="gray" size="sm">
                                <Button.Label>Cancel</Button.Label>
                            </Button.Root>
                        </Dialog.Close>
                        <Button.Root variant="solid" intent="primary" size="sm">
                            <Button.Label>Save Changes</Button.Label>
                        </Button.Root>
                    </Dialog.Actions>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};`;

export const profileCode = [
    {
        code,
        lang: 'tsx'
    }
];
