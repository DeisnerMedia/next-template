const withPWA = require("next-pwa")({
  dest: "public",
  disable: false, // PWA immer aktiv
});

module.exports = withPWA({
  reactStrictMode: true,
});
