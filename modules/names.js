function fullName(firstNameVar, lastNameVar) {
    // create object with first and last name
    const person = {
        firstName: firstNameVar,
        lastName: lastNameVar
    };
    return person;
}

// export the function
module.exports = fullName;