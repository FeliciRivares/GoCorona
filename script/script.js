window.addEventListener('DOMContentLoaded', () => {
    const 
    menu = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    burger__icon = document.querySelector('.icon-menu');

    burger__icon.addEventListener('click', () => {
        burger__icon.classList.toggle('burger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger__icon.classList.toggle('burger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})