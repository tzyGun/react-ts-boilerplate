const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundlefile.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: './src/index.html'
    })
  ]
}