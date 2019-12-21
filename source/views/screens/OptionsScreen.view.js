import * as Preact from "preact"
import index from "index"

import "views/screens/OptionsScreen.view.less"
import Link from "views/components/Link.view.js"

const audiomix = {}

export default class OptionsScreen {
    render() {
        return (
            <div class="OptionsScreen">
                <h1>Options</h1>
                <div class="Option">
                    <label>Music Volume</label>
                    <input class="Volume" type="range" min="0" max="100"
                        value={audiomix.musicVolume}
                        onInput={this.onInputMusicVolume}/>
                </div>
                <div class="Option">
                    <label>Sound Volume</label>
                    <input class="Volume" type="range" min="0" max="100"
                        value={audiomix.soundVolume}
                        onInput={this.onInputSoundVolume}
                        onChange={this.onChangeSoundVolume}/>
                </div>
                <Link screen="TitleScreen">Back</Link>
            </div>
        )
    }
    get onInputMusicVolume() {
        return (event) => {
            audiomix.setMusicVolume(event.target.value)
        }
    }
    get onInputSoundVolume() {
        return (event) => {
            audiomix.setSoundVolume(event.target.value)
        }
    }
    get onChangeSoundVolume() {
        return (event) => {
            audiomix.playSound("jump1")
        }
    }
}
