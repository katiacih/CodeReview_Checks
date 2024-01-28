const path = require('path')
// const ESLintPlugin = require('eslint-webpack-plugin');

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
        // plugins: [new ESLintPlugin(options)],
        use: 'ts-loader',
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: [
        //       ['@babel/preset-env', { targets: "defaults" }]
        //     ]
        //   }
        // }
        // options: {
        //   name: '[path][name].[ext]',
        // },
      },
    ],
  },
}
