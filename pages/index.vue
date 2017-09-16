<template>
  <div class='root'>
    <app-title title='pixelgram' />
    <img class='logo' src='/logo.png' />
    <app-news :src='allNews' />
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import appTitle from '~/components/app-title'
  import appNews from '~/components/app-news'

  export default {
    components: {
      'app-title': appTitle,
      'app-news': appNews
    },
    computed: {
      allNews () {
        return this.$store.state.scaphold.allNews
      }
    },
    methods: {
      ...mapMutations({
        queryAllNews: 'scaphold/queryAllNews'
      })
    },
    head () {
      return {
        title: 'pixelgram',
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'no description'
        }]
      }
    },
    fetch ({store, params}) {
      if (!store.state.scaphold.allNews) {
        return store.dispatch('scaphold/queryAllNews')
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

  .logo {
    display block
    width 140px
    margin 40px auto 0
  }
</style>
