'use strict';

import path from 'path';
import webpackMerge from 'webpack-merge';

import baseConfig from './webpack.config.base.babel.js';


export default webpackMerge(baseConfig, {
  entry: {
    index: [path.join(__dirname, '../', 'lib/index.js')]
  },
  output: {
    path: path.join(__dirname, '../', 'build/'),
    publicPath: '/',
    filename: '[name].js'
  }
});
