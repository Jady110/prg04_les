import { Actor, Vector } from "excalibur"
import { Resources } from "./resources.js"

export class Shark extends Actor {

    constructor() {
        super({
            pos: new Vector(700, 100),
            width: 200,
            height: 100
        })

        this.graphics.use(Resources.Shark.toSprite())

        // start naar rechts
        this.vel = new Vector(200, 0)
    }

    onPreUpdate(engine, delta) {

        // rechter rand geraakt
        if (this.pos.x > engine.drawWidth - 100) {
            this.vel.x = -200

            // sprite omdraaien
            this.graphics.flipHorizontal = true
        }

        // linker rand geraakt
        if (this.pos.x < 100) {
            this.vel.x = 200

            // sprite terug normaal
            this.graphics.flipHorizontal = false
        }
    }
}