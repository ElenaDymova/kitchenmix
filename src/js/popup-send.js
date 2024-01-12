const popupSend = document.querySelector('.popup-send');
const closeButtonSend = popupSend.querySelector('.popup-send__close');
const sendButtons = document.querySelectorAll('.send');

sendButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        openPopup(popupSend);
    });
});

closeButtonSend.addEventListener('click', () => {
    closePopup(popupSend);
});

function openPopup(popup) {
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
    // Устанавливаем высший z-index при открытии
    popup.style.zIndex = "9999";
}

function closePopup(popup) {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
    // Возвращаем изначальный z-index при закрытии
    popup.style.zIndex = "";
}
