// const tinder=new Object()//singleton
const a= Object()
a.name="ansh";
console.log(a);

const tinder={


} //non singleton


tinder.id="123abc"
tinder.name="ansh"
tinder.isloggedin=false

console.log(tinder);

const user={
    fullname:{
        username:{
            firstname:"ansh",
            lastname:"sharma"
        }
    },
email:"ansh@example.com"
}
console.log(user);

console.log(user.fullname.username.firstname);

const obj={
    1:123, 2:"ansh", 3:20}
const obj2={
    4:723, 5:"anshit", 6:18}
const obj4={
    7:7, 8:"a",9:1}

//  const obj3=Object.assign( {},obj,obj2,obj4) 
 const obj3={...obj,...obj2,...obj4} // we use this more
 console.log(obj3); // {} => target and obj1,obj2 and so on are source

 const users=[
    {
        id:1,
        email: "anshsdfs985sharma@example.com"
    },
    {
        id:12,
        email: "ansdsfh985sharma@example.com"
    },
    {
        id:3,
        email: "anshvvvv985sharma@example.com"
    },
    {
        id:4,
        email: "assnsh985sharma@example.com"
    },
 ]
 console.log(users[1].email);
 console.log(users);

 console.log(Object.keys(tinder));
 console.log(Object.values(tinder));
 console.log(Object.entries(tinder)); //less used mainly keys and values are used

 console.log(tinder.hasOwnProperty('isloggedin')); //to check if it exists or not
 
 const aer=new Object({name:"ansh",age:20})
 console.log(aer);
 
 
 


