module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/eat/' : '/',
  pwa: {
    workboxPluginMode: 'injectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
  },
};
