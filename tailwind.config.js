module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Permanent: ["Permanent Marker"],    
      },
      spacing: {
        '0.8': '0.3rem',
        '9.5': '2.3rem',
      },
      width: {
        100: '28rem',
        110: '35rem',
        120: '45rem',
        473: '473px',
      },
      height: {
        473: '473px',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      colors: {
        blue: {
          450: '#3481F0',
          460: '#37AEC4',
          810: '#1C1C33',
          820: '#353554',
          830: '#14142B',
          840: '#05050F',
          900: '#171717',
          850: '#1F1F1F',
          900: '#170E1E'
        },
        gray: {
          660: '#373737',
          760: '#282828',
        },
        red: {
          75: '#FC0023',
        },
        yellow: {
          75: '#E6E9E0',
          125: '#A6752B',
        },
        orange: {
          900: '#8D713F',
        },
        brown: {
          100: '#AC3434',
        }

      },
      screens: {
        'laptop': '920px',
      },
      boxShadow: {
        '5xl': '3px 3px 10px rgba(0, 0, 0, 0.6), -3px -3px 10px rgba(0, 0, 0, 0.6)',
      },
      variants: {
        backgroundColor: ['responsive', 'even'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}