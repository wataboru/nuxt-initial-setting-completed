const path = require('path')

/* SCSSを利用できるようにloaderを設定
  (注意) nuxt側とは別で、改めてこちらのwebpack.configを設定する必要がある。
  */
module.exports = ({ config }) => {
  config.resolve.alias['@'] = path.resolve(__dirname, '../')
  config.resolve.alias['~'] = path.resolve(__dirname, '../')
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ]
  })
  return config
}
