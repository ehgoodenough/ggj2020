import * as Preact from "preact"
import index from "index"

import "views/game/Game.view.less"
import Player from "views/game/Player.view.js"

export default class Game {
    render() {
        return (
            <div class="Game">
                <Player player={this.props.game.player}/>
            </div>
        )
    }
}
