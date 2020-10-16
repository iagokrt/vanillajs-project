const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      // This tells webpack to import required html files
      // as a string, through the html-loader
      { test: /\.html$/, use: ['html-loader'] }
    ]
  },
  // You *could* include knockout in your bundle,
  // but I usually get it from a CDN
  externals: {
    knockout: 'ko'
  }
}
