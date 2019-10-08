module.exports = {
  pwa: {
    workboxPluginMode: 'injectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
};
