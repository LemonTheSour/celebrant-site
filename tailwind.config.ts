import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photo1': "url(./assets/images/photo1.jpg)",
        'photo2': "url(./assets/images/photo2.jpg)",
        'photo3': "url(./assets/images/photo3.jpeg)",
        'photo4': "url(./assets/images/photo4.jpg)",
      },
      colors:{
        'sunset': '#ffbe5c'
      },
    },
  },
  plugins: [],
}
export default config
