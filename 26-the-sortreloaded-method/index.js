function sortReloaded(direction) {
    let copyArr = this.slice();
    let n = copyArr.length;
    if(direction === undefined){
        direction = 'asc';
    }
    if(direction === 'asc'){
        for (let i = 0; i < n-1; i++){
            for (let j = 0; j < n-1-i; j++){
                if (copyArr[j+1] < copyArr[j]){
                    let t = copyArr[j+1];
                    copyArr[j+1] = copyArr[j];
                    copyArr[j] = t;
                }
            }
        }
        return copyArr;
    }else if(direction === 'desc'){
        for (let i = 0; i < n-1; i++){
            for (let j = 0; j < n-1-i; j++){
                if (copyArr[j+1] > copyArr[j]){
                    let t = copyArr[j+1];
                    copyArr[j+1] = copyArr[j];
                    copyArr[j] = t;
                }
            }
        }
        return copyArr;
    }else {
        return false;
    }
}
Array.prototype.sortReloaded = sortReloaded;
var arr = [10, 2, 3, 4, 5];
console.log([3, 1, 5, 3, 6, 1, 2].sortReloaded());
