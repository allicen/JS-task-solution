function mazeRunner(maze, directions) {
    let result = '';
    const start = [];
    let i, j;
    for(i = 0; i < maze.length; i++){ // Точка старта
        for(j = 0; j < maze.length; j++){
            if(maze[i][j] === 2){
                start.push(i);
                start.push(j);
            }
        }
    }

    let vertical = start[0]; // Движение по вертикали
    let horizontal = start[1]; // Движение по горизоетали

    let cell;
    let isDead = false;

    while (directions.length > 0){
        switch (directions[0]) { // Движение по направлениям
            case ('N') :
                if(vertical - 1 > -1){
                    vertical = vertical - 1;
                }else{
                    isDead = true;
                }
                break;
            case ('S') :
                if(vertical + 1 < i){
                    vertical = vertical + 1;
                }else{
                    isDead = true;
                }
                break;
            case ('W') :
                if(horizontal - 1 > -1){
                    horizontal = horizontal - 1;
                }else{
                    isDead = true;
                }
                break;
            case ('E') :
                if(horizontal + 1 < j){
                    horizontal = horizontal + 1;
                }else{
                    isDead = true;
                }
                break;
        }
        cell = maze[vertical][horizontal]; // Значение клетки
        result = (cell === 3) ? 'Finish' :
            (cell === 1 || isDead) ? 'Dead' : ''; // Результат
        if(result !== ''){ // Если есть результат
            directions.splice(0, directions.length); // Очистить массив пути и выйти из цикла
        }
        directions.splice(0,1); // Удалить 1 элемент массива пути
    }

    if(result === ''){ // Если не умер и не дошел
        result = 'Lost';
    }
    return result;
}
console.log(mazeRunner([[1,1,1,1,1,1,1],[1,0,0,0,0,0,3],[1,0,1,0,1,0,1],[0,0,1,0,0,0,1],[1,0,1,0,1,0,1],[1,0,0,0,0,0,1],[1,2,1,0,1,0,1]], ["N","N","N","N","N","E","E","S","S","S","S","S","S"]));