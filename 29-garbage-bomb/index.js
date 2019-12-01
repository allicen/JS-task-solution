function bestPlaces(cityMap){
    let lenWidth, lenHeight;
    let count = [];
    let number = 0;

    for(let i = 0; i < cityMap.length; i++){
        lenHeight = cityMap.length;
        for(let j = 0; j < cityMap[i].length; j++){
            lenWidth = cityMap[i].length;

            number = cityMap[i][j];
            number += (i-1 >= 0) ? cityMap[i-1][j] : 0;
            number += (i+1 < lenHeight) ? cityMap[i+1][j] : 0;
            number += (j-1 >= 0) ? cityMap[i][j-1] : 0;
            number += (j+1 < lenWidth) ? cityMap[i][j+1] : 0;
            number += (i-1 >= 0 && j-1 >= 0) ? cityMap[i-1][j-1] : 0;
            number += (i+1 < lenHeight && j+1 < lenWidth) ? cityMap[i+1][j+1] : 0;
            number += (i-1 >= 0 && j+1 < lenWidth) ? cityMap[i-1][j+1] : 0;
            number += (i+1 < lenHeight && j-1 >= 0) ? cityMap[i+1][j-1] : 0;

            count.push(number);
        }
    }

    count.sort(function (a, b) {
        return b - a;
    });

    let step = 1;

    for(let i = 0; i < count.length; i++){
        if(i-1 >= 0){
            if(count[i] === count[i-1]){
                step++;
            }else {
                break;
            }
        }
    }

    return step;
}

console.log(bestPlaces([
    [0,18,18],
    [0,0,0],
    [0,0,0],
    [0,0,18],
    [0,18,0],
    [0,0,0],
    [0,0,0],
    [0,0,0]
]));