var path = require('path')
htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './example/entry',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'example')
        ],
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [new htmlWebpackPlugin({template: 'example/index.html'})]
}
