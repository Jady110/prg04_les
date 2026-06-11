import { Actor, Vector, randomInRange } from "excalibur"
import { Resources } from "./resources.js"

export class TumbleWeed extends Actor {

    constructor() {
        super({
            pos: new Vector(450, 100),
            width: 200,
            height: 100
        })

        this.graphics.use(Resources.tw1.toSprite())
        this.scale = new Vector(0.3, 0.3);
        
        this.pos = new Vector(
            1350,
            randomInRange(100, 620)
        );

        this.vel = new Vector(
            randomInRange(-100, 100),
            randomInRange(-100, 100)
        )
    }

    onPreUpdate(engine, delta) {

        // onderkant geraakt
        if (this.pos.y > engine.drawHeight - 100) {
            this.vel.y = -50
            this.graphics.use(Resources.tw2.toSprite());
            setTimeout(() => {
                this.graphics.use(Resources.tw1.toSprite());
            }, 1000);
        }

        // bovenkant geraakt
        if (this.pos.y < 450) {
            this.vel.y = 50
            this.graphics.use(Resources.tw3.toSprite());
            setTimeout(() => {
                this.graphics.use(Resources.tw1.toSprite());
            }, 1000);
        }
    }
}