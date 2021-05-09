const fibonacci = function(target) {
let j = target;
let fibo = [0,1];
let newNumber = 0;
if (j <= 0) { return "OOPS"}
else { 
for (i=1; i < j; i++ ) {
  newNumber = fibo[i] + fibo[i-1] ;
  fibo = fibo.concat(newNumber);
}
return fibo[j];}
}
module.exports = fibonacci
