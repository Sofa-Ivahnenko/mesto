import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup{
    constructor({selectorPopup,handleFormSubmit}){
        super(selectorPopup)
        this._handleFormSubmit = handleFormSubmit;
        this._form =  this._popupElement.querySelector('.popup__content');
        this._inputs = [... this._form.querySelectorAll('.popup__input')];
        this._submitBtn = this._form.querySelector('.popup__save-button');
    }

    // получаем данные из формы
    _getInputValues(){
        const values = {};
        this._inputs.forEach((input) => {
            values[input.name] = input.value
        })
        return values;
    }

    // закрытие попапа + сброс инпутов
    close(){
        super.close();
        this._form.reset();
    }

    // устанавливаем слушатели формы
    setEventListeners(){
  
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this._form.reset();
    
        })
        super.setEventListeners();
    }

    // измение состояние кнопки во время загрузки
    loading(isLoading) {
        if (isLoading) {
          this._submitBtn.textContent = 'Сохранение...'
        } else {
          this._submitBtn.textContent = 'Сохранить';
        }
      }
}