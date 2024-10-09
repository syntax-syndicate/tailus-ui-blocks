import { persistentAtom as atom } from "@nanostores/persistent";
import type {  Shade, Rounded, Palette } from "./../types";

export const $shade = atom<Shade>("900");
export const $rounded = atom<Rounded>("large");
export const $palette = atom<Palette>("trust");

export const setShade = (shade: Shade) => {
    $shade.set(shade);
}

export const setRounded = (rounded: Rounded) => {
    $rounded.set(rounded);
}

export const setPalette = (palette: Palette) => {
    $palette.set(palette);
}