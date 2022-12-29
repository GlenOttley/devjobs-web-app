/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				violet: '#5964E0',
				'light-violet': '#939BF4',
				'very-dark-blue': '#19202D',
				midnight: '#121721',
				'light-gray': '#F4F6F8',
				gray: '#9DAEC2',
				'gray--placeholder': '#8C8F96',
				'dark-gray': '#6E8098'
			},
			fontFamily: {
				sans: ['Kumbh Sans', 'sans-serif']
			},
			fontSize: {
				'3xl': '28px'
			},
			lineHeight: {
				'leading-8': '34px',
				'leading-7': '29px',
				'leading-6': '26px',
				'leading-4': '18px'
			}
		},
		screens: {
			DEFAULT: '100%',
			mobile: '100%',
			tablet: '769px',
			laptop: '1190px',
			desktop: '1190px'
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '24px',
				mobile: '24px',
				tablet: '40px',
				laptop: '40px',
				desktop: '40px'
			}
		}
	},
	plugins: []
};
