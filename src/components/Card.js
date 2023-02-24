export class Card {
  constructor ({data,templateSelector, handleCardClick, userId, handleDeleteIconClick, handleSetLike, handleRemoveLike}) {
      this._name = data.name;
      this._link = data.link;
      this._likes = data.likes;
      this._cardId = data._id;

      this._UserId = userId,
      this._isUserCard = userId === data.owner._id;

      this._templateSelector = templateSelector;

      this._handleCardClick = handleCardClick;
      this._handleSetLike = handleSetLike;
      this._handleRemoveLike = handleRemoveLike;
      this._handleDeleteIconClick = handleDeleteIconClick;
  }

  // шаблон карточки
  _getTemplate () {
     const cardTemplate = document.querySelector (this._templateSelector).content.querySelector('.card').cloneNode(true);

     return cardTemplate;
  }

  // генерация карточки
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
      this._image.alt = `${this._name}. Фотография`;
      this._element.querySelector('.card__title').textContent = this._name;

      this._likesCounter = this._element.querySelector('.card__likes-counter');
      this._likesCounter.textContent = this._likes.length;
      this._hasDeleteBtn();
      this._isCardLiked();

      // Вернём элемент наружу
      return this._element;
    } 
    
    // удаление карточки
    deleteCard() {
      this._element.remove();
      this._element = null;
    }

    // слушатели на карточку
     _setEventListeners() {
      this._button.addEventListener('click', () => {
        if (this._button.classList.contains('card__button-like')) {
          this._handleRemoveLike(this._cardId);
        } else {
          this._handleSetLike(this._cardId);
        }
      })

      this._delet.addEventListener('click', () => {
        this._handleDeleteIconClick(this._cardId);
      });
    
      this._image.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });

      // if (!this._isUserCard) {
      //   this._delet.remove();
      //   this._delet = null;
      // } else {
      //   this._element.querySelector('.card__button-delet').addEventListener('click', (event) => {
      //     this._handleRemoveButton(event);
      //   });
      // }
    }

      // проверка, стоит ли лайк на карточке
    _isCardLiked() {
      if (this._likes.some((user) => {
        return this._userId === user._id;
      })) {
        this._button.classList.add('card__button-like');
      }
    }
  
    // поставить/удалить лайк, изменение количества лайков
    handleLikeCard(data) {
      this._likes = data.likes;
      this._likesCounter .textContent = this._likes.length;
      this._button.classList.toggle('card__button-like');
    }
  
    // проверяем владельца карточки и убираем кнопку Delete
    _hasDeleteBtn() {
      if (this._userId !== this._cardOwnerId) {
        this._delet.remove();
      }
    }
}

export default Card;
