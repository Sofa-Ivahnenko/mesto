export default class UserInfo {
    constructor({user, job, avatar}){
        this._user = document.querySelector(user);
        this._job = document.querySelector(job);
        this._avatar = document.querySelector(avatar);
    }
    // возвращает объект с данными пользователя
    getUserInfo(){
        return {
            user: this._user.textContent,
            job: this._job.textContent,
            avatar: this._avatar.src
          }
    }
    // принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(data) {
        this._user.textContent = data.name;
        this._job.textContent = data.about;
        this._avatar.src = data.avatar;
    }
}