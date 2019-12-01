/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    let hashtagDifferent = [];
    for(let i = 0; i < hashtags.length; i++){
        let isRepet = false;
        hashtags[i] = hashtags[i].toLowerCase();
            for(let j = 0; j < hashtagDifferent.length; j++){
                if(hashtags[i] === hashtagDifferent[j]){
                    isRepet = true;
                }
            }
        if(isRepet === false){
            hashtagDifferent.push(hashtags[i]);
        }
    }
    return hashtagDifferent.join(", ");
};
