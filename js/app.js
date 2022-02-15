const cls = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-window-close')

const menu = document.querySelector('#menu');

cls.addEventListener('click', function(){
	menu.classList.toggle('test');
})

close.addEventListener('click', function(){
	menu.classList.toggle('test');
})