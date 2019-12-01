function getBiggestLakeVolume(heights) {
    let result = 0;

    if(heights !== undefined && Array.isArray(heights) && heights.length !== 0){
        let min = 0;
        let indexStart = 0;
        let isSearch = true;


        for(let i = 0; i < heights.length; i++){
            //console.log(heights[i]);
            if(min > heights[i]){
                min = heights[i];
                indexStart = i;
            }
        }

        let i = 1; // шаг
        while (isSearch){
            if(heights[indexStart-i] !== undefined && heights[indexStart+i] !== undefined &&
                heights[indexStart-i] === heights[indexStart+i]
            ){
                result += heights[indexStart-i];
                i++;
            }else {
                isSearch = false;
            }
        }

        result = result*2;
        result += min;

        result = Math.abs(result);
    }
    return result;
}

console.log(getBiggestLakeVolume([2,1,-1,1,2]));