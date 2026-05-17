import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './Fish.js'
import { Shark } from './Shark.js'
import { Bubble } from './Bubble.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {

        console.log("start de game!")

        for (let i = 0; i < 10; i++) {
        const fish = new Fish()
        this.add(fish)
        }

        const shark = new Shark()
        this.add(shark)

        const water = new Actor()
        water.graphics.use(Resources.Water.toSprite())
        water.pos = new Vector(1280 / 2, 720 / 2)
        water.z = -1;
        this.add(water)

        for (let i = 0; i < 10; i++) {
        const bubble = new Bubble()
        this.add(bubble)
        }
    }

    fishLeft(e) {
        e.target.pos = new Vector(Math.random() * 1280, randomInRange(0, 720))
    }
}

new Game()
