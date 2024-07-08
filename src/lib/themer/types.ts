export type Rounded = "none" | "default" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"
export type RoundedWithoutFull = Exclude<Rounded, "full">
export type Shade = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "950"
export type ShadowSizes = Exclude<RoundedWithoutFull, "3xl">
export type Intent = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'accent' | 'gray' | 'neutral' | 'info'
export type TWColor = "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"
export type Gray = "stone" | "neutral" | "zinc" | "gray" | "slate" | "greenish" | "indigray" | "cyanish"
export type Success = Extract<TWColor, "lime" | "green" | "emerald" | "teal">
export type Warning = Extract<TWColor, "amber" | "yellow">
export type Danger = Extract<TWColor, "red" | "rose">
export type Info = Extract<TWColor, "cyan" | "sky" | "blue">
export type Primary = TWColor
export type Secondary = TWColor
export type Accent = TWColor
export type Palette = "passion" | "nature" | "trust" | "mystery" | "romance" | "energy" | "winter" | "oz" | "spring"

export type Sizes = {
    none: string
    default : string
    sm: string
    md: string
    lg: string
    xl: string
    "2xl": string
    "3xl": string
    full: string
}

export type SizeWithoutFull = {
    none: string
    default : string
    sm: string
    md: string
    lg: string
    xl: string
    "2xl": string
    "3xl": string
}

export type Shadows = {
    none: string
    default : string
    sm: string
    md: string
    lg: string
    xl: string
    "2xl": string
}

export type Shades = {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
    "950": string
}


const roundedValuesMap:Sizes = {
    none: "0",
    default : "0.25rem",
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
}

const roundedWithoutFullValuesMap: SizeWithoutFull = {
    none: "0",
    default : "0.25rem",
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
}