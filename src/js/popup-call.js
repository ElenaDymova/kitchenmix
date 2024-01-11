document.addEventListener('DOMContentLoaded', () => {
    const popup = document.querySelector('.popup-call');
    const closeButton = popup.querySelector('.popup-call__close');
    const openButton = document.querySelector('.main-nav__button');
    const popupButton = document.querySelector('.popup-call__button');

    openButton.addEventListener('click', () =>{
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    closeButton.addEventListener('click', () =>{
        closePopupCall();
    });

    popupButton.addEventListener('click', () =>{
        closePopupCall();
    });

    function closePopupCall() {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    }
});