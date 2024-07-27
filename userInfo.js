const { processArray, formatArrayStrings } = require('./arrayManipulation');

// Task 3: Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Export the function for use in other files
module.exports = {
    createUserProfiles
};