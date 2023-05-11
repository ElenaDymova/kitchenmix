//menu burger

const hamburger = document.querySelector('.header__toggle');

if (hamburger) {
    menu = document.querySelector('.main-nav');
    phone = document.querySelector('.header__phone');
    hamburger.addEventListener("click", function(e){
        document.body.classList.toggle('body--lock');
        hamburger.classList.toggle('header__toggle--active');
        menu.classList.toggle('main-nav--active');
        phone.classList.toggle('header__phone--active')
    });
};

//cards

