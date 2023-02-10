export default class UserInfo {
    constructor({name, description}){
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }
    getUserInfo(){
        return {name: this._name.textContent, description: this._description.textContent};
    }
    setUserInfo({person, about}) {
        this._name.textContent = person;
        this._description.textContent = about;
    }
}