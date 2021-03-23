const removeFromArray = function(myArray) {
    //ARGUMENTS//
    let arrayLength= myArray.length;
    let args=Array.from(arguments);
    let argumentsLength = args.length;

    for (i=arrayLength ; i >= 0; i--) {
        for (j= argumentsLength; j >= 0; j--)
        if (myArray[i] === args[j]) {
            myArray.splice(i,1)
        }
    }
    return(myArray);
}

module.exports = removeFromArray
