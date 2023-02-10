export class Card {
    constructor (data,templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate () {
       const cardTemplate = document.querySelector (this._templateSelector).content.querySelector('.card').cloneNode(true);

       return cardTemplate;
    }

    generateCard() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate ();
        this._delet = this._element.querySelector('.card__button-delet');
        this._button = this._element.querySelector('.card__button');
        this._image = this._element.querySelector('.card__image');
        this._setEventListeners();

        // Добавим данные
        this._image.src= this._link;
        this._image.alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;
        // Вернём элемент наружу
        return this._element;
      } 

      _handleLikeButton() {
        this._button.classList.toggle('card__button-like');
      }

      _handleDeleteButton(){
        this._element.remove();
        this._element = null;
      }

      _openImagePopup(){
        this._handleCardClick(this._name, this._link);
      }

      _setEventListeners() {
       
        this._button.addEventListener('click', () => {
            this._handleLikeButton();
        });

        this._delet.addEventListener('click', () => {
            this._handleDeleteButton();
        });
      
        this._image.addEventListener('click', () => {
          this._openImagePopup();
        });
}
}

export default Card;
