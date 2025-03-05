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

