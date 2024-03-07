const findTheOldest = function(arr) {
    let oldest = arr[0];
    let currentYear = new Date().getFullYear();
    let age = (person) => {
        if (!person.yearOfDeath) {
            return currentYear - person.yearOfBirth;
        } else {
            return person.yearOfDeath - person.yearOfBirth;
        }
    };
    arr.forEach(person => {
        if (age(person) > age(oldest)) {
            oldest = person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
