// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    let commandArr = command.split(" ");
    const commandName = commandArr[0];
    let index = '0';

    if(commandName === "ADD"){ // Добавление номера в телефонную книгу
        let addContact = {};
        let name = commandArr[1];
        let phones = commandArr[2].split(",");
        let isSetContact = false;
        if(Object.keys(phoneBook).length === 0){ // Если книга пустая
            addContact.phones = phones;
            phoneBook[name] = addContact;
        }else{
            for(let keys in phoneBook){
                if(name === keys){ // Если есть зппись с этим именем
                    isSetContact = true;
                    phoneBook[name].phones = phoneBook[name].phones.concat(phones);
                }
            }
            if(!isSetContact){ // Если новый контакт
                addContact.phones = phones;
                phoneBook[name] = addContact;
            }
        }
        return addContact;
    }

    if(commandName === "REMOVE_PHONE"){ // Удаление номера
        let isDelete = false;
        let deletePhone = commandArr[1];
        for (let key in phoneBook){
            let val = phoneBook[key].phones;
            if(Array.isArray(val)){
                for(let j = 0; j < val.length; j++){
                    if(val[j] === deletePhone){
                        val.splice(j,1);
                        isDelete = true;
                    }
                }
            }
        }
        return isDelete;
    }

    if(commandName === "SHOW"){ // Печать телефонной книги
        let contacts = [];
        for(let keys in phoneBook){
            if(phoneBook[keys].phones.length !== 0){ // Если есть номера у имени
                contacts.push(keys + ': ' + phoneBook[keys].phones.join(', '));
            }
        }
        contacts.sort();
        return contacts;
    }
    return phoneBook;
};
