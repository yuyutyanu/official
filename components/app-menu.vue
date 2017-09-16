<template>
  <div class='root'>
    <nuxt-link class='link' to='/'>
      home
    </nuxt-link>
    <nuxt-link class='link' to='/news'>
      news
    </nuxt-link>
    <nuxt-link class='link' to='/about'>
      about
    </nuxt-link>
    <a
        class='link'
        target='_blank'
        href='https://medium.com/websocket'>
      Medium
    </a>
    <a
        class='link'
        target='_blank'
        href='https://github.com/pixelgram-jp'>
      GitHub
    </a>
  </div>
</template>

<style lang='stylus' scoped>
  .root {
    padding-top 10px
  }

  .link {
    margin 0 0 0 10px
    text-decoration none
    font-size 1.2rem
    padding 2px 10px
    border-radius 2px
  }

  .link:hover {
    color tomato
  }

  .nuxt-link-exact-active {
    color tomato
  }
</style>