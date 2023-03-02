/* 
    Part 4 - Interacting with the DOM
    - More Examples
*/

const content = document.querySelector('p');

content.classList.add('success');
console.log(content.classList);
content.classList.remove('success');

const contents = document.querySelectorAll('p');
console.log(contents);
contents.forEach(p => {
    if(p.textContent.includes('success')){
        // p.setAttribute('class', 'success');
        p.classList.add('success');
    } else if(p.textContent.includes('error')){
        // p.setAttribute('class','error');
        p.classList.add('error');
    }
    console.log(p);
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');
