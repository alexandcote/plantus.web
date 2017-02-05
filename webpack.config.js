const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './public'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: "./public",
    inline: true,
    port: 3000,
    proxy: {
      "/api": {
        target: 'http://localhost:8080',
        pathRewrite: {'^/api' : ''} // Path where the api is mounted
      }
    }
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
}
