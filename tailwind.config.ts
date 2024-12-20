/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		"./index.html",
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		container: {
			center: 'true',
			padding: '20px'
		},
		extend: {}
	},
	plugins: [],
}

