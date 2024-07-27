function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}

//  Function to format array of strings based on processed numbers
function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Export the functions for use in other files
module.exports = {
    processArray,
    formatArrayStrings
};