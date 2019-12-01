function validSolution(board){
    let isValidate = true;
    let summ = 45; // Сумма от 1 до 9
    let colsSumm = {}; // Сумма колонок

    let squareMiniSumm = {}; // Сумма квадратов по 9 клеток
    let squareSide = 3; // Сторона квадрата
    let cell = 0; // Номер квадрата

    for(let i = 0; i < board.length; i++){
        let rowSumm = summ;
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === 0){
                isValidate = false;
                break;
            }else {
                rowSumm -= board[i][j];
                colsSumm[j] = colsSumm[j] + board[i][j] || board[i][j];

                let [x, y] = [Math.floor(i/squareSide), Math.floor(j/squareSide)];
                switch (x*10 + y) { // Определяем квадрат
                    case(0): cell = 1; break;
                    case(1): cell = 2; break;
                    case(2): cell = 3; break;
                    case(10): cell = 4; break;
                    case(11): cell = 5; break;
                    case(12): cell = 6; break;
                    case(20): cell = 7; break;
                    case(21): cell = 8; break;
                    case(22): cell = 9; break;
                }
                squareMiniSumm[cell] = squareMiniSumm[cell] + board[i][j] || board[i][j];
            }
        }
        if (rowSumm !== 0){
            isValidate = false;
        }
        if(!isValidate){
            break;
        }
    }

    for(let i in colsSumm){
        if(colsSumm[i] !== summ){
            isValidate = false;
        }
    }

    for(let i in squareMiniSumm){
        if(squareMiniSumm[i] !== summ){
            isValidate = false;
        }
    }

    return isValidate;
}

console.log(validSolution([
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 2, 3, 1, 5, 6, 4, 8, 9, 7 ],
    [ 3, 1, 2, 6, 4, 5, 9, 7, 8 ],
    [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
    [ 5, 6, 4, 8, 9, 7, 2, 3, 1 ],
    [ 6, 4, 5, 9, 7, 8, 3, 1, 2 ],
    [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
    [ 8, 9, 7, 2, 3, 1, 5, 6, 4 ],
    [ 9, 7, 8, 3, 1, 2, 6, 4, 5 ] ]));