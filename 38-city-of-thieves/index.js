let j = module.exports = function(data) {
    let group = data.split('   ');
    let symbols = [];
    let result = [];
    let resultString = '';

    for(let i = 0; i < group.length; i++){
        symbols.push(group[i].split(' '));
    }

    let numbers = ['-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.'];
    let inversion = ['.....', '-....', '--...', '---..', '----.', '-----', '.----', '..---', '...--', '....-'];
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
                if(firstSymbol === 'R'){
                    let str = '';
                    for(let index = 0; index < symbols[i][j].length; index++){
                        if(index !== 0 && index % 2 === 1){
                            str += symbols[i][j][index];
                        }
                    }
                    result.push(numbers.indexOf(str));
                }
                if(firstSymbol === 'A'){
                    let str = symbols[i][j].substr(1, 5);
                    result.push(inversion.indexOf(str));
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

console.log(j('..--- ....- R........-- R..........   R.......... R.......... ..--- -....   .---- R......---- ..--- R--------..   R.......... A....- --... .----'));