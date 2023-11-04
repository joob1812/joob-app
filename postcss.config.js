export default {
  plugins: {
    tailwindcss: {
      config: "./tailwind.config.js",
    },
    autoprefixer: {
      overrideBrowserslist: ["last 2 versions"],
    },
  },
};
