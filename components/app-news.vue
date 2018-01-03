<template>
  <div class="root">
    <div class="inner">
      <app-title title="/ttl_news.svg" type="black" />
      <div class="news">
        <app-news-item v-for="item in displayNews" :key="item.id" :news="item" />
      </div>
      <app-pager :maxPage="maxPage" :currentPage="p" @change="onChange" />
    </div>
  </div>
</template>

<script>
import appTitle from '~/components/app-title'
import appNewsItem from '~/components/app-news-item'
import appPager from '~/components/app-pager'
export default {
  data () {
    return {
      p: 1
    }
  },
  components: {
    appTitle,
    appNewsItem,
    appPager
  },
  methods: {
    onChange (p) {
      this.p = p
    }
  },
  computed: {
    //@TODO cms 差し替え
    news () {
      let news = []
      for (let i = 0; i < 10; i++) {
        news.push({
          title: 'サンプルタイトル' + (i+1),
          detail: 'ダミーテキストで、ダミーテキストで、ダミーテキストダミーテキストです。ダミーテキスト、ダミーテキストです。ダミーテキストです。ダミーテキストです。',
          published_at: new Date()
        })
      }
      return news
    },
    per () {
      return 3
    },
    offset () {
      return (this.p - 1) * this.per
    },
    maxCount () {
      return this.news.length
    },
    maxPage () {
      return Math.ceil(this.maxCount / this.per)
    },
    displayNews () {
      return this.news.slice(this.offset, this.offset + this.per)
    }
  }
}
</script>


<style scoped>
  .root {
    background: #fff;
    padding: 120px 0;
  }
  .inner {
    max-width: 652px;
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
  }
  .copy {
    font-family:"Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    text-align: center;
    font-style: 12px;
    line-height: 2;
    letter-spacing: 1;
    margin-bottom: 40px;
    color: #fff;
  }
  .moon {
    text-align: center;
  }
</style>
