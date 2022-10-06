const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupSaveButton = popup.querySelector('.popup__save-button');
const popupToggle = function () {
    popup.classList.toggle('popup__opened');
}

let formElement = document.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__form_name');
let jobInput = popup.querySelector('.popup__form_composition');
let person = document.querySelector('.profile__title');
let about = document.querySelector('.profile__subtitle');

function popupOpen() {
    popup.classList.remove('popup_opened');
}

function popupClose() {
    popup.classList. remove('popup_opened');
}

function popupCloseByClickingOverlay (event) {
    if (event.target == event.currentTarget) {
        popupClose();
    }
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
popup.addEventListener('click', popupCloseByClickingOverlay);

function popupSave (evt) {
    evt.preventDefault(); 
    person.textContent = nameInput.value;
    about.textContent = jobInput.value;
    nameInput.placeholder = 'Имя';
    jobInput.placeholder = 'О себе';
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler); 