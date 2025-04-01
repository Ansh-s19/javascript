const name="ansh"
const caste="sharma "
// console.log(name+caste+ 20); //outdated dont use it
console.log(`hello my name is ${name} and my caste is ${caste}`); //use this

const gamename= new String("ansit-as") //to declare string ,in this string is in key valaue pair
console.log(typeof gamename);

console.log(gamename);

console.log(gamename[2]); 
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(0));
console.log(gamename.indexOf('s'));

const newString=gamename.substring(0,2) //last value is not included
console.log(newString); //can't have negative values

const anotherString=gamename.slice(-8,-2) //negative slicing
console.log(anotherString);

const str="    ansh   "
console.log(str);
console.log(str.trim());

const url="https://you%20tube.com/watch"
console.log(url.replace('%20','-'));
console.log(url.includes('you%20tube'));

console.log(str.replace('a','$'));

console.log(gamename.split('-')); //will make string in form of array,you can perform split on basis of any thing ex -,n





 



