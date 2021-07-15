const webpack = require('webpack')
const path = require('path')
module.exports = {
  entry:{
    library:[
      'react',
      'react-dom'
    ]
  },
  output:{
    filename:'[name]_[hash].dll.js',
    path:path.join(__dirname,'build/library'),
    library:'[name]_[hash]'
  },
  plugins:[
    new webpack.DllPlugin({
      name:'[name]_[hash]',
      path:path.join(__dirname,'build/library/manifest.json')
    })
  ]
}