import { atom } from "nanostores";
import { type Shade } from "@components/customizer/ShadeSwitcher";
import { type Rounded } from "@components/customizer/RoundedSwitcher";
import { type Palette } from "@components/customizer/PaletteSwitcher";

export const $shade = atom<Shade>("900");
export const $rounded = atom<Rounded>("large");
export const $palette = atom<Palette>("trust");