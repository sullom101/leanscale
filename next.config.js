const { parsed: localEnv } = require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...defaultConfig,
      target: "server",
      compress: true,
      cssModules: true,
      generateEtags: true,
      env: {
        appUrl: localEnv.APP_URL,
        apiUrl: localEnv.API_URL
      }
    };
  }
  return {
    ...defaultConfig,
    target: "server",
    compress: true,
    cssModules: true,
    generateEtags: true,
    env: {
      appUrl: localEnv.APP_URL,
      apiUrl: localEnv.API_URL
    }
  };
};
