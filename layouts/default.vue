<template>
  <div>
    <app-header />
    <app-menu />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
  import appFooter from '~/components/app-footer'

  export default {
    components: {
      'app-footer': appFooter,
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

<style>
  html {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-size: 15px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #000;
    word-spacing: 1.5px;
    box-sizing: border-box;
    background-color: #f5f5f5;
  }

  *, * before, * after {
    box-sizing: border-box;
    margin: 0;
    max-width: 100%;
    text-decoration: none;
    color: #000;
  }

  ::selection {
    background: #009688;
    color: #fff;
  }
</style>
