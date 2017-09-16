<template>
  <div class='root'>
    <div class='inner'>
      <div class='content'>
        <item-news v-if='src' v-for='item in src' :item='item' :key="item.id" />
      </div>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
  .root {
    padding-top 40px
  }

  .inner {
    margin auto
    max-width 500px
    padding 0 10px
  }

  p.title {
    font-size 30px
  }
</style>

<script>
  import itemNews from '~/components/item-news'

  export default {
    props: ['src'],
    components: {
      'item-news': itemNews
    }
  }
</script>