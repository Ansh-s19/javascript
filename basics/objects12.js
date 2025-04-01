//objects can be declared in 2 ways first is literal and other is constructor


//singleton if object is made from constructor it is singleton 

Object.create //constructor method
let object1 =
 { greeting: "Hello" }; // Define a prototype object
let a = Object.create(object1); // Create an object with 'object1' as its prototype
a.name = "ansh"; // Add a new property 'name'

console.log(a); // Output: { name: 'ansh' }
console.log(a.greeting); // Output: "Hello" (inherited from 'proto')


const Sym=Symbol("key1")

const user={
name:"ansh",
"fullName":"Ansh Sharma",
age:20,
[Sym]:"$", //use to declare symbol in object
loc:"ludhiana",
email:"ansh89sharma@gmail.com",
isLoggedIn:false,
lastLoginDays:["monday","saturday"]
}

console.log(user.email);
console.log(user["email"]); //use this if u have key in string form as . doesnot support string
console.log(user["fullName"]);
console.log(user[Sym]);

user.email="ansh69@example.com" //to make a change
// Object.freeze(user) //to freeze something so that we cant change
user.name="ravi"
console.log(user);

user.greeting=function(){
    console.log("hello ji kida soneyoo ki haal chal");
}

user.greeting2=function(){
    console.log(`hello ji kida soneyoo ki haal chal,${this.name}`);  // ` => backticks
    
}

console.log(user.greeting());
console.log(user.greeting2());





a=  Array(1,2,3)
console.log(a);
