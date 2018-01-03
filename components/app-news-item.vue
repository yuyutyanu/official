<template>
  <div class="news">
    <div class="publishedAt">
      {{toDateFormat(news.published_at)}}
    </div>
    <div class="title">
      {{news.title}}
    </div>
    <div class="detail" v-html="news.detail"></div>
  </div>
</template>

<script>
  import m from 'moment'
  export default {
    props: ['news'],
    methods: {
      toDateFormat (str) {
        return m(str).format('YYYY.MM.DD')
      }
    }
  }
</script>

<style scoped>
  .publishedAt {
    color: #999999;
    font-size: 10px;
    margin-bottom: 5px;
  }
  .title {
    font-weight: bold;
    color: #222222;
    font-size: 14px;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: dotted 2px #ddd;
  }
  .news {
    font-family:"Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    margin-bottom: 40px;
  }
</style>

