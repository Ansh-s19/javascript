function cartprice(...num1){ //rest operator to add multiple value in function we use this 
return num1
}

console.log(cartprice(3,45,600));

function cart(val1,val2,... num1){
    return num1

}
console.log(cart(23,45,67,89,400)); //23 and 45 in val1 and val2

const user={
    price:199,
    username:"ansh"
}
console.log(user.username);

function object(anyobject){
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
    
}
// object(user)
object({
    username:"anshu",
    price:56
})

const arr=[1,2,3,4,5]

function array(getarray){
    return getarray
    
}
console.log(array(arr));
console.log(array([200,270,300,400]));

