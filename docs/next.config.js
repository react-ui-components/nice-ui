// @flow
const path = require('path')

module.exports = {
  webpack: (config) => {
    const newConfig = config

    newConfig.resolve.alias = newConfig.resolve.alias || {}
    newConfig.resolve.alias['nice-ui'] = path.resolve(__dirname, '../src')

    newConfig.module.rules.push({
      test: /\.md$/,
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]',
      },
    }, {
      test: /\.md$/,
      loader: 'raw-loader',
    })

    return newConfig
  },
}
