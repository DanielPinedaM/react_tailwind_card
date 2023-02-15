/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        iconos: { raw: '(max-width: 18.938rem)' },
        dosCol: { raw: '(max-width: 13.313rem)' },
      },
    },

    /* Utopia Fluid Responsive Design
    https://utopia.fyi/type/calculator?c=320,17,1.2,1500,20,1.333,8,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */
    fontSize: {
      'step--1': ['clamp(0.89rem, calc(0.87rem + 0.07vw), 0.94rem)'],
      'step-0': [' clamp(1.06rem, calc(1.01rem + 0.25vw), 1.25rem)'],
      'step-1': ['clamp(1.28rem, calc(1.17rem + 0.53vw), 1.67rem)'],
      'step-2': ['clamp(1.53rem, calc(1.34rem + 0.94vw), 2.22rem)'],
      'step-3': ['clamp(1.84rem, calc(1.53rem + 1.52vw), 2.96rem)'],
      'step-4': ['clamp(2.20rem, calc(1.73rem + 2.36vw), 3.95rem)'],
      'step-5': ['clamp(2.64rem, calc(1.93rem + 3.55vw), 5.26rem)']
    },
  },
  plugins: [],
};
