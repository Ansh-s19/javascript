const heros=["thor","loci","hulk"]
const dc=["black adam","flash","henry kevil"]
// heros.push(dc) //make array in a array
// console.log(heros);
// console.log(heros[3]);
// console.log(heros[3] [2]); //not a good practice use concat

// const marvel=heros.concat(dc)
// console.log(marvel);

const newHeros=[...heros,...dc] //spread operator  use this as it have more functionality
console.log(newHeros);


const arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(arr);

console.log(arr.flat(Infinity));

console.log(Array.isArray([1,2])); //to check wheteher the passed values is array or not
console.log(Array.isArray("ansh")); 

console.log(Array.from("ansh"));
console.log(Array.from({name:"ansh"})); //array from keys
console.log(Array.from([1, 2, 3],(x) =>x + x)); 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));






