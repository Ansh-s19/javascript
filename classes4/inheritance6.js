class user{
    constructor(name){
        this.name=name
    }
    logme(){
        console.log(`username is ${this.name}`);
        
    }
}
class teacher extends user{
    constructor(name,email,password){
        super(name)
        this.email=email
        this.password=password

    }
    addcourse(){
        return `new course was added by ${this.name}`
        
    }
}
const a=new teacher("ansh","ansh@gamil.com",123)
console.log(a.addcourse());
a.logme()

 const b=new user("anshuu","annsh@gamil.com",14523)
 b.logme()

 console.log(a===b); // false
console.log(b instanceof user); // true
console.log(a instanceof user); // true
console.log(a instanceof teacher); // true

 
