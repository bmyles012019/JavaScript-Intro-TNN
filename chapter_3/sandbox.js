/* 
    This is part 1 - Control Flow
*/

// for loops
/* 
    The for-loop has the following:
    1. an initialization variable -  let i = 0;
    2. a condition - Evaluates a true/false conditional   i < 5;
    3. final expression  - executes at the end of the code block   i++ (increment i)
*/
for(let i = 0; i <5; i++){
    console.log('in looop: ', i);
}

console.log('loop finished.');

const names = ['bradley', 'wife', 'son', 'daughter'];

for(let i = 0; i < names.length; i++){
    console.log(i, names[i]);
    let html = `
        <div>${names[i]}</div>
    `;
    console.log(html);
}

// while-loop
/* 
    Only uses one condition
    must increment the initilization variable inside the loop
*/
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

// Do-While-Loops
let n = 5;
do{
    console.log('val of i is: ', n);
} while(n < 5);

// If Statements
const age = 25;

if(age > 20){
    console.log('you are over 20 years old.');
}

const ninjas = ['bradley', 'my wife', 'son', 'daughter'];

if(ninjas.length > 4){
    console.log("that's a logt of ninjas");
}

const password = "pass@";
if(password.length >= 8){
    console.log('that password is long enough.');
}

// If-else Statements
if(password.length >= 8){
    console.log('that password is long enough.');
} else {
    console.log("that password is NOT long enough.");
}

// If-elseif-else
if(password.length > 12){
    console.log("that passoword is Very Strong");
} else if(password.length >= 8){
    console.log("that password is strong enough.");
} else {
    console.log("that password is NOT long enough.");
}

// logical operators OR || and AND &&
if(password.length > 12 && password.includes('@')){
    console.log("that password is VERY Strong");
} else if(password.length >= 8  || password.includes('@')){
    console.log('that password is strong enough');
} else {
    console.log("that password is not strong enough");
}

// Logical NOT oeperator
let user = false;

if(!user){
    console.log("user must log in.");
}

// JS keywors "break" and "continue"
const scores = [50,25,0,30,100,20,10];

for(let i =0; scores.length; i++){
    
    if(scores[i] === 0){
        continue;
    }
    console.log("your score: ", scores[i]);

    if(scores[i]===100){
        console.log('congrats, you reached the highest score');
        break;
    }
}

// Swith-Case Statements

const grade = "Q";

switch(grade){
    case "A":
        console.log("you got an A!");
        break;
    case "B":
        console.log("you got an B.");
        break;
    case "C":
        console.log("you got a C");
        break;
    case "D":
        console.log("you got a D.");
        break;
    case "E":
        console.log("you got an E.");
        break;
    default:
        console.log("not a valid grade");
}