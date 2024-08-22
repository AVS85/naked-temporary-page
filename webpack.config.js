const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');

const { dependencies } = require('./package.json');
// const version = fs.readFileSync(path.resolve(__dirname, './dist/build-tag'));

const mode = process.env.NODE_ENV || 'development';
const devtool = process.env.NODE_ENV === 'production' ? false : 'source-map';

module.exports = (webpackConfigEnv) => {
  return {
    entry: './src/index',
    mode: mode,
    devtool: devtool,
    output: {
      path: path.resolve(__dirname, 'build'),
      // filename: `${version}/index-bundle.js`,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    target: 'web',
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      static: {
        directory: path.join(__dirname, 'build'),
      },
      port: 9099,
      historyApiFallback: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'src/assets/favicons', to: 'assets/favicons' },
          // { from: 'envs.js', to: 'envs.js' },
        ],
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      esmodules: true,
                    },
                  },
                ],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },

        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        esmodules: true,
                      },
                    },
                  ],
                ],
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[hash:8][ext][query]',
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
  };
};
