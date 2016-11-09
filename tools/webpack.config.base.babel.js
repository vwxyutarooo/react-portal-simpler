'use strict';

import autoprefixer from 'autoprefixer';
import path from 'path';
import webpack from 'webpack';

import { options, paths } from './config.js';

process.env.NODE_ENV = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';
const DEVELOP = (process.env.NODE_ENV === 'development');
const AUTOPREFIXER_BROWSERS = options.autoprefix;


export default {
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    root: [
      path.join(__dirname, '../', 'docs/src/js/'),
      path.join(__dirname, '../', 'lib/')
    ],
    alias: {}
  },
  devtool: (DEVELOP) ? 'inline-source-map' : false,
  debug: (DEVELOP),
  eslint: {
    configFile: path.join(__dirname, '../', '.eslintrc.json')
  },
  stats: { colors: true },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      IN_BROWSER: true
    }),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    ...DEVELOP ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ] : [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        }
      })
    ]
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx$|\react.js$/,
        loader: 'eslint-loader?{rules:{semi:0}}',
        exclude: /node_modules/,
        plugins: ['react'],
        extends: ['eslint:recommended', 'plugin:react/recommended']
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?{presets:["react","es2015"],plugins:["transform-runtime","transform-es2015-object-super","transform-decorators-legacy","transform-class-properties"]}'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style?singleton',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss-loader'
      }
    ]
  },
  postcss: [autoprefixer({ browsers: AUTOPREFIXER_BROWSERS })],
  sassLoader: {
    includePaths: [path.resolve(__dirname, '../', paths.srcScss)]
  }
}
