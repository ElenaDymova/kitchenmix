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

//tabsmobile

const select = document.querySelector('.choice__types'),
      photoes = document.querySelectorAll('.choice__photo');

function choice() {
    select.addEventListener('click', event => {
        const nameId = event.target.dataset.id;
        console.log(nametId);
    });
};

choice();



