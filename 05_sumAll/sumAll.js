const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || Number.isInteger(num1) != true || Number.isInteger(num2) != true) {
        return 'ERROR';
    }else {
        let min = Math.min(num1,num2), max= Math.max(num1,num2);
    return ((max - min) + 1) * ((min + max) / 2);
    }

};

// Do not edit below this line
module.exports = sumAll;
