import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor({selectorPopup}) {
    super(selectorPopup);
    this._formElement = this._popupElement.querySelector('.popup__content');
  }

   // принимает коллбэк на удаление карточки
  submitCallback(removing) {
    this._handleSubmit = removing;
  }

  // удаление карточки по нажатию на submit
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', event => {
      event.preventDefault();
      this._handleSubmit();
    });
  }
}