"use strict"

class Fish {
  constructor (_p, _width, _height, _fishImage) {
    this.p = _p
    this.width = _width
    this.height = _height

    // 速度系
    this.location = this.p.createVector(this.p.random(_width), this.p.random(_height))
    this.velocity = this.p.createVector(this.p.random(0.1, 0.7), 0)
    this.acceleration = this.p.createVector(0, 0)

    // 画像系
    this.fishImage = _fishImage
    this.size = this.p.random(0.85, 1.3)
    const RIGHT_OR_LEFT = ['RIGHT', 'LEFT']
    this.direction = RIGHT_OR_LEFT[Math.floor(Math.random() * 2)]
  }

  display () {
    this.edge()

    this.p.push()
    this.p.scale(this.size)
    this.p.imageMode(this.p.CENTER)
    // ランダムに魚の向きを決定
    if (this.direction === 'RIGHT') {
      this.p.image(this.fishImage, this.location.x, this.location.y)
    }
    if (this.direction === 'LEFT') {
      this.p.scale(-1, 1)
      this.p.image(this.fishImage, -this.location.x, this.location.y)
    }
    this.p.pop()
  }

  edge(){
    if(this.location.x > this.width ){
      this.location.x =  0
      this.location.y = this.p.random(0,this.height)
    }
    if(this.location.x < 0){
      this.location.x = this.width
      this.location.y = this.p.random(0,this.height)
    }
    if(this.location.y > this.height) {
      this.location.y = 0
      this.location.x = this.p.random(0,this.width)
    }
    if(this.location.y < 0){
      this.location.y = this.height
      this.location.x = this.p.random(0,this.width)
    }
  }

  update () {
    //左向きの魚は左に移動
    if (this.direction === 'LEFT') {
      if (Math.sign(this.velocity.x) != -1) {
        this.velocity.mult(-1, 0)
      }
    }
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
    this.acceleration.mult(0)
  }

  swim () {
    this.update()
    this.display()
  }

  applyForce (force) {
    this.acceleration.add(force)
  }
}

export default Fish