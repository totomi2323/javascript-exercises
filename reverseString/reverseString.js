const reverseString = function(word) {
    let result= ""; 
    wordLength= word.length-1;
    for (i = wordLength; i >= 0; i--) {
        result += word[i]
    }
return result;
}

module.exports = reverseString
