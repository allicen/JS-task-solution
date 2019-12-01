/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {function(*=): *}
 */

function query(collection) {
    const newCollection = JSON.parse(JSON.stringify(collection));
    let args = [].slice.call(arguments);
    args.sort();
    for(let i = 1; i < args.length; i++){
        let command = args[i][0];
        let key = args[i][1];
        let value = args[i][2];
        if(command === 'filterIn'){
            for(let j = newCollection.length - 1; j >= 0; j--){
                if(value.join().indexOf(newCollection[j][key]) === -1){
                    newCollection.splice(j, 1);
                }
            }
        }

        if(command === 'select'){
            for(let j = 0; j < newCollection.length; j++){
                let fieldArr = Object.keys(newCollection[j]);
                let controlField = key.join();
                for(let k = 0; k < fieldArr.length; k++){
                    if(controlField.indexOf(fieldArr[k]) === -1){
                        delete newCollection[j][fieldArr[k]];
                    }
                }
            }
        }
    }
    return newCollection;
}

/**
 * @params {String[]}
 */
function select() {
    let args = [].slice.call(arguments);
    return ['select', args];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn', property, values];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
