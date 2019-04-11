const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: '.',
  configureWebpack: config => {
    if (isProduction)
      config.plugins = [...config.plugins, new BundleAnalyzerPlugin()]
  }
}
