// let score="33abc" //nan
// let score=null //0
// let score=undefined //nan
// let score=true  //1
let score="33"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isloggedin="1"

let booleanisloggedin=Boolean(isloggedin)
console.log(booleanisloggedin);

// 1 => true 0 =>false
//  "" =>false "ansh" =>true

let num=35
let stringnumber=String(num)
console.log(stringnumber);
console.log(typeof stringnumber);

// *-----------* operations *----------------*

let value=5
let negvalue=-value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(15%7);

let str1="hello"
let str2=" everyone"
let str3=str1+str2
console.log(str3);

console.log("1"+2); //all treated as string as first is string
console.log(1+"2");  
console.log("1"+2+2); //all treated as string as first is string
console.log(1+2+"2"); //first before operations than string

console.log(true);//avoid these 
console.log(+true);//avoid these 
console.log(+""); //avoid these 

let num1,num2,num3
num1=num2=num3=2+2 //avoid as there is less code readability

let gamecounter=100
gamecounter++;
console.log(gamecounter);














