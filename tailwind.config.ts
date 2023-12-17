import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39DB4A',
        // primary_hover: '#39DB4f'
      },
      keyframes: {
        move: {
          "50%": {transform: 'translateY(-1.3rem)'}
        },
        big: {
          "50%": {transform: 'scale(1.1)'}
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite',
        'big': 'big 2s linear infinite'
      }
    },
    screens: {
      sm: "599px",
      md: "769px",
      lg: "1025px",
      xl: "1280px",
    },
  },
  plugins: [],
}
export default config
