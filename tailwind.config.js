module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      display: ["Metropolis", "serif"],
    },
    extend: {
      colors: {
        "my-blue": "#034C8C",
        "my-blue-dark": "#012240",
        "my-yellow": "#F2A71D",
        "my-gray": "#403E3E",
        "my-white": "#F2F2F0",
      },
      transitionProperty: {
        height: "height",
      },
      spacing: {
        // vw units
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "80vw": "80vw",
        "90vw": "90vw",
        "100vw": "100vw",
        // vh units
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },
    },
    brightness: {
      25: ".25",
      10: ".1",
      20: ".2",
      30: ".3",
      40: ".4",
      60: ".6",
      70: ".7",
      80: ".8",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
