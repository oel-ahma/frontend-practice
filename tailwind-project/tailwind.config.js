/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",  
	content: ["./index.html"],
  theme: {
    extend: {
		screens: {
			"sm": "480px",
		},
		colors: {
			'mycolor': '#ffc0bd',
		},
		spacing: {
			"big": "48rem",
		}
	},
	fontFamily: {
		nunito: ['Nunito', 'sans serif']
	}
  },
  plugins: [],
}
