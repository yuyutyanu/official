<template>
  <div class='root'>
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
    display flex
    justify-content center
    padding-top 40px
  }

  .link {
    display inline-block
    border-radius 2px
    color white
    text-decoration none
    padding 10px 30px
    margin 0 10px
    background #0f2350
  }

  .link:hover {
    box-shadow 0 0 10px 2px rgba(0, 0, 0, 0.2)
  }
</style>