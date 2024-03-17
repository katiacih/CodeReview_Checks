/* eslint-disable no-undef */
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    extensionAlias: {
      '.js': ['.js', '.ts'],
      '.cjs': ['.cjs', '.cts'],
      '.mjs': ['.mjs', '.mts'],
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|png)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        // test: /\.(png|jpg|gif)$/i,
        test: /\.([cm]?ts|tsx)$/,
        loader: 'ts-loader',
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 8192,
        //       name: 'images/[name].[hash:8].[ext]',
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
}
