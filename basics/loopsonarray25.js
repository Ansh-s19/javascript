// for of 
// array
//[{},{},{}]
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

const str="GREETINGS"
for (const a of str) {
    console.log(`character is ${ a}`);
    
}

//maps

const map= new Map() //used to store key value pairs and cant have duplicate values // output is in order u write the values
map.set('in',"india")
map.set('usa',"america")
map.set('ld',"london")
map.set('in',"india")
// 
console.log("anshit");

console.log(map); //maps are iterable
// console.log(map.get("in"));
// console.log(map.delete("usa"));
// console.log(map.entries());
// console.log(map.keys());.
// console.log(map.has("usa"));


// console.log(map);


for (const key of map) {
    console.log(key);   
}
for (const [key,values] of map) {
    console.log(key,":-" ,values);   
}

const myobject={ //objects are not iterable to make them iterable we have different methods like forIn loop
    game1:"gta5",
    game2:"teeken"
}

// for (const key of myobject) {
//     console.log(key);
    
// }
for (const keys in myobject) {
    console.log(myobject[keys]);
    
        // console.log(keys);
     } //use this method for object iteration

    