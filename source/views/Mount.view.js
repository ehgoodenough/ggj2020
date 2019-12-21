import * as Preact from "preact"
import index from "index"

import "views/Mount.view.less"
import Frame from "views/components/Frame.view.js"

import GameScreen from "views/screens/GameScreen.view.js"
import TitleScreen from "views/screens/TitleScreen.view.js"
import OptionsScreen from "views/screens/OptionsScreen.view.js"
import GameOverScreen from "views/screens/GameOverScreen.view.js"

export default class Mount {
    render() {
        return (
            <div class="Mount">
                <title>
                    {index.title}
                </title>
                <Frame>
                    {this.screen}
                </Frame>
            </div>
        )
    }
    get title() {
        if(index.screen == "OptionsScreen") {
            return index.title + " - Options"
        }
        if(index.screen == "GameOverScreen") {
            return index.title + " - Game Over"
        }
        return index.title
    }
    get screen() {
        if(index.screen == "TitleScreen") {
            return <TitleScreen/>
        }
        if(index.screen == "GameScreen") {
            return <GameScreen/>
        }
        if(index.screen == "OptionsScreen") {
            return <OptionsScreen/>
        }
        if(index.screen == "GameOverScreen") {
            return <GameOverScreen/>
        }
        if(__STAGE__ == "DEVELOPMENT") {
            throw new Error("index.screen is not recognized.")
        }
    }
}
