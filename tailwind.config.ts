import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FF6B6B',
        primary_dark: '#ff4f4f',
        secondary: '#62D2A2',
        accent: '#FFD700',
        cream: '#fffbf5',
        background: '#F9F9F9',
        text: '#333333',
        greylight: '#CCCCCC',
      },
    },
  },
  plugins: [],
};
export default config;
