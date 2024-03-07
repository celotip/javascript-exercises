const removeFromArray = function(arr, ...elements) {
    return arr.filter(element => !elements.find(e => e === element));
};

let arr = removeFromArray([1, 2, 3, 4], 3, 2)

// Do not edit below this line
module.exports = removeFromArray;
