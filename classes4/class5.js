//ES6 

class user {
    constructor(username,email,password) {
        this.username=username
        this.email=email
        this.password=password

    }
    encryptPassword(){
        return `${this.password}abc`
    }
    user(){
        return this.username.toUpperCase()
    }
}
const a=new user("ansh","ansh985sharma@gmail.com",123)
console.log(a.user());
console.log(a.encryptPassword());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());