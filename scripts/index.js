import Card from './Card.js';
import { validationConfig, cardsList } from './constants.js';
import {FormValidator} from './FormValidator.js';

 
//попап редактирования профиля
const popups = document.querySelectorAll('.popup');

const popupEdit = document.querySelector('.popupEdit');
const popupEditOpenButton = document.querySelector('.profile__button-edit');

const formEdit = document.querySelector('.popup__content');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_composition');
const person = document.querySelector('.profile__title');
const about = document.querySelector('.profile__subtitle');

//попап добавления  
const popupCard = document.querySelector('.popupCard');
const popupAddOpenButton = document.querySelector('.profile__add-button');

//попап карточек
const cardsContainer = document.querySelector('.cards');
const formCardAdd = document.querySelector ('.popupCard__content');
const inputCardName = document.querySelector ('.popup__input_type_card-name');
const inputCardLink = document.querySelector ('.popup__input_type_link');

//попап открытия фото
const popupImageView = document.querySelector ('.popupView');

//кнопка escape
const escapeButton = 'Escape';


// переменные для класса Card
const title = document.querySelector('.popupView__subtitle'); 
const image = document.querySelector('.popupView__image');

//  создание экзмпляров попапов валидации
const validationAddFormCard = new FormValidator (validationConfig, formCardAdd);
validationAddFormCard.enableValidation();

const validationEditForm = new FormValidator (validationConfig, popupEdit);
validationEditForm.enableValidation();



//функция открытия попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleKeyUp);
}
//функция закрытия попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleKeyUp);
}

//функции попапа редактирования профиля
function openPopupEdit() {
  openPopup(popupEdit)
    nameInput.value = person.textContent;
    jobInput.value = about.textContent;
}

//функция создания изменений в попапе редактирования
function handleSubmitFormEdit(evt) {
    evt.preventDefault(); 
    person.textContent = nameInput.value;
    about.textContent = jobInput.value;
    closePopup(popupEdit);
  }

 //функции попапа добавления
function openPopupCard() {
  openPopup(popupCard);
  formCardAdd.reset();
  validationAddFormCard.disableSubmitButton();
}

// //закрытие поапов на escape
 const  handleKeyUp = (evt) => {
    if(evt.key === escapeButton){
    const openedPopup = document.querySelector('.popup_opened');
     closePopup(openedPopup);
  }
}


//создание экземпляра карточки 
function openImagePopup (name, link){ 
  openPopup(popupImageView);
  image.alt = name;
  title.textContent = name;
  image.src = link;
}
function cardData (item){
  const card = new Card(item,'#card-template', openImagePopup);
  // Создаём карточку и возвращаем наружу
  const cardTemplate  = card.generateCard();
  return cardTemplate;
}
function renderCard(item, container) {
  container.prepend(cardData(item));
}

cardsList.forEach((item) => {
  renderCard(item, cardsContainer);
});  

//создание новых карточек
const handleSubmitAddCardForm = (event) => {
  event.preventDefault();
  renderCard({name: inputCardName.value, link: inputCardLink.value}, cardsContainer);
  closePopup(popupCard);
};


//закрытие попапов на кнопку и оверлей
popups.forEach((popup) => {
  popup.addEventListener("click", function  (evt) {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});
 
//обработчик попапа редактирования профиля
popupEditOpenButton.addEventListener('click', openPopupEdit);
formEdit.addEventListener('submit',  handleSubmitFormEdit);

//обработчик попапа добавления
popupAddOpenButton.addEventListener('click', openPopupCard);


//обработчик создания новых карточек
formCardAdd.addEventListener("submit",handleSubmitAddCardForm);

