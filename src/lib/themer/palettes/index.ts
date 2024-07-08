import * as grays from './grays';
import * as colors from './colors';

const defaultAssistiveColorsNames = {
    warning: "yellow",
    danger: "red",
    success: "green",
    info: "blue"
}
 
export const palettesNames = {
    passion: {
        ...defaultAssistiveColorsNames,
        primary: 'red',
        secondary: 'orange',
        accent: 'amber',
        gray: 'neutral'
    },
    nature: {
        ...defaultAssistiveColorsNames,
        primary: 'green',
        secondary: 'emerald',
        accent: 'teal',
        gray: 'greenish'
    },
    trust: {
        ...defaultAssistiveColorsNames,
        primary: 'blue',
        secondary: 'indigo',
        accent: 'violet',
        gray: 'slate'
    },
    mystery: {
        ...defaultAssistiveColorsNames,
        primary: 'purple',
        secondary: 'fuchsia',
        accent: 'pink',
        gray: 'gray'
    },
    romance: {
        ...defaultAssistiveColorsNames,
        primary: 'rose',
        secondary: 'red',
        accent: 'orange',
        gray: 'zinc'
    },
    energy: {
        ...defaultAssistiveColorsNames,
        primary: 'amber',
        secondary: 'yellow',
        accent: 'lime',
        gray: 'stone'
    },
    winter: {
        ...defaultAssistiveColorsNames,
        primary: 'cyan',
        secondary: 'sky',
        accent: 'emerald',
        gray: 'cyanish'
    }
}

const defaultAssistiveColors = {
    warning: colors.yellow,
    danger: colors.red,
    success: colors.green,
    info: colors.blue
}

export const passion = {
    ...defaultAssistiveColors,
    primary: colors.red,
    secondary: colors.orange,
    accent: colors.amber,
    gray: grays.neutral,
};

export const nature = {
    ...defaultAssistiveColors,
    primary: colors.green,
    secondary: colors.emerald,
    accent: colors.teal,
    gray: grays.greenish,
};

export const trust = {
    ...defaultAssistiveColors,
    primary: colors.blue,
    secondary: colors.indigo,
    accent: colors.violet,
    gray: grays.slate,
};

export const mystery = {
    ...defaultAssistiveColors,
    primary: colors.purple,
    secondary: colors.fuchsia,
    accent:colors.pink,
    gray: grays.gray
};

export const oz = {
    ...defaultAssistiveColors,
    primary: colors.indigo,
    secondary: colors.cyan,
    accent:colors.fuchsia,
    gray: grays.indigray,
    success: colors.lime,
    danger : colors.rose,
};

export const romance = {
    ...defaultAssistiveColors,
    primary: colors.rose,
    secondary: colors.red,
    accent: colors.orange,
    gray: grays.zinc
};

export const energy = {
    ...defaultAssistiveColors,
    primary: colors.amber,
    secondary: colors.yellow,
    accent: colors.lime,
    gray: grays.stone
};

export const winter = {
    primary: colors.cyan,
    secondary: colors.sky,
    accent: colors.emerald,
    gray: grays.cyanish,
    warning: colors.amber,
    danger: colors.rose,
    success: colors.green,
    info: colors.blue
};

export const spring = {
    ...defaultAssistiveColors,
    primary: colors.lime,
    secondary: colors.green,
    accent: colors.teal,
    gray: grays.greenish
};

export const themeColors = {
    red : colors.red,
    orange : colors.orange,
    amber : colors.amber,
    yellow : colors.yellow,
    lime : colors.lime,
    green : colors.green,
    emerald : colors.emerald,
    teal : colors.teal,
    cyan : colors.cyan,
    sky : colors.sky,
    blue : colors.blue,
    indigo : colors.indigo,
    violet : colors.violet,
    purple : colors.purple,
    fuchsia : colors.fuchsia,
    pink : colors.pink,
    rose: colors.rose,
    stone: grays.stone,
    neutral: grays.neutral,
    zinc: grays.zinc,
    gray: grays.gray,
    slate: grays.slate,
    greenish: grays.greenish,
    indigray: grays.indigray,
    cyanish:grays.cyanish
}

export const palettesNamesArray = ["passion", "nature", "trust", "mystery", "romance", "energy", "winter", "spring", "oz"];