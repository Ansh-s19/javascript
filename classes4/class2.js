// #oop
// object : collection of properties and methods

//constructor function
// prototype
// classes
// instances { new ,this } 

// 4 pillars:
//  abstraction
//  encapsulation
//  inheritance
//  polymorphism
  
const user={
    name:"ansh",
    age:20,
    id:1,
    signedIn:true,
    getUserDetails:function(){
        console.log("got user deatils from database");
        console.log(`name: ${this.name}`);
        console.log(this);
        
        
        
    }
}
console.log(user.name);
console.log(user.getUserDetails());
console.log(this);

// const promise1=new Promise()
// const date=new Date() // new :constructor function to create multiple instances

function User(username,logincount,isloogedin){
    this.username=username;
    this.logincount=logincount;
    this.isloogedin=isloogedin
    this.greetings=function(){
        console.log(`welcome ${this.name}`);
        
    }
    return this
}
const userone=new User("anshu",12,true)
const usertwo=new User("sharma",18,false)
console.log(userone.constructor);
console.log(usertwo);

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car("Honda", "Accord", 1998);
  
  console.log(auto instanceof Car);

  console.log(auto instanceof Object);

