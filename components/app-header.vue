<template>
  <div class='root'>
    <img class='logo' src='/logo.png' />
    <a class='title'>
      Pixelgram {{page}}
    </a>
  </div>
</template>

<script>
  export default {
    computed: {
      page: function () {
        if (this.$nuxt.$route.name === 'index') return ''
        return '/ ' + this.$nuxt.$route.name
      }
    }
  }
</script>

<style scoped>
  .root {
    padding-top: 10px;
    padding-left: 20px;
    width: 100%;
    z-index: 100;
  }

  @media screen and (max-width: 959.99px) {
    .root {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
      background: rgba(245, 245, 245, 0.98);
    }
  }

  .logo {
    display: inline-block;
    vertical-align: middle;
    width: 35px;
  }

  .title {
    display: inline-block;
    vertical-align: middle;
    padding-left: 10px;
    font-size: 1.5rem;
    color: #000;
  }
</style>