export default class UserInfo {
    constructor({nameSelector, descriptionSelector}){
        this._nameSelector = document.querySelector(nameSelector);
        this._descriptionSelector = document.querySelector(descriptionSelector);
    }
    getUserInfo(){
        return {nameSelector: this._nameSelector.textContent, descriptionSelector: this._descriptionSelector.textContent}
    }
    setUserInfo(nameSelector, descriptionSelector) {
        this._nameSelector.textContent = nameSelector;
        this._descriptionSelector.textContent = descriptionSelector;
    }
}