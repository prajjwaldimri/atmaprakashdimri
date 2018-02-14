const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin('../css/[name].css');

module.exports = {
  context: path.resolve(__dirname, 'source/js'),
  entry: {
    userblog: './userblog.js',
    gallery: './gallery.js',
    main: './main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  devtool: 'inline-source-map',
  plugins: [new CleanWebpackPlugin(['public']), extractPlugin],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /source/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        include: /source/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
};
