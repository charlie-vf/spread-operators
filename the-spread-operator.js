/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 = [1, 2, 3];
let arr2 = arr1
console.log('Second Array', arr2)
// ^^ logs: Second Array [ 1, 2, 3 ]

// push a new element into the second array

let arr3 = [1, 2, 3];
let arr4 = arr3;
arr4.push(4)
console.log("Second Array", arr4)
console.log("First Array", arr3)

// this causes an issue as the second array isn't actually a copy of the first
// it's a new variable which points to the same object as the first variable
// so, anything we do to the second array will be done to the first, and
// vice versa
// aka, both arrays will log as '"x Array" [1, 2, 3, 4]'
// this is resolved below

// Copying an array using the spread operator
// the ... 'spreads' the values of arr5 into arr6
// and creates an entirely new object

let arr5 = [4, 5, 6];
let arr6 = [...arr5];

arr6.push(7)
console.log(arr5)
console.log(arr6)
// ^^ now when logging, we see that the arr5 remains untouched
// arr5 logs [4, 5, 6]
// arr6 logs [4, 5, 6, 7]

// Copying an object
// define an object with three properties and give each property a value
let obj1 = { a: 1, b: 2, c: 3};
let obj2 = { ...obj1, d: 4};
// if you want to change one of the values in the original object,
// you can do this by overwriting it in the new object
let obj3 = { ...obj1, b:7}; 

console.log("First Object", obj1);
console.log("Second Object", obj2);
console.log("Third Object", obj3);
// First Object { a: 1, b: 2, c: 3 }
// Second Object { a: 1, b: 2, c: 3, d: 4 }
// Third Object { a: 1, b: 7, c: 3 }


// Copying only part of an array/object
// the spread operator doesn't  need to make up the entirety of the object or  
// array you create with it
// if I  wanted to combine several of the objects we've  
// worked with so far into a new object,  I can define something like array 5,  
// and inside it I can spread the first array, the  first object by spreading 
// it within curly braces, the third array, and three arbitrary values 
// like x, y, and z
 let arr7 = [...arr1, {...obj1}, ...arr5, "x", "y", "z"];
 console.log("Seventh Array", arr7);
 // Seventh Array [ 1, 2, 3, { a: 1, b: 2, c: 3 }, 4, 5, 6, 'x', 'y', 'z' ]



// node the-spread-operator.js