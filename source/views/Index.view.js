import * as Preact from "preact"
import index from "index"

import "views/Index.view.less"
import Frame from "views/components/Frame.view.js"

import GameScreen from "views/screens/GameScreen.view.js"
import TitleScreen from "views/screens/TitleScreen.view.js"
import OptionsScreen from "views/screens/OptionsScreen.view.js"
import CreditsScreen from "views/screens/CreditsScreen.view.js"

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
        if(index.navigation.screen == "OptionsScreen") {
            return index.title + " - Options"
        }
        if(index.navigation.screen == "CreditsScreen") {
            return index.title + " - Credits"
        }
        return index.title
    }
    get screen() {
        if(index.navigation.screen == "TitleScreen") {
            return <TitleScreen/>
        }
        if(index.navigation.screen == "GameScreen") {
            return <GameScreen/>
        }
        if(index.navigation.screen == "OptionsScreen") {
            return <OptionsScreen/>
        }
        if(index.navigation.screen == "CreditsScreen") {
            return <CreditsScreen/>
        }
        if(__STAGE__ == "DEVELOPMENT") {
            throw new Error("index.navigation.screen is not recognized.")
        }
    }
}
