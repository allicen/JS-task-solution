let j = module.exports = function(data) {
    let group = data.split('   ');
    let symbols = [];
    let result = [];
    let resultString = '';

    for(let i = 0; i < group.length; i++){
        symbols.push(group[i].split(' '));
    }

    let numbers = ['-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.'];
    //let inversion = ['.....', '-....', '--...', '---..', '----.', '-----', '.----', '..---', '...--', '....-'];
    let isInvers = false;

    for(let i = 0; i < symbols.length; i++){
        for(let j = 0; j < symbols[i].length; j++){
            let firstSymbol = symbols[i][j][0];
            if(firstSymbol === 'A'){
                isInvers = (!isInvers);
            }
            if(firstSymbol === '.' || firstSymbol === '-'){
                if(!isInvers){
                    result.push(numbers.indexOf(symbols[i][j]));
                }
            }else{
                if(firstSymbol === 'T'){
                    let str = Array.from(symbols[i][j]).reverse().join('').slice(0, symbols[i][j].length-1);
                    result.push(numbers.indexOf(str));
                }
                if(firstSymbol === 'E'){
                    let startString = symbols[i][j];
                    let str = (startString[symbols[i][j].length-1]) + startString.slice(2,startString.length-1) + startString[1];
                    result.push(numbers.indexOf(str));
                }
            }
            isInvers = false;
            if(j === symbols[i].length - 1){
                resultString += result.join('');
                resultString += ' ';
                result = [];
            }
        }
    }

    return resultString;
};

console.log(j('--... ...-- ---.. .----   T...-- .---- T..--- E-.--.   ----. T..--- E.-..- .----   --... ----. ..... T.----'));