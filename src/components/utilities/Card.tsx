import React from "react"

interface CardProps {
    href?: "string",
    isBlank?: boolean,
    children: React.ReactNode,
}

const Card: React.FC<CardProps> = ({
    href,
    isBlank,
    children,
}) => {

    return (
        <a className="group rounded-3xl pt-8 px-8 border border-gray-200 hover:border-gray-300 bg-white hover:shadow-lg hover:shadow-gray-950/10 dark:bg-transparent dark:border-gray-800 dark:hover:bg-gray-900 transition-[box-shadow] duration-300" href={href} target={isBlank && "_blank"}>
            {children}
        </a>
    )
}

export default Card