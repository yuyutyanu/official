<template>
  <div class='root'>
    <section class='contents'>
      <h1 class="contents__copy">Pixelgramはインターネットにあなたの居場所を作ります</h1>
    </section>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import appNews from '~/components/app-news'

  export default {
    components: {
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
        title: 'Pixelgram'
      }
    },
    fetch ({store, params}) {
      if (!store.state.scaphold.allNews) {
        return store.dispatch('scaphold/queryAllNews')
      }
    }
  }
</script>

<style scoped>
  .root {
    padding: 0 10px;
  }
  .contents {
    padding: 150px 10px;
  }
  .contents__copy {
    font-size: 1rem;
    line-height: 2;
  }
</style>

