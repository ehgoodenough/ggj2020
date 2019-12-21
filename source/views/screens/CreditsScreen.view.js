import * as Preact from "preact"
import index from "index"

import "views/screens/CreditsScreen.view.less"

export default class CreditsScreen {
    render() {
        return (
            <div class="CreditsScreen" onClick={this.onClick}>
                <h1>{index.title}</h1>
                <div class="CreditsList">
                    <h2>from the minds of:</h2>
                    {index.credits.contributors.map((credit) => (
                        <div class="Credit">
                            {credit.name} - <i>{credit.alias}</i>
                        </div>
                    ))}
                </div>
                <div class="CreditsList">
                    <h2>our biggest thanks to:</h2>
                    {index.credits.thanks.map((credit) => (
                        <div class="Credit">
                            {credit.name} - <i>{credit.alias}</i>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    onClick() {
        index.navigation = {"screen": "TitleScreen"}
    }
}
