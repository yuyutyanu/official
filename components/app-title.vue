<template>
  <div class='root'>
    <h1 class='text-title'>
      {{title}}
    </h1>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style lang='stylus' scoped>
  .root {
    padding-top 40px
  }

  // md up
  @media screen and (min-width: 960px) {
    .root {
      display none
    }
  }

  .text-title {
    font-weight 300
    margin 0
    font-size 3.2em
    text-align center
  }
</style>
