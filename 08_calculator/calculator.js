const add = function(num1, num2) {
	if (Number(num1) !== num1 || Number(num2) !== num2) {
    return "ERROR";
  }
  return num1 + num2;
};

const subtract = function(num1, num2) {
	if (Number(num1) !== num1 || Number(num2) !== num2) {
    return "ERROR";
  }
  return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => {return sum + num}, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, num) => {return sum * num}, 1);
};

const power = function(num1, num2) {
  if (Number(num1) !== num1 || Number(num2) !== num2) {
    return "ERROR";
  }
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num < 0 || Number(num) !== num) {
    return "ERROR";
  }
  if (num === 0) {
    return 1;
  }
  let fact = 1;
	for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
