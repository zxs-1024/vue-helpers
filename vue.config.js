const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  configureWebpack: config => {
    config.plugins = [...config.plugins, new BundleAnalyzerPlugin()]
  }
}
