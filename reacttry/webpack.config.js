module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app.bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080,
    contentBase: './'
  },
  resolve: {
    extensions: ['*', '.js', 'jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}