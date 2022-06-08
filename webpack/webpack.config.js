const {merge} = require('webpack-merge');
const globalConfig = require('./webpack.config.global.js')

module.exports = (envVars) => {
  const {env} = envVars;
  const envConfig = require(`./webpack.config.${env}.js`);
  const evaluatedConfig = merge(globalConfig, envConfig);
  return evaluatedConfig;
}