// import fullName and hobbies from names.js and hobbies.js
const fullName = require('./modules/names.js');
const hobbies = require('./modules/hobbies.js');

// function with no parameters that returns an object with fullName and hobbies properties
function people() {
    return {
        fullName: fullName('John', 'Doe'),
        hobbies: hobbies('Coding', 'Reading', 'Swimming')
    }
}

// calling function and logging the result
console.log(people());