import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './modules/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {
        timeline:
          '4px 4px 12px 0 rgba(98, 163, 203, 0.5), -4px -4px 12px 0 rgba(78, 86, 196, 0.5)',
        ambassadorSatu:
          '18px 31px 0px 3px rgba(44, 54, 109, 1), 4px 4px 12px 0 rgba(98, 163, 203, 0.5), -4px -4px 12px 0 rgba(78, 86, 196, 0.5)',
        ambassadorDua:
          '-19px 26px 0px 3px rgba(44, 54, 109, 1), 4px 4px 12px 0 rgba(98, 163, 203, 0.5), -4px -4px 12px 0 rgba(78, 86, 196, 0.5)',
        ambassadorTiga:
          '16px -3px 0px 6px rgba(44, 54, 109, 1), 4px 4px 12px 0 rgba(98, 163, 203, 0.5), -4px -4px 12px 0 rgba(78, 86, 196, 0.5)',
        ambassadorEmpat:
          '-17px -12px 0px 3px rgba(44, 54, 109, 1), 4px 4px 12px 0 rgba(98, 163, 203, 0.5), -4px -4px 12px 0 rgba(78, 86, 196, 0.5)',
        ambassadorLima:
          '17px -36px 0px 3px rgba(44, 54, 109, 1), 4px 4px 12px 0 rgba(98, 163, 203, 0.5), -4px -4px 12px 0 rgba(78, 86, 196, 0.5)',
      },
      textShadow: {
        ambassador: '0 0 36px #E0ECFF',
        pickEvent: '0 0 12px #ffffff80',
      },
      backgroundImage: {
        'gradient-custom':
          'linear-gradient(6.31deg, #1A2043 33.48%, #2C366D 68.87%)',
      },
      fontFamily: {
        riffic: ['var(--font-riffic)', 'sans-serif'],
        'tex-gyre': ['var(--font-tex-gyre-adventor)', 'sans-serif'],
      },

      colors: {
        // Alert
        'alert-destructive-background': '#FFDCDC',
        'alert-destructive-foreground': '#9A2323',
        'alert-info-background': '#E0DAFA',
        'alert-info-foreground': 'PurpleRegion/MoonRaker/600',
        'alert-success-background': '#DEFFDC',
        'alert-success-foreground': '#1C8333',
        'alert-warning-background': '#FBFFCD',
        'alert-warning-foreground': '#C5BE12',

        // Button
        'button-ghost-all-border': 'Text/TextLightBG',
        'button-ghost-default': 'BlueRegion/Cornflower/50',
        'button-ghost-disabled': '#CAD2D9',
        'button-ghost-hover': 'BlueRegion/Cornflower/50',
        'button-ghost-pressed': 'BlueRegion/Cornflower/50',
        'button-primary-default': 'BlueRegion/Portgage/600',
        'button-primary-disabled': '#2727A3',
        'button-primary-hover': 'BlueRegion/Portgage/600',
        'button-primary-pressed': 'BlueRegion/Portgage/600',
        'button-secondary-default': 'Miscellanous/Ziggurat/400',
        'button-secondary-disabled': '#58808C',
        'button-secondary-hover': 'Miscellanous/Ziggurat/400',
        'button-secondary-pressed': 'Miscellanous/Ziggurat/400',
        'button-tertiary-default': 'BlueRegion/Cornflower/50',
        'button-tertiary-disabled': '#CAD2D9',
        'button-tertiary-hover': 'BlueRegion/Cornflower/50',
        'button-tertiary-pressed': 'BlueRegion/Cornflower/50',

        // Chips
        'chips-default-background': 'BlueRegion/CeruleanBlue/100',
        'chips-default-border': 'PurpleRegion/TrueV/700',
        'chips-default-foreground': 'PurpleRegion/TrueV/700',
        'chips-hover-background': 'BlueRegion/CeruleanBlue/100',
        'chips-hover-border': 'PurpleRegion/BlueViolet/500',
        'chips-hover-foreground': 'PurpleRegion/BlueViolet/500',
        'chips-hover-selected-background': 'PurpleRegion/TrueV/600',
        'chips-hover-selected-border': 'PurpleRegion/BlueViolet/500',
        'chips-hover-selected-foreground': 'PurpleRegion/BlueViolet/500',
        'chips-selected-background': 'PurpleRegion/BlueViolet/600',
        'chips-selected-border': 'PurpleRegion/BlueViolet/500',
        'chips-selected-foreground': 'PurpleRegion/BlueViolet/500',

        // Toast
        'toast-destructive-background': '#FFDCDC',
        'toast-destructive-foreground': '#9A2323',
        'toast-info-background': '#E0DAFA',
        'toast-info-foreground': 'PurpleRegion/MoonRaker/600',
        'toast-success-background': '#DEFFDC',
        'toast-success-foreground': '#1C8333',
        'toast-warning-background': '#FBFFCD',
        'toast-warning-foreground': '#C5BE12',

        // Tooltip
        'tooltip-background': 'BlueRegion/Cornflower/50',
        'tooltip-foreground': 'Text/TextLightBG',

        // Modals
        'modals-background': 'BlueRegion/Cornflower/50',
        'modals-foreground': 'Text/TextLightBG',

        // Custom Colors
        'Text/TextDarkBG': '#E0ECFF',
        'Text/TextLightBG': '#2E3881',

        'BlueRegion/Cornflower/50': '#F0F8FF',
        'BlueRegion/Cornflower/100': '#E1F0FD',
        'BlueRegion/Cornflower/200': '#BCE0FB',
        'BlueRegion/Cornflower/300': '#96D2FA',
        'BlueRegion/Cornflower/400': '#3DADF3',
        'BlueRegion/Cornflower/500': '#1393E4',
        'BlueRegion/Cornflower/600': '#0774C2',
        'BlueRegion/Cornflower/700': '#075C9D',
        'BlueRegion/Cornflower/800': '#0A4F82',
        'BlueRegion/Cornflower/900': '#0E426C',
        'BlueRegion/Cornflower/950': '#0A2A47',

        'BlueRegion/CeruleanBlue/50': '#F1F3FD',
        'BlueRegion/CeruleanBlue/100': '#E0E6F9',
        'BlueRegion/CeruleanBlue/200': '#C8D3F5',
        'BlueRegion/CeruleanBlue/300': '#A3B6ED',
        'BlueRegion/CeruleanBlue/400': '#7790E3',
        'BlueRegion/CeruleanBlue/500': '#576DDA',
        'BlueRegion/CeruleanBlue/600': '#4654CE',
        'BlueRegion/CeruleanBlue/700': '#393FBC',
        'BlueRegion/CeruleanBlue/800': '#343799',
        'BlueRegion/CeruleanBlue/900': '#2E327A',
        'BlueRegion/CeruleanBlue/950': '#20214B',

        'BlueRegion/GovernorBay/50': '#EEF5FF',
        'BlueRegion/GovernorBay/100': '#E0ECFF',
        'BlueRegion/GovernorBay/200': '#C7DBFE',
        'BlueRegion/GovernorBay/300': '#A4C2FD',
        'BlueRegion/GovernorBay/400': '#809EF9',
        'BlueRegion/GovernorBay/500': '#627CF2',
        'BlueRegion/GovernorBay/600': '#4555E6',
        'BlueRegion/GovernorBay/700': '#3440C8',
        'BlueRegion/GovernorBay/800': '#2F3AA4',
        'BlueRegion/GovernorBay/900': '#2D3782',
        'BlueRegion/GovernorBay/950': '#1B204B',

        'BlueRegion/Portgage/50': '#EEF5FF',
        'BlueRegion/Portgage/100': '#E0ECFF',
        'BlueRegion/Portgage/200': '#C7DBFE',
        'BlueRegion/Portgage/300': '#A4C2FD',
        'BlueRegion/Portgage/400': '#809EF9',
        'BlueRegion/Portgage/500': '#627CF2',
        'BlueRegion/Portgage/600': '#4555E6',
        'BlueRegion/Portgage/700': '#3733CF',
        'BlueRegion/Portgage/800': '#2F3AA4',
        'BlueRegion/Portgage/900': '#2D3782',
        'BlueRegion/Portgage/950': '#1B204B',

        'PurpleRegion/MoonRaker/50': '#F6F4FE',
        'PurpleRegion/MoonRaker/100': '#EEEBFC',
        'PurpleRegion/MoonRaker/200': '#E0DAFA',
        'PurpleRegion/MoonRaker/300': '#D3CAF7',
        'PurpleRegion/MoonRaker/400': '#AC97EE',
        'PurpleRegion/MoonRaker/500': '#916DE5',
        'PurpleRegion/MoonRaker/600': '#804ED9',
        'PurpleRegion/MoonRaker/700': '#703CC5',
        'PurpleRegion/MoonRaker/800': '#5E31A6',
        'PurpleRegion/MoonRaker/900': '#4E2A88',
        'PurpleRegion/MoonRaker/950': '#30195C',

        'PurpleRegion/Logan/50': '#F8F7FB',
        'PurpleRegion/Logan/100': '#F2F0F7',
        'PurpleRegion/Logan/200': '#E6E3F1',
        'PurpleRegion/Logan/300': '#D3CCE6',
        'PurpleRegion/Logan/400': '#B8AAD5',
        'PurpleRegion/Logan/500': '#A28DC5',
        'PurpleRegion/Logan/600': '#9072B5',
        'PurpleRegion/Logan/700': '#7E60A1',
        'PurpleRegion/Logan/800': '#695087',
        'PurpleRegion/Logan/900': '#57436F',
        'PurpleRegion/Logan/950': '#382B4A',

        'PurpleRegion/BilobaFlower/50': '#F7F5FD',
        'PurpleRegion/BilobaFlower/100': '#F1ECFB',
        'PurpleRegion/BilobaFlower/200': '#E5DCF8',
        'PurpleRegion/BilobaFlower/300': '#D1C0F2',
        'PurpleRegion/BilobaFlower/400': '#BB9FE9',
        'PurpleRegion/BilobaFlower/500': '#A174DE',
        'PurpleRegion/BilobaFlower/600': '#9356D1',
        'PurpleRegion/BilobaFlower/700': '#8244BD',
        'PurpleRegion/BilobaFlower/800': '#6D399E',
        'PurpleRegion/BilobaFlower/900': '#6D399E',
        'PurpleRegion/BilobaFlower/950': '#6D399E',

        'PurpleRegion/TrueV/50': '#F5F4FE',
        'PurpleRegion/TrueV/100': '#EDEBFC',
        'PurpleRegion/TrueV/200': '#DCDBF9',
        'PurpleRegion/TrueV/300': '#C1BDF5',
        'PurpleRegion/TrueV/400': '#A198ED',
        'PurpleRegion/TrueV/500': '#8774E5',
        'PurpleRegion/TrueV/600': '#6F4FD8',
        'PurpleRegion/TrueV/700': '#5F3DC4',
        'PurpleRegion/TrueV/800': '#5033A4',
        'PurpleRegion/TrueV/900': '#422B87',
        'PurpleRegion/TrueV/950': '#281A5B',

        'PurpleRegion/BlueViolet/50': '#F0F1FD',
        'PurpleRegion/BlueViolet/100': '#E3E6FC',
        'PurpleRegion/BlueViolet/200': '#CCD0F9',
        'PurpleRegion/BlueViolet/300': '#ADB1F4',
        'PurpleRegion/BlueViolet/400': '#8E8CED',
        'PurpleRegion/BlueViolet/500': '#7B70E4',
        'PurpleRegion/BlueViolet/600': '#6149D4',
        'PurpleRegion/BlueViolet/700': '#5C45BD',
        'PurpleRegion/BlueViolet/800': '#4B3A99',
        'PurpleRegion/BlueViolet/900': '#40357A',
        'PurpleRegion/BlueViolet/950': '#271F47',

        'RedRegion/Monza/50': '#fff1f2',
        'RedRegion/Monza/100': '#FFE0E3',
        'RedRegion/Monza/200': '#FFC6CB',
        'RedRegion/Monza/300': '#FF9EA7',
        'RedRegion/Monza/400': '#FF6674',
        'RedRegion/Monza/500': '#FD3648',
        'RedRegion/Monza/600': '#EB172A',
        'RedRegion/Monza/700': '#C10F1F',
        'RedRegion/Monza/800': '#A3111E',
        'RedRegion/Monza/900': '#87151F',
        'RedRegion/Monza/950': '#4A050B',

        'RedRegion/Pohutukawa/50': '#FEF2F3',
        'RedRegion/Pohutukawa/100': '#FFE1E4',
        'RedRegion/Pohutukawa/200': '#FFC9CE',
        'RedRegion/Pohutukawa/300': '#FEA3AB',
        'RedRegion/Pohutukawa/400': '#FC6D7A',
        'RedRegion/Pohutukawa/500': '#F43F4F',
        'RedRegion/Pohutukawa/600': '#E12132',
        'RedRegion/Pohutukawa/700': '#BD1827',
        'RedRegion/Pohutukawa/800': '#931621',
        'RedRegion/Pohutukawa/900': '#821A23',
        'RedRegion/Pohutukawa/950': '#47080E',

        'RedRegion/DarkBurgundy/50': '#FFEEEE',
        'RedRegion/DarkBurgundy/100': '#FFDADA',
        'RedRegion/DarkBurgundy/200': '#FFBBBC',
        'RedRegion/DarkBurgundy/300': '#FF8B8C',
        'RedRegion/DarkBurgundy/400': '#FF494B',
        'RedRegion/DarkBurgundy/500': '#FF1113',
        'RedRegion/DarkBurgundy/600': '#FF0002',
        'RedRegion/DarkBurgundy/700': '#E70002',
        'RedRegion/DarkBurgundy/800': '#BE0002',
        'RedRegion/DarkBurgundy/900': '#780001',
        'RedRegion/DarkBurgundy/950': '#560001',

        'RedRegion/SeaPink/50': '#FEF2F3',
        'RedRegion/SeaPink/100': '#FCE7E7',
        'RedRegion/SeaPink/200': '#F9D2D5',
        'RedRegion/SeaPink/300': '#F19CA3',
        'RedRegion/SeaPink/400': '#EC808B',
        'RedRegion/SeaPink/500': '#E15265',
        'RedRegion/SeaPink/600': '#CC324E',
        'RedRegion/SeaPink/700': '#AC243F',
        'RedRegion/SeaPink/800': '#90213B',
        'RedRegion/SeaPink/900': '#7B2038',
        'RedRegion/SeaPink/950': '#440D1A',

        'RedRegion/Hibiscus/50': '#FDF2F9',
        'RedRegion/Hibiscus/100': '#FCE7F6',
        'RedRegion/Hibiscus/200': '#FAD0ED',
        'RedRegion/Hibiscus/300': '#F7AADD',
        'RedRegion/Hibiscus/400': '#F175C5',
        'RedRegion/Hibiscus/500': '#E94BAC',
        'RedRegion/Hibiscus/600': '#D72B8C',
        'RedRegion/Hibiscus/700': '#B91B70',
        'RedRegion/Hibiscus/800': '#9A1A5E',
        'RedRegion/Hibiscus/900': '#811A50',
        'RedRegion/Hibiscus/950': '#4F082D',

        'Misc/JordyBlue/50': '#F0F6FE',
        'Misc/JordyBlue/100': '#DEEAFB',
        'Misc/JordyBlue/200': '#C4DDF9',
        'Misc/JordyBlue/300': '#87BBF3',
        'Misc/JordyBlue/400': '#6CA7EE',
        'Misc/JordyBlue/500': '#4987E8',
        'Misc/JordyBlue/600': '#346BDC',
        'Misc/JordyBlue/700': '#25B7CA',
        'Misc/JordyBlue/800': '#2947A4',
        'Misc/JordyBlue/900': '#263F82',
        'Misc/JordyBlue/950': '#1C274F',

        'Misc/Sundance/50': '#F9F8ED',
        'Misc/Sundance/100': '#EFEED2',
        'Misc/Sundance/200': '#E1DBA7',
        'Misc/Sundance/300': '#D0C374',
        'Misc/Sundance/400': '#C7B45D',
        'Misc/Sundance/500': '#B29840',
        'Misc/Sundance/600': '#997B35',
        'Misc/Sundance/700': '#7B5D2D',
        'Misc/Sundance/800': '#684C2B',
        'Misc/Sundance/900': '#5A4129',
        'Misc/Sundance/950': '#332315',

        'Misc/Mischka/50': '#F5F6F8',
        'Misc/Mischka/100': '#E9F1F5',
        'Misc/Mischka/200': '#D9DCE5',
        'Misc/Mischka/300': '#C8CCD9',
        'Misc/Mischka/400': '#B1B4C8',
        'Misc/Mischka/500': '#9C9EB8',
        'Misc/Mischka/600': '#8686A5',
        'Misc/Mischka/700': '#74738F',
        'Misc/Mischka/800': '#5F5E75',
        'Misc/Mischka/900': '#4F4F60',
        'Misc/Mischka/950': '#2E2E38',

        'Misc/ShuttleGray/50': '#F4F6F7',
        'Misc/ShuttleGray/100': '#E3E7EA',
        'Misc/ShuttleGray/200': '#CAD2D7',
        'Misc/ShuttleGray/300': '#A5B1BB',
        'Misc/ShuttleGray/400': '#798997',
        'Misc/ShuttleGray/500': '#5E6E7C',
        'Misc/ShuttleGray/600': '#556270',
        'Misc/ShuttleGray/700': '#454F59',
        'Misc/ShuttleGray/800': '#3E444C',
        'Misc/ShuttleGray/900': '#373B42',
        'Misc/ShuttleGray/950': '#22252A',

        'Misc/OuterSpace/50': '#F0F8FF',
        'Misc/OuterSpace/100': '#0E191C',
        'Misc/OuterSpace/200': '#101617',
        'Misc/OuterSpace/300': '#A0B4C0',
        'Misc/OuterSpace/400': '#728D9E',
        'Misc/OuterSpace/500': '#577283',
        'Misc/OuterSpace/600': '#4B5F6F',
        'Misc/OuterSpace/700': '#41505D',
        'Misc/OuterSpace/800': '#3B454F',
        'Misc/OuterSpace/900': '#2F363E',
        'Misc/OuterSpace/950': '#20262C',

        'Misc/Ziggurat/50': '#F5F8FA',
        'Misc/Ziggurat/100': '#E9F1F5',
        'Misc/Ziggurat/200': '#CFE2E8',
        'Misc/Ziggurat/300': '#B5D3DD',
        'Misc/Ziggurat/400': '#73ABBD',
        'Misc/Ziggurat/500': '#5192A6',
        'Misc/Ziggurat/600': '#3E778B',
        'Misc/Ziggurat/700': '#336071',
        'Misc/Ziggurat/800': '#2E505E',
        'Misc/Ziggurat/900': '#2A4550',
        'Misc/Ziggurat/950': '#1C2D35',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontSize: {
        t1: '60px',
        t2: '48px',
        t3: '36px',
        t4: '30px',
        t5: '24px',
        t6: '20px',
        t7: '16px',
        t8: '14px',
        t9: '12px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
        'float-vertical': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        'float-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-30px)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(3deg)' },
          '50%': { transform: 'rotate(-3deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float-vertical': 'float-vertical 5s ease-in-out infinite',
        'float-horizontal': 'float-horizontal 5s ease-in-out infinite',
        spin: 'spin 10s linear infinite',
        swing: 'swing 1s infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities, theme }: any) {
      const newUtilities = {
        '.text-shadow-ambassador': {
          textShadow: theme('textShadow.ambassador'),
        },
        '.text-shadow-pickEvent': {
          textShadow: '0 0 12px #ffffff80',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    function ({ addUtilities }: any) {
      addUtilities({
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-x-0': {
          'transform': 'rotateX(0deg)'
        },
        '.rotate-x-180': {
          'transform': 'rotateX(180deg)'
        },
      })
    },
  ],
} satisfies Config

export default config
