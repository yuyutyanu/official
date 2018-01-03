<template>
  <div class="root">
    <app-mv />
    <app-policy />
    <app-news />
  </div>
</template>

<script>
  import appMv from '~/components/app-mv'
  import appPolicy from '~/components/app-policy'
  import appNews from '~/components/app-news'
  export default {
    components: {
      appMv,
      appPolicy,
      appNews
    }
  }
</script>

<style scoped>
</style>

