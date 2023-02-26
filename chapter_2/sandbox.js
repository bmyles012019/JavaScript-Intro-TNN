/* 
    This is part 1
*/

// print to the browser console using "console.log"
// Useful for printing to test
console.log(1);
console.log(2);

// JavaScript Variables

// the let keyword creates a variable
let age = 25;
let year = 2019;
console.log(age);
console.log(age,year);

age = 30;
console.log(age);

// cons keyword creates a constant var sets a variable that cannot be changed
const points = 100;
// points  = 50; This line will throw an exception error
console.log(points)

// var keyword is the older JS way of setting a variable (still works)
var score = 75;
console.log(score);

// Other Notes:
//  - variable naming is often camel-case
//  - vaiables cannot be named keywords [e.g., let, const, (see documentation for full list)]
//  - "//" makes single-line comments
//  - "/* comment here */" makes a multi-line comment

/*  This is a multi-line comment.
    Each line between the "/*" is treated as comment.
*/

/* -------------------------------------

JavaScript Data Types
---------------------
1. Number - Integers and decimals (e.g., 1,2,3.14, 100.25)
2. String - charter values and words (e.g., "hello, world", "email@email.com")
3. Boolean - true / false - binary type
4. Null - Explicitly set a variable with no value
5. Undefined - Variables that have not yet been defined.
6. Object - Complex data structures (e.g., Arrays, Dates, Literals, etc.)
7. Symbol (newer) - Used with objects

-------------------------------------*/

/* 
    This is part 2 - working with strings
*/


// strings (can store strings with single quotes or double quotes)
console.log("hello world");

let email = 'bradley@gmail.com';
console.log(email);

// string concatentation - joining two or more strings together
let firstName = "Bradley";
let lastName = "Myles";
let fullName = firstName + " " + lastName;
console.log(fullName);

// getting characters from a string (note JS is a zero-based index language)
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

// string length (a method) - how manay characters in the string
let strLength = fullName.length; 
console.log(strLength); 

// string methods (methods are often interchanged with functions but they are different)
let strUpper = fullName.toUpperCase();  // using the upper case method
console.log(strUpper);

let result = fullName.toLowerCase();    // using the lower case method
console.log(result);

console.log(result, fullName);  // note that these methods do not alter the value, but some method do

let index = email.indexOf("@");  // returns the index (integer value) 
console.log(index);

/* 
    This is part 3 - more work with strings
*/
let em = "bradley@gmail.com";
let res = em.indexOf("b");
console.log(res);

// string slicing
res  = em.slice(0,10);
console.log(res);

res = em.substring(4, 10);
console.log(res);

res = em.replace('m', 'w');
console.log(res);

/* 
    This is part 4 - working with numbers
*/
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// math operators (e.g., +, -, /, *, **, %)
let mathResult = radius % 3;
console.log(mathResult);

mathResult = pi * radius**2;
console.log(mathResult);

// order of operations B (brackets) I (indicies/powers) D (division) M (multiplication) A (addition) S (subtraction)
mathResult = 5 * (10-3)**2;
console.log(mathResult);

// Short hand notation for basic math ops
let likes = 10;
console.log(likes)
// likes = likes + 1;   // adding 1 to likes
// console.log(likes);

likes++;                // adding 1 to likes
console.log(likes);

likes --;
console.log(likes);     // subtracting 1 from likes

likes += 10;            // adds 10 to likes
console.log(likes);   

likes -= 2;             // subtracts 2 from likes
console.log(likes);


likes /= 2;             // divides likes by 2 
console.log(likes)


likes *= 2;             // multiplies likes by 2 
console.log(likes);

// Not a Number (NaN) - a calculation that does NOT result in a number
console.log('a'/4);   // results in NaN

// concatentate a string with a number
let strConcat = 'the blog has ' + likes + ' likes.'
console.log(strConcat)

/*
    Part 5 - String and Number Concatentation
*/ 
const title = 'Best reads of 2023';
const author = 'Bradley';
const numLikes = 30;

// concatentation way
let sConcatRes = "The blog called " + title + " by " + author + " has " + numLikes + " likes.";
console.log(sConcatRes);

// template string (or template literal) way
let sConcatRes2 = `The blog called ${title} by ${author} has ${numLikes} likes.`;  // note back-ticks are used (not single quotes)
console.log(sConcatRes2);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${numLikes} likes.</span>
`;
console.log(html);

/* 
    Part 6 - Using Arrays
*/
let ninjas = ['bradley', 'wife', 'son', 'daughter'];  // making an array
console.log(ninjas);

// get a particular item in an array (e.g., the 2nd item)
console.log(ninjas[1]);

// overwriting an array value
ninjas[1] = 'my wife';
console.log(ninjas[1]);

// array of mixed data types
let randArray = ['bradley', 'wife', 36, 34];
console.log(randArray);

// Array length
console.log(randArray.length);

// Joining Arrays
let arrRes = randArray.join(',');
console.log(arrRes);

// Indexing values of Arrays
arrRes = ninjas.indexOf('my wife');
console.log(arrRes);

// Concat 2 arrays
let newArr = ['mom', 'dad'];
arrRes = ninjas.concat(newArr);
console.log(arrRes);

// Push method adds a new value to an array (a destructive method - changes the original value of the object)
arrRes = ninjas.push('sister');
console.log(arrRes);    // actually returns the new length of the array

// Pop removes the last value of the array
arrRes = ninjas.pop();
console.log(arrRes);   // pops out the last value as a result
console.log(ninjas);


/* 
    Part 7 - Null objests and Undefined objects
*/
let ageInt;
console.log(ageInt);  // Returns an undefined object that has not yet been assigned.

let ageInt2 = null;
console.log(ageInt2);
console.log(ageInt2, ageInt2 + 3, `the age is ${ageInt2}`);

/* 
    Part 8 - Booleans
*/

// Booleans & comparisons
console.log(true, false, "true", "false");

// methods can return booleans
let e = "brandon@email.com";
let names = ['bradley', 'brandon', 'brandi'];

let eRes = e.includes("!");
console.log(eRes);
console.log(names.includes('brandon'));

// comoparison operators
let nAge = 25;

console.log(nAge==25);
console.log(nAge==30);
console.log(nAge!=30);
console.log(nAge!=25);
console.log(nAge>20);
console.log(nAge<20);
console.log(nAge<=25);
console.log(nAge>=20);



let aName = 'bradley';
console.log(aName=='bradley');
console.log(aName=='Bradley');
console.log(aName>'chedeline');
console.log(aName<'chedeline');
console.log(aName<'Bradley');
console.log(aName>'Bradley');

// Abstract equality or Loose equality
let eAge = 25;
console.log(eAge == '25');
console.log(eAge != '25');
console.log(eAge != 25);

// String equality comparison
console.log(eAge === 25);
console.log(eAge === '25');  // Same value and data type.
console.log(eAge !== '25');  

// Type conversion - turning a data type to another data type
let aScore = '100';

console.log(aScore + 1);   // the result is a string concatentation
console.log(Number(aScore) + 1);  // the result is a numerical addition 
console.log(typeof aScore);     // Returns the data type of an object
console.log(typeof Number(aScore));     // Returns the data type of an object

console.log(Number('hello'));    // Returns a NaN
console.log(String(50));       // Converts a number to string
console.log(Boolean(50));    // Positive and negatives numbers are True (truthy)
console.log(Boolean(-50));    // Positive and negatives numbers are True (truthy)
console.log(Boolean(0));    // zero (0) values are false (falsey)
console.log(Boolean("0"));    // However, string zero ('0') values are true (truthy)
console.log(Boolean(""));    // However, empty string ('') values are false (falsey)




