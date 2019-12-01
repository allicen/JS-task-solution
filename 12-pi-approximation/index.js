function iterPi(epsilon) {
    let result = []; // Результат работы функции
    let pi = 4; // Рассчитываемое число PI
    let j = 3; // Счетчик
    let roundPi; // Округленное PI
    let operationCount; // Количество операций
    for(let i = 2; i < 9999999; i++){
        pi += (Math.floor(i%2) === 0) ? -4/(j) : 4/(j);
        if(Math.abs(Math.PI - pi) < epsilon){ // Если разница меньше epsilon
            operationCount = i;
            break;
        }
        j = j+2;
    }
    roundPi = parseFloat(pi.toFixed(10));
    result.push(operationCount);
    result.push(roundPi);
    return result;
}