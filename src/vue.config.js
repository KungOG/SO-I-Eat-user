module.exports = {
  pwa: {
    workboxPluginMode: 'injectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
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
