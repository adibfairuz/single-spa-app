const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "simple-app",
    projectName: "app1",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 8082,
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' },
        { test: /\.vue$/, use: 'vue-loader' },
        { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
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
    plugins: [
      new VueLoaderPlugin(),
    ],
  });
};
