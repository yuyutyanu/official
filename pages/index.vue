<template>
  <section class='container'>
    <div>
      <h1 class='title'>
        Pixelgram
      </h1>
      <h2 class='subtitle'>
        Nuxt Application
      </h2>
      <div class='links'>
        <a href='https://medium.com/websocket' target='_blank' class='button--green'>Medium</a>
        <a href='https://github.com/pixelgram-jp' target='_blank' class='button--grey'>GitHub</a>
      </div>
      <div class='newsRoot'>
        <div class='news' v-for='news in allNews'>
          <div class='newsDate'>
            {{news.dateYYYYMMDD}}
          </div>
          <div class='newsContent' v-text='news.title' />
          <div class='newsContent' v-text='news.content' />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
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
    fetch ({ store, params }) {
      return store.dispatch('scaphold/queryAllNews')
    }
  }
</script>

<style lang='stylus'>
  .container {
    padding-top 100px
    padding-left 40px
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif /* 1 */
    display: block
    font-weight: 300
    font-size: 50px
    color: #35495e
    letter-spacing: 1px
  }

  .subtitle {
    padding-top 5px
    font-weight: 300
    font-size: 20px
    color: #526488
    word-spacing: 5px
    padding-bottom: 15px
  }

  .links {
    padding-top: 15px
  }

  .newsRoot {
    padding-top: 10px
  }

  .news {
    padding-top: 20px
  }

  .newsDate {
    font-size: 16px
  }

  .newsContent {
    padding-top 5px
    padding-left 2px
    font-size: 18px
    white-space: pre
  }

  .button--green {
    display: inline-block
    border-radius: 4px
    border: 1px solid #3b8070
    color: #3b8070
    text-decoration: none
    padding: 10px 30px
  }

  .button--green:hover {
    color: #fff
    background-color: #3b8070
  }

  .button--grey {
    display: inline-block
    border-radius: 4px
    border: 1px solid #35495e
    color: #35495e
    text-decoration: none
    padding: 10px 30px
    margin-left: 15px
  }

  .button--grey:hover {
    color: #fff
    background-color: #35495e
  }
</style>
