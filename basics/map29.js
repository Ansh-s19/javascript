const mynums=[1,2,3,4,5,6,7,8,9,10]

const num=mynums.map((num)=>num+10)
console.log(num);
mynums.push(9)
console.log(mynums);


const array=[1,2,3,4,5,6,7,8,9]
const number=array.map((num)=>{return num*10}).map((num)=>num+1).filter((num)=>num>=40) //chaining using map and filter

console.log(number);

for (let index = 0; index <mynums.length; index++) {
    const element = mynums[index]+15;
    console.log(element);
    
}
