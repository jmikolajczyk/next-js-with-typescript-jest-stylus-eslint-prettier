const isProd = process.env.NODE_ENV === 'production'
const withCSS = require('@zeit/next-css')
const withStylus = require('@zeit/next-stylus')
module.exports = withCSS({})
module.exports = withStylus({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProd ? '[hash:base64]' : '[path][name]__[local]',
  },
})
