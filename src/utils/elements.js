const profile = document.querySelector('.profile');
const buttonOpenAddPopup = profile.querySelector('.profile__add-button');
const buttonOpenEditPopup = profile.querySelector('.profile__button-edit');

const formEditCard = document.forms.profile;
const formAddCard = document.forms.cardAdd;


const inputInfoName = formEditCard.elements.person;
const inputInfoJob = formEditCard.elements.about;

// const inputInfoName = document.querySelector('.popup__input_type_name"');
// const inputInfoJob = document.querySelector('.popup__input_type_composition');

export {buttonOpenAddPopup, buttonOpenEditPopup, formEditCard, formAddCard, inputInfoName, inputInfoJob};