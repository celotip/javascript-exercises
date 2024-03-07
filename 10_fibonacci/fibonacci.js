const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) {
        return "OOPS";
    } else if (num === 0) {
        return 0;
    } else if (num < 3) {
        return 1;
    } 
    let i = 1;
    let j = 1;
    let sum = 0;
    for(let k = 3; k <= num; k++) {
        sum = i + j;
        i = j;
        j = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
