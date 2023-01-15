const convertToCelsius = function(temp) {
  let celsius = roundTo1Decimal((temp - 32) * 0.5556);
  return celsius;

};

const convertToFahrenheit = function(temp) {
  let fahren = roundTo1Decimal(temp * 1.8 + 32);
  return fahren;
};

function roundTo1Decimal (num) { 
    const number = parseFloat(num);
    return Math.round(number * 10) / 10;
  }
  

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
