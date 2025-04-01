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

    get email(){
        return this._email.toUpperCase()
    }
    set email(newemail){
        this._email=newemail
    }
    //They enable encapsulation, ensuring data integrity by providing methods to read and write property values instead of directly accessing them.


}
const a=new user("ansh@gmail.com","abc")
console.log(a.password);
console.log(a.email);
console.log(a._email);

//old way 
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);
