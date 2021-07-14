'use strict';

const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugin = []

  const entryFiles = glob.sync(path.join(__dirname, 'src/*/index-server.js'))
  Object.keys(entryFiles)
    .map((index) => {
      const entryFile = entryFiles[index]
      const match = entryFile.match(/src\/(.*)\/index-server\.js/)
      const pageName = match && match[1]
      if (pageName) {
        entry[pageName] = entryFile
        htmlWebpackPlugin.push(
          new HtmlWebpackPlugin({
            template: path.join(__dirname, `src/${pageName}/index.html`),
            filename: `${pageName}.html`,
            chunks: ['vendors', 'commons', pageName],
            inject: true,
            minify: {
              html5: true,
              collapseWhitespace: true,
              preserveLineBreaks: false,
              minifyCSS: true,
              minifyJS: true,
              removeComments: false
            }
          }))
      }
    })
  return {
    entry,
    htmlWebpackPlugin
  }
}
const { entry, htmlWebpackPlugin } = setMPA()


module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-server.js',
    libraryTarget: 'umd'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ].concat(htmlWebpackPlugin),
  // optimization: {
  //   splitChunks: {
  //     minSize: 0,
  //     cacheGroups: {
  //       commons: {
  //         name: 'commons',
  //         chunks: 'all',
  //         minChunks: 2
  //       },
  //       vendors: {
  //         test: /(react|react-dom)/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // }
}