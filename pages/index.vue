<template>
  <div class="root">
    <app-mv />
    <app-policy />
    <app-news />
    <app-about />
  </div>
</template>

<script>
  import appMv from '~/components/app-mv'
  import appPolicy from '~/components/app-policy'
  import appNews from '~/components/app-news'
  import appAbout from '~/components/app-about'
  export default {
    components: {
      appMv,
      appPolicy,
      appNews,
      appAbout
    }
  }
</script>

<style scoped>
</style>

