function score( dice ) {
    let result = 0;
    let data = {
        '1' : 0,
        '2' : 0,
        '3' : 0,
        '4' : 0,
        '5' : 0,
        '6' : 0
    };
    for(let i = 0; i < dice.length; i++){
        data[dice[i]] += 1;
    }

    for(let key in data){
        switch(key){
            case('1'):
                result += (data[key] >= 4) ? 1100 :
                    (data[key] === 3) ? 1000 :
                    (data[key] < 3 && data[key] > 0) ? data[key] * 100 : 0;
                break;
            case('6'):
                result += (data[key] >= 3) ? 600 : 0;
                break;
            case('5'):
                result += (data[key] >= 4) ? 550 :
                    (data[key] === 3) ? 500 :
                    (data[key] < 3 && data[key] > 0) ? data[key] * 50 : 0;
                break;
            case('4'):
                result += (data[key] >= 3) ? 400 : 0;
                break;
            case('3'):
                result += (data[key] >= 3) ? 300 : 0;
                break;
            case('2'):
                result += (data[key] >= 3) ? 200 : 0;
                break;
        }
    }

    return result;
}

console.log(score( [1, 5, 1, 3, 4] ));