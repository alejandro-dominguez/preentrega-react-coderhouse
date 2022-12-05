/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				RobotoCondensed: ['Roboto Condensed', 'sans-serif'],
				OpenSans: ['Open Sans', 'sans-serif']
			}
		}
	},
	plugins: []
}
