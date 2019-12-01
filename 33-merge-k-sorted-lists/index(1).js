const fs = require("fs");
let result = [];
fs.readFile("../input.txt", function(err, data){
    try{
        data = data.toString();
        data = data.split(' ');

        for(let i = 0; i < data.length; i++){
            if(i !== 0){
                result.push(Number.parseInt(data[i]));
            }
        }
        if(result.length !== 0){
            result.sort(function (a, b) {
                return Number(a) - Number(b);
            });
        }
        result = result.join(' ');
        console.log(result);
    }catch (err) {
        console.log(err);
    }

    fs.writeFile('../output.txt', result, (err) => {
        if (err) {
            console.error(err);
        }
    })
});