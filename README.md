# Array Manipulation and User Info Project

## Student ID: 11242706

### Task Descriptions

**Task 1: arrayManipulation.js**

- **processArray(numbers)**
  - Takes an array of numbers as an argument.
  - Returns a new array where each even number is squared and each odd number is tripled.

**Task 2: arrayManipulation.js**

- **formatArrayStrings(strings, processedNumbers)**
  - Takes two arrays as arguments:
    - An array of strings.
    - An array of numbers processed by `processArray`.
  - Modifies each string based on its corresponding number:
    - Capitalize the entire string if the number is even.
    - Convert the string to lowercase if the number is odd.

**Task 3: userInfo.js**

- **createUserProfiles(names, modifiedNames)**
  - Takes an array of names and the array of modified names from Task 2.
  - Returns an array of objects, each containing:
    - `originalName`
    - `modifiedName`
    - `id` (auto-incremented starting from 1)

### Usage

1. **Include the scripts in your project:**
   - `arrayManipulation.js` for array processing and formatting.
   - `userInfo.js` for creating user profiles.

2. **Example:**
   ```javascript
   const { processArray, formatArrayStrings } = require('./arrayManipulation');
   const { createUserProfiles } = require('./userInfo');

   const numbers = [1, 2, 3, 4, 5];
   const strings = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

   const processedNumbers = processArray(numbers);
   const formattedStrings = formatArrayStrings(strings, processedNumbers);
   const userProfiles = createUserProfiles(strings, formattedStrings);

   console.log(userProfiles);