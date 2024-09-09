const lol = document.querySelector('#lol');
const menu = document.querySelector('#menu')

lol.addEventListener('click',()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})