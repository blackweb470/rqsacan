/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Outfit": "'Outfit', sans-serif"
      },
      colors: {
        "Light-Gray": "hsl(212, 45%, 89%)",
        "Bg-White": "hsl(0, 0%, 100%)",
        "Grayish-blue": "hsl(220, 15%, 55%)",
        "Dark-blue": "hsl(218, 44%, 22%)"
      },
      width:{
        "400": "400px",
        "700": "700px",
        "200": "340px",
        "250": "250px",
        "100": "100%",
      },
      height: {
        "500": "500px",
        "700": "700px",
        "400": "400px",
        "800": "770px",
        "600": "600px",
        "100": "100%",
      },
    },
  },
  plugins: [],
}
