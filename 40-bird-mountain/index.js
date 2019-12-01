let peakHeight = function(mountain) {
    let arr = []; // Массив с исходными данными

    let width = 0; // Длина ширина матрицы
    let height = 0;

    let one = 1; // Шаг для заполнения ячеек матрицы

    for(let i = 0; i < mountain.length; i++){
        height = i;
        let line = [];
        for(let j = 0; j < mountain[i].length; j++){
            width = j;
            if(mountain[i][j] === '^'){
                line.push(1);
            }else{
                line.push(0);
            }
        }
        arr.push(line);
    }

    height = height+1;
    width = width+1;

    const matrix = new Array(height).fill().map(_ => new Array(width)); // Матрица
    let max = 0; // Максимальная высота

    for(let i = 0; i < matrix.length; i++){ // Заполнение матрицы слева вправо сверху вниз
        for(let j = 0; j < matrix[i].length; j++){
            if(i-1 >= 0 && j-1 >= 0){
                if(i === matrix.length-1 || j === matrix[i].length-1){
                    matrix[i][j] = Math.min(one, arr[i][j]); // Заполнение нижней и правой границы матрицы
                }else {
                    if(arr[i][j] !== 0){
                        matrix[i][j] = Math.min(arr[i][j]+matrix[i-1][j], arr[i][j]+matrix[i][j-1]);
                    }else {
                        matrix[i][j] = arr[i][j];
                    }
                }
            }else{
                matrix[i][j] = arr[i][j];
            }
        }
    }

    for (let i = matrix.length-1; i >= 0; i--){ // Заполнение матрицы справа влево снизу вверх
        for(let j = matrix[i].length-1; j >= 0; j--){
            if(matrix[i][j] !== 0){
                if(j+1 < matrix[i].length && i+1 < matrix.length){
                    if(matrix[i+1][j] === 0 || matrix[i][j+1] === 0){
                        matrix[i][j] = one;
                    }else{
                        matrix[i][j] = Math.min(matrix[i][j], one+matrix[i+1][j], one+matrix[i][j+1]);
                    }
                }
            }
            max = (matrix[i][j] > max) ? matrix[i][j] : max; // Максимальная высота
        }
    }
    return max;
};

console.log(peakHeight( [
    "^^^^^       ".split(''),
    "^^^^^       ".split(''),
    "^^^^^       ".split(''),
    "            ".split(''),
    "     ^^^^^^^".split(''),
    "     ^^^^^^^".split(''),
    "     ^^^^^^^".split(''),
    "     ^^^^^^^".split(''),
    "     ^^^^^^^".split(''),
    "     ^^^^^^^".split(''),
    "     ^^^^^^^".split('')
]));


