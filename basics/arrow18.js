const user={
    name:"ansh",
    age:20,
    welcomeMessage:function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
        
    }


}
a="ansh"
console.log(`welcome ${a}`);

user.welcomeMessage()
user.name="kala"
user.welcomeMessage()

console.log(this);

const ansh=function () {
   let name="ansh"
    console.log(this.name); //undefined as we cant use this in functions but  can use with dom in future
}
ansh()

const chai = () => {  //arrow function
    let username="amit"
    console.log(this.username); //cant use this in arrow function
}
chai()

// const two=(num1,num2)=>{
// return num1+num2 //explicit return as u need to use return
// }
// console.log(two(19,23));

// const two=(num1,num2)=> (num1+num2) //implicit return

const two=(num1,num2)=> ({username:"ansh"})

console.log(two());

const arr= Array(1,2,3,4,5)
console.log(arr);
