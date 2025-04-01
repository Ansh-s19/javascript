const arr=["js","java","python","c++"]

arr.forEach(function (item){ //call back function so no  need to give name to function
console.log(item);
})
arr.forEach(element => {
    console.log(element);
    
});
console.log("~~~~~~~~~~~~~~~~~~~");

arr.forEach((item)=>{
console.log(item);

})
console.log("--------------------");

function printme(item){
    console.log(item);
    
}
arr.forEach(printme)

arr.forEach((item,index,arr)=>{
console.log(item,index,arr);

})

array=[{
    name:"ansh",
    age:20
},
{
    name:"kala",
    age:23
},
{
    name:"ravi",
    age:45
}]

array.forEach((item)=>{
    // console.log(item);
    
console.log(item.name);
})
console.log("~~~~~~~~~~~~~~~~");

console.log(array[0].name);
console.log(array[1].age);


