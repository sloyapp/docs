const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const config = withNextra();

module.exports = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...config,
};
