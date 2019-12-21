import * as Preact from "preact"
import index from "index"

import "views/screens/TitleScreen.view.less"
import Link from "views/components/Link.view.js"

export default class TitleScreen {
    render() {
        return (
            <div class="TitleScreen">
                <section class="MenuSection">
                    <div class="Title">
                        <h1>{index.title}</h1>
                        <h2>{index.subtitle}</h2>
                    </div>
                    <div class="Links">
                        <Link screen="GameScreen" onClick={this.onClickPlay}>Play</Link>
                        <Link screen="OptionsScreen">Options</Link>
                    </div>
                </section>
                <section class="HeroSection">
                </section>
            </div>
        )
    }
    get onClickPlay() {
        return (event) => {
            index.startGame()
        }
    }
}
