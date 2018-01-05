<template>
  <div id="canvas"></div>
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
      new this.$p5(sketch)

      this.width = window.innerWidth
      this.height = window.innerHeight

    },
    data(){
      return {
        fishImages: [],
        fish: [],
        fishType: 5,
        width: null,
        height: null,
      }
    },
    methods: {
      preload(p){
        for (let i = 0; i < this.fishType; i++) {
          const fileName = this.fishType < 10 ? `/fish0${i + 1}.svg` : `/fish${i + 1}.svg`
          for (let j = 0; j < 2; j++) {
            this.fishImages.push(p.loadImage(fileName))
          }
        }
      },
      setup(p){
        return () => {
          let canvas = p.createCanvas(this.width, this.height);
          canvas.parent('#canvas')
          this.displayFish(p)
        }
      },
      draw(p){
        return () => {
          p.background('#F5F5F5')

          this.fish.forEach((fish) => {
            fish.swim()
          })
        }
      },
      displayFish(p){
        for (let i = 0; i < this.fishImages.length; i++) {
          const f = new Fish(p, this.width, this.height, this.fishImages[i])
          this.fish.push(f)
          f.display()
        }
      }
    }
  }
</script>

<style scoped>
  #canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>