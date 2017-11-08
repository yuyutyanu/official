<template>
  <section class='root'>
    <div class='contents'>
      <h1 class='contents__name'>会社概要</h1>
      <div class='article' v-for='item in items' :key='item.id'>
        <h1 class='article__name'>{{item.name}}</h1>
        <p class='article__body'>{{item.value}}</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        title: 'About | Pixelgram'
      }
    },
    asyncData () {
      return {
        items : [
          {
            name: '社名',
            value: '合同会社 ピクセルグラム / Pixelgram LLC'
          },
          {
            name: '本社所在地',
            value: '〒673-0862 兵庫県明石市松ヶ丘1-19-7'
          },
          {
            name: '事業内容',
            value: 'Webサイト・Webサービスの企画・製作・開発・運営'
          },
          {
            name: '設立',
            value: '2017年10月16日'
          },
          {
            name: '代表者',
            value: '上平 千晶'
          },
          {
            name: '従業員数',
            value: '3人'
          },
          {
            name: '資本金',
            value: '10万円'
          },
          {
            name: '連絡先',
            value: 'info@pixelgram.jp'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .root {
    margin-top: 50px;
    padding: 0 10px;
  }
  .contents__name {
    margin-bottom: 20px;
  }
  .article {
    margin-bottom: 20px;
  }
  .article__name {
    display: inline-block;
    font-size: 1rem;
  }
</style>