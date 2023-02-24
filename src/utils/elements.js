// находим попап редактирования профиля
const popupEditProfile = document.querySelector('.popupEdit');
// находим кнопку для открытия попапа редактирования профиля
const profileEditBtn = document.querySelector('.profile__button-edit');
// находим форму попапа редактирования профиля
const formEditCard = popupEditProfile.querySelector('.popup__content');
// находим инпуты формы попапа редактирования профиля
const inputInfoName = formEditCard.querySelector('#person');
const inputInfoJob = formEditCard.querySelector('#about');
// Находим попап добавления карточки
const popupAddNewCard = document.querySelector('.popupCard');
// находим кнопку для открытия попапа добавления новой карточки
const popupAddNewCardOpenBtn = document.querySelector('.profile__add-button');
// находим форму попапа добавления новой карточки
const formAddCard = popupAddNewCard.querySelector('.popupCard__content');
// попап редактирования аватара пользователя
const popupEditAvatar = document.querySelector('.popupAvatar');
// Форма редактирования аватара пользователя
const formEditAvatar = popupEditAvatar.querySelector('.popupAvatar__content');
// кнопка редактирования аватара пользователя
const buttonEditAvatar = document.querySelector('.profile__avatar-btn');
// аватар пользователя
const avatar = document.querySelector('.profile__avatar');

const validationConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_visible'
}

export {popupEditProfile, profileEditBtn, formEditCard, inputInfoName, inputInfoJob, formAddCard,
    popupAddNewCardOpenBtn, popupAddNewCard, buttonEditAvatar, formEditAvatar, validationConfig,
  avatar};