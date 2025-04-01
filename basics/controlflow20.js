//if statement

// if(true){
// then this will be executed
// }

const temp=34
if(temp<50){
console.log("less than 50");

}
else{
    console.log("temperature is more than 50");

}
console.log("executed");
// <,>,>=,<=,==,!=,===,!== //=== => it also checks data type

const score=200
if (score>100){
    const power="fly"
    console.log(`user power:${power}`);

}

const bal=1000
// if (bal>500) console.log("test"),
// console.log("test2"); implicit way to use if avoid this as it is not a good practice

if (bal<400) {
    console.log("add more money");
    
}
else if (bal <750) {
    console.log("less than 750");
    
}
else if (bal <1000) {
    console.log("less than 1000");
    
}
else
{
    console.log("more than or equal to 1000");
    
}

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if (userLoggedIn && debitCard && 2==3) {
    console.log("allow to buy course");
    
}
else{
    console.log("cant buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("sucessfull");
    
}

// nullish coalescing operator(??):null undefined

let val1;
// val1=5 ?? 10
// val1=null??10
// val1=undefined??10
val1=null ?? 13 ?? 25
console.log(val1);

//terniary operator

// condition ? true :false 

const price=40
price <= 70 ? console.log("less than 70"):console.log("more than 100");

