function distanceFromHqInBlocks(pickup){
    let distance
    if(pickup>=42) {
       distance = (pickup-42)
    } else {
        distance = (42-pickup)
    }
return distance
}

function distanceFromHqInFeet(pickup) {
    let blocks = distanceFromHqInBlocks(pickup);
    return blocks*264
}

function distanceTravelledInFeet(pointA,pointB) {
    let distance = Math.abs((pointB-pointA)*264)
    return distance
}
function calculatesFarePrice(pointA,pointB){
    let distance= distanceTravelledInFeet(pointA,pointB)
    let fare
    if (distance>400 && distance<2000) {
        fare=(distance*.02)-(400*.02)
        // let decFare=fare.toFixed(2);
        // return decFare
        return fare
    }
}
