function phone(strng, num) {
    let name = '';
    let address = '';
    let string = '';
    let phoneBookArr = strng.split('\n');
    let isError = false;
    let result = '';

    let flagName = false;

    for(let i = 0; i < phoneBookArr.length; i++){
        for(let j = 0; j < phoneBookArr[i].length; j++){
            if(phoneBookArr[i].match(num) !== null){
                if(phoneBookArr[i][j] === '<'){ // Вычисляем имя
                    flagName = true;
                }
                if(flagName){
                    if(phoneBookArr[i][j] !== '>'){
                        name += phoneBookArr[i][j].replace('<', '');
                    }else {
                        flagName = false;
                    }
                }
                string += phoneBookArr[i][j]; // Формируем строку для поиска адреса
            }
        }
        if(phoneBookArr[i] === '<'){
            name += phoneBookArr[i];
        }
    }

    if(strng.indexOf(num) !== strng.lastIndexOf(num)){ // Если несколько имен с таким номером
        isError = true;
    }

    // Формируем адрес, вырезаем лишнее
    address = string.replace(name, '').replace(num, '').replace('_', ' ').match(/[\w | \. | -]/gi);

    if(address !== null){
        address = address.join('').replace(/\s+/g, ' ').trim();
    }

    if(isError){ // Формирование итоговой строки
        result = 'Error => Too many people: ' + num;
    }else {
        if(strng.indexOf(num) !== -1){
            result = 'Phone => '+ num +', Name => '+ name +', Address => '+ address;
        }else {
            result = 'Error => Not found: ' + num;
        }
    }

    return result;
}

const dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n"
    + "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
    + "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
    + "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
    + "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n"
    + "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
    + "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
    + "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n"
    + "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
    + "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
    + "<P Salinge> Main Street, +1-098-512-2222, Denve\n";

console.log(phone(dr, "1-541-754-3010"));

