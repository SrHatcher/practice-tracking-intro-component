const headerButton = document.querySelector('.header__button')
const headerNavbar = document.querySelector('.header__navbar')

headerButton.addEventListener('click', ()=>{
    headerNavbar.classList.toggle('header__navbar--active')
})