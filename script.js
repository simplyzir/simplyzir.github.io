let menu = document.querySelector('.header_nav');
let burger = document.querySelector('.burger');

burger.onclick = function () {
    menu.classList.toggle('header_nav-open');
}
