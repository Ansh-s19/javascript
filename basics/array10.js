//array
const arr=[0,12,21,13,24,5]
// num=[1,2,3,4,5,"ansh",true]
const heores=["ironman","batman","spiderman","johnwick"]
const arr1=new Array(1,2,3,4,5) 
console.log(arr);
console.log(arr[3]);
console.log(arr1);
console.log(heores);
 
//array methods

// arr.push(6)
// arr.push(9)
// arr.pop()
arr.shift()
arr.unshift(8) //we use this less as this will add in first shifting all arrray increasing execution time

console.log(arr);

console.log(arr.includes(5)); // ask if given no exist in array or not
console.log(arr.indexOf(21));

const arr3=arr.join() //make it to string 
console.log(arr); //array
console.log(arr3); //string
console.log(typeof arr3);

// -------slice ,splice------

console.log( "A",arr);
const n=arr.slice(1,4) //do not manuplates original array
console.log(n);

console.log( "B",arr); //after slice no chnage in main array

const n2=arr.splice(1,3); //last range is included and it manuplates original array
console.log(n2);
console.log( "C",arr); //after splice there is change in main array the spliced one numbers are removed

a=[1,2,3,4,5,6]
a.splice(1,4,'ansh',"sharma","og","g") // 4 represents how much elements we will replace 
console.log(a);





















