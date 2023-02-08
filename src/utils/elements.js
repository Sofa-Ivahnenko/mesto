const profile = document.querySelector('.profile');
const buttonOpenAddPopup =profile.querySelector('.profile__add-button');
const buttonOpenEditPopup = profile.querySelector('.profile__button-edit');
const formEditCard = document.forms.formEdit;
const formAddCard = document.forms.formAdd;
const inputInfoName = formEditCard.elements.inputName;
const inputInfoJob = formEditCard.elements.inputJob;

export { profile, buttonOpenAddPopup, buttonOpenEditPopup, formEditCard, formAddCard, inputInfoName, inputInfoJob };