const { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } = require('next/dist/shared/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	}, 
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
	/* fontSize: {
		'sm': '0.875rem',   // Default: 0.9375rem
		'base': '1rem',     // Default: 1rem
		'lg': '1.125rem',   // Default: 1.125rem
		'xl': '1.125rem',   // Default: 1.25rem
		'2xl': '1.375rem',  // Default: 1.5rem
		'3xl': '1.75rem',   // Default: 1.875rem
	  }, */
  	extend: {
  		/* colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		} */
			  

		colors: {
			primary: '#1c1c22',
			accent:{
				DEFAULT: '#00ff99',
				hover: '#00e187',

			},
		},
		
		keyframes: {
			"accordion-down":{
				from: {height: "0"},
				to: {height: "var(--radix-accordion-content-height)"},
			},
			"accordion-up": {
				from: {height: "var(--radix-accordion-content-height)"},
				to: {height: "0"},
			},
		},

		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		},
  	},
  },
  plugins: [require("tailwindcss-animate")],
};
