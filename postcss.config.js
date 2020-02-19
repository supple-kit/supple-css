module.exports = {
  plugins: [
    // require("autoprefixer"),
    require('postcss-normalize'),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
