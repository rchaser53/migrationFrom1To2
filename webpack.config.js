const webpack = require('webpack');
const path = require("path");

module.exports = {
	context: path.resolve(__dirname, './src'),
  devtool: 'inline-source-map',
  entry: {
    // template: "./template.js",
    // noTemplate:  "./noTemplate.js",
    index: "./dynamicVue.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/public/",
    // filename: "[name].bundle.js"
    filename: "bundle.js"
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};