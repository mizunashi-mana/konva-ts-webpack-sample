const Path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    bundle: './src/index.ts',
  },

  output: {
    filename: '[name].js',
    path: Path.resolve(__dirname, 'public/dist'),
    publicPath: 'dist/'
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },

  optimization: {
    minimize: false
  }
}
