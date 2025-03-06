/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      'custom-gradient': "linear-gradient(180deg, #00244D 0%, #000B17 100%)",
      "text-gradient": "linear-gradient(270deg, #FFFFFF 0%, #B8E4FF 100%)",
      'text-heading': "linear-gradient(90deg, #00438C 0%, #001226 100%)",
     "background-global":"linear-gradient(284.89deg, #060B26 0%, #060B26 44.63%, #000E57 99.4%)",
     "Logobackground":"linear-gradient(180deg, #010102 1.59%, #010102 75.18%, rgba(1,1,2,0.1) 98.9%)",
      'custom-gradient': "linear-gradient(85.52deg, #011138 0%, #103A9C 54.85%, #160074 95.36%), linear-gradient(199.29deg, rgba(0, 0, 0, 0) 13.76%, rgba(3, 20, 60, 0.2) 85.5%)",
      "contact-background": "linear-gradient(90deg, #0050AA 0%, #002339 100%)"

    },
    scale: {
      200: "2", // 200% scale
      175: "1.75", // Optional: 175% scale
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

