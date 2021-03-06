const path = require('path')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {

  return {
    entry: ['./src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader:'babel-loader'
        }, {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            }, {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }, {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilemane: '[id].css'
      }),
      new Dotenv()
    ],
    devtool: env === 'production' ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}
