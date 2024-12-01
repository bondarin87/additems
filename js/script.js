
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');

btn.addEventListener('click',function() {
    let item = document.createElement('li');
    item.textContent = 'click me';
    list.appendChild(item);
})

list.addEventListener('click',function (event) {
   event.target.innerHTML = '&hearts; &clubs; &spades; &diams;'
})
