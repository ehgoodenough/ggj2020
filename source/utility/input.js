import geometry from "utility/geometry.js"
import gamepad from "joyp"
import keyboard from "keyb"
import pointer from "poin"

const DEADZONE_MAGNITUDE = 0.15
const MAXIMUM_MAGNITUDE = 1

const input = {
    "devices": {
        "gamepad": {"index": 0},
    },
    "scheme": {
        "buttons": {
            "north": [
                {"source": "keyboard", "value": "W"},
                {"source": "keyboard", "value": "<up>"},
            ],
            "south": [
                {"source": "keyboard", "value": "S"},
                {"source": "keyboard", "value": "<down>"},
            ],
            "west": [
                {"source": "keyboard", "value": "A"},
                {"source": "keyboard", "value": "<left>"},
            ],
            "east": [
                {"source": "keyboard", "value": "D"},
                {"source": "keyboard", "value": "<right>"},
            ],
            "action": [
                {"source": "keyboard", "value": "<space>"},
                {"source": "gamepad", "value": "east-button"},
            ]
        },
        "sticks": {
            "move": [
                {"source": "gamepad", "axis": "left-stick-x", "value": {"x": 1}},
                {"source": "gamepad", "axis": "left-stick-y", "value": {"y": 1}},
                {"source": "keyboard", "key": "W", "value": {"y": -1}},
                {"source": "keyboard", "key": "S", "value": {"y": +1}},
                {"source": "keyboard", "key": "A", "value": {"x": -1}},
                {"source": "keyboard", "key": "D", "value": {"x": +1}},
                {"source": "keyboard", "key": "<up>", "value": {"y": -1}},
                {"source": "keyboard", "key": "<down>", "value": {"y": +1}},
                {"source": "keyboard", "key": "<left>", "value": {"x": -1}},
                {"source": "keyboard", "key": "<right>", "value": {"x": +1}},
            ]
        }
    },
    "getStick": function(name) {
        const stick = {"x": 0, "y": 0}
        if(this.scheme.sticks[name] == undefined) {
            return stick
        }
        this.scheme.sticks[name].map((input) => {
            if(input.source == "keyboard") {
                if(keyboard.isPressed(input.key)) {
                    stick.x = input.value.x || stick.x
                    stick.y = input.value.y || stick.y
                }
            }
            if(input.source == "gamepad") {
                const axis = gamepad.getAxis(this.devices.gamepad.index, input.axis)
                stick.x = input.value.x * axis || stick.x
                stick.y = input.value.y * axis || stick.y
            }
        })

        // If the magnitude is too small, we cull
        // it out as a deadzone.
        stick.magnitude = geometry.getMagnitude(stick)
        if(stick.magnitude < DEADZONE_MAGNITUDE) {
            return {"x": 0, "y": 0, "direction": 0, "magnitude": 0}
        }

        // If the axes aren't bound by a perfect circle, you'll
        // get magnitudes larger than expected, which we'll cap off.
        stick.magnitude = Math.min(stick.magnitude, MAXIMUM_MAGNITUDE)

        // Because we cull all low-level inputs as a deadzone, we
        // need to normalize the magnitude to start after the deadzone.
        stick.magnitude = (stick.magnitude - DEADZONE_MAGNITUDE) / (MAXIMUM_MAGNITUDE - DEADZONE_MAGNITUDE)

        stick.direction = geometry.getDirection(stick)
        stick.x = Math.cos(stick.direction) * stick.magnitude
        stick.y = Math.sin(stick.direction) * stick.magnitude
        stick.magnitude = geometry.getMagnitude(stick)

        return stick
    },
    "isPressed": function(name) {
        if(this.scheme.buttons[name] == undefined) {
            return
        }
        return this.scheme.buttons[name].find((input) => {
            if(input.source == "keyboard") {
                return keyboard.isPressed(input.value)
            }
            if(input.source == "pointer") {
                return pointer.isPressed(input.value)
            }
            if(input.source == "gamepad") {
                return gamepad.isPressed(this.devices.gamepad.index, input.value)
            }
        })
    },
    "wasJustPressed": function(name, delta) {
        if(this.scheme.buttons[name] == undefined) {
            return
        }
        return this.scheme.buttons[name].find((input) => {
            if(input.source == "keyboard") {
                return keyboard.wasJustPressed(input.value, delta)
            }
            if(input.source == "pointer") {
                return pointer.wasJustPressed(input.value, delta)
            }
            if(input.source == "gamepad") {
                return gamepad.wasJustPressed(this.devices.gamepad.index, input.value, delta)
            }
        })
    },
}

export default input
