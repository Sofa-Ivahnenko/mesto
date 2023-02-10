import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup{
    constructor(selectorPopup,handleFormSubmit){
        super(selectorPopup)
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector('.popup__content');
        this._inputs = [... this._form.querySelectorAll('.popup__input')]
    }
    _getInputValues(){
        const values = {};
        this._inputs.forEach((input) => {
            values[input.name] = input.value
        })
        return values;
    }
    close(){
        super.close();
        this._form.reset();
    }
    setEventListeners(){
  
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
    
        })
        super.setEventListeners();
    }
}