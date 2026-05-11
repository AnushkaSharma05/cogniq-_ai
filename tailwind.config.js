/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4F35BE',
                    light: '#6B52D6',
                    dark: '#3A27A0',
                },
                accent: '#7C5CFC',
                dark: '#1A1A2E',
                'text-main': '#1E1E2E',
                'text-muted': '#6B7280',
                'bg-light': '#F5F5FA',
                'bg-section': '#EEEEF8',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delay': 'float 6s ease-in-out 2s infinite',
                'fade-up': 'fadeUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}