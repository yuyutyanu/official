<template>
  <div class='root'>
    <p class='date'>
      {{item.dateDisplay}}
    </p>
    <div class='title'>
      <h2 class='title' v-text='item.title' />
    </div>
    <div class='content'>
      <p class='content' v-text='item.content' />
    </div>
  </div>
</template>

<style lang='stylus' scoped>
  .root {
    padding-top 30px
  }

  .date {
    font-size 0.9rem
    opacity 0.5
    font-weight bold
  }

  div.title {
    padding-top 5px
  }

  div.content {
    padding-top 10px
  }

  p.content {
    word-wrap break-word
    white-space pre
    display block
  }
</style>

<script>
  export default {
    props: ['item']
  }
</script>
