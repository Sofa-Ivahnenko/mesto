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

const cardTemplate = document.querySelector ('#card-template').content.querySelector('.card');

//попап открытия фото
const popupImageView = document.querySelector ('.popupView');

//кнопка escape
const escapeButton = 'Escape';

// константы для валидации форм
const forms = document.querySelector ('.popup__content');
const personInput = document.querySelector ('#person');
const aboutInput = document.querySelector ('#about');
const titleInput = document.querySelector ('#name');
const urlInput = document.querySelector ('#link');

//Массиы карточек
const cardsList = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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

function handleSubmitFormAdd(evt) {
  evt.preventDefault(); 
  closePopup(popupCard);
}



//удаление карточки
const handleDeleteCard = (event) => {
  event.target.closest('.card').remove();
  };
// лайк на карточку
const handleLikeCard = (event) => {
  event.target.classList.toggle('card__button-like');
  };
//откртыие изображения карточки на экра
const handleViewCard = (event) => {
    openPopup(popupImageView)
    };


//закрытие поапов на escape
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


//валидация
function handleSubmitForms (evt) {
evt.preventDefault();
}
forms.addEventListener('submit', handleSubmitForms);

enableValidation(validationConfig);


//генерация карточек
const generateCard = (cardElemets) => {
const newCard = cardTemplate.cloneNode(true);

const title = newCard.querySelector('.card__title');
title.textContent = cardElemets.name;
 
const image = newCard.querySelector('.card__image');
image.src = cardElemets.link;
image.alt = cardElemets.name;

//откртие картинки для просмотра
image.addEventListener('click', function(){
  openPopup(popupImageView);
  popupImageView.querySelector('.popupView__image').src = cardElemets.link;
  popupImageView.querySelector('.popupView__image').alt = cardElemets.name;
  popupImageView.querySelector('.popupView__subtitle').textContent = cardElemets.name;
});

const deletBtn = newCard.querySelector('.card__button-delet');
deletBtn.addEventListener('click', handleDeleteCard);

const likeBtn = newCard.querySelector('.card__button');
likeBtn.addEventListener('click', handleLikeCard);

return newCard;
};

//создание новых карточек
const handleSubmitAddCardFom = (event) => {
  event.preventDefault();
  renderCard({name: inputCardName.value, link: inputCardLink.value});
};
 
const renderCard = (cardElemets) => {
cardContainer.prepend(generateCard(cardElemets));
}

formaCardAdd.addEventListener("submit",handleSubmitAddCardFom);

cardsList.forEach((cardElemets)=>{
renderCard(cardElemets);
});



//обработчик попапа редактирования профиля
popupEditOpenButton.addEventListener('click', openPopupEdit);
formEdit.addEventListener('submit',  handleSubmitFormEdit);

//обработчик попапа добавления
popupAddOpenButton.addEventListener('click', openPopupCard);
formAdd.addEventListener('submit',  handleSubmitFormAdd);
