module.exports = {
  plugins: [
    // require("postcss-easy-import"),
    // require("postcss-custom-properties")({
    //   preserve: true
    // }),
    require("postcss-custom-media"),
    // require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
