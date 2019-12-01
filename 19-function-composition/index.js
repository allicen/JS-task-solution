const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

function compose(...args) {
    let func;
    let startValue;
    return (function (value){
        startValue = value; // Начальное значение
        for(let i = args.length-1; i >= 0; i--){
            func = args[i](value);
            value = func;
        }
        return func = (func === undefined) ? startValue : func;
    });
}

let addOneTimesTwo = compose(multTwo, addOne);
console.log(addOneTimesTwo(5)); //8