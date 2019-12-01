/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let arr = tweet.split(" ");
    let hashtags = [];
    let symbolSearch = "#";
    for(let i = 0; i < arr.length; i++){
        let position = arr[i].indexOf(symbolSearch);
        if(position !== -1){
            hashtags.push(arr[i].replace(symbolSearch, ""));
        }
    }
    return hashtags;
};
