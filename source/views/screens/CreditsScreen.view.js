import * as Preact from "preact"
import index from "index"

import "views/screens/CreditsScreen.view.less"

export default class CreditsScreen {
    render() {
        return (
            <div class="CreditsScreen" onClick={this.onClick}>
                Congrats! You win!
            </div>
        )
    }
    onClick() {
        index.navigation = {"screen": "TitleScreen"}
    }
}
