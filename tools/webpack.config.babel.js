'use strict';

import path from 'path';
import webpackMerge from 'webpack-merge';
import yargs from 'yargs';

import baseConfig from './webpack.config.base.babel.js';


process.env.NODE_ENV = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';
const DEVELOP = (process.env.NODE_ENV === 'development');

const argv = yargs.alias('p', 'port').argv;
const port = (argv.port && typeof argv.port === 'number') ? argv.port : 8080;


var entry =  {
  app: [path.join(__dirname, '../', 'docs/src/js/app.js')]
};


if (DEVELOP) {
  for (var key in entry) {
    entry[key].push(
      'webpack-dev-server/client?http://localhost:' + port + '/',
      'webpack/hot/only-dev-server'
    );
  }
}


export default webpackMerge(baseConfig, {
  entry: entry,
  output: {
    path: path.join(__dirname, '../', 'docs/'),
    publicPath: '/',
    filename: 'bundle.[name].js',
    sourceMapFilename: '[file].map'
  }
});
