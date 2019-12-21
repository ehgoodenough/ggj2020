import input from "utility/input.js"

const FRAME_WIDTH = 16
const FRAME_HEIGHT = 9

export default class Player {
    constructor(player) {
        player = player || {}

        this.mode = player.mode || "play"

        this.position = player.position || {"x": FRAME_WIDTH / 2, "y": FRAME_HEIGHT / 2}
        this.velocity = player.velocity || {"x": 0, "y": 0}
        this.direction = player.direction || {"x": +1, "y": +1}
        this.speed = 0.1
    }
    update(delta) {
        if(this.mode == "play") {
            if(input.isPressed("north")) {
                this.velocity.y = -this.speed
            }
            if(input.isPressed("south")) {
                this.velocity.y = +this.speed
            }
            if(input.isPressed("west")) {
                this.velocity.x = -this.speed
            }
            if(input.isPressed("east")) {
                this.velocity.x = +this.speed
            }
        }

        if(this.mode == "demo") {
            if(this.position.x < 0
            || this.position.x > FRAME_WIDTH) {
                this.direction.x *= -1
            }
            if(this.position.y < 0
            || this.position.y > FRAME_HEIGHT) {
                this.direction.y *= -1
            }

            this.velocity.x = this.direction.x * this.speed
            this.velocity.y = this.direction.y * this.speed
        }

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.velocity.x *= 0.2
        this.velocity.y *= 0.2
    }
}
