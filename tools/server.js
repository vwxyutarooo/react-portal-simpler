'use strict';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import yargs from 'yargs';

import webpackConfig from './webpack.config.develop.babel';


const argv = yargs.alias('p', 'port').argv;
const port = (argv.port && typeof argv.port === 'number') ? argv.port : 8080;

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  contentBase: './docs/',
  hot: true,
  inline: true,
  stats: {
    colors: true,
    chunks: false
  }
}).listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
