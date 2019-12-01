const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];
rl.on('line', (line) => {
    if (line === "0") rl.close();
    lines.push(line);
}).on('close', () => {
    let result = [];
    for (let i = 0; i < lines.length; i++){
        if(i !== 0){
            let arr = lines[i].split(' ');
            for(let j = 0; j< arr.length; j++){
                if(j !== 0){
                    let number = Number(arr[j]);
                    result.push(number);
                }
            }
        }
    }
    if(result.length !== 0){
        result.sort(function (a, b) {
            return Number(a) - Number(b);
        });
    }
    result = result.join(' ');
    process.stdout.write(result);
    process.exit();
});