<template>
  <div class="root">
    <canvas />
    <div class="moon"></div>
    <div class="copy"></div>
    <div class="scroll"></div>
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
  .scroll {
    background: url('/scroll.svg') no-repeat;
    width: 35px;
    height: 31px;
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
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
