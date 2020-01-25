module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '',
  pwa: {
    workboxPluginMode: 'injectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    },
  },
};
