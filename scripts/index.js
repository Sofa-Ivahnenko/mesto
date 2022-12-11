const popup = document.querySelector('.popup');
const OpenButton = document.querySelector('.profile__button-edit');
const CloseButton = popup.querySelector('.popup__close-button');
const SaveButton = popup.querySelector('.popup__save-button');

let formElement = document.querySelector('.popup__content');
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

OpenButton.addEventListener('click', popupOpen);
CloseButton.addEventListener('click', popupClose);

formElement.addEventListener('submit', popupSave);


const popupCard = document.querySelector('.popupCard');
const popupOpenButton = document.querySelector('.profile__add-button');
const popupCloseButton = popupCard.querySelector('.popup__close-button');
const popupSaveButton = popupCard.querySelector('.popupCard__save-button');

let form = document.querySelector('.popupCard__content');
let cardInput = popupCard.querySelector('.popup__input_type_card-name');
let linkInput = popupCard.querySelector('.popup__input_type_link');

function popupOpenCard() {
    popupCard.classList.add('popupCard_opened');
}

function popupCloseCard() {
  popupCard.classList.remove('popupCard_opened');
}

function popupSaveCard(evt) {
    evt.preventDefault(); 
    popupCloseCard();
  }

popupOpenButton.addEventListener('click', popupOpenCard);
popupCloseButton.addEventListener('click', popupCloseCard);
form.addEventListener('submit', popupSaveCard);

const popupImageView = document.querySelector ('.popupView');
const ImageBtn = popupImageView.querySelector('.popupView__close-button');

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

const cardContainer = document.querySelector('.cards');
const forma = document.querySelector ('.popupCard__content');
const inputCardName = document.querySelector ('.popup__input_type_card-name');
const inputCardLink = document.querySelector ('.popup__input_type_link');

const cardTemplate = document.querySelector ('#card-template').content.querySelector('.card');

const handleDeleteCard = (event) => {
event.target.closest('.card').remove();
};

const handleLikeCard = (event) => {
  event.target.classList.toggle('card__button-like');
};


const generateCard = (cardElemets) => {
const newCard = cardTemplate.cloneNode(true);

const title = newCard.querySelector('.card__title');
title.textContent = cardElemets.name;
 
const image = newCard.querySelector('.card__image');
image.src = cardElemets.link;
image.alt = cardElemets.name;

image.addEventListener('click', function(){
  popupImageView.classList.add('popupView_opened');
  popupImageView.querySelector('.popupView__image').src = cardElemets.link;
  popupImageView.querySelector('.popupView__subtitle').textContent = cardElemets.name;
});

function popupImageBtn () {
  popupImageView.classList.remove('popupView_opened');
}
ImageBtn.addEventListener('click', popupImageBtn);


const deletBtn = newCard.querySelector('.card__button-delet');
deletBtn.addEventListener('click', handleDeleteCard);

const likeBtn = newCard.querySelector('.card__button');
likeBtn.addEventListener('click', handleLikeCard);

return newCard;
};

const handleSubmitAddCardFom = (event) => {
  event.preventDefault();
  renderCard({name: inputCardName.value, link: inputCardLink.value});
  inputCardName.value = ' ';
  inputCardLink.value = ' ';
};
 
const renderCard = (cardElemets) => {
cardContainer.prepend(generateCard(cardElemets));
}

forma.addEventListener("submit",handleSubmitAddCardFom);

cardsList.forEach((cardElemets)=>{
renderCard(cardElemets);
});

 
