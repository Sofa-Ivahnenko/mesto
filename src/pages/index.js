import Card from '../components/Card.js';
import { cardsList} from '../utils/constants.js';
import { validationConfig} from '../utils/constants.js'
import { buttonOpenAddPopup,buttonOpenEditPopup,formEditCard,formAddCard, inputInfoName, inputInfoJob} from '../utils/elements.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import './index.css';

const classEditPopup = new PopupWithForm('.popupEdit',handleSubmitEditForm);

const classAddPopup = new PopupWithForm('.popupCard', handleSubmitAddNewCard);
classAddPopup.setEventListeners();

const imagePopupOpen = new PopupWithImage ('.popupView');
imagePopupOpen.setEventListeners();

function openImagePopup(name, link) { 
  imagePopupOpen.open(name, link);
};

const userInfo = new UserInfo ({
	name: '.profile__title',
	description: '.profile__subtitle'
});

function openProfileInfo() {
  classEditPopup.setEventListeners();
 
  const infoObject = userInfo.getUserInfo();
  inputInfoName.value = infoObject.name;
  inputInfoJob.value = infoObject.description;

  formEditPopupValid.toggleButtonState()
  classEditPopup.open();
}

function handleSubmitEditForm(value) {

  userInfo.setUserInfo(value)
  classEditPopup.close();
}

function handleSubmitAddNewCard (item) {
  renderCard(item);
  formAddPopupValid.resetValidation()
  classAddPopup.close();
}

function renderCard(item) {
	const card = new Card(item, "#card-template", openImagePopup);
  	const cardElement = card.generateCard();
	sectionCard.addItem(cardElement);
}
const sectionCard = new Section({ items: cardsList, renderer: renderCard }, '.cards');
sectionCard.renderItems();


buttonOpenEditPopup.addEventListener('click', () => openProfileInfo());
buttonOpenAddPopup.addEventListener('click', () => classAddPopup.open());


const formEditPopupValid = new FormValidator(validationConfig, formEditCard);
formEditPopupValid.enableValidation();

const formAddPopupValid = new FormValidator(validationConfig, formAddCard);
formAddPopupValid.enableValidation();