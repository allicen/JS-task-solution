const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];

rl.on('line', (line) => {
    if (line === "0") rl.close();
    lines.push(line);
}).on('close', () => {
    let result = 0;
    let arr = [];

    for(let i = 0; i < lines.length; i++){
        arr.push(Array.from(lines[i]).sort().join());
    }

    if(arr[0] === arr[1]){
        result = 1;
    }

    process.stdout.write(result.toString());
    process.exit();

});