import type {Config} from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#111111',
          900: '#161616',
          800: '#161616',
        },
        ivory: '#F5F5F5',
        gold: '#E6D3A3',
        goldHover: '#F2C94C',
        burgundy: '#5A0000',
        borderTone: '#2A2A2A',
        textSecondary: '#BFBFBF',
        artistBlue: '#1DA1F2',
        oceanBlue: '#0D3B66',
        sunflower: '#F2C94C',
        terracotta: '#E76F51',
        forest: '#2A9D8F',
        lavender: '#A78BFA',
        coral: '#FF6B6B',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)']
      },
      boxShadow: {
        panel: '0 0 0 1px rgba(230,211,163,0.18), 0 14px 36px rgba(0,0,0,0.34)',
      },
      animation: {
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}

export default config
