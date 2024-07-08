import BrandIcon from "@components/utilities/BrandIcon";
import Separator from "@react-ui/separator/Separator";
import { HelpCircle, Home, Inbox, Settings, Store, Users } from "lucide-react";
import { Caption, Title } from "@components/typography";
import { UserDropdown } from "../UserDropdown";
import { Link } from "./Link";
import { WorkspaceIcon } from "./WorkspaceIcon";
import { Notifications } from "./Notifications";

export const Sidebar3 = () => {
    return (
        <div className="grid [grid-template-columns:auto_1fr] w-full">
            <div className="flex border-r">
                <div data-shade="900" className="w-64 flex flex-col gap-4 h-[75vh] p-4 bg-[--ui-bg] rounded-l-[--card-radius]">
                    <div className="w-10 flex">
                        <BrandIcon className="mx-auto" />
                    </div>
                    <div className="mt-4 space-y-1">
                        <Link link="#" label="Home" isActive>
                            <Home />
                        </Link>
                        <Link link="#" label="Store">
                            <Store />
                        </Link>
                        <Link link="#" label="Team">
                            <Users />
                        </Link>
                        <Link link="#" label="Inbox">
                            <Inbox />
                        </Link>
                    </div>
                    <div>
                        <Caption className="mx-2">Workspaces</Caption>
                        <div className="mt-4 space-y-1">
                            <Link link="#" label="Tailus UI React">
                                <WorkspaceIcon intent="primary"/>
                            </Link>
                            <Link link="#" label="Tailus UI HTML">
                                <WorkspaceIcon intent="secondary"/>
                            </Link>
                            <Link link="#" label="Tailus UI Themer">
                                <WorkspaceIcon intent="accent"/>
                            </Link>
                        </div>
                    </div>
                    <div className="h-fit mt-auto">
                        <Separator className="my-4" />
                        <div className="space-y-1">
                            <Link link="#" label="Help">
                                <HelpCircle />
                            </Link>
                            <Link link="#" label="Settings">
                                <Settings />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid [grid-template-rows:auto_1fr]">
                <div hidden className="p-4 border-b items-center sm:flex justify-between">
                    <Title size="base" weight="medium">Dashboard</Title>
                    <div className="flex gap-4 items-center">
                        <Notifications />
                        <UserDropdown />
                    </div>
                </div>
                <div className="m-4 border border-dashed flex justify-center items-center">
                    <Caption hidden className="sm:block">Content</Caption>
                </div>
            </div>
        </div>
    )
}