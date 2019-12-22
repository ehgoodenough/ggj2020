import Yaafloop from "yaafloop"

const AXIS_NAMES = {
    "left-stick-x": 0,
    "left-stick-y": 1,
    "right-stick-x": 2,
    "right-stick-y": 3,
}

const BUTTON_NAMES = {
    "south-button": 0,
    "east-button": 1,
    "west-button": 2,
    "north-button": 3,
    "left-bumper": 4,
    "right-bumper": 5,
    "left-shoulder": 4,
    "right-shoulder": 5,
    "left-trigger": 6,
    "right-trigger": 7,
    "select-button": 8,
    "back-button": 8,
    "start-button": 9,
    "left-stick": 10,
    "right-stick": 11,
    "north-dpad": 12,
    "south-dpad": 13,
    "west-dpad": 14,
    "east-dpad": 15,
    "home-button": 16,
    "screenshot-button": 17,
}

// class Gamepad {
//     constructor(gamepad) {
//         this.index = gamepad.index
//
//         this.axes = []
//         this.buttons = []
//     }
// }

const Joy = {
    "isPressed": function(gamepadIndex, buttonIndex) {
        if(BUTTON_NAMES[buttonIndex] != undefined) {
            buttonIndex = BUTTON_NAMES[buttonIndex]
        }
        const key = "gamepad" + gamepadIndex + "/" + "button" + buttonIndex
        if(this.data[key] != undefined) {
            return this.data[key].value > 0
        }
        return false
    },
    "wasJustPressed": function(gamepadIndex, buttonIndex, delta = 1000/60) {
        if(BUTTON_NAMES[buttonIndex] != undefined) {
            buttonIndex = BUTTON_NAMES[buttonIndex]
        }
        const key = "gamepad" + gamepadIndex + "/" + "button" + buttonIndex
        if(this.data[key] != undefined) {
            return this.data[key].value > 0
                && window.performance.now() - this.data[key].time < delta
        }
        return false
    },
    "getAxis": function(gamepadIndex, axisIndex) {
        if(AXIS_NAMES[axisIndex] != undefined) {
            axisIndex = AXIS_NAMES[axisIndex]
        }
        const key = "gamepad" + gamepadIndex + "/" + "axis" + axisIndex
        if(this.data[key] != undefined) {
            return this.data[key].value
        }
        return 0
    },
    "pulse": function(gamepadIndex) {
        const gamepad = this.data[2]
        if(gamepad instanceof Gamepad
        && gamepad.vibrationActuator != undefined) {
            gamepad.vibrationActuator.playEffect("dual-rumble", {
                "duration": 500,
                "weakMagnitude": 0.5,
                "strongMagnitude": 0.5,
            })
        }
    },
    "data": {},
    "references": {},
}

const loop = new Yaafloop(() => {
    const gamepads = navigator.getGamepads()

    for(let gamepadIndex = 0; gamepadIndex < gamepads.length; gamepadIndex += 1) {
        const gamepad = gamepads[gamepadIndex]
        if(gamepad != undefined) {
            gamepad.axes.forEach((axisValue, axisIndex) => {
                const key = "gamepad" + gamepadIndex + "/" + "axis" + axisIndex
                Joy.data[key] = Joy.data[key] || {}
                if(Joy.data[key].value != axisValue) {
                    Joy.data[key].value = axisValue
                    Joy.data[key].time = window.performance.now()
                }
            })
            gamepad.buttons.forEach((button, buttonIndex) => {
                const key = "gamepad" + gamepadIndex + "/" + "button" + buttonIndex
                Joy.data[key] = Joy.data[key] || {}
                if(Joy.data[key].value != button.value) {
                    Joy.data[key].value = button.value
                    Joy.data[key].time = window.performance.now()
                }
            })

            Joy.references["gamepad" + gamepadIndex] = gamepad
        }
    }
})

window.Joy = Joy

export default Joy
