const repeatString = function(text, num) {
    if (num < 0) return "ERROR";
    let repeat = "";
    for (let i = 0; i < num; i++) {
        repeat += text;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
