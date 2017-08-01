const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, './src'),
  devtool: 'inline-source-map',
  entry: {
    componentInComponent: './componentInComponent.js',
    vueTouch: './vueTouch.js',
    template: "./template.js",
    noTemplate:  "./noTemplate.js",
    index: "./insideTemplate.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/templates/",
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: ['.html', '.js', '.vue']
  },
  module: {
    rules:[{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude:["node_modules/*"]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader",
    },
    {
      test: /\.html$/,
      loader: "html-loader",
      exclude:["node_modules/*"]
    }]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: '../insideTemplate.html'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};