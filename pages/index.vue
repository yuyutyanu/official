<template>
  <div class='root'>
    <app-title title='pixelgram' />
    <div class='note'>
      <p>
        会社についての説明。
      </p>
    </div>
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
  .note {
    margin auto
    max-width 500px
    padding-top 40px
    padding-left 10px
    padding-right 10px
  }
</style>
