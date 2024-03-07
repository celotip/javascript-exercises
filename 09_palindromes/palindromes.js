const reverseString = require("../03_reverseString/reverseString");

const palindromes = function (text) {
    text = text.toLowerCase();
    text = text.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, "");
    return text === reverseString(text);
};

// Do not edit below this line
module.exports = palindromes;
