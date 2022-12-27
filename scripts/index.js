//попап редактирования профиля
const popups = document.querySelectorAll('.popup');

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

//действия с карочками
const handleDeleteCard = (event) => {
  event.target.closest('.card').remove();
  };
  
  const handleLikeCard = (event) => {
    event.target.classList.toggle('card__button-like');
  };
  
  const handleViewCard = (event) => {
    openPopup(popupImageView)
    closePopup(popupImageView)
  };

const  handleKeyUp = (evt) => {
  const key = event.key;
  if(evt.key === 'Escape'){
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

popups.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});


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

function closePopupEdit () {
  closePopup(popupEdit)
}

function handleSubmitFormEdit(evt) {
    evt.preventDefault(); 
    person.textContent = nameInput.value;
    about.textContent = jobInput.value;
    closePopupEdit();
  }

 //функции попапа добавления
function openPopupCard() {
  formaCardAdd.reset();
  openPopup(popupCard)
}

function closePopupCard() {
  closePopup(popupCard) 
}

function handleSubmitFormAdd(evt) {
  evt.preventDefault(); 
  closePopupCard();
}



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

const viewBtn = popupImageView.querySelector('.popupView__close-button');
viewBtn.addEventListener('click', handleViewCard);


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
popupEditCloseButton.addEventListener('click', closePopupEdit);
formEdit.addEventListener('submit',  handleSubmitFormEdit);

//обработчик попапа добавления
popupAddOpenButton.addEventListener('click', openPopupCard);
popupAddCloseButton.addEventListener('click', closePopupCard);  
formAdd.addEventListener('submit',  handleSubmitFormAdd);


const validationConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_visible'
  };
  
  const forms = document.querySelector ('.popup__content');
  const personInput = document.querySelector ('#person');
  const aboutInput = document.querySelector ('#about');
  const titleInput = document.querySelector ('#name');
  const urlInput = document.querySelector ('#link');
  

  function handleSubmit (evt) {
  evt.preventDefault();
  console.log({
    inputPerson: personInput.value,
    inputAbout: aboutInput.value,
    inputName: titleInput.value,
    inputLink: urlInput.value
  })
  }
  forms.addEventListener('submit', handleSubmit);
  
  enableValidation(validationConfig);
 
  
