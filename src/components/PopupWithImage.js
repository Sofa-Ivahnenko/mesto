import { Popup } from "./Popup";

export default class PopupWithImage extends Popup{
    constructor(selector, {title, url}){
        super(selector)
        
        this._title = title;
        this._url = url;
        const popupImage = this._popup.querySelector('.popupView__image');
        const popupText = this._popup.querySelector('.popupView__subtitle');
    }
    open(){
        popupText.textContent = this._title;
        popupImage.src = this._url;
        popupImage.alt = this._title;
        // this._super.src = this._popupImage;
        // threadId._popup.textContent = this._popupText;

        super.open();
    }
}