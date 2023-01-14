const removeFromArray = function(array, ...num) {
    return array.filter(x => !num.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
