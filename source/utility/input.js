import Keyb from "keyb"
import Poin from "utility/pointer.js"

export default {
    "inputs": {
        "north": [
            {"type": "keyboard", "value": "W"},
            {"type": "keyboard", "value": "<up>"},
        ],
        "south": [
            {"type": "keyboard", "value": "S"},
            {"type": "keyboard", "value": "<down>"},
            {"type": "pointer", "value": "primary"},
        ],
        "west": [
            {"type": "keyboard", "value": "A"},
            {"type": "keyboard", "value": "<left>"},
        ],
        "east": [
            {"type": "keyboard", "value": "D"},
            {"type": "keyboard", "value": "<right>"},
        ],
    },
    "isPressed": function(name) {
        return (this.inputs[name] || []).find((input) => {
            if(input.type == "keyboard") {
                return Keyb.isPressed(input.value)
            }
            if(input.type == "pointer") {
                return Poin.isPressed(input.value)
            }
        })
    },
    "wasJustPressed": function(key) {
        return (this.inputs[name] || []).find((input) => {
            if(input.type == "keyboard") {
                return Keyb.wasJustPressed(input.value)
            }
            if(input.type == "pointer") {
                return Poin.wasJustPressed(input.value)
            }
        })
    }
}
