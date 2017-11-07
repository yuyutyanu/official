<template>
  <div class='root'>
    <nuxt-link class='link' to='/'>
      <img class="title" src="/logo-name.svg" alt="">
    </nuxt-link>
    </a>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .root {
    padding-top: 10px;
    padding-left: 20px;
    width: 100%;
    z-index: 130;
    position: relative;
  }

  @media screen and (max-width: 959.99px) {
    .root {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 45px;
      background: rgba(245, 245, 245, 0.98);
    }
  }
  .link {
    display: inline-block;
  }
  .title {
    height: 30px;
  }
</style>