document.addEventListener('DOMContentLoaded', () => {
    const popupCall = document.querySelector('.popup-call');
    const closeButtonCall = popupCall.querySelector('.popup-call__close');
    const openButton = document.querySelector('.main-nav__button');
    const popupButton = document.querySelector('.popup-call__button');

    openButton.addEventListener('click', (event) => {
        event.stopPropagation();
        popupCall.style.display = "block";
        document.body.style.overflow = "hidden";
        // Устанавливаем высший z-index при открытии
        popupCall.style.zIndex = "9999";
    });

    closeButtonCall.addEventListener('click', () => {
        closePopupCall();
    });

    popupButton.addEventListener('click', () => {
        closePopupCall();
    });

    function closePopupCall() {
        popupCall.style.display = "none";
        document.body.style.overflow = "auto";
        // Возвращаем изначальный z-index при закрытии
        popupCall.style.zIndex = "";
    }
});