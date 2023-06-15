//menu burger

const hamburger = document.querySelector('.header__toggle');

if (hamburger) {
    menu = document.querySelector('.main-nav');

    hamburger.addEventListener("click", function(e){
        document.body.classList.toggle('body--lock');
        hamburger.classList.toggle('header__toggle--active');
        menu.classList.toggle('main-nav--active');
        phone.classList.toggle('header__phone--active')
    });
};

//modal
    function bindModal(triggerSelector, popupSelector, modalSelector, closeSelector) { //привязка мод окна к опред тригеру (тригер-кнопка модальное окно кнопка закрытия)
        const trigger = document.querySelectorAll(triggerSelector),
              popup = document.querySelector(popupSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
        
        trigger.forEach(item => {
            item.addEventListener('click', (e) =>{ //событие по клику
                if (e.target) { //удостоверяемся что существует элемент на кот кликнули
                    e.preventDefault(); //отменили стандартное поведение
                }
                modal.style.display = "block";
                popup.style.display = "block";
                document.body.style.overflow = "hidden"; //фиксируем фон
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            popup.style.display = "none";
            document.body.style.overflow = ""; 
        });

        popup.addEventListener('click', (e) => { //закрытие формы по клику на область вокруг формы
            if (e.target === popup) {
                modal.style.display = "none";
                popup.style.display = "none";
                document.body.style.overflow = ""; 
            }
        });
    }

    bindModal('.card__button', '.popup', '.popup-catalog', '.popup-catalog .popup__close');

    //buttons in modal description and characteristic
    buttonDescr = document.querySelector('.popup-catalog__button--description'),
    buttonCharacter = document.querySelector('.popup-catalog__button--characteristic'),
    description = document.querySelector('.popup-catalog__description'),
    characteristic = document.querySelector('.popup-catalog__characteristic');


    buttonDescr.addEventListener('click', () => {
        buttonCharacter.classList.remove('popup-catalog__button--description--active');
        buttonDescr.classList.add('popup-catalog__button--description--active');
        description.style.display = "block";
        characteristic.style.display = "none";
    });

    buttonCharacter.addEventListener('click', () => {
        buttonCharacter.classList.add('popup-catalog__button--description--active');
        buttonDescr.classList.remove('popup-catalog__button--description--active');
        description.style.display = "none";
        characteristic.style.display = "block";
    });


//tabs
const list = document.querySelector('.choice__list'),
      items = document.querySelectorAll('.choice__photo'),
      listItems = document.querySelectorAll('.choice__item');

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id;
        const target = event.target;

        if(target.classList.contains('choice__item')) {
            listItems.forEach(listitem => {
                listitem.classList.remove('choice__item--active');
            });
            target.classList.add('choice__item--active');
        };

        switch(targetId) {
            case 'econom':
                getItems(targetId);
                break
            case 'small':
                getItems(targetId);
                break
            case 'classic':
                getItems(targetId);
                break
            case 'hightech':
                getItems(targetId);
                break
            case 'scandinavian':
                getItems(targetId);
                break
            case 'minimalism':
                getItems(targetId);
                break
            case 'loft':
                getItems(targetId);
                break
            case 'provence':
                getItems(targetId);
                break
        }
    });
};
filter();

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


//slider

const slider = document.querySelector('.works__slider');
const sliderItems = document.querySelectorAll('.works__photo');
const btnNext = document.querySelector('.works__prev');
const btnPrev = document.querySelector('.works__next');


sliderItems.forEach(function (slide, index) {

    if (index !== 0) {
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');
    }

    slide.dataset.index = index;

    sliderItems[0].setAttribute('data-active', '');

    slide.addEventListener('click', function () {
        showNextSlide('next');
    });
});

btnNext.onclick = function () {

    showNextSlide('next');
}

btnPrev.onclick = function () {
    console.log('prev');

    showNextSlide('prev');
}

function showNextSlide(direction) {
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    let nextSlideIndex
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
 }


//quiz
const quiz = document.querySelector('#quiz');
const quizItems = Array.from(quiz.children);
const knowPrice = document.querySelector('.count__button');

if (knowPrice) {
    thirstWindow = document.querySelector('.count__calc');
    secondWindow = document.querySelector('.type');

    knowPrice.addEventListener("click", function(e){
        thirstWindow.style.display = "none";
        secondWindow.style.display = "block";
    });
};

quizItems.forEach(function (section, index) {
    section.classList.add('hidden');

    if (index != 0) {
        section.classList.add('hidden');
    }

    section.dataset.index = index;

    section.addEventListener('click', function () {

        section.classList.add('hidden');

        const nextSlideIndex = +section.dataset.index + 1;
        console.log(nextSlideIndex);

        const nextSlide = section.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('hidden');
    });
});