<template>
  <div class="root">
    <div class="moon"></div>
    <div class="copy"></div>
  </div>
</template>

<style scoped>
  .root {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url('/town.svg') repeat-x bottom;
    background-size: 1200px;
  }
  .moon {
    background: url('/tuki_mv.svg') no-repeat;
    width: 74px;
    height: 72px;
    position: absolute;
    top: 75px;
    left: 50px;
  }
  .copy {
    background: url('/txt_mv.svg') no-repeat;
    width: 500px;
    height: 22px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-size: contain;
  }
  @media screen and (max-width: 600px) {
    .root {
      background-size: contain;
    }
    .moon {
      top: 80px;
      left: 20px;
    }
    .copy {
      width: 320px;
      height: 15px;
    }
  }
</style>
