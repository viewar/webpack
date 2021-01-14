// shared config (dev and prod)
const { join } = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')
const webpack = require("webpack");

const { getViewARConfig } = require('../../utils')
const { PATHS } = require('../../constants')
const { resolve } = require('../../webpack.config.resolve.js')

const { appId, appVersion } = getViewARConfig();

const getPackageJson = () => {
  const packageJsonPath = path.join(PATHS.root, "/package.json");
  
  if (fs.existsSync(packageJsonPath)) {
    const data = fs.readFileSync(packageJsonPath);
    try {
      return JSON.parse(data);
    } catch (e) {
      console.log(`Invalid JSON syntax in ${packageJsonPath}.`);
    }
  }
}

const getAppViewarConfigDynamic = app => {
  const viewarConfigPath = path.join(PATHS.appfiles, `${app}/.viewar-config`);
  const viewarConfigPathNew = path.join(PATHS.appfiles, `${app}/viewar-config.json`);

  let existingPath;

  if (fs.existsSync(viewarConfigPathNew)) {
    existingPath = viewarConfigPathNew;
  } else if (fs.existsSync(viewarConfigPath)) {
    existingPath = viewarConfigPath;
  }

  if (existingPath) {
    const data = fs.readFileSync(existingPath);
    try {
      return JSON.parse(data);
    } catch (e) {
      console.log(`Invalid JSON syntax in ${existingPath}.`);
    }
  }

  return {};
};

module.exports = () => {
  const app = process.env.npm_config_app;
  const { appId: appAppId } = getAppViewarConfigDynamic(app);
  const { version: packageVersion } = getPackageJson();

  return {
    resolve,
    module: {
      rules: [
        {
          test:    /\.js$/,
          exclude: /node_modules/,
          use:     [ 'babel-loader', 'source-map-loader' ],
        },
        {
          test: /\.(ts|tsx)?$/,
          use:  [ 'babel-loader', 'awesome-typescript-loader' ],
        },
        /* Use css modules. */
        {
          test: /\.s?css$/,
          exclude: /node_modules/,
          use:  [
            'style-loader',
            {
              loader:  'css-loader',
              options: {
                importLoaders: 1,
                modules:       {
                  localIdentName: '[name]-[local]',
                },
              },
            },
            {
              loader:  'postcss-loader',
              options: {
                ident:   'postcss',
                plugins: (loader) => [ require('postcss-preset-env')() ],
              },
            },
            'sass-loader',
          ],
        },
        /* Use normal css loader for css files in node_modules folder. */
        {
          test: /\.s?css$/,
          include: /node_modules/,
          use:  [
            'style-loader',
            'css-loader'
          ]
        },
        /* Use file loader for asset images. */
        {
          test:    /\.svg$/,
          // issuer: [{ test: /\.(sa|sc|c|le)ss$/i }],
          include: [ PATHS.assets, PATHS.appfiles ],
          use:     [
            {
              loader:  'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
            {
              loader:  'svgo-loader',
              options: {
                plugins: [
                  { removeViewBox: false },
                  { removeAttributes: false },
                  { removeTitle: true },
                  { convertColors: { shorthex: false }},
                  { convertPathData: false },
                ],
              },
            },
          ],
        },
        /* Inline SVGs from src folder. */
        {
          test:    /\.svg$/,
          // issuer: [{ not: [{ test: /\.(sa|sc|c|le)ss$/i }] }],
          include: [ PATHS.src ],
          use:     [
            {
              loader:  'react-svg-loader',
              options: {
                jsx:  false,
                svgo: {
                  plugins: [
                    { removeViewBox: false },
                    { removeAttributes: false },
                    { removeTitle: true },
                    { convertColors: { shorthex: false }},
                    { convertPathData: false },
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.(mp3|mpeg|opus|ogg|oga|wav|aac|caf|m4a|mp4|weba|webm|dolby|flac|eot|ttf|otf|woff2?)(\?v=\d+\.\d+\.\d+)?|png|jpe?g|gif|ico$/i,
          use:  [
            {
              loader:  'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].scss',
      }),
      new CheckerPlugin(),
      new HtmlWebpackPlugin({
        template:         join(PATHS.src, 'index.html.ejs'),
        inject:           true,
        bundleIdentifier: appAppId || appId,
        bundleVersion:    packageVersion || appVersion || "100",
      }),
      new webpack.EnvironmentPlugin({ APP: app })
    ],
    performance: {
      hints: false,
    },
  }
}
