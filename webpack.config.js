/* eslint-disable no-undef */
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = (env) => {
  const NODE_ENV = env.NODE_ENV || 'development'
  const isDevelopment = NODE_ENV !== 'production'

  process.stdout.write(
    `${'\n\n***-------------------------------------------***\n'}
    BUILD start for environment: ${NODE_ENV}
    ${'\n***-------------------------------------------***\n\n\n'}`,
  )

  return {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      static: './dist',
      hot: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      extensionAlias: {
        '.js': ['.js', '.ts'],
        '.cjs': ['.cjs', '.cts'],
        '.mjs': ['.mjs', '.mts'],
      },
      alias: {
        '@utils': path.resolve(__dirname, './src/utils'),
        '@presentation': path.resolve(__dirname, './src/presentation'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|png)$/,
          use: 'ts-loader',
        },
        {
          test: /\.(png|woff|woff2|eot|ttf)$/,
          use: 'url-loader',
        },
        {
          test: /\.svg$/i,
          type: 'asset',
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] },
          use: ['@svgr/webpack'],
        },
        {
          test: /\.[tj]s(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  [
                    '@babel/preset-react',
                    {
                      runtime: 'automatic',
                    },
                  ],
                  '@babel/preset-typescript',
                ],
                plugins: [
                  '@babel/plugin-transform-class-properties',
                  '@babel/plugin-transform-runtime',
                  isDevelopment && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
              },
            },
          ],
        },
      ],
    },
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
  }
}
