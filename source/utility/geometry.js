// geometry.getMagnitude(vector)
// @argument {Object} vector - defined by its x and y components.
// @returns {Number} magnitude
function getMagnitude(vector = {"x": 0, "y": 0}) {
    if(vector.x != 0 || vector.y != 0) {
        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y))
    } else {
        return 0
    }
}

// geometry.getDirection(vector)
// @argument {Object} vector - defined by its x and y components
// @returns {Number} direction - given in radians
function getDirection(vector = {"x": 0, "y": 0}) {
    return Math.atan2(vector.y, vector.x)
}

export default {getMagnitude, getDirection}
