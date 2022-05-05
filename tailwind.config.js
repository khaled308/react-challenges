module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm : "640px",
      md : "768px",
      lg: "967px",
      xl : "1440px"
    },
    extend: {
      colors:{
        darkBlue : 'hsl(209, 23%, 22%)',
        veryDarkBlueBg : 'hsl(207, 26%, 17%)',
        veryDarkText: 'hsl(200, 15%, 8%)',
        darkGray: 'hsl(0, 0%, 52%)',
        veryLightGray: 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
