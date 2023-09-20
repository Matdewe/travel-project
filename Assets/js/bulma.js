// navbar burger
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navMenu');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});



