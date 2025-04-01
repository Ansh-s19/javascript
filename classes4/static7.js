class user{
    constructor(name, age){
        this.name =name;
        this.age=age;     
}
logme(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
  static createId(){
    return Math.floor(Math.random()*10);
 }
}
const a=new user("John", 25);
a.logme();
console.log(user.createId()); //with static we can use the method within class and not with instance of the class and any inherited class
// console.log(a.name);
// console.log(a.createId());

class user1 extends user{
    constructor(name,email,age){
        super(name, age);
        this.email=email;
    }
   
}
const b=new user1("ansh","ansh@gmail.com",29)
console.log(b);
b.logme()

