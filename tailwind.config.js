/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				RobotoCondensed: ['Roboto Condensed', 'sans-serif'],
				OpenSans: ['Open Sans', 'sans-serif']
			}
		}
	},
	plugins: [],
}