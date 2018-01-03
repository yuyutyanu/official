<template>
  <div class="root">
    <div class="inner">
      <app-title title="/ttl_about.svg" type="black" />
      <div class="about">
        <div class="logo">
          <img src="/logo.svg" alt="">
        </div>
        <div class="info">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appTitle from '~/components/app-title'
export default {
  components: {
    appTitle
  }
}
</script>


<style scoped>
  .root {
    background: #fff;
    padding: 120px 0;
  }
  .inner {
    max-width: 652px;
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
  }
  .about {
    border-top: dotted 2px #dddddd;
    border-bottom: dotted 2px #dddddd;
    padding:  40px 0;
    display: flex;
  }
  .logo {
    border-right: dotted 2px #dddddd;
    padding-right: 40px;
  }
</style>
