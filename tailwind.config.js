/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        blue: {
          primary: "#0070FF",
          secondary: "#71A5DE",
          hover: "rgba(0,120,250,1)",
          disabled: "rgba(146,192,255,1)",
          light: "rgba(0,94,236,.2)",
        },
        gray: {
          primary: "#F3F2F2",
          secondary: "rgba(247,243,243,1)",
          hover: "rgba(180,180,180,1)",
          disabled: "rgba(240,240,240,1)",
          table: "rgba(229,226,226,1)",
        },
        red: {
          primary: "#D25050",
          hover: "rgba(255,0,0,1)",
          disabled: "rgba(255,125,100,1)",
          "device-head": "rgba(244,27,27,1)",
          "device-foot": "rgba(244,27,27,.15)",
          reset: "#f87171",
        },
        lime: {
          primary: "rgba(163,230,53,1)",
        },
        green: {
          primary: "#00EC26",
          hover: "rgba(89,217,94,1)",
          disabled: "#83de92",
          "dark-primary": "#007934",
          "dark-hover": "#1c8d4d",
          "dark-disabled": "#3dc578",
        },
        brown: {
          primary: "#C55D1E",
          hover: "#973A01 ",
          disabled: "#C18866",
        },
        darkgreen: {
          primary: "#0E805C ",
          hover: "#00744F ",
        },
        orange: {
          primary: "#EF9308",
          hover: "rgba(250,177,67,1)",
          disabled: "#EDBC72",
        },
        delete: "#B81348",
        success: " #13B821",
      },
      textColor: {
        gray: {
          primary: "rgba(111,111,111,1)",
          button: "#344054",
          subHeading: "#667085",
          label: "#777777",
          children: "#4C4C4C",
        },
        red: {
          primary: "#D25050",
        },
        blue: {
          primary: "rgba(0,94,236,1)",
        },
        green: {
          primary: "#00EC34",
        },
      },
    },
  },
  plugins: [],
};
