const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        // loader: 'file-loader',
        exclude: /node_modules/,
        use: 'ts-loader',
        // options: {
        //   name: '[path][name].[ext]',
        // },
      },
    ],
  },
};
