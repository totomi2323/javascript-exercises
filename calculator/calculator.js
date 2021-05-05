function add (a, b) {
return (a)+(b);
}

function subtract (a,b) {
return (a)-(b);
}

function sum (a)  {
	let total = 0;
	for (let key in a) {
		total = total + a[key];
	};
	return total;
}

function multiply (a) {
	let total = 1;
	for (let key in a) {
		total = total * a[key];
	};
	return total;
}

function power(a,b) {
	let total = 1;
	for (let i= 1 ; i <=b ; i++) {
		total = total * a;
	}
	return total;
}

function factorial(a) {
	total = a ;
	if (a == 0) { 
		return 1;} 
	else { 	
		for (let i = a; i >= 2; i--) {
		total = total * (i-1);
	}
	return total;
}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}