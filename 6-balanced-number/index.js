function balancedNum(number)
{
    var inString = number.toString();
    var numberCount = inString.length;
    var isBalansed;
    var even = (numberCount % 2 === 0);
    var center;
    var left = 0, right = 0;
    if(numberCount === 1 || numberCount === 2){
        isBalansed = "Balanced";
    }else{
        if(even === false){
            center = Math.floor(numberCount/ 2) + 1;
            for(i = 0; i < center-1; i++){
                left = left + Number.parseInt(inString[i]);
            }
            for(i = center; i < numberCount; i++){
                right = right + Number.parseInt(inString[i]);
            }
        }else{
            center = Math.floor(numberCount / 2);
            for(i = 0; i < center-1; i++){
                left = left + Number.parseInt(inString[i]);
            }
            for(i = center + 1; i < numberCount; i++){
                right = right + Number.parseInt(inString[i]);
            }
        }
        isBalansed = (left === right) ? "Balanced" : "Not Balanced";
    }
    return isBalansed;
}