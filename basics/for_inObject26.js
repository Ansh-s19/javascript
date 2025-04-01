const myobject={
    js:"javascript",
    cpp:"c++",
    py:"pyhton",
    h:"html"
}

for (const key in myobject) {
   console.log(key);     
    }

    for (const key in myobject) {
        console.log(myobject[key]);
        
        // console.log(`${key} is shortcut for ${myobject[key]}`);
            
    }

const heros=["loci","hulk","spiderman","flash","deadpool"]

for (const key in heros) {
    console.log(key);  
}
for (const key in heros) {
    console.log(heros[key]);  
}
const map=new Map() //used to store key value pairs and cant have duplicate values // output is in order u write the values
map.set('in',"india")
map.set('usa',"america")
map.set('ld',"london")
map.set('in',"india")
console.log(map); //maps are not iterable for forin loop

// for (const key in map) {
//     console.log(key);   not iterable for for in loop
// }
for (const keys of map) {
    console.log(keys);
    
}