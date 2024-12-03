import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin"; 

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  important: 'html',
  content: [
    "./**/*.{js,jsx,ts,tsx}",    
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        base:
        {
          white: '#FFFFFF',
          black: '#000000',
        },
        primary: {
          25: '#EBF5F8',
          50: '#D7EBF1',
          100: '#C3E1EA',
          200: '#9ACDDC',
          300: '#6FB9CE',
          400: '#3AA5BF',
          500: '#029BB8',
          600: '#017288',
          700: '#004B5B',
          800: '#003945',
          900: '#052D3A',
          950: '#002430',
        },
        gray: {        
          25: '#FBFBFB',
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#464646',
          900: '#3D3D3D',
          950: '#262626',
        },
        brightBlue: {
          25: '#F5FBFF',
          50: '#F2F8FD',
          100: '#E3EFFB',
          200: '#C1E0F6',
          300: '#8BC6EE',
          400: '#4DA9E3',
          500: '#2488C8',
          600: '#1771B2',
          700: '#145A90',
          800: '#154D77',
          900: '#174163',
        },
        skyBlue: {
          25: '#FCFDFF',
          50: '#F3F6FC',
          100: '#E6ECF8',
          200: '#C7D8F0',
          300: '#95B7E4',
          400: '#5C91D4',
          500: '#3773C0',
          600: '#2A60AE',
          700: '#214783',
          800: '#1F3E6D',
          900: '#1E355C',
        },
        yellow: {
          25: '#FFFCF0',
          50: '#FFFBEB',
          100: '#FFF5C6',
          200: '#FFE888',
          300: '#FFD74A',
          400: '#FFC72F',
          500: '#F9A107',
          600: '#DD7902',
          700: '#B75506',
          800: '#94400C',
          900: '#7A350D',
        },
        additional: {
          purple: '#272053',
          pienk: '#E51566',       
        },
        error: {
          25: '#FFF3F3',
          50: '#FFF1F1',
          100: '#FFE0E0',
          200: '#FFC7C6',
          300: '#FFA09F',
          400: '#FF6967',
          500: '#FB3A38',
          600: '#EB2D2B',
          700: '10px solid #C41311',
          800: '#A21312',
          900: '#861716',
        },
        success: {
          25: '#F9FFFB',
          50: '#F1FCF5',
          100: '#DEFAEC',
          200: '#DEFAEC',
          300: '#8EE7B9',
          400: '#55D393',
          500: '#2AA969',
          600: '#20995C',
          700: '#1D784B',
          800: '#1C5F3E',
          900: '#194E35',
        },
        warning: {
          25: '#FFFAF3',
          50: '#FFF7ED',
          100: '#FEEDD6',
          200: '#FDD7AB',
          300: '#FBBA76',
          400: '#F7892F',
          500: '#F5741A',
          600: '#E65910',
          700: '#BF420F',
          800: '#983514',
          900: '#7A2E14',
        },
        info: {
          25: '#F7FCFF',
          50: '#F0FAFF',
          100: '#E0F4FE',
          200: '#B9ECFE',
          300: '#7CDDFD',
          400: '#36CEFA',
          500: '#0CB8EB',
          600: '#00A5DF',
          700: '#0176A3',
          800: '#066386',
          900: '#0B526F',
        },      
      },
      fontFamily: {
        heading: ['Avenir-Black', "sans-serif"],
        body:  ['Avenir-Black', "sans-serif"],
        mono: undefined,
        AvenirBlack: ['Avenir-Black', "sans-serif"],
        AvenirBlackOblique: ['Avenir-BlackOblique', "sans-serif"],
        AvenirBook: ['Avenir-Book', "sans-serif"],
        AvenirBookOblique: ['Avenir-BookOblique', "sans-serif"],
        AvenirHeavy: ['Avenir-Heavy', "sans-serif"],
        AvenirHeavyOblique: ['Avenir-HeavyOblique', "sans-serif"],
        AvenirLight: ['Avenir-Light', "sans-serif"],
        AvenirLightOblique: ['Avenir-LightOblique', "sans-serif"],
        AvenirMedium: ['Avenir-Medium', "sans-serif"],
        AvenirMediumOblique: ['Avenir-MediumOblique', "sans-serif"],
        AvenirOblique: ['Avenir-Oblique', "sans-serif"],
        AvenirRoman: ['Avenir-Roman', "sans-serif"],
      },
      fontWeight: {
        extrablack: '950',
      },
      fontSize: {
        'display-large': '36px',
        'display-medium': '32px',
        'display-small': '28px',
        'heading-large': '24px',
        'heading-medium': '20px',
        'heading-small': '12px',
        'copy-large': '16px',
        'copy-medium': '14px',
        'copy-small': '12px',
      },
    },
  },
  plugins: [gluestackPlugin],
};
