const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    outDir: "../dist",
    publicDir: "../public",
  },
  server: {
    port: 8080,
    hot: true,
  },
  // Temporarily hide sass deprecation warning
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
};
