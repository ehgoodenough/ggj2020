import * as Preact from "preact"

import "views/game/Player.view.less"

export default class Player {
    render() {
        return (
            <div class="Player" style={this.style}/>
        )
    }
    get style() {
        return {
            "left": this.props.player.position.x + "em",
            "top": this.props.player.position.y + "em",
        }
    }
}
