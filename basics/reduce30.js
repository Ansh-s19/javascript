const num=[1,2,3,4,5]
// const mynum=num.reverse() //use to reverse a array
// accumulator  & current value
const total=num.reduce((acc,cv)=>{
    console.log(`acc ${acc} and cv ${cv}`);
    
    return acc+cv
},0)
console.log(total);
let sum=0;

    for (let index = 0; index <num.length; index++) {
        const element =sum+=num [index] ;//or sum=sum+num[index];
        console.log(element);
        
    } 
const cart=[{
    course:"java",
    price:5000
},
{courser:"php",price:3000}
,{course:"pyhton",price:4000}]

const price=cart.reduce((acc,item)=>{
    return acc+item.price
},0)

console.log(price);
