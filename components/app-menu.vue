<template>
  <div class='root'>
    <div class='scroll'>
      <div class='link-root'>
        <nuxt-link class='link' to='/'>
          Home
        </nuxt-link>
      </div>
      <div class='link-root'>
        <nuxt-link class='link' to='/news'>
          News
        </nuxt-link>
      </div>
      <div class='link-root'>
        <a
            class='link'
            target='_blank'
            href='https://medium.com/websocket'>
          Medium
        </a>
      </div>
      <div class='link-root'>
        <a
            class='link'
            target='_blank'
            href='https://github.com/pixelgram-jp'>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
  .root {
    z-index 120
  }

  @media screen and (max-width: 959.99px) {
    .root {
      position fixed
      top 60px
      left 0
      padding-top 20px
      padding-left 10px
      padding-right 10px
      width 100%
      overflow-x auto
      overflow-y hidden
      -webkit-overflow-scrolling touch
      background rgba(245, 245, 245, 0.98)
    }

    .scroll {
      width 600px
    }

    .link-root {
      display inline-block
      padding 10px 10px
    }

    .link {
      text-decoration none
      font-size 2rem
      letter-spacing 2px
      color #0f2350
    }
  }

  // pc
  @media screen and (min-width: 960px) {
    .root {
      position fixed
      top 0
      left 0
      padding-top 150px
      padding-left 40px
      width 200px
      height 100%
    }

    .link-root {
      margin 10px 0
    }

    .link {
      text-decoration none
      font-size 2.5rem
      letter-spacing 2px
      color #0f2350
    }
  }

  .link:hover {
    color #009688
  }

  .nuxt-link-exact-active {
    color #009688
  }
</style>