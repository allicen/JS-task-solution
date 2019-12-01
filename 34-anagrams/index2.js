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
    let tmp = [];
    let ob = {};
    for(let i = 0; i < lines.length; i++){
        tmp.push(tmp.concat(Array.from(lines[i])));
    }

    for(let i = 0; i < tmp.length; i++){
        ob[tmp[i]] += 1;
        console.log(tmp[i]);
    }

    console.log(tmp);

    if(Object.values(ob).indexOf('1') === -1){
        result = 1;
    }

    process.stdout.write(result.toString());
    process.exit();
});