function availableMoves(position) {
    let result = [];
    if(position!== null && position.length === 2){
        let width = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let height = [1, 2, 3, 4, 5, 6, 7, 8];
        let start = position.split("");
        let coordinateOne = start[0];
        let coordinateTwo = Number(start[1]);
        let indexOne, indexTwo;
        let isCorrectData = false;
        for(let m = 0; m < width.length; m++){
            if(width[m] === coordinateOne){
                for(let n = 0; n < height.length; n++){
                    if(height[n] === coordinateTwo){
                        isCorrectData = true;
                    }
                }
            }
        }

        if(isCorrectData){
            for(let i = 0; i < width.length; i++){
                if(coordinateOne !== width[i]){
                    result.push(width[i] + coordinateTwo);
                }else{
                    indexOne = i;
                }
            }
            for(let i = 0; i < height.length; i++){
                if(coordinateTwo !== height[i]){
                    result.push(coordinateOne + height[i]);
                }else{
                    indexTwo = i;
                }
            }
            let way = 4;
            let a = indexOne, b = indexTwo;
            while (way > 0){ // Проверка по-диагонали, 4 направления
                if(a >= 0 && a < width.length && b >= 0 && b < width.length){
                    switch (way) {
                        case (4) :
                            a--;
                            b++;
                            if(a >= 0 && b < width.length){
                                result.push(width[a] + height[b]);
                            }
                            break;
                        case (3) :
                            a--;
                            b--;
                            if(a >= 0 && b >= 0){
                                result.push(width[a] + height[b]);
                            }
                            break;
                        case (2) :
                            a++;
                            b--;
                            if(a < width.length && b >= 0){
                                result.push(width[a] + height[b]);
                            }
                            break;
                        case (1) :
                            a++;
                            b++;
                            if(a < width.length && b < width.length){
                                result.push(width[a] + height[b]);
                            }
                            break;
                        }
                    }else{
                        a = indexOne;
                        b = indexTwo;
                        way--;
                    }
                }
            }
        }
    return result.sort();
}

console.log(availableMoves(22));