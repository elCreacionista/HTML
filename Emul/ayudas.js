function calculateCenter(points){
    let acumulatedX = 0;
    let acumulatedY = 0;

    for (let p of points){
        acumulatedX += p[0];
        acumulatedY += p[1];
    }
    return [acumulatedX / points.length, acumulatedY / points.length]
}
function getClosest(punto, puntos){
    let dist = [1000000,1000000];
    for (let p of puntos){
        if (p != punto){
            let newD = [0,0]
            newD[0] = (p[0] - punto[0]) * (p[0] - punto[0]);
            newD[1] = (p[1] - punto[1]) * (p[1] - punto[1]);
            if (newD[0] + newD[1] < dist[0] + dist[1]){
                dist = newD;
            }
        }
    }
    return dist[0] + dist[1];
}

function getMontes(isla){
    let array = [];
    for (let j = 0; j < isla.length; j++){
        let dist = getClosest(isla[j], isla);
        if (dist <= 100){
            array.push(isla[j]);
        }
    }
    return array;
}
function getAlturas(isla){
    let array = [];
    for (let j = 0; j < isla.length; j++){
        let dist = getClosest(isla[j], isla);
        if (dist > 100 && dist <= 1000){
            array.push(isla[j]);
        }
    }
    return array;
}
function getPlayas(isla){
    let array = [];
    for (let j = 0; j < isla.length; j++){
        let dist = getClosest(isla[j], isla);
        if (dist > 1000){
            array.push(isla[j]);
        }
    }
    return array;
}
function getDist(punto1, punto2){
    return punto1[0] * punto1[0] + punto1[1] * punto1[1]
}