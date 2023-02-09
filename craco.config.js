// craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      '@images': path.resolve(__dirname, "src/assets/")
    }
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}