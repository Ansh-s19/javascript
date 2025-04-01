function multiply(num){
    return num*num
}
multiply.power=3
console.log(multiply(5));
console.log(multiply.power);

console.log(multiply.prototype);
 //in js everything is object for ex: function  is function also as well as object also as we can acess like object
 function User(name,score){
    this.name=name
    this.score=score
 }
User.prototype.increment=function(){
    this.score++
}
User.prototype.printme=function(){
    console.log(`score is ${this.score}`);
    
}
 const a=new User("ansh",200)
 const b=User("anshit",300)

 a.printme() 
//  a.increment()
 
 let name="ansh  "
 console.log(name.length);
 console.log(name.trim().length);
//  console.log(name.truelength);
 
 
 let heroes=["thor","loci"]

 let obj={
    thor:"hammer",
    hulk:"punch",
    getHulkPower:function(){
        console.log(`power is ${this.hulk}`);
        
    }
 }
Object.prototype.ansh=function(){
    console.log("the life is done");
    
}
Array.prototype.anshu=function(){
    console.log("cooked up!!!");
    
}


obj.ansh()
// obj.anshu()//does not have acces for this as it is an array function and object can't acess it..object function is valid for all as in js everyting is treated as an object
heroes.anshu()
heroes.ansh()//valid as object is top hierchary 


//inheritance
const user={
    name:"ansh",
    age:20
}
const teacher={
    video:true
}
const support={
    isavailable:false
}
const TAsupport={
    makeAssignment:"js",
    fulltime:true ,
    __proto__:support
}
teacher.__proto__=user


//modern syntax
Object.setPrototypeOf(support,teacher)

let username="ansh   "
String.prototype.truelength=function(){
    console.log(this);
    console.log(`truelength is ${this.trim().length}`);
}
username.truelength()

"ansh  ".truelength()
"ansh".truelength()
// in node enviroment this gives {} empty and in window this give window