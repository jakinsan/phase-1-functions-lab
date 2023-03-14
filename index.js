
function distanceFromHqInBlocks(blocks) {
    if(blocks > 42) {
        return blocks - 42
    } else {
        return 42 - blocks
    }
//    return blocks > 42 ? blocks - 42 : 42 - blocks 
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264 ;
}

function distanceTravelledInFeet(a, b) {
    if(b>a) {
        return (b - a) * 264 
    } else {
        return (a - b) * 264 
    }
}

function calculatesFarePrice(start, destination) { 
    const distance = distanceTravelledInFeet(start, destination)
    if( distance <= 400) {
        return 0
    } else if(distance > 400 && distance < 2000)  {
        return (distance - 400 ) * .02
    } else if(distance > 2000 && distance <= 2500) {
        return 25
    } else if(distance > 2500) {
        return 'cannot travel that far'
    }
}
