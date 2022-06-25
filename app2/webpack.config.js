const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const path = require('path');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "simple-app",
    projectName: "app2",
    webpackConfigEnv,
    argv
  });

  return merge(defaultConfig, {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 8083,
    },
    externals: ['svelte'],
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
          }
        },
        {
          test: /node_modules\/svelte\/.*\.mjs$/,
          resolve: {
            fullySpecified: false
          }
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          include: /images/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
                publicPath: 'images/'
              }
            }
          ]
        },
      ]
    },
  });
};