const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = () => {
  console.group(`Running... [${mode}]`);
  console.log("Executando projeto Template");
  console.log("Enjoy!");
  console.groupEnd() 

  return {
    entry: './src/main/index.tsx',
    output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main-bundle-[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss', 'svg'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  }
}