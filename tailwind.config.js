/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "SF-Pro-Text-Bold": ["SF-Pro-Text-Bold", "sans-serif"],
      "SF-Pro-Text-Regular": ["SF-Pro-Text-Regular", "sans-serif"],
      "SF-Pro-Text-Semibold": ["SF-Pro-Text-Semibold", "sans-serif"],
      "OpenSans-Bold": ["OpenSans-Bold", "sans-serif"],
      "OpenSans-Regular": ["OpenSans-Regular", "sans-serif"],
      "OpenSans-BoldItalic": ["OpenSans-BoldItalic", "sans-serif"],
      "Montserrat-ExtraBold": ["Montserrat-ExtraBold", "sans-serif"],
      "Montserrat-SemiBold": ["Montserrat-SemiBold", "sans-serif"],
      "Montserrat-Medium": ["Montserrat-Medium", "sans-serif"],
      "Montserrat-Bold": ["Montserrat-Bold", "sans-serif"],
    },
    colors: {
      "BlueHeader": "#1477F8",
      "BlueBG": "#DEE9FA",
      "BlueButtonBG": "#60A5FA",
      "ModalText": "#0284C7",
      "white": "#FFFFFF",
      "black": "#000000",
      "WhiteButtonText": "#2563EB",
      "BackGroundBlue": "#DEE9FA",
      "GreyBG": "#F9FBFC",
      "GreyText": "#767676",
      "GreenText": "#7A984B",
      "Red": "#F23E3E",
    },
  },
  plugins: [],
  
};
