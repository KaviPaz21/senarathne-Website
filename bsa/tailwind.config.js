/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "ps": '320px', // Custom breakpoint for extra small screens
      
      },
      height:{
         '2x':"2px",
        '97':'96vh',
        'ch800':'800px'
      },
      fontSize:{
        'nv18':'18px',
        'c16':'16px',
        'c17':"17px",
        'c20':"20px"
      },
      width:{
        "cw98":"98%",
        "cw96":"96%",
        "cw95":"95%",
        "cw93":"93%",
        "cw92":"92%",
        "cw80":"80%",
        "cw500":"500px",
        "cw900":"900px"
      
      },
      animation: {
        'ease-in': 'easeIn 1s ease-in forwards',
      },
      fontFamily:{
        "sinhala-1":"Noto Serif Sinhala",
        "name":"Ga Maamli",
        'zain':"Zain"
      }
    },
  },
  plugins: [],
}