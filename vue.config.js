const webpack = require('webpack');
const merge = require('babel-merge');

module.exports = {
  runtimeCompiler: true,
  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: 'assets',
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery',
      }),
    ],
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => merge(options, {
        transformAssetUrls: {
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'img-src',
          'b-carousel-slide': 'img-src',
          'b-embed': 'src',
          'v-parallax': 'src',
        },
      }));
  },
};
