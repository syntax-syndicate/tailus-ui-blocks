import { type Shadows } from "./types";
import { getGrayShadeShadow as getGrayShade } from "./colors";

const getShadows = (component: string): Shadows => {
    const shadowOpacity = `var(--${component}-shadow-opacity)`;
    return {
        default: `0 1px 3px 0 ${getGrayShade('950', shadowOpacity)}, 0 1px 2px -1px ${getGrayShade('950', shadowOpacity)}`,
        sm: `0 1px 2px 0 ${getGrayShade('950', shadowOpacity)}`,
        md: `0 4px 6px -1px ${getGrayShade('950', shadowOpacity)}, 0 2px 4px -2px ${getGrayShade('950', shadowOpacity)}`,
        lg: `0 10px 15px -3px ${getGrayShade('950', shadowOpacity)}, 0 4px 6px -4px ${getGrayShade('950', shadowOpacity)}`,
        xl: `0 20px 25px -5px ${getGrayShade('950', shadowOpacity)}, 0 10px 10px -6px ${getGrayShade('950', shadowOpacity)}`,
        '2xl': `0 25px 50px -12px ${getGrayShade('950', shadowOpacity)}`,
        none: "box-shadow: 0 0 #0000;",
    };
};

export const shadowOptions = [
    "none",
    "default",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
];

export default getShadows;
