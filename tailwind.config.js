/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(220 25% 95%)',
        accent: 'hsl(20 90% 58%)',
        primary: 'hsl(220 45% 58%)',
        surface: 'hsl(0 0% 100%)',
        textPrimary: 'hsl(220 20% 20%)',
        textSecondary: 'hsl(220 20% 40%)',
      },
      borderRadius: {
        'lg': '16px',
        'md': '10px',
        'sm': '6px',
        'xl': '24px',
      },
      boxShadow: {
        'sm': '0 2px 4px hsla(220 20% 20% / 0.05)',
        'card': '0 4px 10px hsla(220 20% 20% / 0.1)',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        'xxl': '24px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
