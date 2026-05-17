import { Actor, Vector, randomInRange } from "excalibur"
import { Resources } from "./resources.js"

export class Bubble extends Actor {

    constructor() {
        super({
            pos: new Vector(700, 100),
            width: 200,
            height: 100
        })

        this.graphics.use(Resources.Bubble.toSprite())
        
        this.pos = new Vector(
            Math.random() * 1280,
            randomInRange(0, 720)
        )

        this.vel = new Vector(
            randomInRange(-100, 100),
            randomInRange(-100, 100)
        )
    }

    onPreUpdate(engine, delta) {

        // onderkant geraakt
        if (this.pos.y > engine.drawHeight - 100) {
            this.vel.y = -200
        }

        // bovenkant geraakt
        if (this.pos.y < 100) {
            this.vel.y = 200
        }

        // linker rand geraakt
        if (this.pos.x < 0) {
            this.vel.x = Math.abs(this.vel.x)
        }

        // rechter rand geraakt
        if (this.pos.x > engine.drawWidth) {
            this.vel.x = -Math.abs(this.vel.x)
        }
    }
}