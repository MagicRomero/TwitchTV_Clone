const withImages = require("next-images");

module.exports = withImages({
  esModule: true,
  inlineImageLimit: false,
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
});
