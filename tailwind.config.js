/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                light: {
                    primaryColor: '#BA00E3', // primary/500
                    primaryColorSecond: '#7D00AE', // primary/500
                    bgColor: '#ffffff', // base/white
                    bgLightDarkColor: '#ffffff', // base/white
                    textColorBase: '#1f2937', // neutral/900
                    textColorDark: '#ffffff', // base/white
                    linkColor: '#6d28d9', // primary/600
                    borderColor: '#f3f4f6', // neutral/100
                    heroBG: '#f3f4f6', // primary/50
                    inputColor: '#f3f4f6', // primary/50
                    grayLight: '#f3f4f6', // neutral/100
                    grayDark: '#d1d5db', // neutral/300
                },
                dark: {
                    primaryColor: '#BA00E3', // primary/500
                    bgColor: '#0F0415',
                    bgLightDarkColor: '#2C2C2C',
                    textColorBase: '#ffffff', // base/white
                    textColorDark: '#ffffff', // base/white
                    linkColor: '#a78bfa', // primary/300
                    borderColor: '#171717', // neutral/900
                    heroBG: '#171717', // neutral/900
                    inputColor: '#1e293b', // neutral/800
                    grayLight: '#f3f4f6', // neutral/100
                    grayDark: '#737373', // neutral/500
                },
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
        fontFamily: {
            montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui'],
            inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extraBold: 800,
        },
    },
    plugins: [
        function ({ addBase }) {
            addBase({
                ':root': {
                    '--primary-color': '#BA00E3',
                    '--primary-color-second': '#7D00AE',
                    '--sidebar-bg-color': '#F8F8F8',
                    '--bg-primary-color': '#ffffff',
                    '--bg-transparent': 'transparent',
                    '--bg-light-dark-color': '#ffffff',
                    '--bg-secondary-color': '#F1F1F1',
                    '--bg-dark-to-white-color': '#2E2D2D',
                    '--bg-barn-red-color': '#8D2626',
                    '--bg-border-color': '#9A9A9A',
                    '--bg-user-text-color': '#F1F1F1',
                    '--bg-ai-bot-text-color': '#FBFAFA',
                    '--bg-hover-color': '#ECECEC',
                    '--bg-icon-color': '#E7E7E7',
                    '--bg-track-color': '#DBDBDB',
                    '--text-color-base': '#2E2D2D',
                    '--text-color-secondary': '#8F8F8F',
                    '--text-color-dark': '#000000',
                    '--text-color-dark-second': '#393939',
                    '--text-color-dark-third': '#2F2F2F',
                    '--text-color-dark-fourth': '#ffffff',
                    '--text-color-dark-fifth': '#3958C4',
                    '--link-color': '#6d28d9',
                    '--hero-bg': '#f3f4f6',
                    '--input-color': '#f3f4f6',
                    '--gray-light': '#f3f4f6',
                    '--gray-dark': '#d1d5db',
                },
                '.light-theme': {
                    '--primary-color': '#BA00E3',
                    '--primary-color-second': '#7D00AE',
                    '--sidebar-bg-color': '#F8F8F8',
                    '--bg-primary-color': '#ffffff',
                    '--bg-transparent': 'transparent',
                    '--bg-light-dark-color': '#ffffff',
                    '--bg-secondary-color': '#F1F1F1',
                    '--bg-dark-to-white-color': '#2E2D2D',
                    '--bg-barn-red-color': '#8D2626',
                    '--bg-border-color': '#9A9A9A',
                    '--bg-user-text-color': '#F1F1F1',
                    '--bg-ai-bot-text-color': '#FBFAFA',
                    '--bg-hover-color': '#ECECEC',
                    '--bg-icon-color': '#E7E7E7',
                    '--bg-track-color': '#DBDBDB',
                    '--text-color-base': '#2E2D2D',
                    '--text-color-secondary': '#8F8F8F',
                    '--text-color-dark': '#000000',
                    '--text-color-dark-second': '#393939',
                    '--text-color-dark-third': '#2F2F2F',
                    '--text-color-dark-fourth': '#ffffff',
                    '--text-color-dark-fifth': '#3958C4',
                    '--link-color': '#6d28d9',
                    '--hero-bg': '#f3f4f6',
                    '--input-color': '#f3f4f6',
                    '--gray-light': '#f3f4f6',
                    '--gray-dark': '#d1d5db',
                },
                '.dark-theme': {
                    '--primary-color': '#BA00E3',
                    '--primary-color-second': '#7D00AE',
                    '--sidebar-bg-color': '#141414',
                    '--bg-primary-color': '#0D0D0D',
                    '--bg-transparent': 'transparent',
                    '--bg-light-dark-color': '#2C2C2C',
                    '--bg-secondary-color': '#1B1B1B',
                    '--bg-dark-to-white-color': '#ffffff',
                    '--bg-barn-red-color': '#A12B2B',
                    '--bg-border-color': '#9A9A9A',
                    '--bg-user-text-color': '#363636',
                    '--bg-ai-bot-text-color': '#1A1A1A',
                    '--bg-hover-color': '#2E2E2E',
                    '--bg-icon-color': '#252525',
                    '--bg-track-color': '#313131',
                    '--text-color-base': '#D2D1D1',
                    '--text-color-secondary': '#8F8F8F',
                    '--text-color-dark': '#ffffff',
                    '--text-color-dark-second': '#959595',
                    '--text-color-dark-third': '#D0D0D0',
                    '--text-color-dark-fourth': '#2E2D2D',
                    '--text-color-dark-fifth': '#4C68CB',
                    '--link-color': '#a78bfa',
                    '--hero-bg': '#171717',
                    '--input-color': '#1e293b',
                    '--gray-light': '#f3f4f6',
                    '--gray-dark': '#737373',
                },
            })
        },
        require('tailwindcss-animate'),
    ],
}
