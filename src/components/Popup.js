export default class Popup {
    constructor(selectorPopup){
        this._popupElement = document.querySelector(selectorPopup);
    }
    open(){
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }
    close(){
        this._popupElement.classList.remove('popup_opened'); 
        document.removeEventListener('keyup', this._handleEscClose);
    }
    _handleEscClose = (evt) => {
        if(evt.key === 'Escape'){
            this.close();
      }
    }

    setEventListeners(){
        this._popupElement.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
              this.close();
            }
          });
    }
}
 