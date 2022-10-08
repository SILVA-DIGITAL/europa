import gsap from 'gsap'
import Emitter from './Emitter'

class Raf {
  constructor() {
    this.tick = this.tick.bind(this)

    this.init()
  }

  // eslint-disable-next-line class-methods-use-this
  tick() {
    Emitter.emit('tick')
  }

  on() {
    gsap.ticker.add(this.tick)
  }

  init() {
    this.on()
  }
}

export default new Raf()
