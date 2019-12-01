function dirReduc(arr){
    let directions = arr.slice();
    let start = '';
    let isDelete = false;

    while (!isDelete){
        for(let i = 0; i < directions.length; i++){
            if(i !== 0){
                if(start === 'NORTH' && directions[i] === 'SOUTH'){
                    directions.splice(i-1, 2);
                    isDelete = false;
                }else if(start === 'SOUTH' && directions[i] === 'NORTH'){
                    directions.splice(i-1, 2);
                    isDelete = false;
                }else if(start === 'EAST' && directions[i] === 'WEST'){
                    directions.splice(i-1, 2);
                    isDelete = false;
                }else if(start === 'WEST' && directions[i] === 'EAST'){
                    directions.splice(i-1, 2);
                    isDelete = false;
                }else{
                    isDelete = true;
                }
                if(directions.length < 2){
                    isDelete = true;
                }
                start = directions[i];
            }else{
                start = directions[i];
            }
        }
    }

    return directions;
}


console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));