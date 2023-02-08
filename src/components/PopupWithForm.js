import { Popup } from "./Popup";

export default class PopupWithForm extends Popup{
    constructor(selectorPopup, {handleFormSubmit}){
        super(selectorPopup)
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._selectorPopup.querySelector('.popup__content');
        this._inputs = [... this._form.querySelectorAll('.popup__input')]
    }
    _getInputValues(){
        const values = {};
        this._inputs.forEach((input) => {
            values[input.name] = input.value
        })
        return values;
        // this._cardsList = this._selectorPopup.querySelectorAll('.popup__input');
        // this._formValues = {};

        // this._cardsList.forEach(input=>{
        //     this._formValues[input.name] = input.value;
        // });

        // return this._formValues;
    }

    // close(evt){
    //     super.close();
    //     evt.target.reset();
    //     this._selectorPopup.removeEventListner('submit', this._submitForm)
    //     super.close();
    // }
    // _submitForm(evt){
    //     evt.preventDefault();
    //     this._handleFormSubmit(this._getInputValues());
    //     this.close(evt);
    // }
    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();

            this._handleFormSubmit(this._getInputValues());
        })
        // this._selectorPopup.addEventListener('submit', this._submitForm);
    }
}