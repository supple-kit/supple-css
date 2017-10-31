module.exports = {
  plugins: [
    require("postcss-easy-import"),
    require("postcss-color-function"),
    require("postcss-apply"),
    require("postcss-custom-media"),
    // require("postcss-custom-properties")({
    //   preserve: true,
    // }),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
