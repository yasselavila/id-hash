/**
 * @yag/id-hash
 *
 * @copyright Copyright (c) 2016 - 2018, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/js-id-hash
 */

const { env } = require('process');
const path = require('path');

const { EnvironmentPlugin, LoaderOptionsPlugin } = require('webpack');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/* Env */
const nodeEnv = env.NODE_ENV || 'production';
const isProd = 'production' === nodeEnv;

/* Plugins */
const plugins = [
  /* Check and emit types in a separate process */
  new CheckerPlugin(),
  /* Make sure all dependencies are built in production mode */
  new EnvironmentPlugin({
    NODE_ENV: nodeEnv,
    DEBUG: !isProd
  }),
  /* Enable module concatenation */
  new ModuleConcatenationPlugin(),
  /* Enable minify */
  new LoaderOptionsPlugin({
    minimize: isProd,
    debug: !isProd
  })
];

/* Minify the ouput */
if (isProd) {
  plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 5,
        ie8: true,
        output: {
          comments: false,
          beautify: false
        }
      }
    })
  );
}

/*
 * Export config
 */
module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    idhash: path.resolve('src/index')
  },
  output: {
    path: path.resolve('dist/bundles'),
    filename: '[name].umd.bundle.js',
    sourceMapFilename: '[name].umd.bundle.js.map',
    chunkFilename: '[name].umd.[chunk].js',
    libraryTarget: 'umd',
    pathinfo: !isProd
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: plugins
};
