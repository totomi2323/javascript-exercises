const palindromes = function(word) {
word = word.toLowerCase();
let removeSpace = word.split(" ").join("")
                        .replace(/[^\w\s]|_/g, "");
let reversedWord = "";

for (let i=removeSpace.length-1 ; i>= 0; i-- ) {
    reversedWord += removeSpace[i];
}

if (removeSpace == reversedWord) 
    {return true;}
    else 
    {return false;}
}
module.exports = palindromes
