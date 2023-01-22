import { cardsList } from './initialCards.js';
import Card from './Card.js';
import { validationConfig } from './constants.js';
import {FormValidator} from './FormValidator.js';

 
//попап редактирования профиля
const popups = document.querySelectorAll('.popup');
const closeButton = document.querySelector('.popup__close-button');

const popupEdit = document.querySelector('.popupEdit');
const popupEditOpenButton = document.querySelector('.profile__button-edit');
const popupEditCloseButton = popupEdit.querySelector('.popupEdit__close-button');
const buttonEditSave = popupEdit.querySelector('.popup__save-button');

const formEdit = document.querySelector('.popup__content');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_composition');
const person = document.querySelector('.profile__title');
const about = document.querySelector('.profile__subtitle');

//попап добавления  
const popupCard = document.querySelector('.popupCard');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = popupCard.querySelector('.popupCard__close-button');
const buttonAddSave = popupCard.querySelector('.popupCard__save-button');

const formAdd = document.querySelector('.popupCard__content');
const cardInput = popupCard.querySelector('.popup__input_type_card-name');
const linkInput = popupCard.querySelector('.popup__input_type_link');

//попап карточек
const cardContainer = document.querySelector('.cards');
const formaCardAdd = document.querySelector ('.popupCard__content');
const inputCardName = document.querySelector ('.popup__input_type_card-name');
const inputCardLink = document.querySelector ('.popup__input_type_link');

//const cardTemplate = document.querySelector ('#card-template').content.querySelector('.card');

//попап открытия фото
const popupImageView = document.querySelector ('.popupView');


// переменные для класса Card
const title = document.querySelector('.popupView__subtitle'); 
const image = document.querySelector('.popupView__image');

 
//переменные для создания экземпляров попапов
const validationEdit = document.querySelector ('.popup__content');   
const validationAdd = document.querySelector ('#cardform'); 

const validationAddFormCard = new FormValidator (validationConfig, validationAdd);
validationAddFormCard.enableValidation();

const validationEditForm = new FormValidator (validationConfig, validationEdit);
validationEditForm.enableValidation();



//кнопка escape
const escapeButton = 'Escape';

// константы для валидации форм
const forms = document.querySelector ('.popup__content');
const personInput = document.querySelector ('#person');
const aboutInput = document.querySelector ('#about');
const titleInput = document.querySelector ('#name');
const urlInput = document.querySelector ('#link');


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

function handleSubmitFormEdit(evt) {
    evt.preventDefault(); 
    person.textContent = nameInput.value;
    about.textContent = jobInput.value;
    closePopup(popupEdit);
  }

 //функции попапа добавления
function openPopupCard() {
  openPopup(popupCard);
  formaCardAdd.reset();
}


//удаление карточки
//const handleDeleteCard = (event) => {
//   event.target.closest('.card').remove();
//   };
 // лайк на карточку
// const handleLikeCard = (event) => {
//   event.target.classList.toggle('card__button-like');
//   };
//откртыие изображения карточки на экра
// const handleViewCard = (event) => {
//     openPopup(popupImageView)
//      };


// //закрытие поапов на escape
 const  handleKeyUp = (evt) => {
    if(evt.key === escapeButton){
    const openedPopup = document.querySelector('.popup_opened');
     closePopup(openedPopup);
  }
}
//закрытие попапов на кнопку и оверлей
popups.forEach((popup) => {
  popup.addEventListener("click", function  (evt) {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});

//создание экземпляра карточки 
function handleCardClick (name, link){ 
  openPopup(popupImageView);
  image.alt = name;
  title.textContent = name;
  image.src = link;
}
function createCard (item){
  const card = new Card(item,'#card-template', handleCardClick);
  // Создаём карточку и возвращаем наружу
  const cardTemplate  = card.generateCard();
  return cardTemplate;

  // Добавляем в DOM
 // container.prepend(cardTemplate);
}
function renderCard(item, container) {
  container.prepend(createCard(item));
}

cardsList.forEach((item) => {
  renderCard(item, cardContainer);
});  



//генерация карточек
// const generateCard = (cardElemets) => {
// const newCard = cardTemplate.cloneNode(true);

// const title = newCard.querySelector('.card__title');
// title.textContent = cardElemets.name;
 
// const image = newCard.querySelector('.card__image');
// image.src = cardElemets.link;
// image.alt = cardElemets.name;

// //откртие картинки для просмотра
// image.addEventListener('click', function(){
//   openPopup(popupImageView);
//   popupImageView.querySelector('.popupView__image').src = cardElemets.link;
//   popupImageView.querySelector('.popupView__image').alt = cardElemets.name;
//   popupImageView.querySelector('.popupView__subtitle').textContent = cardElemets.name;
// });

// const deletBtn = newCard.querySelector('.card__button-delet');
// deletBtn.addEventListener('click', handleDeleteCard);

// const likeBtn = newCard.querySelector('.card__button');
// likeBtn.addEventListener('click', handleLikeCard);

// return newCard;
// };





//создание новых карточек
const handleSubmitAddCardFom = (event) => {
  event.preventDefault();
  renderCard({name: inputCardName.value, link: inputCardLink.value}, cardContainer);
  buttonAddSave.setAttribute("disabled", "");
  closePopup(popupCard);
};
 
// const renderCard = (cardElemets) => {
// cardContainer.prepend(generateCard(cardElemets));
// }

// cardsList.forEach((cardElemets)=>{
// renderCard(cardElemets);
// });



//обработчик попапа редактирования профиля
popupEditOpenButton.addEventListener('click', openPopupEdit);
formEdit.addEventListener('submit',  handleSubmitFormEdit);

//обработчик попапа добавления
popupAddOpenButton.addEventListener('click', openPopupCard);


//обработчик создания новых карточек
formaCardAdd.addEventListener("submit",handleSubmitAddCardFom);

//deletBtn.addEventListener('click', handleDeleteCard);
