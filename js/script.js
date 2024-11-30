"use strict";


let button = document.querySelector('button');
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li');

button.addEventListener('click', function(event) {
    let item = document.createElement('li');
    item.textContent = 'item';
    list.appendChild(item);
})
list.addEventListener('click',function(event) {
    event.target.textContent += '!';
})
