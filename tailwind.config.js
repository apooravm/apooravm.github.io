/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#23232e',
					text: '#868686'
				},
				secondary: {
					DEFAULT: '#141418',
					text: '#fcfcfc'
				}
			}
		}
	},
	plugins: []
};
