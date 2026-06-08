import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
// import { Fish } from './Fish.js'
import { Player } from './Player.js'
// import { Bubble } from './Bubble.js'
// import { Score } from './Score.js'

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

        // for (let i = 0; i < 10; i++) {
        // const fish = new Fish()
        // this.add(fish)
        // }

        const desert = new Actor()
        desert.graphics.use(Resources.Desert.toSprite())
        desert.pos = new Vector(1280 / 2, 720 / 2)
        desert.z = -1;
        this.add(desert)

        // for (let i = 0; i < 10; i++) {
        // const bubble = new Bubble()
        // this.add(bubble)
        // }

        // const scoreLabel = new Score();
        // this.add(scoreLabel)

        const player = new Player()
        this.add(player)
    }
}

new Game()
