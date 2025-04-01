const promise1=new Promise((resolve,reject)=>{
    // do an async task
    //db calls,cryptography tasks,network call
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})
promise1.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async task 2");
    resolve() 
},1000)
})
.then(function(){
    console.log("done");
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"ansh",email:"anshit985sharma@gmail.com",age:20})
    },1000)
})
promise3.then(function(user){
console.log(user);
})
const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if (!error) {
            resolve({username:"ansh",pass:123})  
        }
        else{
            reject('error:something went wrong')
        }
    },1000)
    
})
promise4.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);//chaining 
}) 
.catch((error)=>{
console.log(error);

}).finally(()=>{
console.log("finally executed");
})  //this part always run

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve({username:"kala",pass:"teli"})  
        }
        else{
            reject('error:kala kala kala')
        }
    },1000)
})
async function op() {
   try {
    const respone= await promise5
   console.log(respone);
   
   } catch (error) {
    console.log(error);
    
   }
}
op()

// async function getAllUsers() {
//   try {
//     const respone=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await respone.json()
//     console.log(data);
//   } catch (error) {
//     console.log("error:",error); 
//   }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
return response.json()
})
.then((data)=>{
console.log(data);

})
.catch((error)=>{
console.log(error);
})