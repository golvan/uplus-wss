const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  outputDir: 'docs',
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '../' : '/',
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production',
      }),
    ],
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.jpg$/, /\.png$/],
    },
  },
  pages: {
    comms: {
      entry: 'src/main.js',
      template: 'public/comms/index.html',
      filename: 'comms/index.html',
      title: 'U+ Comms',
      chunks: ['chunk-vendors', 'chunk-common', 'comms'],
    },
  },
};
