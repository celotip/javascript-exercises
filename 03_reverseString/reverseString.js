const reverseString = function(text) {
    let textArr = text.split('');
    textArr = textArr.reverse();
    text = textArr.join('');
    return text;
};

// Do not edit below this line
module.exports = reverseString;
