
const repeatString = function(word,num) {
  let result = "";  
  if (num < 0) {
      result= "ERROR";
  }
  else {
for (i=1; i <=num ; i++) {
    result += word;
}
}
return result;
}
module.exports = repeatString
