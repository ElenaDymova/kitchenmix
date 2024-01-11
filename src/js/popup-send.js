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
}

function closePopup(popup) {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
}