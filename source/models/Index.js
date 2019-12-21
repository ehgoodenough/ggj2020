import Game from "models/Game.js"

const INITIAL_SCREEN = "TitleScreen"

export default class Index {
    constructor(index) {
        this.title = index.title
        this.subtitle = index.subtitle

        this.screen = INITIAL_SCREEN

        this.time = 0 // in seconds

        // if(__STAGE__ == "DEVELOPMENT") {
        //     this.screen = "GameScreen"
        //     this.startGame()
        // }

        this.demogame = new Game({
            "player": {"mode": "demo"}
        })
    }
    update(delta) {
        this.time += delta.s

        if(this.screen == "GameScreen") {
            if(this.game != undefined) {
                this.game.update(delta)
            }
        }
        if(this.screen == "TitleScreen") {
            if(this.demogame != undefined) {
                this.demogame.update(delta)
            }
        }
    }
    startGame() {
        this.game = new Game(this.rawgame)
    }
}
