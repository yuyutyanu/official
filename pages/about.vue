<template>
  <app-title title='about' />
</template>

<script>
  import appTitle from '~/components/app-title'

  export default {
    components: {
      'app-title': appTitle
    },
    head () {
      return {
        title: 'pixelgram / about',
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'no description'
        }]
      }
    }
  }
</script>

<style lang='stylus' scoped>
  .title {
    padding-top 40px
  }

  .text-title {
    font-weight 300
    margin 0
    font-size 3.2em
    text-align center
  }
</style>
