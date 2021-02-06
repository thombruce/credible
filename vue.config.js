module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Account',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      exclude: [
        '_redirects'
      ]
    }
  }
}
