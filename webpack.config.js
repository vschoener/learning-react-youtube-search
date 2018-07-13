const DotEnv = require('dotenv-webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  plugins: [
    new DotEnv()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
