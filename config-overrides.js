const {
  rewireWorkboxGenerate,
  defaultGenerateConfig
} = require("react-app-rewire-workbox");

module.exports = function override(config, env) {
  if (env === "production") {
    console.log("Production build - Adding Workbox for PWAs");
    // Extend the default injection config with required swSrc
    const workboxConfig = {
      ...defaultGenerateConfig,
      navigateFallbackBlacklist: [],
      runtimeCaching: [
        {
          urlPattern: new RegExp("^https://newsapi.org/"),
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 10,
            cacheableResponse: {
              statuses: [200]
            }
          }
        }
      ]
    };
    config = rewireWorkboxGenerate(workboxConfig)(config, env);
  }

  return config;
};
