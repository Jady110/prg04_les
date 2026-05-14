import { Actor, Vector, randomInRange } from "excalibur"
import { Resources } from './resources.js'

export class Fish extends Actor {

    // const fish = new Actor()
    // fish.graphics.use(Resources.Fish.toSprite())
    // fish.pos = new Vector(Math.random() * 1280, randomInRange(0, 720))
    // fish.vel = new Vector(randomInRange(-100, 100), randomInRange(-100, 100))
    // fish.events.on("exitviewport", (e) => this.fishLeft(e))
    // this.add(fish)    

    constructor() {
        super({
            width: 50,
            height: 50
        })

        this.graphics.use(Resources.Fish.toSprite())

        this.pos = new Vector(
            Math.random() * 1280,
            randomInRange(0, 720)
        )

        this.vel = new Vector(
            randomInRange(-100, 100),
            randomInRange(-100, 100)
        )

        this.events.on("exitviewport", () => this.resetPosition())
    }

    resetPosition() {
        this.pos = new Vector(
            Math.random() * 1280,
            randomInRange(0, 720)
        )
    }
}