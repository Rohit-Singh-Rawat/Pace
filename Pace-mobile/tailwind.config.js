/** @type {import('tailwindcss').Config} */
const { Colors } = require('./constants/Colors');

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#D4FB54', // Yellow primary color
        secondary: '#6B7280', // Gray secondary color
        text: Colors.text,
        bg: Colors.background,
        border: Colors.border,
        background: Colors.background,
        backgroundColor: Colors.background,
        backgroundSecondary: '#151515',
        tint: Colors.tint,
        icon: Colors.icon,
        tabIconDefault: Colors.tabIconDefault,
        tabIconSelected: Colors.tabIconSelected,
        gray: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          400: '#9CA3AF',
        },
        lime: '#D4FB54', // Fitness highlight color
        energy: '#FF5733', // For energy metrics
        recovery: '#33A1FF', // For recovery metrics
      },
      fontFamily: {
        athletic: ['Roboto Condensed', 'System', 'sans-serif'],
        digital: ['Orbitron', 'monospace'],
      },
      textStyles: {
        workout: {
          fontFamily: 'athletic',
          fontSize: '18px',
          lineHeight: '22px',
          fontWeight: 'bold',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        },
        metric: {
          fontFamily: 'digital',
          fontSize: '24px',
          lineHeight: '28px',
          fontWeight: '500',
        },
      },
      
    },
  },
  plugins: [],
}