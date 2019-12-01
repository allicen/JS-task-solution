// Рабочая но длинная версия

function contractV6(address){
    const countNumberBlock = 8;
    if(address === '::'){
        return address;
    }
    if(address.replace(/[a-f]|\d+|:/gi, '') === '' && address.length <= 40){ // Проверяем, что в строке только нужные символы и строка не более максимально возможной длины
        if(address.indexOf('::') === address.lastIndexOf('::')){ // В строке не  более 1 раза встречается символ ::
            address = address.toLowerCase(); // Приводим к нижнему регистру
            if(address.indexOf('::') === -1){
                if(address.split(':').length !== 8){
                    return false;
                }
                if(address === '0:0:0:0:0:0:0:0' || address === '::'){
                    return '::';
                }
                return (simple(address) !== '0') ? simple(address) : false;

            }else{
                if(address ==='::0'){
                    return '::';
                }
                let string = '';
                let groupBig = address.split('::');
                let groupSmallOne = groupBig[0].split(':');
                let groupSmallTwo = groupBig[1].split(':');
                let empty = 0;

                if(groupSmallOne.length + groupSmallTwo.length === countNumberBlock){
                    return false;
                }

                if(groupSmallOne.length === 1 && groupSmallOne[0] === ''){
                    empty += 1;
                }else if(groupSmallTwo.length === 1 && groupSmallTwo[0] === ''){
                    empty += 1;
                }

                let countZero = countNumberBlock - (groupSmallOne.length + groupSmallTwo.length - empty);
                if(countZero === countNumberBlock){
                    string = '::';
                }else{
                    string += groupSmallOne.join(':') + ':';
                    for(let i = 0; i < countZero; i++){
                        string += '0:';
                    }
                    string += groupSmallTwo.join(':');
                }

                if(string[string.length-1] === ':'){
                    string = string.substring(0, string.length-1);
                }

                if(string === '0:0:0:0:0:0:0:0' || string === '::'){
                    return '::';
                }

                return (simple(string) !== '0') ? simple(string) : false;

            }
        }else {
            return false;
        }
    }else {
        return false;
    }
}

function simple(address){
    let string = '';
    let zeroArr = [];
    let group = address.split(':');
    let zeroCount = 0;

    for(let index in group){
        if(group[index].length > 4){ // Длина 1 блока не может превышать 4 симв.
            return false;
        }

        if(Number(group[index]) === 0 && group[index].indexOf('e') === -1 && group[index].indexOf('b') === -1){//содержит только цифры
            zeroCount++;
            string += 0;
        }else{
            if(!isNaN(group[index]) && group[index].indexOf('e') === -1 && group[index].indexOf('b') === -1){
                string += Number(group[index]);
                zeroCount = 0;
            }else{
                string += group[index].replace(/(^0000)|(^000)|(^00)|(^0)/gi, '');
                zeroCount = 0;
            }
        }
        zeroArr.push(zeroCount);
        string += ':';
    }

    string = string.substring(0, string.length-1);
    zeroArr.sort(( a, b ) =>  b - a);
    let zeroMax = zeroArr[0];

    if(zeroMax > 1){
        let tmp = '';
        if(string[0] === '0'){
            for(let i = 0; i < zeroMax; i++){
                tmp += '0:';
            }
        }else if(string[string.length - 1] === "0"){
            for(let i = 0; i < zeroMax; i++){
                tmp += ':0';
            }
        }else{
            tmp += ':';
            for(let i = 0; i < zeroMax; i++){
                tmp += '0:';
            }
        }

        string = string.replace(tmp, '::');
    }
    string = string.replace('::::', '::').replace(':::', '::');
    return string;
}

console.log(contractV6('2600:1406:34:0:0:0::b819:3854'));