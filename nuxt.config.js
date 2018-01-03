module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pixelgram | 合同会社ピクセルグラム',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '合同会社ピクセルグラム（Pixelgram LLC）はウェブサイトやサービスの企画・運営・開発を行っています。'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  workbox: {
    dev: true
  },
  meta: {
    mobileAppIOS: true,
    name: 'Pixelgram | 合同会社ピクセルグラム',
    description: '合同会社ピクセルグラム（Pixelgram LLC）はウェブサイトやサービスの企画・運営・開発を行っています。',
    theme_color: '#000',
    lang: 'ja',
    ogTitle: 'Pixelgram | 合同会社ピクセルグラム',
    ogDescription: '合同会社ピクセルグラム（Pixelgram LLC）はウェブサイトやサービスの企画・運営・開発を行っています。'
  },
  manifest: {
    name: 'Pixelgram',
    short_name: 'Pixelgram',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    description: '合同会社ピクセルグラム（Pixelgram LLC）はウェブサイトやサービスの企画・運営・開発を行っています。'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#000',
    height: '0px'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: new RegExp('(js|vue)$'),
          exclude: new RegExp('(node_modules)')
        })
      }
      if (ctx.isClient) {
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
}
