function findTheKey(message, code)
{
    const character = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let messageArr = message.split(''); // Сообщение переписать в массив
    let word = [];
    let difference = [];
    let differenceStr;
    let plusNumber;

    for(let i = 0; i < messageArr.length; i++){
        for(let j = 0; j < character.length; j++){
            if(messageArr[i] === character[j]){
                word.push(j+1);
            }
        }
    }

    for(let i = 0; i < code.length; i++){
        difference.push(code[i] - word[i]);
    }

    differenceStr = difference.join('');

    let stop = false;
    let index = 0;
    let arr = [];
    let isDiffAll = false;

    while (!stop){
        let isRepetition = false;
        for (let i = 0; i < index; i++){
            arr.push(difference[i]);
        }
        for(let i = index; i < difference.length; i++){
            if(difference[i] === arr[Math.floor((i - index) % index)]){ // Проверяем наличие массива arr до конца основного массива
                isRepetition = true;
                isDiffAll = false;
            }else {
                if(i + 1 === difference.length && difference[0] !== difference[i]){ // Если символы в сообщении не повторяются
                    isDiffAll = true;
                }else{
                    isRepetition = false;
                    break;
                }
            }
        }
        if(isRepetition || isDiffAll){
            stop = true;
        }else{
            arr.splice(0, index);
        }
        index++;
    }
    plusNumber = (isDiffAll) ? differenceStr.substring(0, message.length) : differenceStr.substring(0, index-1);
    return Number(plusNumber);
}
console.log(findTheKey("tqvex", [21, 17, 25, 6, 25]));