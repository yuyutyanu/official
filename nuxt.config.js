module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'pixelgram.now.sh',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'tomato',
    height: '3px'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: new RegExp('(js|vue)$'),
          loader: 'eslint-loader',
          exclude: new RegExp('(node_modules)')
        })
      }
      config.module.rules.push({
        test: new RegExp('.stylus'),
        use:
          [
            'stylus-loader'
          ]
      })
    }
  }
}
