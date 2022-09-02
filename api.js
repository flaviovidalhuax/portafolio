const menu = document.querySelector('.menu_show')
const hamburger = document.querySelector('.icon_menu')

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_showX')
})



const before = document.querySelector('.before'); 
const next = document.querySelector('.next'); 
const slider = document.querySelector('.slider');

before.addEventListener('click', () =>{
    slider.scrollLeft -= 50;
})

next.addEventListener('click', () =>{
    slider.scrollLeft += 50;
})