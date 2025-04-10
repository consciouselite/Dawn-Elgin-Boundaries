/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F7F7F7', // Stone Gray 100
          200: '#E5E5E5', // Stone Gray 200
          300: '#D4D4D4', // Stone Gray 300
          400: '#A3A3A3', // Stone Gray 400
          500: '#4A4A4A', // Stone Gray 500
          600: '#3D3D3D', // Stone Gray 600
          700: '#303030', // Stone Gray 700
          800: '#232323', // Stone Gray 800
          900: '#161616', // Stone Gray 900
        },
        secondary: {
          100: '#FFFFFF', // Warm Taupe 100
          200: '#F7F5F3', // Warm Taupe 200
          300: '#EFEAE7', // Warm Taupe 300
          400: '#E7E3DF', // Warm Taupe 400
          500: '#E5E0DB', // Warm Taupe 500
          600: '#D1CCC7', // Warm Taupe 600
          700: '#BDB8B3', // Warm Taupe 700
          800: '#A9A49F', // Warm Taupe 800
          900: '#95908B', // Warm Taupe 900
        },
        accent: {
          100: '#F4F6F5', // Sage Mist 100
          200: '#E8EDEA', // Sage Mist 200
          300: '#DCE3E0', // Sage Mist 300
          400: '#D0D9D5', // Sage Mist 400
          500: '#B7C4BC', // Sage Mist 500
          600: '#9DAAA3', // Sage Mist 600
          700: '#83908A', // Sage Mist 700
          800: '#697671', // Sage Mist 800
          900: '#4F5C58', // Sage Mist 900
          hover: '#83908A', // Sage Mist hover
        },
        success: {
          DEFAULT: '#7B9B8A', // Success default
          light: '#98B5A6', // Success light
          dark: '#5E816E', // Success dark
        },
        warning: {
          DEFAULT: '#C4B59F', // Warning default
          light: '#D6CAB8', // Warning light
          dark: '#B2A086', // Warning dark
        },
        error: {
          DEFAULT: '#B79F9F', // Error default
          light: '#CAB8B8', // Error light
          dark: '#A48686', // Error dark
        },
        info: {
          DEFAULT: '#9FB7B7', // Info default
          light: '#B8CACA', // Info light
          dark: '#86A4A4', // Info dark
        },
      },
      fontFamily: {
        display: ['Tenor Sans', 'sans-serif'],
        heading: ['Tenor Sans', 'sans-serif'],
        body: ['Karla', 'sans-serif'],
      },
      fontSize: {
        'display-1': '3rem',
        'display-2': '2.25rem',
        'h1': '1.875rem',
        'h2': '1.5rem',
        'h3': '1.25rem',
        'h4': '1.125rem',
      },
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, rgba(74, 74, 74, 0.05) 0%, rgba(229, 224, 219, 0.95) 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(74, 74, 74, 0.1) 0%, rgba(229, 224, 219, 0.98) 100%)',
        'gradient-card': 'linear-gradient(135deg, #E5E0DB 0%, #FFFFFF 100%)',
        'gradient-card-hover': 'linear-gradient(135deg, #DCE3E0 0%, #F4F6F5 100%)',
        'gradient-subtle': 'linear-gradient(180deg, rgba(183, 196, 188, 0.1) 0%, rgba(229, 224, 219, 0.95) 100%)',
        'gradient-subtle-hover': 'linear-gradient(180deg, rgba(183, 196, 188, 0.2) 0%, rgba(229, 224, 219, 1) 100%)',
      },
    },
  },
  plugins: [],
};
