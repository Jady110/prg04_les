import { Scene, Label, Vector, Color, Font, Keys } from "excalibur";

export class GameOverScene extends Scene {

    onActivate() {

        this.clear();

        const gameOver = new Label({
            text: "GAME OVER",
            pos: new Vector(450, 250),
            color: Color.Red,
            font: new Font({
                size: 48
            })
        });

        const scoreText = new Label({
            text: `Final Score: ${this.engine.score}`,
            pos: new Vector(450, 350)
        });

        this.add(gameOver);
        this.add(scoreText);
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            engine.score = 0; // reset score for new game
            engine.goToScene("game");
        }
    }
}