/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      fontFamily: {
         IPS: ["IBM Plex Sans"],
      },
      screens: {
         print: { raw: "print" },
         screen: { raw: "screen" },
      },
   },
   // ...
   plugins: [require("@tailwindcss/forms")],
};
