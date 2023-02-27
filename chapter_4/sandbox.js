/* 
    This is part 1 - Functions
        - Create blocks of code that are reusable
*/

// funciton declaration
function greet(){
    console.log('hello there.');
}


// function expression - stores a function to a variable
const speak = function(name='Noah', time='evening'){
    console.log(`good ${time}, ${name}`);
};   // function expresions must end with a semicolon

greet();  // calls the function
speak('Bradley', 'morning');
speak();

// Functions that return values
const calcArea = function(radius){
    let area = 3.14 * radius **2;
    console.log(area);
    return area;

};

const calcVol = function(area){
    return area * 1;
};

const area = calcArea(5);
console.log(area);

// Arrow Functions
const aCalcArea = (radius) => {
    return 3.14 * radius**2;
};

aCalc = aCalcArea(10);
console.log(aCalc);

// Practice turning regular functions into arrow functions
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
} ;
console.log(bill([10,15,30], 0.2));

// callbacks & foreach
const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    console.log(value);
});


// foreach
let people = ['bradley', 'wife', 'son', 'daughter', 'mom', 'dad'];

people.forEach((person, index) => {console.log(index, person)});

const logPerson = (person, index) => {console.log(index, person)};

people.forEach(logPerson)

// get a reference to the 'ul'
const ul = document.querySelector('.people');

let html = ``;
people.forEach((person) => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;