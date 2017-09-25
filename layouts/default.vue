<template>
  <div>
    <app-header />
    <app-menu />
    <div class='app-content'>
      <nuxt />
    </div>
    <app-anim />
    <app-footer />
  </div>
</template>

<script>
  import appAnim from '~/components/app-anim'
  import appFooter from '~/components/app-footer'
  import appHeader from '~/components/app-header'
  import appMenu from '~/components/app-menu'

  export default {
    components: {
      'app-anim': appAnim,
      'app-footer': appFooter,
      'app-header': appHeader,
      'app-menu': appMenu
    },
    head () {
      return {
        link: [
          {rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600|Roboto Mono'}
        ]
      }
    }
  }
</script>

<style lang='stylus'>
  html {
    font-family 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif
    font-size 15px
    -ms-text-size-adjust 100%
    -webkit-text-size-adjust 100%
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    -webkit-font-smoothing antialiased
    color #0f2350
    word-spacing 1.5px
    box-sizing border-box
    // background whitesmoke
  }

  *, * before, * after {
    box-sizing border-box
    margin 0
  }

  // md up
  @media screen and (min-width: 960px) {
    .app-content {
      padding-left 200px
    }
  }

  // md down
  @media screen and (max-width: 959.99px) {
    .app-content {
      padding-top (50 + 39)px
    }
  }

</style>
