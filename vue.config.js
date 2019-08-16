// webpack config file

// import path module and make file path to absolute path
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

// config options
module.exports = {
  /**
   * all configuration options you can see in this site => https://cli.vuejs.org/config/
   */

  // the base url address when publish you site, the example site will deploy it in github page.
  // when deploy it into you own server, you can change the site pre address to '/'
  publicPath: '/ingos-web/',

  // the output dir when build this project
  outputDir: 'dist',

  // a dir address which generate static files(js,css,imgs,fonts,etc)
  assetsDir: 'assets',

  // show lint error and warning info
  devServer: {
    overlay: {
      warning: true,
      error: true,
    },
  },

  // config webpack
  configureWebpack: {
    // set absolute path
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
};
