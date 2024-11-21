import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme";
import { animations, components, palette, shade } from "@tailus/themer";
import containerQueries from '@tailwindcss/container-queries'
import { withTV } from 'tailwind-variants/transformer';

module.exports = withTV({
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		 "./node_modules/@tailus/themer/dist/components/**/*.{js,ts}",
	],
	darkMode: "selector",
	safelist : ["dark:from-gray-950"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				mono: ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
			},
			keyframes: {
                slideDown: {
                    from: { height: "0" },
                    to: { height: "var(--accordion-content-height)" },
                },
                slideUp: {
                    from: { height: "var(--accordion-content-height)" },
                    to: { height: "0" },
                },
                overlayShow: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                contentShow: {
                    from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
                    to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
                },
                hide: {
                    from: { opacity: "1" },
                    to: { opacity: "0" },
                },
                slideIn: {
                    from: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
                    to: { transform: "translateX(0)" },
                },
                swipeOut: {
                    from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
                    to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
                },
                slideUpAndFade: {
                    from: { opacity: "0", transform: "translateY(2px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideRightAndFade: {
                    from: { opacity: "0", transform: "translateX(-2px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                slideDownAndFade: {
                    from: { opacity: "0", transform: "translateY(-2px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideLeftAndFade: {
                    from: { opacity: "0", transform: "translateX(2px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                stripes: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(14px)" },
                },
                highlightSlide: {
                    from: { opacity: "0.5", transform: "translateX(0) skewX(-30deg)" },
                    to: { opacity: "1", transform: "translateX(500px)" },
                },
            },
            animation: {
                slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
                slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
                overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                hide: "hide 100ms ease-in",
                slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                swipeOut: "swipeOut 100ms ease-out",
                slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                stripesSlide: "stripes 0.6s linear infinite",
                highlightSlide: "highlightSlide 3s linear infinite",
            },
		}
	},
	plugins: [
		components,
		shade,
		palette,
		containerQueries,
	],
}) satisfies Config;
