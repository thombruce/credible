module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Credible',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      exclude: [
        '_redirects'
      ]
    }
  }
}
