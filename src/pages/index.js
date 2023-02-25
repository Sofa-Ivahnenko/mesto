import './index.css';

import {profileEditBtn, formEditCard, inputInfoName, inputInfoJob, formAddCard,
  popupAddNewCardOpenBtn, buttonEditAvatar, formEditAvatar,validationConfig} from '../utils/elements.js';

import Card from '../components/Card.js';
import FormValidator  from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';

/* ---------- API ----------- */
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers:{
    authorization: '07d0cc49-29ca-4bb6-aef2-dd481f22cbcb',
    'Content-Type': 'application/json'
  }
});

let userId;

// Загрузка готовых карточек и данных о пользователе с сервера
Promise.all([api.getCardsList(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    sectionCard.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });


/* ---------- Функционал для работы с профилем пользователя ----------- */  
// создание экземпляра класса, отвечающего за отображение информации о пользователе  
const userInfo = new UserInfo ({
    user: '.profile__title',
    job: '.profile__subtitle',
    avatar: '.profile__avatar'
  });

//создание попапа с формой редактирования профиля
const editProfilePopup = new PopupWithForm({
  selectorPopup: '.popupEdit',
  handleFormSubmit: (dataForm) => {
    editProfilePopup.loading(true);
    api.editUserInfo(dataForm)
      .then((dataForm) => {
        userInfo.setUserInfo(dataForm);
        editProfilePopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editProfilePopup.loading(false);
      });
  }
});

// слушатель попапа с формой редактирования профиля
editProfilePopup.setEventListeners();

// передаваемые данные для попапа редактирования профиля
function infoObject({ user, job }) {
  inputInfoName.value = user;
  inputInfoJob.value = job;
}

// создание попапа редактирования аватара пользователя
const editAvatarPopup = new PopupWithForm({
  selectorPopup: '.popupAvatar',
  handleFormSubmit: (data) => {
    editAvatarPopup.loading(true);
    api.editAvatar(data)
      .then((data) => { 
        userInfo.setUserAvatar({newIconAvatar: data.avatar});    
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatarPopup.loading(false);
      });
  }
});

// слушатель попапа аватара пользователя
editAvatarPopup.setEventListeners();

// обработчик кнопки редактирования аватара пользователя
buttonEditAvatar.addEventListener('click', () => {
  formAvatarPopupValid.resetValidation();    
  editAvatarPopup.open();
});

// обработчик кнопки редактирования попапа редактирования профиля
profileEditBtn.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  infoObject({
    user: info.user,
    job: info.job
  });
  editProfilePopup.open();
});


/* ---------- Функционал для работы с карточками ----------- */
// функционал создания новой карточки
const renderCard = (data) => {
  const card = new Card({
    data: data,
    templateSelector:'#card-template',
    userId: userId,
    handleCardClick: (name, link) => {
      imagePopupOpen.open(name, link);
    },
    handleDeleteIconClick: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCardPopup.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
};

// создание экземпляра класса Section
const sectionCard = new Section({
   renderer:(card) =>{
    sectionCard.addItem(renderCard(card));  
   },
}, '.cards');

// создание попапа подтверждения удаления карточки
const deleteCardPopup = new PopupWithConfirmation({
  selectorPopup: '.popupDelet'
});

// слушатель попапа подтверждения удаления карточки
deleteCardPopup.setEventListeners();

// создание попапа с формой добавления новой карточки
const addCardsPopup = new PopupWithForm({
  selectorPopup: '.popupCard',
  handleFormSubmit: (formData) => {
    addCardsPopup.loading(true);
    api.creatCard(formData)
      .then((formData) => {
        sectionCard.addItem(renderCard(formData));
        addCardsPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        addCardsPopup.loading(false);
      });
  }
});

// слушатель попапа добавления карточек
addCardsPopup.setEventListeners();

// обработчик открытия попапа добавления карточек
popupAddNewCardOpenBtn.addEventListener('click', () => {
  formAddPopupValid.toggleButtonState();
  addCardsPopup.open();
})

// экзмепляр класса попапа просмотра изображения
const imagePopupOpen = new PopupWithImage ('.popupView');
imagePopupOpen.setEventListeners();


/* Валидация форм */
// валидация формы редактирования профиля
const formEditPopupValid = new FormValidator(validationConfig, formEditCard);
formEditPopupValid.enableValidation();
// валидация формы добавления новой карточки
const formAddPopupValid = new FormValidator(validationConfig, formAddCard);
formAddPopupValid.enableValidation();
// валидация формы редактирования аватара пользователя
const formAvatarPopupValid = new FormValidator(validationConfig, formEditAvatar);
formAvatarPopupValid.enableValidation();