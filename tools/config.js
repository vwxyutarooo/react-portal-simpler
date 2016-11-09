'use strict';
/*------------------------------------------------------------------------------
 * 2. FILE DESTINATIONS (RELATIVE TO ASSSETS FOLDER)
------------------------------------------------------------------------------*/
/*
 * opt
 * @param false or string: virtual host name of local machine such as . Set false to browser-sync start as server mode.
 * @param false or string: Subdomains which must be between 4 and 20 alphanumeric characters.
 * @param string: browser which browserSync open
 */
const options = {
  autoprefix   : ['> 2%', 'last 5 versions', 'ie 10'],
  bs           : {
    tunnel       : false,
    browser    : 'google chrome canary',
    ghostMode  : {
      clicks     : false,
      scroll     : false
    },
    fils: [
      'public/assets/css/*.css',
      'public/assets/html/*.html'
    ]
  }
}


const paths = {
  root         : './',
  srcDir       : 'src/',
  srcImg       : 'src/images/',
  srcJade      : 'src/jade/',
  srcJs        : 'src/js/',
  srcJson      : './src/json/',
  srcScss      : 'src/scss/',
  destCss      : './assets/css/',
  destDir      : './assets/',
  destGuide    : './styleguide',
  destImg      : './assets/images/',
  destJs       : './assets/js/',
  htmlDir      : './src/html/',
  reloadOnly   : []
}


const nodeSassConf = {
  includePaths : [
    './node_modules/',
    './node_modules/foundation-sites/scss',
    './node_modules/font-awesome/scss'
  ],
  errLogToConsole: true
}


export { options, paths, nodeSassConf };
