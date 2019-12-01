let saveIP = new Map();
let count;
function bruteForceDetected(loginRequest){
    let isAccessAllowed = false;
    if(loginRequest.successful){
        count = 1;
    }else{
        if(saveIP.has(loginRequest.sourceIP)){
            count = Number(saveIP.get(loginRequest.sourceIP)) + 1;
        }else {
            count = 1;
        }
    }
    saveIP.set(loginRequest.sourceIP, count);
    if(saveIP.get(loginRequest.sourceIP) > 19){
        if(!loginRequest.successful){
            isAccessAllowed = true;
        }
    }
    return isAccessAllowed;
}
