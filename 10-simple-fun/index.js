function primeProduct(n){
    let result = 0;
    let simple = [];
    let mult = [];
    let numbers = [n];
    numbers[0] = 0;
    numbers[1] = 0;
    for(let k = 2; k <= n; k++) numbers[k] = k; // Решето Эратосфена
    for (let k = 2; k * k <= n; k++){
        if(numbers[k] === k){
            for(let l = k * k ; l <= n; l += k){
                numbers[l] = 0;
            }
        }
    }
    for(let i = 0; i < numbers.length; i++){ // Выкидываем все нули
        if(numbers[i] !== 0 && n - numbers[i] !== 1){
            simple.push(numbers[i]);
        }
    }
    let one, two;
    for(let i = 0; i < simple.length; i++){
        one = simple[i];
        two = n - one;
        for(let  j = 0; j < simple.length; j++){
            if(two === simple[j]){ // Сравниваем второе число с простым
               mult.push(one*two);
               break;
            }
        }
    }

    if(mult.length !== 0){
        function compareNumeric(a, b) {
            if (a > b) return 1;
            if (a === b) return 0;
            if (a < b) return -1;
        }
        mult.sort(compareNumeric);
        result = mult[mult.length-1];
    }
    return result;
}
console.log(primeProduct(100));