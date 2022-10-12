const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupSaveButton = popup.querySelector('.popup__save-button');

let formElement = document.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_composition');
let person = document.querySelector('.profile__title');
let about = document.querySelector('.profile__subtitle');

function popupOpen() {
    popup.classList.add('popup_opened');
    nameInput.value = person.textContent;
    jobInput.value = about.textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function popupSave(evt) {
    evt.preventDefault(); 
    person.textContent = nameInput.value;
    about.textContent = jobInput.value;
    popupClose();
  }

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
popupSaveButton.addEventListener('click', popupSave);

formElement.addEventListener('submit', popupSave);