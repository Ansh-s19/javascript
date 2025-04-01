console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1); //avoid comparison of different datatypes

let score=34
console.log(score);

console.log(null>0);
console.log(null==0);
console.log(null>=0);//avoid comparison of different datatypes
console.log(null<=0);
console.log(null<0);
// the reason is that equality check ==and comparison(<, >, <= ,>=) works differently  comparison converts null into number 0
let scor=34
console.log(scor);

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);//avoid comparison of different datatypes

//=== strict check
console.log("2"===2); //checks datatype also




