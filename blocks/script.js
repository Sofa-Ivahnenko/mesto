const popupOpenButton = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupSaveButton = popup.querySelector('.popup__button');
const popupToggle = function () {
    popup.classList.toggle('popup__opened');
}

let formElement = document.querySelector('.popup__content');
let nameInput = popup.querySelector('.popup__form_name');
let jobInput = popup.querySelector('.popup__form_composition');
let person = document.querySelector('.profile__title');
let about = document.querySelector('.profile__subtitle');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    person.textContent = nameInput.value;
    about.textContent = jobInput.value;
    nameInput.placeholder = 'Имя';
    jobInput.placeholder = 'О себе';
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popupSaveButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler); 