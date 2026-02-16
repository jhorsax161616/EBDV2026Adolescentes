/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#0099cc',
        'deep-ocean': '#006699',
        'sand-gold': '#ffcc00',
        'lighthouse-red': '#cc3300',
        'wood-brown': '#8b4513',
      },
      fontFamily: {
        'titan': ['"Titan One"', 'cursive'],
        'nunito': ['"Nunito"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
