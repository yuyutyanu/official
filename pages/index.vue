<template>
  <div class="root">
    <app-canvas />
    <app-mv />
    <app-policy />
    <app-news />
    <app-products />
    <app-about />
  </div>
</template>

<script>
  import appMv from '~/components/app-mv'
  import appPolicy from '~/components/app-policy'
  import appNews from '~/components/app-news'
  import appProducts from '~/components/app-products'
  import appAbout from '~/components/app-about'
  import appCanvas from '~/components/app-canvas'
  export default {
    components: {
      appMv,
      appPolicy,
      appNews,
      appProducts,
      appAbout,
      appCanvas
    }
  }
</script>

<style scoped>
</style>

