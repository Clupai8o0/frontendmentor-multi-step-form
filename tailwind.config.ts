import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				sans: "Ubuntu",
			},
			colors: {
				"primary-marine-blue": "hsl(213,96%,18%)",
				"primary-purplish-blue": "hsl(243,100%,62%)",
				"primary-pastel-blue": "hsl(228,100%,84%)",
				"primary-light-blue": "hsl(206,94%,87%)",
				"primary-strawberry-red": "hsl(354,84%,57%)",
				"neutral-cool-gray": "hsl(231,11%,63%)",
				"neutral-light-gray": "hsl(229,24%,87%)",
				"neutral-magnolia": "hsl(217,100%,97%)",
				"neutral-alabaster": "hsl(231,100%,99%)",
				"neutral-white": "hsl(0,0%,100%)",
			},
		},
	},
	plugins: [],
};
export default config;
