import Card from '../components/Card.js';
import { validationConfig, cardsList, popupsConfig } from '../utils/constants.js';
import {profile,buttonOpenAddPopup,buttonOpenEditPopup,formEditCard,formAddCard,inputInfoName,inputInfoJob} from '../utils/elements';
import {FormValidator} from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';


const classEditPopup = new PopupWithForm(popupsConfig.popupEditCard, handleSubmitFormEdit);
classEditPopup.setEventListeners();

const classAddPopup = new PopupWithForm(popupsConfig.popupAddCard, handleSubmitAddCardForm);
classAddPopup.setEventListeners();

const userInfo = new UserInfo ({
  name: '.profile__title',
  description: '.profile__subtitle'
});

function openEditPopup(){
  formEditPopupValid.resetValidation()
  const {name, description} = userInfo.getUserInfo();

  inputInfoName.value = name;
  inputInfoJob.value = description;

  formEditPopupValid.toggleButtonState()
  classEditPopup.open();
}

function openAddPopup() {
  formAddPopupValid.resetValidation()
  formAddPopupValid.toggleButtonState()
  classAddPopup.open();
}

function openImagePopup(title, url) {
  const imagePopupOpen = new PopupWithImage(popupsConfig.popupImageOpen, {title, url});
  imagePopupOpen.setEventListeners();
  imagePopupOpen.open();
}

function handleSubmitEditForm (value) {
  userInfo.setUserInfo(value.inputName, value.inpurJob)
  classEditPopup.close();
}

function handleSubmitAddNewCard(value) {
  const newAddCard = {
    name: value.inputLabel,
    linl: value.inputLink
  }
  const cardSection = new Section ({items: newAddCard, renderer: renderCard}, '.elements')
  cardSection.renderItem(cardSection)
  formAddPopupValid.resetValidation()
  classAddPopup.close();
}

function renderCard(cardData){
  const card = new Card(cardData,'#card-template', openImagePopup);
  // Создаём карточку и возвращаем наружу
  const cardTemplate  = card.generateCard();
  // return cardTemplate;
}

const sectionCard = new Section({items: cardsList, renderCard: renderCard}, '.elements');
sectionCard.renderItem(sectionCard)

buttonOpenEditPopup.addEventListener('click', ()=> openEditPopup());
buttonOpenAddPopup.addEventListener('click', ()=> openAddPopup());

const formEditPopupValid = new FormValidator(validationConfig, formEditCard);
formEditPopupValid.enableValidation();

const formAddPopupValid = new FormData(validationConfig, formAddCard);
formAddPopupValid.enableValidation();

 
//попап редактирования профиля
// const popups = document.querySelectorAll('.popup');

// // const popupEdit = document.querySelector('.popupEdit');
// const popupEditOpenButton = document.querySelector('.profile__button-edit');

// const formEdit = document.querySelector('.popup__content');
// const nameInput = popupEdit.querySelector('.popup__input_type_name');
// const jobInput = popupEdit.querySelector('.popup__input_type_composition');
// const person = document.querySelector('.profile__title');
// const about = document.querySelector('.profile__subtitle');

// //попап добавления  
// // const popupCard = document.querySelector('.popupCard');
// const popupAddOpenButton = document.querySelector('.profile__add-button');

// //попап карточек
// const cardsContainer = document.querySelector('.cards');
// const formCardAdd = document.querySelector ('.popupCard__content');
// const inputCardName = document.querySelector ('.popup__input_type_card-name');
// const inputCardLink = document.querySelector ('.popup__input_type_link');

//попап открытия фото
// const popupImageView = document.querySelector ('.popupView');

//кнопка escape
// const escapeButton = 'Escape';


// // переменные для класса Card
// const title = document.querySelector('.popupView__subtitle'); 
// const image = document.querySelector('.popupView__image');

// //  создание экзмпляров попапов валидации
// const validationAddFormCard = new FormValidator (validationConfig, formCardAdd);
// validationAddFormCard.enableValidation();

// const validationEditForm = new FormValidator (validationConfig, popupEdit);
// validationEditForm.enableValidation();

// const cardsListSection = new Section({
//   items: (item) => {
//     const card = new Card({item: item,
//       const handleCardClick: () => {
//         const popupWithImage = new popupWithImage(popupFullImageMod);
//         popupWithImage.open({name: item.name, link: item.link});
//       }
//     },
//      '#card-template');
//      const cardTemplate  = card.generateCard();
//      cardsListSection.addItem(cardTemplate);
//   }
// })


//функция открытия попап
// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keyup', handleKeyUp);
// }
//функция закрытия попап
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keyup', handleKeyUp);
// }

//функции попапа редактирования профиля
// function openPopupEdit() {
//   openPopup(popupEdit)
//     nameInput.value = person.textContent;
//     jobInput.value = about.textContent;
// }

// //функция создания изменений в попапе редактирования
// function handleSubmitFormEdit(evt) {
//     evt.preventDefault(); 
//     person.textContent = nameInput.value;
//     about.textContent = jobInput.value;
//     closePopup(popupEdit);
//   }

//  //функции попапа добавления
// function openPopupCard() {
//   // openPopup(popupCard);
//   formCardAdd.reset();
//   validationAddFormCard.disableSubmitButton();
// }

// //закрытие поапов на escape
//  const  handleKeyUp = (evt) => {
//     if(evt.key === escapeButton){
//     const openedPopup = document.querySelector('.popup_opened');
//      closePopup(openedPopup);
//   }
// }


//создание экземпляра карточки 
// function openImagePopup (name, link){ 
//   // openPopup(popupImageView);
//   image.alt = name;
//   title.textContent = name;
//   image.src = link;
// }
// function createCard (cardData){
//   const card = new Card(cardData,'#card-template', openImagePopup);
//   // Создаём карточку и возвращаем наружу
//   const cardTemplate  = card.generateCard();
//   return cardTemplate;
// }
// function renderCard(cardData, container) {
//   container.prepend(createCard(cardData));
// }

// cardsList.forEach((cardData) => {
//   renderCard(cardData, cardsContainer);
// });  

// //создание новых карточек
// const handleSubmitAddCardForm = (event) => {
//   event.preventDefault();
//   renderCard({name: inputCardName.value, link: inputCardLink.value}, cardsContainer);
//   closePopup(popupCard);
// };


// //закрытие попапов на кнопку и оверлей
// popups.forEach((popup) => {
//   popup.addEventListener("click", function  (evt) {
//     if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
//       closePopup(popup);
//     }
//   });
// });
 
// //обработчик попапа редактирования профиля
// popupEditOpenButton.addEventListener('click', openPopupEdit);
// formEdit.addEventListener('submit',  handleSubmitFormEdit);

// //обработчик попапа добавления
// // popupAddOpenButton.addEventListener('click', openPopupCard);

// //обработчик создания новых карточек
// formCardAdd.addEventListener("submit",handleSubmitAddCardForm);
