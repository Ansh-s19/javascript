class user{
    constructor(email, password){
        this.email = email;
        this.password = password;

    }
    get password(){
        return this._password.toUpperCase();
    }

    set password(newPassword){
        this._password = newPassword;
    }


}
const a=new user("ansh@gmail.com","12345678")
console.log(a.password);