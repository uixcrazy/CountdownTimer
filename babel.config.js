module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./core/components",
            hooks: "./core/hooks",

            // "app-counter": "./src/app-counter/lib/index.ts",
          },
        },
      ],
    ],
  };
};
