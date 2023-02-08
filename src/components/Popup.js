export default class Popup {
    constructor(selectorPopup){
        this._selectorPopup = selectorPopup;
        this._button = selectorPopup.querySelector('.popup__close-button');
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open(){
        // this.setEventListeners();
        this._selectorPopup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }
    close(){
        this._selectorPopup.classList.remove('popup_opened'); 
        document.removeEventListener('keyup', this._handleEscClose);
    }
    _handleEscClose = (evt) => {
        if(evt.key === 'Escape'){
            this.close();
      }
    }
    setEventListeners(){
        this._button.addEventListener('click', ()=> this.close());
    }
}


 