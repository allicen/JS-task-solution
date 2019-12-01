function phoneNumber(phoneNumbers){
    let phoneNumbersCopy = phoneNumbers.slice();
    let data = {};
    for(let i = 0; i < phoneNumbersCopy.length; i++){
        let arr = Array.from(phoneNumbersCopy[i]);
        let str = '';
        for(let j = 0; j < arr.length; j++){
            str += arr[j];
            data[str] = 0;
        }
    }
    return Object.keys(data).length;
}

console.log(phoneNumber(['012','0123','01234']));