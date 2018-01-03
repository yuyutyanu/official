<template>
  <div class="root">
    <app-mv />
    <app-policy />
  </div>
</template>

<script>
  import appMv from '~/components/app-mv'
  import appPolicy from '~/components/app-policy'
  export default {
    components: {
      appMv,
      appPolicy
    }
  }
</script>

<style scoped>
</style>

