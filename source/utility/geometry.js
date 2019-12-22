function getMagnitude(point) {
    if(point.x != 0 || point.y != 0) {
        return Math.sqrt((point.x * point.x) + (point.y * point.y))
    } else {
        return 0
    }
}
function getDirection(point) {
    var angle = Math.atan2(point.y, point.x)
    return angle
}

export default {getMagnitude, getDirection}
