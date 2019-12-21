import * as Preact from "preact"
import index from "index"

import "views/screens/GameScreen.view.less"
import Game from "views/game/Game.view.js"
import Link from "views/components/Link.view.js"

export default class GameScreen {
    render() {
        return (
            <div class="GameScreen" onClick={this.onClick}>
                <Game game={index.game}/>
                <PauseMenu/>
            </div>
        )
    }
    get onClick() {
        return (event) => {
            if(index.game.isPaused == true) {
                index.game.isPaused = false
            }
        }
    }
}

class PauseMenu {
    render() {
        return (
            <div class="PauseMenu" onClick={this.onClick} isPaused={index.game.isPaused}>
                <h1>Paused!!!</h1>
                <Link screen="TitleScreen" onClick={this.onClickLink}>
                    <span>Return to Titlescreen?</span>
                    <small>Don't worry, your progress will be saved!</small>
                </Link>
            </div>
        )
    }
    get onClick() {
        return (event) => {
            console.log("!!!")
            event.stopPropagation()
        }
    }
    get onClickLink() {
        return (event) => {
            console.log("!!")
            index.game.isPaused = false
        }
    }
}
