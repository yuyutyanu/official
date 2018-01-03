<template>
  <div class="root">
    <div class="inner">
      <app-title title="/ttl_products.svg" type="black" />
      <div class="products">
        <app-products-item v-for="product in pruducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import appTitle from '~/components/app-title'
import appProductsItem from '~/components/app-products-item'
export default {
  components: {
    appTitle,
    appProductsItem
  },
  computed: {
    pruducts () {
      let pruducts = []
      for (let i = 0; i < 5; i++) {
        pruducts.push({
          src: '/dashboard.png',
          href: 'https://github.com',
          name: 'サンプルタイトル' + (i+1),
          detail: 'ダミーテキストで、ダミーテキストで、ダミーテキストダミーテキストです。ダミーテキスト、ダミーテキストです。ダミーテキストです。ダミーテキストです。',
          releasedAt: new Date()
        })
      }
      return pruducts
    }
  }
}
</script>


<style scoped>
  .root {
    background: #fff;
    padding: 120px 0;
    border-bottom: dotted 2px #999999;
  }
  .inner {
    max-width: 980px;
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
  }
  .product:not(:last-child) {
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: dotted 2px #ddd;
  }
</style>
