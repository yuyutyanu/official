<template>
  <div id="home" class="root">
    <div id="canvas"></div>
    <div class="moon"></div>
    <div class="copy"></div>
    <div class="scroll" v-scroll-to="'#policy'"></div>
  </div>
</template>

<script>
  import Fish from '~/components/Fish.js'

  export default{
    mounted(){
      const sketch = (p) => {
        p.preload = this.preload(p)
        p.setup = this.setup(p)
        p.draw = this.draw(p)
      }
      const p5 = new this.$p5(sketch)
      this.width = window.innerWidth + this.marginX
      this.height = window.innerHeight
      this.p5 = p5
      window.addEventListener('resize', this.resizeCanvas)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.resizeCanvas)
    },
    data(){
      return {
        fishImages: [],
        fish: [],
        fishType: 5,
        width: null,
        height: null,
        marginX : 100,
        p5:null
      }
    },
    methods: {
      resizeCanvas(){
        this.width = window.innerWidth + this.marginX
        this.height = window.innerHeight
        this.p5.resizeCanvas(this.width, this.height)
        this.fish.forEach((fish)=>{
          fish.width = this.width
          fish.height = this.height
        })
      },
      preload(p){
        for (let i = 0; i < this.fishType; i++) {
          const fileName = this.fishType < 10 ? `/fish0${i + 1}.png` : `/fish${i + 1}.png`
          for (let j = 0; j < 2; j++) {
            this.fishImages.push(p.loadImage(fileName))
          }
        }
      },
      setup(p){
        return () => {
          let canvas = p.createCanvas(this.width, this.height)
          canvas.parent('#canvas')
          this.displayFish(p)
        }
      },
      draw(p){
        return () => {
          p.clear()

          this.fish.forEach((fish) => {
            fish.swim()
          })
        }
      },
      displayFish(p){
        for (let i = 0; i < this.fishImages.length; i++) {
          const f = new Fish(p, p.width, p.height, this.fishImages[i])
          this.fish.push(f)
          f.display()
        }
      }
    }
  }
</script>

<style scoped>
  .root {
    position: relative;
    width: 100vw;
    height: calc(100vh + 1px);
    background: url('/town.svg') repeat-x bottom;
    background-size: 1200px;
    overflow: hidden;
  }
  #canvas {
    position: absolute;
    max-width: calc(100% + 100px);
    min-width: calc(100% + 100px);
    top: 0;
    left: -50px;
    z-index: 1;
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
    z-index: 999;
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
