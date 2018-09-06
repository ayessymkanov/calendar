const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 8000 // Convert images < 8kb to base64 strings
                // name: '/[path]/[hash]-[name].[ext]'
          }
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  },
  devServer: {
    port: 8000,
    compress: true,
    inline: true,
    hot: true,
    historyApiFallback: true
  }
}

module.exports = config
