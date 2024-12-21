const app = require('./app1');


// var x = 20;
// if(x === '20'){
//     console.log("matched");
// }else{
//     console.log("un-matched");
// }


console.log(app);
console.log(app.x);
console.log(app.z());

//loops in js
for(i=0; i<10; i++) {
    console.log(i);
}

const arr = [12,3,45,5, 3, 4, 5, 5 , 3,3 ,3];
console.log(arr);
console.log(arr[0]);

let result = arr.filter((item)=> {
    return item===3;
});
console.log(typeof(result));
console.log(result);
console.log(result.length);

/*INTERVIEW QUESTION

    what are filter functions in js for arrays

Filter functions in JavaScript are methods that allow you to create a new array containing elements that pass a certain condition specified by a callback function. They are used with the `filter()` method, which is part of the `Array` prototype.

### Syntax:
```javascript
array.filter(callback(element[, index[, array]])[, thisArg])
```

### Parameters:
1. **callback**: A function that tests each element. Returns `true` to keep the element, `false` to exclude it. This function takes:
   - **element**: The current element being processed.
   - **index** (optional): The index of the current element.
   - **array** (optional): The array `filter` was called on.

2. **thisArg** (optional): A value to use as `this` when executing the callback.

### Returns:
A new array containing elements for which the callback function returned `true`.

### Examples:

#### Example 1: Filter even numbers
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
```

#### Example 2: Filter strings with length greater than 3
```javascript
const words = ["cat", "elephant", "dog", "mouse"];
const longWords = words.filter(word => word.length > 3);
console.log(longWords); // Output: ["elephant", "mouse"]
```

#### Example 3: Filter objects based on a property
```javascript
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];
const adults = people.filter(person => person.age >= 18);
console.log(adults);
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]
```

### Key Points:
- The `filter()` method does not modify the original array.
- It only includes elements in the new array for which the callback returns `true`.
- If no elements pass the test, it returns an empty array.

The `filter()` function is very useful for creating subsets of data based on specific criteria.
*/