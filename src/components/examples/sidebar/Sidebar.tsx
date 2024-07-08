import BrandIcon from "@components/utilities/BrandIcon";
import Separator from "@react-ui/separator/Separator";
import { BarChartIcon, Building, Copy, Flag, Folder, HelpCircle, Home, Inbox, Settings, Star, Store, Users } from "lucide-react";
import { Caption } from "@components/typography";
import { Link } from "./Link";
import { IconLink } from "./IconLink";
import { UserSelect } from "./UserSelect";

export const Sidebar = () => {
    return (
        <div className="grid [grid-template-columns:auto_1fr] w-full">
            <div className="flex divide-x border-r">
                <div data-shade="925" className="flex flex-col gap-4 h-[75vh] p-4 bg-[--ui-bg] rounded-l-[--card-radius]">
                    <div className="w-10 flex">
                        <BrandIcon className="mx-auto" />
                    </div>
                    <div className="mt-4 space-y-1">
                        <IconLink link="#" label="Home" isActive>
                            <Home />
                        </IconLink>
                        <IconLink link="#" label="Store">
                            <Store />
                        </IconLink>
                        <IconLink link="#" label="Team">
                            <Users />
                        </IconLink>
                        <IconLink link="#" label="Inbox">
                            <Inbox />
                        </IconLink>
                    </div>
                    <div className="mt-4">
                        <Caption hidden>Workspaces</Caption>
                        <Separator className="my-4" />
                        <div className="space-y-1">
                            <IconLink link="#" label="Tailus UI React">
                                <span className="block !size-2 rounded-full bg-primary-600"></span>
                            </IconLink>
                            <IconLink link="#" label="Tailus UI HTML">
                                <span className="block !size-2 rounded-full bg-accent-600"></span>
                            </IconLink>
                            <IconLink link="#" label="Tailus UI Themer">
                                <span className="block !size-2 rounded-full bg-gray-600"></span>
                            </IconLink>
                        </div>
                    </div>
                    <div className="h-fit mt-auto">
                        <Separator className="my-4" />
                        <div className="space-y-1">
                            <IconLink link="#" label="Help">
                                <HelpCircle />
                            </IconLink>
                            <IconLink link="#" label="Settings">
                                <Settings />
                            </IconLink>
                        </div>
                    </div>
                </div>
                <div data-shade="900" className="w-56 bg-[--ui-bg] p-4 space-y-4">
                    <UserSelect />
                    <div className="space-y-1">
                        <Link link="#" label="Inbox">
                            <Inbox />
                        </Link>
                        <Link link="#" label="Stared">
                            <Star />
                        </Link>
                        <Link link="#" label="Team">
                            <Users />
                        </Link>
                        <Link link="#" label="Stats">
                            <BarChartIcon />
                        </Link>
                        <Link link="#" label="Documents">
                            <Copy />
                        </Link>
                        <Link link="#" label="Ownership">
                            <Flag />
                        </Link>
                        <Link link="#" label="Organization">
                            <Building />
                        </Link>
                        <Link link="#" label="Folder">
                            <Folder />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="size-full border border-dashed flex justify-center items-center">
                    <Caption hidden className="sm:block">Content</Caption>
                </div>
            </div>
        </div>
    )
}