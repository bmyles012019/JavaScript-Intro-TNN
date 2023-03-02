/* 
    Part 1 - Interacting with the DOM
    - DOM => Document Object Model
*/

// Using the querySelector and querySelectorAll
const para = document.querySelector('p');   // selects the first object with this 'tag'
console.log(para);

const para2 = document.querySelector('.error');  // selects the first class '.error'
console.log(para2);

const para3 = document.querySelector('div.error'); // selects the object div with a class .error
console.log(para3);

const paras = document.querySelectorAll('p');  // selects all objects with tag 'p'
console.log(paras);
console.log(paras[0]);
paras.forEach(para => {
    console.log(para);
});

const paras2 = document.querySelectorAll('.error');
paras2.forEach(para => {
    console.log(para);
});

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors[0]);
console.log(errors[1]);

// get elements by their tag name
const parasGet = document.getElementsByTagName('p');
console.log(parasGet);
console.log(parasGet[0]);

/*
    Notice that HTML collections are not arrays, which means:
    1. to loop them, turn them into arrays
    2. don't have same object properties like forEach
*/


/* 
    Part 2 - Interacting with the DOM
    - Doing something with the DOM
*/

// Lets change the text of a paragraph
const paraChg = document.querySelector('p');

console.log(paraChg.innerHTML);
paraChg.innerText += ' ninjas are awesome.'  // append to the html text of the paragraph object
paraChg.innerText = ' ninjas are awesome.'  // changes the html text of the paragraph object

const parasChg = document.querySelectorAll('p');
parasChg.forEach(para => {
    para.innerText += ' new text';
});

const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

const people = ['bradley', 'wife', 'son', 'daughter'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});


/* 
    Part 3 - Interacting with the DOM
    - More Examples
*/
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));

mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green;');

const family = document.querySelectorAll('div.content');
console.log(family);


const titleChg = document.querySelector('h1');
console.log(titleChg.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';

/* 
    Part 4 - Interacting with the DOM
    - More Examples
*/
