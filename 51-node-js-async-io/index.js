function execute(command, callback) {
    const process = require('child_process');
    process.exec(command, function(error, data){
        if(error){
            new Error;
            data = undefined;
        }
        return callback(error, data);
    });
}
