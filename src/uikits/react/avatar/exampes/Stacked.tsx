import Avatar from "./../Avatar"
import "@styles/avatar-mask.css"
import { type AvatarFallbackProps } from "@tailus/themer"
import { BERNARD_AVATAR, GLODIE_AVATAR, MESCHAC_AVATAR, THEO_AVATAR } from "src/const"
import { twMerge } from "tailwind-merge"

export interface Person {
    name?: string,
    email?: string,
    img: string,
    intent: AvatarFallbackProps["intent"],
    initials: string,
    role?: string
}

export const persons:Person[] = [
    {
        name: "Bernard Ngandu",
        email : "b.ngandu@tailus.io",
        img: BERNARD_AVATAR,
        intent: "primary",
        initials: "BN",
        role: "Owner"
    },
    {
        name: "Glodie Lukose",
        email : "g.lukose@tailus.io",
        img: GLODIE_AVATAR,
        intent: "secondary",
        initials: "GL",
        role: "Admin"
    },
    {
        name: "Méschac Irung",
        email : "m.irung@tailus.io",
        img: MESCHAC_AVATAR,
        intent: "accent",
        initials: "MI",
        role: "Admin"
    },
    {
        name: "Théo Balick",
        email : "t.balick@tailus.io",
        img: THEO_AVATAR,
        intent: "gray",
        initials: "TB",
        role: "Admin"
    }
]

export const StackedAvatars = ({ asFollowers = false }) => {
    return (
        <div data-shade="900" className={twMerge("flex -space-x-[3px]", asFollowers && "-space-x-[2px]")}>
            {
                persons.map((person, index) => {
                    return (
                        <Avatar.Root size={asFollowers ? "xs" : "sm"} className={twMerge("avatar-mask", asFollowers && "h-5 w-5 rounded-full last:avatar-mask-none")} key={index}>
                            <Avatar.Image src={person.img} className="rounded-full" alt={person.name} />
                            <Avatar.Fallback variant="soft" intent={person.intent}>
                                {person.initials}
                            </Avatar.Fallback>
                        </Avatar.Root>
                    )
                })
            }
            {
                !asFollowers &&
                <span className={twMerge("rounded-full bg-[--ui-soft-bg] text-[--title-text-color] text-xs flex items-center justify-center", asFollowers ? "size-5" : "size-8")}>
                    +2
                </span>
            }
            
        </div>
    )
}

const componentCode = `// Stacked.tsx

import Avatar from "@tailus-ui/Avatar"
import "styles/avatar-mask.css"
import "@styles/avatar-mask.css"
import { type AvatarFallbackProps } from "@tailus/themer"

export interface Person {
    name?: string,
    img: string,
    intent: AvatarFallbackProps["intent"],
    initials: string,
}

export const persons:Person[] = []

export const Stack = () => {
    return (
        <div className="flex -space-x-[3px]">
            {
                persons.map((person, index) => {
                    return (
                        <Avatar.Root size="sm" className="avatar-mask" key={index}>
                            <Avatar.Image src={person.img} alt={person.name} />
                            <Avatar.Fallback variant="soft" intent={person.intent}>
                                {person.initials}
                            </Avatar.Fallback>
                        </Avatar.Root>
                    )
                })
            }
        </div>
    )
}`

const cssCode = `// avatar-mask.css

@layer utilities {
    .avatar-mask {
        -webkit-mask-image: url('/avatar-mask.svg');
        mask-image: url('/avatar-mask.svg');
        mask-size: cover;
        -webkit-mask-size: cover;
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
        mask-position: center;
    }
    .avatar-mask-none {
        -webkit-mask-image: none;
        mask-image: none;
    }
}`

const maskCode = `// avatar-mask.svg

<svg viewBox="0 0 86 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0C63.8501 0 76.3848 5.63135 85.4395 14.729C77.0806 24.0981 72 36.4561 72 50C72 63.5439 77.0806 75.9019 85.4395 85.271C76.3848 94.3687 63.8501 100 50 100C22.3857 100 0 77.6143 0 50C0 22.3857 22.3857 0 50 0Z" fill="#D9D9D9" style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;"/>
</svg>
`

export const stackedCode = [
    {
        code: componentCode,
        lang: "tsx",
        file: "tsx",
    },
    {
        code: maskCode,
        lang: "xml",
        file: "svg",
    },
    {
        code: cssCode,
        lang: "css",
        file: "css",
    }
]