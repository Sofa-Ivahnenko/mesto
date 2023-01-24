export class  FormValidator {
  constructor (validationConfig, formElement) {
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }
  _showInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.add(this._errorClass);
    errorElement.textContent= inputElement.validationMessage;
    inputElement.classList.add (this._inputErrorClass);

  }

  _hiddeInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent='';
    inputElement.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity (inputElement){
    if(inputElement.validity.valid){
     this._hiddeInputError(inputElement)
    }
    else{
     this._showInputError(inputElement)
    }
 }

  _hasInvalidInput (){
    return this._inputList.some((inputElement)=> !inputElement.validity.valid);
  }

  toggleButtonState(){
    if (this._hasInvalidInput()){
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    }
    else{
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.disabled = false; 
    }
  }

  _setEventListeners (){
    this.toggleButtonState(this._inputList,this._buttonElement);

    this._inputList.forEach((inputElement)=> {
      inputElement.addEventListener('input', ()=>{
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      })
    })
    }

    disableSubmitButton(){
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    }

    enableValidation(){
      this._setEventListeners();
    }
}
