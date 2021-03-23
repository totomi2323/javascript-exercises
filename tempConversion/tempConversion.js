const ftoc = function(ftemp) {
ctemp = Math.round(((( ftemp- 32) *5)/9)*10)/10;
return ctemp;
}


const ctof = function(ctemp) {
ftemp= Math.round((((ctemp *9)/5)+32)*10)/10;
return ftemp;
}

module.exports = {
  ftoc,
  ctof
}
