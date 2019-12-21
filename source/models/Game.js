import Player from "models/Player.js"

export default class Game {
    constructor(game) {
        game = game || {}
        
        this.player = new Player(game.player)
    }
    update(delta) {
        this.player.update(delta)
    }
}
