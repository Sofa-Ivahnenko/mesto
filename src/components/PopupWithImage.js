import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup{
    constructor(selectorPopup) {
        super(selectorPopup)
        
        this._image = this._popup.querySelector('.popupView__image');
        this._subtitle = this._popup.querySelector('.popupView__subtitle');
    }
    open(name,link){
       this._subtitle.textContent = name;
       this._image.src = link;
       this._image.alt = name;
  
        super.open();
    }
}