const add = function(num1, num2) {
  let add = num1 + num2;
  return add ;
	
};

const subtract = function(num1, num2) {
	let subtract = num1 - num2;
  return subtract;
};

const sum = function(array = 0) {
  let sum = 0;
	for(let i = 0; i< array.length; i++) {
    sum += array[i];
  }return sum;
};

const multiply = function(array) {
  let multiply = 1;
  for (let i = 0; i < array.length; i++){
    multiply *= array[i];
  }
  return multiply;

};

const power = function(num1,num2) {
  let numPower = num1;
  for (let i = 1; i< num2; i++){
    numPower = numPower * num1;
  }return numPower;
  
	
};

const factorial = function() {
	
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
