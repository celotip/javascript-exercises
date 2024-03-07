const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || Number(num1) !== num1 || Number(num2) !== num2) {
        return "ERROR";
    }
    let sum = 0;
    let big = num2;
    let small = num1;
    if (num1 > num2) {
        big = num1;
        small = num2
    }
    for (let i = small; i <= big; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
