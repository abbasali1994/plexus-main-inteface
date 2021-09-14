const injectDevServer = require("@cypress/react/plugins/react-scripts");

module.exports = (on, config) => {
  require("@cypress/code-coverage/task")(on, config);
  injectDevServer(on, config);
  on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));
  return config;
};
