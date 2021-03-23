const sumAll = function(number1, number2) {
let result= 0;
let firstnumber= 0;
let secondnumber= 0;
if ((typeof number1 == 'number') && (typeof number2 == 'number')) { 
    if ((number1 >= 0) && (number2 >=0)){
        if (number1 > number2 ){
            firstnumber= number2;
            secondnumber = number1;
        }
        else {
            firstnumber = number1;
            secondnumber = number2;
        }
    } 
    else {
        return "ERROR";
    }
}
else {
    return "ERROR";
}
    for (i = firstnumber; i <= secondnumber; i++) {
    result =  result + i; }
return result;
}
module.exports = sumAll
