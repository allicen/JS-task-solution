const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin
});

let lines = [];
let lastNumber = 0;

rl.on('line', (line) => {
    if(lines.length !== 0){
        if(line !== lastNumber){
            lines.push(line);
            lastNumber = line;
        }
        if(line === '') rl.close();
    }else{
        lines.push(0);
    }

    if (line === "") rl.close();
}).on('close', () => {
    let result = lines.splice(1, lines.length-1).join('\r\n');
    process.stdout.write(lines.splice(1, lines.length-1).join('\r\n'));
    process.exit();
});