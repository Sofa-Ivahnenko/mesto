class Card {
    constructor (data,templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate () {
       const cardTemplate = document
       .querySelector (this._templateSelector)
       .content
       .querySelector('.card')
       .cloneNode(true);

       return cardTemplate;
    }


    generateCard() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate ();
        this._setEventListeners();

        


        // Добавим данные


        this._element.querySelector('.card__image').src= this._link;
        this._element.querySelector('.card__image').alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;
      
        // Вернём элемент наружу
        return this._element;
      } 

     

      _handleLikeButton() {
        this._element.querySelector('.card__button').classList.toggle('card__button-like');
      }

      _handleDeleteButton(){
        this._element.remove();
        this._element = null;
      }

      _setEventListeners() {
       
        this._element.querySelector('.card__button').addEventListener('click', () => {
            this._handleLikeButton();
        });

        this._element.querySelector('.card__button-delet').addEventListener('click', () => {
            this._handleDeleteButton();
        });
      
        this._element.querySelector('.card__image').addEventListener('click', () => {
          this._handleCardClick(this._name, this._link);
        });
  
}
}

export default Card;
