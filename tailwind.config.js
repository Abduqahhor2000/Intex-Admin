/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "blue-green" : "rgb(0, 147, 152)",
        "blue-green-300" : "#6bbfc2",
        "red-blue" : "rgb(152, 0, 147)",
        "gray-777" : "rgb(166, 166, 166)",
        "gray-640" : "#B4B4C6",
        "black-02" : "rgba(0, 0, 0, 0.2)",
        "lighter" : "rgb(248, 248, 248)",
        "lite-brouwn" : "#A6A6A6",
        "lite-gray" : "#ccc",
        "line" : "#EBEBFF",
        "mean-lite" : "#F8F8F8",
      },
      spacing:{
        "282.5" : "70.75rem",
        "172.5" : "43.25rem",
        "155" : "38.75rem",
        "header" : "calc(100% - 288px)",
      },
      backgroundImage:{
        "smilegirl" : "url('/src/img/smilegirl.jpg')",
        "girlvsboy" : "url('/src/img/girlvsboy.jpg')",
      },
      boxShadow:{
        "login" : "0 0 7px 0 rgba(0, 0, 0, 0.25)",
        "category-btn": "0 1px 8px 0 rgba(0, 0, 0, 0.25)",
      },
      minWidth:{
        '50': '200px',
      },
    },
  },
  plugins: [],
}
