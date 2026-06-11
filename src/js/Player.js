import { Actor, Vector, Keys, Animation, range } from "excalibur"
import { Resources } from "./resources.js"

export class Player extends Actor {

    onInitialize(engine) {
        this.graphics.use(Resources.Player.toSprite());
        this.scale = new Vector(0.3, 0.3);
        this.pos = new Vector(100, 550);

        this.graphics.use(Resources.Player.toSprite());

        this.gameStarted = false;
        
    }


    onPreUpdate(engine) {
        let velX = 0;
        let velY = 0;

        if (!this.gameStarted) {

            if (engine.input.keyboard.wasPressed(Keys.Space)) {
                this.gameStarted = true;
            }

            return;
        }


        velX = -100

        const topLimit = 450;    
        const bottomLimit = 650; 

        if (this.pos.y < topLimit) {
            this.pos.y = topLimit;
        }

        if (this.pos.y > bottomLimit) {
            this.pos.y = bottomLimit;
        }

        if (this.pos.x < -50) {
            console.log("Game Over!");
            engine.stop();
        }


        if (engine.input.keyboard.isHeld(Keys.W)) {
            velY = -100;
        }

        if (engine.input.keyboard.isHeld(Keys.S)) {
            velY = 100;
        }

        if (engine.input.keyboard.isHeld(Keys.A)) {
            velX = 50;
        }

        if (engine.input.keyboard.isHeld(Keys.D)) {
            velX = 150;
        }

        if (velX !== -100) {
            this.graphics.use(Resources.Run1.toSprite());
        }

        this.vel = new Vector(velX, velY);
    }
}