//попап редактирования профиля
const popupEdit = document.querySelector('.popupEdit');
const openButton = document.querySelector('.profile__button-edit');
const closeButton = popupEdit.querySelector('.popupEdit__close-button');
const saveButton = popupEdit.querySelector('.popup__save-button');

const formEdit = document.querySelector('.popup__content');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_composition');
const person = document.querySelector('.profile__title');
const about = document.querySelector('.profile__subtitle');

//попап добавления  
const popupCard = document.querySelector('.popupCard');
const popupOpenButton = document.querySelector('.profile__add-button');
const popupCloseButton = popupCard.querySelector('.popupCard__close-button');
const popupSaveButton = popupCard.querySelector('.popupCard__save-button');

const formAdd = document.querySelector('.popupCard__content');
const cardInput = popupCard.querySelector('.popup__input_type_card-name');
const linkInput = popupCard.querySelector('.popup__input_type_link');

//попап карточек
const cardContainer = document.querySelector('.cards');
const forma = document.querySelector ('.popupCard__content');
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
    popupOpen(popupImageView)
  };





//функция открытия попап
function popupOpen(popup) {
  popup.classList.add('popup_opened');
}

//функция закрытия попап
function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

//функции попапа редактирования профиля
function popupEditOpen() {
  popupOpen(popupEdit)
    nameInput.value = person.textContent;
    jobInput.value = about.textContent;
}

function popupEditClose () {
  popupClose(popupEdit)
}

function handleSubmitFormEdit(evt) {
    evt.preventDefault(); 
    person.textContent = nameInput.value;
    about.textContent = jobInput.value;
    popupEditClose();
  }

 //функции попапа добавления
function popupOpenCard() {
  popupOpen(popupCard)
}

function popupCloseCard() {
popupClose(popupCard) 
}

function handleSubmitFormAdd(evt) {
  evt.preventDefault(); 
  popupCloseCard();
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
  popupOpen(popupImageView);
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
  document.getElementById('cardform').reset();
};
 
const renderCard = (cardElemets) => {
cardContainer.prepend(generateCard(cardElemets));
}

forma.addEventListener("submit",handleSubmitAddCardFom);

cardsList.forEach((cardElemets)=>{
renderCard(cardElemets);
});



//обработчик попапа редактирования профиля
openButton.addEventListener('click', popupEditOpen);
closeButton.addEventListener('click', popupEditClose);
formEdit.addEventListener('submit',  handleSubmitFormEdit);

//обработчик попапа добавления
popupOpenButton.addEventListener('click', popupOpenCard);
popupCloseButton.addEventListener('click', popupCloseCard);
formAdd.addEventListener('submit',  handleSubmitFormAdd);

 
